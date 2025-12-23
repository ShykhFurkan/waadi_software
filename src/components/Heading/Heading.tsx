import { createElement, HTMLAttributes } from 'react';
import styles from './Heading.module.css';

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    className?: string;
    weight?: 'light' | 'normal' | 'semibold' | 'bold'; // Optional overrides
}

export function Heading({
    level = 2,
    children,
    className = '',
    weight,
    ...props
}: HeadingProps) {
    const Tag = `h${level}`;
    // Map levels to sizes if needed, or rely on styles[h1] etc.
    const rootClassName = [
        styles.heading,
        styles[`h${level}`],
        weight ? styles[weight] : '',
        className
    ].filter(Boolean).join(' ');

    return createElement(Tag, { className: rootClassName, ...props }, children);
}
