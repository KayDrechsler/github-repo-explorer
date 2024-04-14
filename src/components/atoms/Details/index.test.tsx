/**
 * # Details Element Tests
 */

/**
 * ## Imports
 */
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Details from './index';

/**
 * ## Tests
 */
describe('<Details />', () => {
    it('should render the component with the provided summary label', () => {
        const { getByText } = render(<Details summaryContent="Test Details">Content</Details>);
        const summary = getByText('Test Details');
        expect(summary).toBeInTheDocument();
    });

    it('should render the children content inside the details element', () => {
        const { getByText } = render(<Details summaryContent="Test Details">Test Content</Details>);
        const content = getByText('Test Content');
        expect(content).toBeInTheDocument();
    });

    it('should have the correct HTML structure with the provided classList', () => {
        const { container } = render(
            <Details summaryContent="Test Details" classList="custom-class">
                Test Content
            </Details>
        );
        expect(container.firstChild).toMatchInlineSnapshot(`
          <details
            class="_details_c386aa custom-class"
          >
            <summary
              class="_summary_c386aa"
            >
              Test Details
            </summary>
            Test Content
          </details>
        `);
    });
});
