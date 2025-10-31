import React from 'react';

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string | React.ReactNode;
    className?: string;
}

export default function FeatureCard({ icon, title, description, className = '' }: FeatureCardProps) {
    return (
        <div className={`text-center group ${className}`}>
            <div className="w-16 h-16 bg-brand-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <h3 className="text-xl font-heading font-semibold text-gray-900 dark:text-white mb-3">{title}</h3>
            <div className="text-gray-600 dark:text-gray-300">
                {description}
            </div>
        </div>
    );
}
