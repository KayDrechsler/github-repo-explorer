/**
 * # Repo Molecule
 */

/**
 * ## Imports
 */
import StarIcon from '../../../assets/icons/StarIcon';
import { Repository } from '../../../utils/api';
import styles from './Repo.module.scss';

/**
 * ## Types / Interfaces
 */
type RepoProps = {
    repo: Repository;
};

/**
 * ## Component
 */
const Repo = ({ repo }: RepoProps) => {
    return (
        <li key={repo.id} className={styles['repo-item']}>
            <section>
                <header className={styles['repo-header']}>
                    <h5 className={styles['repo-name']}>
                        <a href={repo.html_url} rel="noopener noreferrer" className={styles['repo-name__link']}>
                            <span className="link-body">{repo.name}</span>
                        </a>
                    </h5>
                    <p className={styles['repo-stars']}>
                        <span data-testid="location-icon">
                            <StarIcon />
                        </span>
                        <span className={styles['repo-stars__label']}>{repo.stargazers_count}</span>
                    </p>
                </header>
                {repo.description && <p className={styles['repo-description']}>{repo.description}</p>}
            </section>
        </li>
    );
};

/**
 * ## Exports
 */
export default Repo;
