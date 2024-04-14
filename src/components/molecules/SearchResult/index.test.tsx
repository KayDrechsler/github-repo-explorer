/**
 * # Search Result Tests
 */

/**
 * ## Imports
 */
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SearchResult from './index';
import { User } from '../../../utils/api';

/**
 * ## Test Data
 */
const mockSearchResults: User[] = [
    {
        login: 'exampleuser1',
        id: 1,
        node_id: 'MDQ6VXNlcjE=',
        avatar_url: 'https://example.com/avatar1.jpg',
        html_url: 'https://github.com/exampleuser1',
        repositories: [
            {
                name: 'example-repo-1',
                description: 'Example repository 1',
                stargazers_count: 10,
                id: 1,
                html_url: 'https://github.com/exampleuser1/example-repo-1'
            }
        ],
        location: 'Example City',
        bio: 'This is an example user',
        followers: 100,
        following: 50,
        public_repos: 5
    },
    {
        login: 'exampleuser2',
        id: 2,
        node_id: 'MDQ6VXNlcjI=',
        avatar_url: 'https://example.com/avatar2.jpg',
        html_url: 'https://github.com/exampleuser2',
        repositories: [
            {
                name: 'example-repo-2',
                description: 'Example repository 2',
                stargazers_count: 20,
                id: 2,
                html_url: 'https://github.com/exampleuser2/example-repo-2'
            }
        ],
        location: 'Example Town',
        bio: 'This is another example user',
        followers: 75,
        following: 30,
        public_repos: 3
    }
];

/**
 * ## Tests
 */
describe('<SearchResult />', () => {
    it('should render the loading feedback when isLoading is true', () => {
        render(<SearchResult searchQuery="example" searchResults={[]} isLoading={true} />);
        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('should render a "No results found" message when there are no search results and the query is not empty', () => {
        render(<SearchResult searchQuery="example" searchResults={[]} isLoading={false} />);
        expect(screen.getByRole('alert')).toBeInTheDocument();
    });

    it('should render the search results correctly', () => {
        render(<SearchResult searchQuery="example" searchResults={mockSearchResults} isLoading={false} />);

        /* - Check for the headline */
        expect(screen.getByTestId('search-result-headline')).toBeInTheDocument();

        /* - Check for the user results */
        const searchResultItems = screen.getAllByTestId('search-result-item');
        expect(searchResultItems).toHaveLength(mockSearchResults.length);

        /* - Check for the user details */
        const searchResultItemHeadline = screen.getAllByTestId('search-result-item-headline');
        const searchResultItemUrl = screen.getAllByTestId('search-result-item-url');
        const searchResultItemLocation = screen.getAllByTestId('search-result-item-location');
        const searchResultItemBio = screen.getAllByTestId('search-result-item-bio');
        const searchResultItemFollowers = screen.getAllByTestId('search-result-item-followers');
        const searchResultItemFollowing = screen.getAllByTestId('search-result-item-following');
        const searchResultItemRepositories = screen.getAllByTestId('search-result-item-repositories');

        mockSearchResults.forEach((user) => {
            expect(searchResultItemHeadline).toHaveLength(mockSearchResults.length);
            expect(screen.getByAltText(`${user.login}'s avatar`)).toBeInTheDocument();
            expect(searchResultItemUrl).toHaveLength(mockSearchResults.length);
            expect(searchResultItemLocation).toHaveLength(mockSearchResults.length);
            expect(searchResultItemBio).toHaveLength(mockSearchResults.length);
            expect(searchResultItemFollowers).toHaveLength(mockSearchResults.length);
            expect(searchResultItemFollowing).toHaveLength(mockSearchResults.length);
            expect(searchResultItemRepositories).toHaveLength(mockSearchResults.length);
        });

        /* - Check for the repository details */
        mockSearchResults.forEach((user) => {
            user.repositories.forEach((repo) => {
                expect(screen.getByText(repo.name)).toBeInTheDocument();
                expect(screen.getByText(repo.description)).toBeInTheDocument();
                expect(screen.getByText(repo.stargazers_count)).toBeInTheDocument();
            });
        });
    });
});
