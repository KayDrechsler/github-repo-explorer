/**
 * # Loading Feedback Tests
 */

/**
 * ## Imports
 */
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import LoadingFeedback from '.';

describe('LoadingFeedback', () => {
    it('should render the loading label', () => {
        render(<LoadingFeedback />);
        const loadingLabel = screen.getByText('Loading...');
        expect(loadingLabel).toBeInTheDocument();
    });

    it('should render the loading spinner', () => {
        render(<LoadingFeedback />);
        const loadingSpinner = screen.getByLabelText('loading-spinner');
        expect(loadingSpinner).toBeInTheDocument();
    });
});
