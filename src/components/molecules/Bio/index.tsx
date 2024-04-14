/**
 * # Result Bio
 */

/**
 * ## Imports
 */
import styles from './Bio.module.scss';

/**
 * ## Types / Interfaces
 */

/**
 * ## Component
 */
const Bio = ({ userBio }: { userBio: string }) => {
    return (
        <blockquote className={styles['bio']} data-testid="search-result-item-bio">
            <p className={styles['bio__paragraph']}>{userBio}</p>
        </blockquote>
    );
};

/**
 * ## Exports
 */
export default Bio;
