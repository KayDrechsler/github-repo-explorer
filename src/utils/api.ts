/**
 * # API Utilities
 */
import axios from 'axios';

/**
 * ## Types / Interfaces
 */
export interface Repository {
    name: string;
    description: string;
    stargazers_count: number;
    id: number;
    html_url: string;
}

export interface User {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    html_url: string;
    repositories: Repository[];
    location: string;
    bio: string;
    followers: number;
    following: number;
    public_repos: number;
}
interface SearchUsersResponse {
    total_count: number;
    incomplete_results: boolean;
    items: User[];
}

/**
 * ## Functions
 */
export const searchGithubUsers = async (query: string, perPage: number): Promise<SearchUsersResponse> => {
    try {
        const response = await axios.get<SearchUsersResponse>(
            `https://api.github.com/search/users?q=${query}&per_page=${perPage}`
        );

        const users = await Promise.all(
            response.data.items.map(async (user) => {
                const userResponse = await axios.get<User>(`https://api.github.com/users/${user.login}`);
                const repoResponse = await axios.get<Repository[]>(`https://api.github.com/users/${user.login}/repos`);

                return {
                    ...user,
                    ...userResponse.data,
                    repositories: repoResponse.data
                };
            })
        );

        return {
            ...response.data,
            items: users
        };
    } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 403) {
            throw new Error('GitHub API rate limit exceeded. Please try again later.');
        } else {
            throw error;
        }
    }
};
