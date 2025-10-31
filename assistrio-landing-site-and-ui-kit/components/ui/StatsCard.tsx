'use client';

import React from 'react';
import useNumberAnimation from '../../hooks/useNumberAnimation';

interface StatsCardProps {
    value: string | number;
    label: string;
    className?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
    value,
    label,
    className = ""
}) => {
    // Convert value to string if it's a number
    const valueStr = typeof value === 'number' ? value.toString() : value;

    // Extract number from value string (e.g., "24/7" -> 0, numbers -> number)
    const extractNumber = (val: string): number => {
        // Handle "24/7" format - return 0 to skip animation
        if (val.includes('/')) return 0;

        // If it's already a number string, parse it
        const num = parseInt(val, 10);
        return isNaN(num) ? 0 : num;
    };

    // Format number back to original format
    const formatNumber = (num: number, originalValue: string): string => {
        // If original was "24/7" or similar, return as-is
        if (originalValue.includes('/')) return originalValue;
        return num.toString();
    };

    const numericValue = extractNumber(valueStr);
    const animatedValue = useNumberAnimation({
        end: numericValue,
        duration: 2000,
        delay: 0
    });

    return (
        <div className={`text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 ${className}`}>
            <div className="text-3xl font-bold text-brand-500 dark:text-brand-400 mb-2">
                {numericValue > 0 ? formatNumber(animatedValue, valueStr) : valueStr}
            </div>
            <div className="text-gray-600 dark:text-gray-300">{label}</div>
        </div>
    );
};

export default StatsCard;
