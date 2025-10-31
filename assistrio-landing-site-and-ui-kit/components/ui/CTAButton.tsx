import React from 'react';

interface CTAButtonProps {
    href: string;
    variant?: 'primary' | 'secondary';
    children: React.ReactNode;
    className?: string;
}

export default function CTAButton({
    href,
    variant = 'primary',
    children,
    className = ''
}: CTAButtonProps) {
    const baseClasses = "px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105";
    const variantClasses = variant === 'primary'
        ? "bg-white dark:bg-white text-brand-700 dark:text-brand-600 hover:bg-gray-100 dark:hover:bg-gray-100 shadow-xl"
        : "border-2 border-white dark:border-white text-white dark:text-white hover:bg-white dark:hover:bg-white hover:text-brand-700 dark:hover:text-brand-700";

    return (
        <a
            href={href}
            className={`${baseClasses} ${variantClasses} ${className}`}
        >
            {children}
            {variant === 'primary' && (
                <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            )}
        </a>
    );
}
