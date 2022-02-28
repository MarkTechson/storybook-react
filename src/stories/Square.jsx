import React from 'react';
import './square.css';

export const Square = ({ label, ...args }) => {
    return (
        <div className="storybook-square">{label}</div>
    );
}