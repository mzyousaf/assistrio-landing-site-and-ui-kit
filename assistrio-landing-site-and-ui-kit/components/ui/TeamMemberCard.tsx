import React from 'react';

interface TeamMemberCardProps {
    initials: string;
    title: string;
    description: string;
    gradientFrom: string;
    gradientTo: string;
    className?: string;
}

export default function TeamMemberCard({
    initials,
    title,
    description,
    gradientFrom,
    gradientTo,
    className = ''
}: TeamMemberCardProps) {
    return (
        <div className={`text-center group ${className}`}>
            <div className={`w-32 h-32 bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                <span className="text-4xl font-bold text-white">{initials}</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
}
