import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    href?: string;
    target?: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    disabled?: boolean;
}

export default function Button({
    children,
    href,
    target,
    onClick,
    variant = 'primary',
    size = 'md',
    className = '',
    disabled = false,
}: ButtonProps) {
    const baseClasses = 'font-semibold transition-all duration-300 shadow-card hover:shadow-hover transform hover:-translate-y-2 hover:scale-105 relative overflow-hidden group inline-block';

    const sizeClasses = {
        sm: 'px-4 py-2 text-sm rounded-lg',
        md: 'px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl',
        lg: 'px-8 py-4 text-lg rounded-xl',
    };

    const variantClasses = {
        primary: 'bg-brand-500 dark:bg-brand-600 text-white dark:text-white hover:bg-brand-600 dark:hover:bg-brand-700 hover:text-white dark:hover:text-white hover:brightness-110',
        secondary: 'bg-white dark:bg-slate-800 text-brand-600 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-600 hover:text-brand-700 dark:hover:text-white hover:brightness-110',
        outline: 'border-2 border-brand-500 dark:border-brand-600 text-brand-600 dark:text-white hover:bg-brand-500 dark:hover:bg-brand-600 hover:text-white dark:hover:text-white hover:brightness-110',
    };

    const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

    const buttonContent = (
        <>
            <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
            <div className={`absolute inset-0 transition-opacity duration-300 ${variant === 'primary'
                ? 'bg-gradient-to-r from-brand-400 to-brand-600 opacity-0 group-hover:opacity-100'
                : variant === 'secondary'
                    ? 'bg-gradient-to-r from-gray-50 to-gray-100 dark:from-slate-700 dark:to-slate-600 opacity-0 group-hover:opacity-100'
                    : 'bg-gradient-to-r from-brand-400 to-brand-600 opacity-0 group-hover:opacity-100'
                }`}></div>
        </>
    );

    if (href) {
        return (
            <Link
                href={href}
                target={target}
                className={`${classes} w-full sm:w-auto`}
                tabIndex={disabled ? -1 : undefined}
                aria-disabled={disabled ? 'true' : undefined}
                // Prevent clicking if disabled
                onClick={e => {
                    if (disabled) {
                        e.preventDefault();
                        e.stopPropagation();
                    }
                }}
            >
                {buttonContent}
            </Link>
        );
    }

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`${classes} w-full sm:w-auto`}
        >
            {buttonContent}
        </button>
    );
}
