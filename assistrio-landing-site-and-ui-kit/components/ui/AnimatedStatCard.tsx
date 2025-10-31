import useNumberAnimation from '../../hooks/useNumberAnimation';

interface AnimatedStatCardProps {
    value: string;
    label: string;
    delay?: number;
    className?: string;
}

export default function AnimatedStatCard({
    value,
    label,
    delay = 0,
    className = ''
}: AnimatedStatCardProps) {
    // Extract number from value string (e.g., "10+" -> 10, "5K+" -> 5000, "98%" -> 98)
    const extractNumber = (val: string): number => {
        const match = val.match(/(\d+(?:\.\d+)?)/);
        if (!match) return 0;

        const num = parseFloat(match[1]);
        const suffix = val.toLowerCase();

        if (suffix.includes('k')) return Math.floor(num * 1000);
        if (suffix.includes('m')) return Math.floor(num * 1000000);
        return Math.floor(num);
    };

    // Format number back to original format
    const formatNumber = (num: number, originalValue: string): string => {
        const suffix = originalValue.toLowerCase();

        if (suffix.includes('k')) return `${Math.floor(num / 1000)}K+`;
        if (suffix.includes('m')) return `${Math.floor(num / 1000000)}M+`;
        if (suffix.includes('%')) return `${num}%`;
        if (suffix.includes('+')) return `${num}+`;
        return num.toString();
    };

    const numericValue = extractNumber(value);
    const animatedValue = useNumberAnimation({
        end: numericValue,
        duration: 2000,
        delay: delay
    });

    return (
        <div className={`bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 dark:border-slate-700/50 text-center ${className}`}>
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent mb-2">
                {formatNumber(animatedValue, value)}
            </div>
            <div className="text-sm font-medium text-gray-600 dark:text-gray-300">{label}</div>
        </div>
    );
}
