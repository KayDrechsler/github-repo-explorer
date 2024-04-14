/**
 * # Button Element
 */

/**
 * ## Imports
 */
import React from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';
import MagnifierIcon from '../../../assets/icons/MagnifierIcon';

/**
 * ## Types / Interfaces
 */
type ButtonProps = {
    type?: 'button' | 'submit' | 'reset';
    classList?: string;
    onClick?: () => void;
    children?: React.ReactNode;
    label?: string;
    isLoading?: boolean;
    disabled?: boolean;
};

/**
 * ## Component
 */
const Button = ({ type = 'button', classList, onClick, children, label, isLoading, disabled }: ButtonProps) => {
    const buttonClasses = clsx(styles['button'], classList);

    return (
        <button type={type} className={buttonClasses} onClick={onClick} disabled={disabled}>
            <MagnifierIcon />
            <span className={styles['button__label']}>
                {isLoading ? 'Loading...' : children}
                {label}
            </span>
        </button>
    );
};

/**
 * ## Exports
 */
export default Button;
