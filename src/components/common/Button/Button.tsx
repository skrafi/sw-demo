import React from 'react';
import { ButtonProps } from '../../../types/common';

export const Button = ({ text, onClick }: ButtonProps) => {
    return (
        <button className="btn" onClick={onClick}>
            {text}
        </button>
    );
};
