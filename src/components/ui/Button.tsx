'use client';

import React from 'react';
import Link from 'next/link';
import { scrollToSection } from '@/utils/scrollToSection';

interface ButtonProps{
    children: React.ReactNode;
    href?: string;
    variant?: 'primary' | 'secondary' | 'link';
    size?: 'small' | 'medium' | 'large';
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    download?: string | boolean;
    target?: '_blank' | '_self';
    rel?: string;
}

const Button: React.FC<ButtonProps> = ({
    children,
    href,
    variant = 'primary',
    size = 'medium',
    onClick,
    className = '',
    disabled = false,
    download = false,
    target = '_self',
    rel = 'noopener noreferrer',
}: ButtonProps) => {

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
        if (onClick) onClick();

        // Smooth scroll for in-page anchor links
        if (href && href.startsWith('#')) {
            e.preventDefault();
            scrollToSection(href);
        }
    };

    if(href && (href.startsWith('http') || download)) {
        return (
            <a
                href={href}
                className={`btn btn--${variant} btn--${size} ${className}`}
                onClick={onClick}
                target={target}
                rel={rel}
                download={download}
            >
                {children}
            </a>
        );
    }
    if(href) {
        if (href.startsWith('#')) {
            return (
                <a
                    href={href}
                    className={`btn btn--${variant} btn--${size} ${className}`}
                    onClick={handleClick}
                >
                    {children}
                </a>
            );
        }
        return (
            <Link
                href={href}
                className={`btn btn--${variant} btn--${size} ${className}`}
                onClick={onClick}
            >
            {children}
            </Link>
        );
    }
    return (
        <button
            className={`btn btn--${variant} btn--${size} ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

export default Button;