/**
 * # Search Result
 */

/**
 * ## Imports
 */
import { useState, useEffect } from 'react';
import ResultHeader from '../../molecules/ResultHeader';
import Bio from '../../molecules/Bio';
import Details from '../../atoms/Details';
import LoadingFeedback from '../../atoms/LoadingFeedback';
import { User } from '../../../utils/api';
import styles from './SearchResult.module.scss';
import Repo from '../Repo';
import InfoList from '../InfoList';

/**
 * ## Types / Interfaces
 */
type SearchResultProps = {
    searchQuery: string;
    searchResults: User[];
    isLoading: boolean;
};

/**
 * ## Component
 */
const SearchResult = ({ searchQuery, searchResults, isLoading }: SearchResultProps) => {
    /**
     * ### State
     */
    const [showNoResults, setShowNoResults] = useState(false);

    /**
     * ### Effects
     */
    useEffect(() => {
        setShowNoResults(searchResults.length === 0 && searchQuery !== '');
    }, [searchResults, searchQuery]);

    /**
     * ### Output
     */
    return (
        <section className={styles['search-result']}>
            {isLoading ? (
                <LoadingFeedback />
            ) : showNoResults ? (
                <p role="alert">
                    No results found for <mark className={styles['mark']}>&quot;{searchQuery}&quot;</mark>
                </p>
            ) : (
                <>
                    {searchQuery !== '' && (
                        <>
                            <h3 className={styles['headline']} data-testid="search-result-headline">
                                Search results for <mark className={styles['mark']}>&quot;{searchQuery}&quot;</mark>
                            </h3>
                            <ol className={styles['result-list']}>
                                {searchResults.map((user, index) => {
                                    return (
                                        <li
                                            key={index}
                                            className={styles['result-item']}
                                            data-testid="search-result-item"
                                        >
                                            <Details
                                                classList={styles['result-details']}
                                                summaryContent={
                                                    <section className={styles['details-body']}>
                                                        <ResultHeader
                                                            html_url={user.html_url}
                                                            login={user.login}
                                                            avatar_url={user.avatar_url}
                                                        />
                                                        {user.bio && <Bio userBio={user.bio} />}
                                                        <InfoList
                                                            location={user.location}
                                                            followers={user.followers}
                                                            following={user.following}
                                                        />
                                                    </section>
                                                }
                                            >
                                                <section className={styles['repos-wrapper']}>
                                                    <h4
                                                        className={styles['repos-headline']}
                                                        data-testid="search-result-item-repositories"
                                                    >
                                                        {user.login}&rsquo;s Repositories
                                                    </h4>
                                                    {user.repositories.length === 0 ? (
                                                        <p>No repositories found</p>
                                                    ) : (
                                                        <ul className={styles['repo-list']}>
                                                            {user.repositories.map((repo) => {
                                                                return <Repo key={repo.id} repo={repo} />;
                                                            })}
                                                        </ul>
                                                    )}
                                                </section>
                                            </Details>
                                        </li>
                                    );
                                })}
                            </ol>
                        </>
                    )}
                </>
            )}
        </section>
    );
};

/**
 * ## Exports
 */
export default SearchResult;
