/**
 * # Bio Component Tests
 */

/**
 * ## Imports
 */
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Bio from './index';

/**
 * ## Tests
 */
describe('Bio', () => {
    it('should render the user bio', () => {
        const userBio = 'This is a sample user bio.';
        render(<Bio userBio={userBio} />);
        const bioElement = screen.getByText(userBio);
        expect(bioElement).toBeInTheDocument();
    });

    it('should render a blockquote element', () => {
        const userBio = 'This is a sample user bio.';
        render(<Bio userBio={userBio} />);
        const bioElement = screen.getByTestId('search-result-item-bio');
        expect(bioElement.tagName.toLowerCase()).toBe('blockquote');
    });

    it('should render a paragraph element inside the blockquote', () => {
        const userBio = 'This is a sample user bio.';
        render(<Bio userBio={userBio} />);
        const bioParagraph = screen.getByText(userBio);
        expect(bioParagraph.tagName.toLowerCase()).toBe('p');
    });
});
