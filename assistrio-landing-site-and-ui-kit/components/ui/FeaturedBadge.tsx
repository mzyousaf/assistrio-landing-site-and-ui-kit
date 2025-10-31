import { FaStar } from 'react-icons/fa';

interface FeaturedBadgeProps {
    className?: string;
}

export default function FeaturedBadge({ className = '' }: FeaturedBadgeProps) {
    return (
        <span className={`inline-flex items-center px-2.5 sm:px-3 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-semibold border border-yellow-300 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${className}`}>
            <FaStar className="w-3 h-3 mr-1" />
            <span className="hidden sm:inline">Featured Article</span>
            <span className="sm:hidden">Featured</span>
        </span>
    );
}
