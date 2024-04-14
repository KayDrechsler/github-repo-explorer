/**
 * # Input Element
 */
/**
 * ## Imports
 */
import React, { memo } from 'react';
import styles from './Input.module.scss';

/**
 * ## Types / Interfaces
 */
type InputProps = {
    type?:
        | 'text'
        | 'number'
        | 'password'
        | 'email'
        | 'search'
        | 'tel'
        | 'url'
        | 'file'
        | 'date'
        | 'time'
        | 'datetime-local'
        | 'month'
        | 'week'
        | 'color'
        | 'range'
        | 'checkbox'
        | 'radio'
        | 'hidden'
        | 'image'
        | 'submit'
        | 'reset'
        | 'button';
    name?: string;
    id?: string;
    placeholder?: string;
    value?: string | number;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    classList?: string;
    pattern?: string;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};

const InputComponent = ({
    type = 'text',
    name,
    id,
    placeholder,
    value,
    onChange,
    disabled,
    classList,
    pattern,
    onFocus,
    onKeyDown
}: InputProps = {}) => {
    return (
        <input
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
            className={classList ? classList : styles.input}
            pattern={pattern}
            onFocus={onFocus}
            onKeyDown={onKeyDown}
        />
    );
};

/**
 * ## Exports
 */
const Input = memo(InputComponent);
export default Input;
export type { InputProps };
