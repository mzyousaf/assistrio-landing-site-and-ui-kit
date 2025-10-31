
interface StatisticCardProps {
    value: string;
    label: string;
    sublabel?: string;
    variant?: 'social-proof' | 'live-stats' | 'security';
    animationDelay?: string;
    bounceDelay?: string;
    className?: string;
}

export default function StatisticCard({
    value,
    label,
    sublabel,
    variant = 'social-proof',
    animationDelay,
    bounceDelay,
    className = '',
}: StatisticCardProps) {
    const baseClasses = 'text-center';

    const classes = `${baseClasses} ${className}`;

    const variantClasses = {
        'social-proof': {
            container: 'animate-fade-in-up',
            value: 'text-4xl sm:text-5xl font-bold text-brand-600 mb-2 animate-bounce',
            label: 'text-gray-600 font-medium',
        },
        'live-stats': {
            container: '',
            value: 'text-3xl sm:text-4xl font-bold mb-2 animate-bounce',
            label: 'text-sm opacity-90',
            sublabel: 'text-xs opacity-75 mt-1',
        },
        'security': {
            container: 'text-center p-4 bg-white rounded-lg',
            value: 'text-2xl font-bold text-brand-600 mb-1',
            label: 'text-sm text-gray-600',
        },
    };

    const currentVariant = variantClasses[variant];
    const sublabelClass = variant === 'live-stats' ? variantClasses['live-stats'].sublabel : '';

    return (
        <div className={`${currentVariant.container} ${classes}`} style={animationDelay ? { animationDelay } : undefined}>
            <div
                className={currentVariant.value}
                style={bounceDelay ? { animationDelay: bounceDelay, animationDuration: '2s' } : undefined}
            >
                {value}
            </div>
            <div className={currentVariant.label}>
                {label}
            </div>
            {sublabel && variant === 'live-stats' && (
                <div className={sublabelClass}>
                    {sublabel}
                </div>
            )}
        </div>
    );
}
