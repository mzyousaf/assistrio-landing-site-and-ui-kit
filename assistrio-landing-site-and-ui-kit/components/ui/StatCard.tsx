'use client';

import React from 'react';
import useNumberAnimation from '../../hooks/useNumberAnimation';

interface StatCardProps {
    number: string;
    label: string;
    variant?: 'default' | 'white';
    className?: string;
}

export default function StatCard({ number, label, variant = 'default', className = '' }: StatCardProps) {
    // Extract number from value string (e.g., "50+" -> 50, "95%" -> 95, "24/7" -> 0)
    const extractNumber = (val: string): number => {
        // Handle "24/7" format - return 0 to skip animation
        if (val.includes('/')) return 0;

        const match = val.match(/(\d+(?:\.\d+)?)/);
        if (!match) return 0;

        return Math.floor(parseFloat(match[1]));
    };

    // Format number back to original format
    const formatNumber = (num: number, originalValue: string): string => {
        // If original was "24/7" or similar, return as-is
        if (originalValue.includes('/')) return originalValue;

        if (originalValue.includes('%')) return `${num}%`;
        if (originalValue.includes('+')) return `${num}+`;
        return num.toString();
    };

    const numericValue = extractNumber(number);
    const animatedValue = useNumberAnimation({
        end: numericValue,
        duration: 2000,
        delay: 0
    });

    const valueClasses = variant === 'white'
        ? 'text-white'
        : 'text-brand-600';

    const labelClasses = variant === 'white'
        ? 'text-white/90'
        : 'text-gray-600';

    return (
        <div className={`text-center group ${className}`}>
            <div className={`text-4xl md:text-5xl font-bold ${valueClasses} mb-2 group-hover:scale-110 transition-transform duration-200`}>
                {numericValue > 0 ? formatNumber(animatedValue, number) : number}
            </div>
            <div className={`font-medium ${labelClasses}`}>{label}</div>
        </div>
    );
}
