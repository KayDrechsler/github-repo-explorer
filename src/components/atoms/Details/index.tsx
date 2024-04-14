/**
 * # Detail Element
 */

/**
 * ## Imports
 */
import clsx from 'clsx';
import styles from './Details.module.scss';

/**
 * ## Types / Interfaces
 */
type DetailsProps = {
    summaryContent: React.ReactNode;
    children: React.ReactNode;
    classList?: string;
};

/**
 * ## Component
 */
const Details = ({ summaryContent, children, classList }: DetailsProps) => {
    const detailsClasses = clsx(styles['details'], classList);

    return (
        <details className={detailsClasses}>
            <summary className={styles['summary']}>{summaryContent}</summary>
            {children}
        </details>
    );
};

/**
 * ## Exports
 */
export default Details;
