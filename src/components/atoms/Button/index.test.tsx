/**
 * # Button Element Tests
 */

/**
 * ## Imports
 */
import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import Button from './index';

/**
 * ## Tests
 */
describe('<Button />', () => {
    it('should render the button with the default props', () => {
        const ButtonProps = {
            classList: 'button'
        };
        const { getByRole } = render(<Button {...ButtonProps}>Click Me</Button>);
        const button = getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveClass('button');
        expect(button).not.toBeDisabled();
    });

    it('should call the onClick function when the button is clicked', () => {
        const onClick = vi.fn();
        const { getByRole } = render(<Button onClick={onClick}>Click Me</Button>);
        const button = getByRole('button');
        fireEvent.click(button);
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('should display the label prop', () => {
        const { getByText } = render(<Button label="Submit Form" />);
        expect(getByText('Submit Form')).toBeInTheDocument();
    });

    it('should display "Loading..." when the isLoading prop is true', () => {
        const { getByText, queryByText } = render(<Button isLoading>Click</Button>);
        expect(getByText('Loading...')).toBeInTheDocument();
        expect(queryByText('Click')).not.toBeInTheDocument();
    });

    it('should be disabled when the disabled prop is true', () => {
        const { getByRole } = render(<Button disabled>Click Me</Button>);
        const button = getByRole('button');
        expect(button).toBeDisabled();
    });

    it('should apply custom classes when the classList prop is provided', () => {
        const { getByRole } = render(<Button classList="custom-class">Click Me</Button>);
        const button = getByRole('button');
        expect(button).toHaveClass('custom-class');
    });
});
