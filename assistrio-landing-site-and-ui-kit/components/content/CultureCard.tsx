import React from 'react';

interface CultureCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    className?: string;
}

export default function CultureCard({
    title,
    description,
    icon,
    className = ''
}: CultureCardProps) {
    return (
        <div className={`bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 ${className}`}>
            <div className="w-16 h-16 bg-brand-100 dark:bg-brand-900/30 rounded-2xl flex items-center justify-center mb-6">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {description}
            </p>
        </div>
    );
}
