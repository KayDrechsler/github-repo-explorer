/**
 * # Info List Component Tests
 */

/**
 * ## Imports
 */
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import InfoList from './index';

/**
 * ## Tests
 */
describe('InfoList', () => {
    it('should render the location', () => {
        const location = 'Neuss, Germany';
        render(<InfoList location={location} followers={100} following={50} />);
        const locationElement = screen.getByText(location);
        expect(locationElement).toBeInTheDocument();
    });

    it('should render the followers and following', () => {
        const followers = 100;
        const following = 50;
        render(<InfoList location="Neuss, Germany" followers={followers} following={following} />);
        const followersElement = screen.getByTestId('search-result-item-followers');
        const followingElement = screen.getByTestId('search-result-item-following');
        expect(followersElement).toHaveTextContent(`Followers: ${followers}`);
        expect(followingElement).toHaveTextContent(`Following: ${following}`);
    });

    it('should render the locations icon', () => {
        const location = 'Neuss, Germany';
        render(<InfoList location={location} followers={100} following={50} />);
        const locationIcon = screen.getByTestId('location-icon');
        expect(locationIcon).toBeInTheDocument();
    });

    it('should render the connections icon', () => {
        const location = 'Neuss, Germany';
        render(<InfoList location={location} followers={100} following={50} />);
        const connectionsIcon = screen.getByTestId('connections-icon');
        expect(connectionsIcon).toBeInTheDocument();
    });
});
