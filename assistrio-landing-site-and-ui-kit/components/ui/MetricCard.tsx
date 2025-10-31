import React from 'react';

interface MetricCardProps {
    value: string;
    label: string;
    className?: string;
    size?: 'sm' | 'lg';
    icon?: React.ReactNode;
    variant?: 'automation' | 'satisfaction' | 'savings' | 'response' | 'default';
}

export default function MetricCard({
    value,
    label,
    className = '',
    size = 'sm',
    icon,
    variant = 'default'
}: MetricCardProps) {
    const valueSize = size === 'lg' ? 'text-2xl' : 'text-lg sm:text-xl';
    const labelSize = size === 'lg' ? 'text-xs' : 'text-xs';

    // Color variants with improved dark mode
    const variants = {
        automation: {
            bg: 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800',
            border: 'border-blue-200 dark:border-blue-800',
            iconBg: 'bg-blue-100 dark:bg-blue-800',
            iconColor: 'text-blue-600 dark:text-blue-200',
            valueColor: 'text-blue-600 dark:text-blue-200',
            labelColor: 'text-blue-700 dark:text-blue-200'
        },
        satisfaction: {
            bg: 'bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800',
            border: 'border-green-200 dark:border-green-800',
            iconBg: 'bg-green-100 dark:bg-green-800',
            iconColor: 'text-green-600 dark:text-green-200',
            valueColor: 'text-green-600 dark:text-green-200',
            labelColor: 'text-green-700 dark:text-green-200'
        },
        savings: {
            bg: 'bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900 dark:to-emerald-800',
            border: 'border-emerald-200 dark:border-emerald-800',
            iconBg: 'bg-emerald-100 dark:bg-emerald-800',
            iconColor: 'text-emerald-600 dark:text-emerald-200',
            valueColor: 'text-emerald-600 dark:text-emerald-200',
            labelColor: 'text-emerald-700 dark:text-emerald-200'
        },
        response: {
            bg: 'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800',
            border: 'border-purple-200 dark:border-purple-800',
            iconBg: 'bg-purple-100 dark:bg-purple-800',
            iconColor: 'text-purple-600 dark:text-purple-200',
            valueColor: 'text-purple-600 dark:text-purple-200',
            labelColor: 'text-purple-700 dark:text-purple-200'
        },
        default: {
            bg: 'bg-white dark:bg-slate-900',
            border: 'border-gray-100 dark:border-slate-700',
            iconBg: 'bg-brand-100 dark:bg-brand-900',
            iconColor: 'text-brand-600 dark:text-brand-200',
            valueColor: 'text-brand-600 dark:text-brand-200',
            labelColor: 'text-gray-600 dark:text-gray-200'
        }
    };

    const colors = variants[variant];

    return (
        <div
            className={`
                ${colors.bg}
                rounded-lg p-3 sm:p-4 text-center shadow-md hover:shadow-lg
                transition-all duration-300 border ${colors.border} ${className}
            `}
        >
            {icon && (
                <div className="flex justify-center mb-2">
                    <div className={`w-8 h-8 ${colors.iconBg} rounded-full flex items-center justify-center`}>
                        <div className={colors.iconColor}>{icon}</div>
                    </div>
                </div>
            )}
            <div className={`${valueSize} font-bold ${colors.valueColor} mb-1`}>{value}</div>
            <div className={`${labelSize} ${colors.labelColor} font-medium`}>{label}</div>
        </div>
    );
}
