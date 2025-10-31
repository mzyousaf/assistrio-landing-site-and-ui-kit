import React from 'react';

interface AnimatedBadgeProps {
    children: React.ReactNode;
    className?: string;
}

export default function AnimatedBadge({ children, className = '' }: AnimatedBadgeProps) {
    return (
        <div className={`inline-flex items-center px-4 py-2 rounded-full bg-brand-100 text-brand-700 text-sm font-medium mb-6 ${className}`}>
            <span className="w-2 h-2 bg-brand-500 rounded-full mr-2 animate-pulse"></span>
            {children}
        </div>
    );
}
