/**
 * # Loading Feedback Element
 * - Gives Feedback on Loading Status.
 */

/**
 * ## Imports
 */
import styles from './LoadingFeedback.module.scss';

/**
 * ## Component
 */
const LoadingFeedback = () => {
    return (
        <div className={styles['loading-feedback']} data-testid="loading-feedback">
            <em className={styles['label']} data-testid="loading-label">
                Loading...
            </em>
            <div className={styles['spinner']} aria-label="loading-spinner"></div>
        </div>
    );
};

/**
 * ## Exports
 */
export default LoadingFeedback;
