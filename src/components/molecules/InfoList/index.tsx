/**
 * # Info List
 */

/**
 * ## Imports
 */
import MapIcon from '../../../assets/icons/MapIcon';
import GlobeIcon from '../../../assets/icons/GlobeIcon';
import styles from './InfoList.module.scss';

/**
 * ## Types / Interfaces
 */
type InfoListProps = {
    location: string;
    followers: number;
    following: number;
};

/**
 * ## Component
 */
const InfoList = ({ location, followers, following }: InfoListProps) => {
    return (
        <ul className={styles['info-list']}>
            <li
                className={`${styles['info-list__item']} ${styles['info-list__item--location']}`}
                data-testid="search-result-item-location"
            >
                <span data-testid="location-icon">
                    <MapIcon />
                </span>
                <span className="sr-only">Location:</span> {location ? location : 'Unknown'}
            </li>
            <li>
                <span className={styles['info-list__icon']} data-testid="connections-icon">
                    <GlobeIcon />
                </span>
                <span className="sr-only">Connections: </span>
                <ul className={styles['follower-list']}>
                    <li className={styles['follower-list__item']} data-testid="search-result-item-followers">
                        Followers: {followers}
                    </li>
                    <li className={styles['follower-list__item']} data-testid="search-result-item-following">
                        Following: {following}
                    </li>
                </ul>
            </li>
        </ul>
    );
};

/**
 * ## Exports
 */
export default InfoList;
