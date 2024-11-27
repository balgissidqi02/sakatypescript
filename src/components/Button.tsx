"use client";
import React from 'react';

type ButtonVariants = 'primary' | 'secondary' | 'error' | 'success';

type ButtonProps = {
    variant: ButtonVariants;
    children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ variant, children }) => {
    const variantClass = {
        primary: 'bg-blue-500 hover:bg-blue-600 transition-colors duration-300 ease-in-out',
        secondary: 'bg-gray-500 hover:bg-gray-600 transition-colors duration-300 ease-in-out',
        error: 'bg-red-500 hover:bg-red-600 transition-colors duration-300 ease-in-out',
        success: 'bg-green-500 hover:bg-green-600 transition-colors duration-300 ease-in-out',
    }[variant];

    return (
        <button className={`py-2 px-4 rounded-full text-white ${variantClass}`}>
            {children}
        </button>
    );
};

export default Button;
