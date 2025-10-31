import React from 'react';

interface ValueCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    className?: string;
}

export default function ValueCard({
    title,
    description,
    icon,
    className = ''
}: ValueCardProps) {
    return (
        <div className={`text-center group ${className}`}>
            <div className="w-20 h-20 bg-gradient-to-br from-brand-100 to-brand-200 dark:from-brand-900/30 dark:to-brand-900/50 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">{description}</p>
        </div>
    );
}
