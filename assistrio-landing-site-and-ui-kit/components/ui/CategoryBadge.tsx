import { FaBolt } from 'react-icons/fa';

interface CategoryBadgeProps {
    category: string;
    className?: string;
}

export default function CategoryBadge({ category, className = '' }: CategoryBadgeProps) {
    const getCategoryColor = (category: string) => {
        const colors = {
            'AI Trends': 'from-teal-500 to-cyan-500',
            'Best Practices': 'from-teal-500 to-emerald-500',
            'Analytics': 'from-cyan-500 to-teal-500',
            'Integration': 'from-teal-500 to-blue-500',
            'UX Design': 'from-cyan-500 to-teal-500',
            'Case Study': 'from-teal-500 to-cyan-500',
            'AI Ethics': 'from-teal-500 to-emerald-500',
            'Global Support': 'from-cyan-500 to-teal-500'
        };
        return colors[category as keyof typeof colors] || 'from-teal-500 to-cyan-500';
    };

    return (
        <div className={`inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r ${getCategoryColor(category)} text-white text-xs sm:text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${className}`}>
            <FaBolt className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            {category}
        </div>
    );
}
