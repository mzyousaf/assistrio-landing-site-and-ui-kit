import React from 'react';

interface CTAStatsProps {
    stats: Array<{
        number: string;
        label: string;
    }>;
    className?: string;
}

export default function CTAStats({ stats, className = '' }: CTAStatsProps) {
    return (
        <div className={`mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center ${className}`}>
            {stats.map((stat, index) => (
                <div key={index}>
                    <div className="text-3xl font-bold text-yellow-300 mb-2">{stat.number}</div>
                    <div className="text-sm opacity-80">{stat.label}</div>
                </div>
            ))}
        </div>
    );
}
