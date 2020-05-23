import React from 'react';
import { ButtonProps } from '../../../types/common';
import { ButtonStyle } from './ButtonStyle';

export const Button = ({ text, onClick, backBtn }: ButtonProps) => {
    return (
        <ButtonStyle backBtn={backBtn} className="btn" onClick={onClick}>
            {text}
        </ButtonStyle>
    );
};
