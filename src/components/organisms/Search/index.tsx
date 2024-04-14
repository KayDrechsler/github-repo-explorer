/**
 * # Search Organism
 */

/**
 * ## Imports
 */
import { useState } from 'react';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { setSearchResults, setSearchQuery, setIsLoading } from '../../../store/searchSlice';
import MemoizedSearchFormComponent from '../../molecules/SearchForm';
import SearchResult from '../../molecules/SearchResult';
import GithubLogo from '../../../assets/icons/GithubLogo';
import styles from './Search.module.scss';
import { searchGithubUsers } from '../../../utils/api';

/**
 * ## Component
 */
const Search = () => {
    /**
     * - Local state version.
     * - This was replaced with the state management library Redux.
     * The commented-out version of the code demonstrates a simpler solution using local state and the browser's local storage to preserve the search results on page reload. This approach is suitable for a small demo application, as it is more lightweight and straightforward than introducing a full-fledged state management library like Redux.

     * However, the instructions for the code challenge suggest using a state management library, which is why the solution has been implemented using Redux. In a larger, more complex application, a state management solution like Redux can provide more benefits, such as better state management, easier debugging, and the ability to scale the application more effectively.

     * The decision to use a state management library or local state with browser storage should be based on the specific requirements and complexity of the application. In this case, the instructions have indicated that a state management library is preferred, so the Redux-based implementation is the recommended solution.
     */
    /**
     * ### State
     */
    //   const [searchResults, setSearchResults] = useState<User[]>([]);
    //   const [searchQuery, setSearchQuery] = useState('');
    //   const [isLoading, setIsLoading] = useState(false);
    /**
     * ### Effects
     */
    // useEffect(() => {
    //     const storedQuery = localStorage.getItem('searchQuery');

    //     if (storedQuery) {
    //         setSearchQuery(storedQuery);

    //         const storedResults = localStorage.getItem(storedQuery);
    //         if (storedResults) {
    //             setSearchResults(JSON.parse(storedResults));
    //         }
    //     }
    // }, []);

    /**
     * ### Handlers
     */
    // const handleSearch = async (query: string, searchResultAmount: number) => {
    //     setIsLoading(true);
    //     setSearchQuery(query);

    //     /**
    //      * - 🚨 TODO: store this token securely!
    //      */
    //     const accessToken = '';

    //     try {
    //         const response = await searchGithubUsers(query, searchResultAmount, accessToken);
    //         setSearchResults(response.items);

    //         /**
    //          * - In a more complex and growing app this could also be replaced with
    //          *   a state management library like Redux.
    //          */
    //         localStorage.setItem('searchQuery', query);
    //         localStorage.setItem(query, JSON.stringify(response.items));
    //     } catch (Error) {
    //         console.error('Error searching for GitHub users: ', Error);
    //     } finally {
    //         setIsLoading(false);
    //     }
    // };

    /**
     * ### Redux
     */
    const dispatch = useDispatch();
    const { searchResults, searchQuery, isLoading } = useSelector((state: RootState) => state.search);
    const MAX_STORED_SEARCHES = 10;

    /**
     * ### State
     */
    const [searchQueryState, setSearchQueryState] = useState('');

    /**
     * ### Handlers
     */
    const handleSearch = useCallback(
        async (query: string, searchResultAmount: number) => {
            dispatch(setIsLoading(true));
            dispatch(setSearchQuery(query));

            try {
                const response = await searchGithubUsers(query, searchResultAmount);
                dispatch(setSearchResults(response.items));

                /* - Limit the number of stored search results. */
                const storedSearches = JSON.parse(localStorage.getItem('storedSearches') || '[]');
                const updatedSearches = [
                    { query, results: response.items, timestamp: Date.now() },
                    ...storedSearches.slice(0, MAX_STORED_SEARCHES - 1)
                ];
                localStorage.setItem('storedSearches', JSON.stringify(updatedSearches));
            } catch (Error) {
                console.error('Error searching for GitHub users: ', Error);
            } finally {
                dispatch(setIsLoading(false));
            }
        },
        [dispatch]
    );

    /**
     * ### Effects
     */
    useEffect(() => {
        const storedSearches = JSON.parse(localStorage.getItem('storedSearches') || '[]');
        if (storedSearches.length > 0) {
            const { query, results } = storedSearches[0];
            dispatch(setSearchQuery(query));
            dispatch(setSearchResults(results));
        }
    }, [dispatch]);

    /**
     * ### Render
     */
    return (
        <div className={styles['search']}>
            <div className="centerwrapper">
                <GithubLogo />
                <h1 className={styles['headline']}>Github Repositories Explorer</h1>
                <MemoizedSearchFormComponent
                    onSearch={handleSearch}
                    searchQuery={searchQueryState}
                    setSearchQuery={setSearchQueryState}
                />
            </div>
            <div className="centerwrapper">
                <SearchResult searchQuery={searchQuery} searchResults={searchResults} isLoading={isLoading} />
            </div>
        </div>
    );
};

/**
 * ## Exports
 */
export default Search;
