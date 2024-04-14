/**
 * # Repo Molecule Tests
 */

/**
 * ## Imports
 */
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Repo from './index';
import { Repository } from '../../../utils/api';

/**
 * ## Tests
 */
const mockRepository: Repository = {
    id: 1,
    name: 'Test Repository',
    html_url: 'https://example.com/test-repository',
    description: 'This is a test repository',
    stargazers_count: 10
};

describe('Repo', () => {
    it('should render the repository name', () => {
        render(<Repo repo={mockRepository} />);
        const repoNameLink = screen.getByRole('link', { name: 'Test Repository' });
        expect(repoNameLink).toBeInTheDocument();
        expect(repoNameLink).toHaveAttribute('href', 'https://example.com/test-repository');
    });

    it('should render the repository description', () => {
        render(<Repo repo={mockRepository} />);
        const repoDescription = screen.getByText('This is a test repository');
        expect(repoDescription).toBeInTheDocument();
    });

    it('should render the repository star count', () => {
        render(<Repo repo={mockRepository} />);
        const repoStarCount = screen.getByText('10');
        expect(repoStarCount).toBeInTheDocument();
    });

    it('should render the star icon', () => {
        render(<Repo repo={mockRepository} />);
        const starIcon = screen.getByTestId('location-icon');
        expect(starIcon).toBeInTheDocument();
    });
});
