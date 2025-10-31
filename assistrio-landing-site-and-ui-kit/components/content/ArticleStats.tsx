import { FaClock, FaStar, FaEye } from 'react-icons/fa';

interface ArticleStatsProps {
    readTime: string;
    rating?: string;
    views?: string;
    className?: string;
}

export default function ArticleStats({
    readTime,
    rating = "4.9",
    views = "2.1K",
    className = ''
}: ArticleStatsProps) {
    return (
        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 ${className}`}>
            <div className="bg-white/80 rounded-xl p-3 sm:p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-teal-100">
                <FaClock className="w-4 h-4 sm:w-5 sm:h-5 text-teal-500 mx-auto mb-2" />
                <div className="text-lg sm:text-xl font-bold text-teal-600 mb-1">{readTime}</div>
                <div className="text-xs text-gray-600">Read Time</div>
            </div>
            <div className="bg-white/80 rounded-xl p-3 sm:p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-teal-100">
                <FaStar className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 mx-auto mb-2" />
                <div className="text-lg sm:text-xl font-bold text-teal-600 mb-1">{rating}</div>
                <div className="text-xs text-gray-600">Rating</div>
            </div>
            <div className="bg-white/80 rounded-xl p-3 sm:p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-teal-100">
                <FaEye className="w-4 h-4 sm:w-5 sm:h-5 text-teal-500 mx-auto mb-2" />
                <div className="text-lg sm:text-xl font-bold text-teal-600 mb-1">{views}</div>
                <div className="text-xs text-gray-600">Views</div>
            </div>
        </div>
    );
}
