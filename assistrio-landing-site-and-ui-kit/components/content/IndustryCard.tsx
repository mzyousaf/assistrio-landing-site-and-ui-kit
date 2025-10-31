import { ReactNode } from 'react';

interface IndustryCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    iconColor: 'blue' | 'green' | 'purple' | 'yellow' | 'indigo' | 'pink' | 'cyan' | 'red' | 'orange' | 'emerald' | 'gray' | 'teal';
    animationDelay?: string;
    className?: string;
}

export default function IndustryCard({
    icon,
    title,
    description,
    iconColor,
    animationDelay,
    className = '',
}: IndustryCardProps) {
    const baseClasses = 'group bg-white p-4 sm:p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100 hover:scale-105 transform transition-transform duration-300';
    const animationClasses = animationDelay ? 'animate-fade-in-up' : '';

    const classes = `${baseClasses} ${animationClasses} ${className}`;

    const iconColorClasses = {
        blue: 'bg-blue-100 group-hover:bg-blue-200 text-blue-600',
        green: 'bg-green-100 group-hover:bg-green-200 text-green-600',
        purple: 'bg-purple-100 group-hover:bg-purple-200 text-purple-600',
        yellow: 'bg-yellow-100 group-hover:bg-yellow-200 text-yellow-600',
        indigo: 'bg-indigo-100 group-hover:bg-indigo-200 text-indigo-600',
        pink: 'bg-pink-100 group-hover:bg-pink-200 text-pink-600',
        cyan: 'bg-cyan-100 group-hover:bg-cyan-200 text-cyan-600',
        red: 'bg-red-100 group-hover:bg-red-200 text-red-600',
        orange: 'bg-orange-100 group-hover:bg-orange-200 text-orange-600',
        emerald: 'bg-emerald-100 group-hover:bg-emerald-200 text-emerald-600',
        gray: 'bg-gray-100 group-hover:bg-gray-200 text-gray-600',
        teal: 'bg-teal-100 group-hover:bg-teal-200 text-teal-600',
    };

    const iconContainerClasses = `w-10 h-10 sm:w-12 sm:h-12 ${iconColorClasses[iconColor]} rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:rotate-12 group-hover:scale-110 transition-colors duration-200 transform transition-transform duration-300`;

    return (
        <div className={classes} style={animationDelay ? { animationDelay } : undefined}>
            <div className={iconContainerClasses}>
                {icon}
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                {description}
            </p>
        </div>
    );
}
