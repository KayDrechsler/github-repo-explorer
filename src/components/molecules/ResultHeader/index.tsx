/**
 * # Result Header
 */

/**
 * ## Imports
 */
import React from 'react';
import styles from './ResultHeader.module.scss';

/**
 * ## Types / Interfaces
 */
type ResultHeaderProps = {
    html_url: string;
    login: string;
    avatar_url: string;
};

/**
 * ## Component
 */
const ResultHeader: React.FC<ResultHeaderProps> = ({ html_url, login, avatar_url }) => {
    return (
        <header className={styles['header']}>
            <h3 className={styles['result-headline']} data-testid="search-result-item-headline">
                <a
                    href={html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="search-result-item-url"
                    className={styles['result-headline__link']}
                >
                    <span className={styles['result-headline__name']}>{login}</span>
                </a>
            </h3>
            <img src={avatar_url} alt={`${login}'s avatar`} className={styles['avatar']} />
        </header>
    );
};

/**
 * ## Exports
 */
export default ResultHeader;
