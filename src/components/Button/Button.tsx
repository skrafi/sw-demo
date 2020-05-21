import React from 'react';
// import './Button.scss';

export const Button = ({ text, onClick }: ButtonProps) => {
    return (
        <button className="btn" onClick={onClick}>
            {text}
        </button>
    );
};

interface ButtonProps {
    text: string;
    onClick: () => void;
}
