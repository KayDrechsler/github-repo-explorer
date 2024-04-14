/**
 * # Input Element Tests
 */

/**
 * ## Imports
 */
import { render, fireEvent, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Input, { InputProps } from '.';

/**
 * ## Tests
 */
describe('<Input />', () => {
    it('should render an input element with the correct props', () => {
        const props: InputProps = {
            type: 'text',
            name: 'name',
            id: 'name-input',
            placeholder: 'Enter your name',
            value: 'John Doe',
            disabled: false,
            classList: 'custom-class'
        };

        render(<Input {...props} />);

        const inputElement = screen.getByRole('textbox');
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveAttribute('type', 'text');
        expect(inputElement).toHaveAttribute('id', 'name-input');
        expect(inputElement).toHaveAttribute('placeholder', 'Enter your name');
        expect(inputElement).toHaveAttribute('value', 'John Doe');
        expect(inputElement).not.toBeDisabled();
        expect(inputElement).toHaveClass('custom-class');
    });

    it('should call onChange function when input value changes', () => {
        const mockOnChange = vi.fn();
        const props: InputProps = {
            onChange: mockOnChange
        };

        render(<Input {...props} />);

        const inputElement = screen.getByRole('textbox');
        fireEvent.change(inputElement, { target: { value: 'new value' } });

        expect(mockOnChange).toHaveBeenCalledTimes(1);
        expect(mockOnChange).toHaveBeenCalledWith(expect.any(Object));
    });

    it('should call onFocus function when input is focused', () => {
        const mockOnFocus = vi.fn();
        const props: InputProps = {
            onFocus: mockOnFocus
        };

        render(<Input {...props} />);

        const inputElement = screen.getByRole('textbox');
        fireEvent.focus(inputElement);

        expect(mockOnFocus).toHaveBeenCalledTimes(1);
        expect(mockOnFocus).toHaveBeenCalledWith(expect.any(Object));
    });

    it('should call onKeyDown function when key is pressed', () => {
        const mockOnKeyDown = vi.fn();
        const props: InputProps = {
            onKeyDown: mockOnKeyDown
        };

        render(<Input {...props} />);

        const inputElement = screen.getByRole('textbox');
        fireEvent.keyDown(inputElement, { key: 'Enter' });

        expect(mockOnKeyDown).toHaveBeenCalledTimes(1);
        expect(mockOnKeyDown).toHaveBeenCalledWith(expect.any(Object));
    });
});
