import React from 'react';

interface MissionVisionCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    gradientFrom: string;
    gradientTo: string;
    iconBgColor: string;
    className?: string;
}

export default function MissionVisionCard({
    icon,
    title,
    description,
    gradientFrom,
    gradientTo,
    iconBgColor,
    className = ''
}: MissionVisionCardProps) {
    return (
        <div className={`bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-2xl p-8 lg:p-10 shadow-card hover:shadow-hover transition-all duration-300 transform hover:-translate-y-2 ${className}`}>
            <div className="flex items-center mb-6">
                <div className={`w-12 h-12 ${iconBgColor} rounded-xl flex items-center justify-center mr-4`}>
                    {icon}
                </div>
                <h2 className="text-2xl font-heading font-bold text-gray-900">{title}</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
                {description}
            </p>
        </div>
    );
}
