/**
 * # Result Header Molecule Tests
 */

/**
 * ## Imports
 */
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ResultHeader from '.';

/**
 * ## Tests
 */
describe('ResultHeader', () => {
    it('should render the username', () => {
        const props = {
            html_url: 'https://example.com/username',
            login: 'testuser',
            avatar_url: 'https://example.com/avatar.png'
        };
        render(<ResultHeader {...props} />);
        const usernameLink = screen.getByRole('link', { name: 'testuser' });
        expect(usernameLink).toBeInTheDocument();
        expect(usernameLink).toHaveAttribute('href', 'https://example.com/username');
    });

    it('should render the avatar image', () => {
        const props = {
            html_url: 'https://example.com/username',
            login: 'testuser',
            avatar_url: 'https://example.com/avatar.png'
        };
        render(<ResultHeader {...props} />);
        const avatarImage = screen.getByAltText("testuser's avatar");
        expect(avatarImage).toBeInTheDocument();
        expect(avatarImage).toHaveAttribute('src', 'https://example.com/avatar.png');
    });

    it('should have the correct data-testid attributes', () => {
        const props = {
            html_url: 'https://example.com/username',
            login: 'testuser',
            avatar_url: 'https://example.com/avatar.png'
        };
        render(<ResultHeader {...props} />);
        const headlineElement = screen.getByTestId('search-result-item-headline');
        const urlElement = screen.getByTestId('search-result-item-url');
        expect(headlineElement).toBeInTheDocument();
        expect(urlElement).toBeInTheDocument();
    });
});
