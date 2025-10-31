import React from 'react';

interface BadgeProps {
    children: React.ReactNode;
    variant?: string;
    className?: string;
    showPulse?: boolean
}

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
    const baseClasses = "inline-flex items-center px-4 py-2 rounded-full text-sm font-medium";
    const variantClasses = variant === 'white'
        ? "bg-white/20 text-white"
        : "bg-brand-100 text-brand-700";

    return (
        <div className={`${baseClasses} ${variantClasses} ${className}`}>
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {children}
        </div>
    );
}