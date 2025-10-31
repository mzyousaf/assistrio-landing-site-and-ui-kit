import { FaClock, FaStar, FaEye, FaRobot, FaHeart, FaDollarSign, FaDownload, FaUsers, FaFileAlt } from 'react-icons/fa';
import useNumberAnimation from '../../hooks/useNumberAnimation';

interface BaseStatsProps {
    variant: 'article' | 'caseStudy' | 'resource' | 'custom';
    // Article variant props
    readTime?: string;
    rating?: string;
    views?: string;
    // Case study variant props
    metrics?: {
        automation: string;
        satisfaction: string;
        costSavings: string;
        responseTime: string;
    };
    // Resource variant props
    downloadCount?: string;
    attendees?: string;
    fileSize?: string;
    duration?: string;
    // Custom variant props
    stats?: Array<{
        icon: React.ComponentType<{ className?: string }>;
        value: string;
        label: string;
        color?: string;
        animated?: boolean;
    }>;
    // Common props
    className?: string;
    size?: 'sm' | 'md' | 'lg';
    layout?: 'grid' | 'list' | 'compact';
    columns?: 1 | 2 | 3 | 4;
}

export default function BaseStats({
    variant,
    // Article props
    readTime,
    rating = "4.9",
    views = "2.1K",
    // Case study props
    metrics,
    // Resource props
    downloadCount,
    attendees,
    fileSize,
    duration,
    // Custom props
    stats,
    // Common props
    className = '',
    size = 'md',
    layout = 'grid',
    columns = 3
}: BaseStatsProps) {
    // Size variants
    const sizeClasses = {
        sm: {
            container: 'gap-2',
            card: 'p-2',
            icon: 'w-3 h-3',
            value: 'text-sm',
            label: 'text-xs'
        },
        md: {
            container: 'gap-3 sm:gap-4',
            card: 'p-3 sm:p-4',
            icon: 'w-4 h-4 sm:w-5 sm:h-5',
            value: 'text-lg sm:text-xl',
            label: 'text-xs'
        },
        lg: {
            container: 'gap-4 sm:gap-6',
            card: 'p-4 sm:p-6',
            icon: 'w-5 h-5 sm:w-6 sm:h-6',
            value: 'text-xl sm:text-2xl',
            label: 'text-sm'
        }
    };

    // Layout variants
    const layoutClasses = {
        grid: `grid grid-cols-1 sm:grid-cols-${columns}`,
        list: 'flex flex-col space-y-3',
        compact: 'flex items-center space-x-4'
    };

    const currentSize = sizeClasses[size];
    const currentLayout = layoutClasses[layout];

    // Call hooks unconditionally at the top (required by React rules)
    const animatedAutomation = useNumberAnimation({
        end: variant === 'caseStudy' && metrics ? (parseInt((metrics.automation || '0').replace(/[^\d]/g, '')) || 0) : 0,
        duration: 2000,
        delay: 0
    });
    const animatedSatisfaction = useNumberAnimation({
        end: variant === 'caseStudy' && metrics ? (parseInt((metrics.satisfaction || '0').replace(/[^\d]/g, '')) || 0) : 0,
        duration: 2000,
        delay: 200
    });
    const animatedCostSavings = useNumberAnimation({
        end: variant === 'caseStudy' && metrics ? (parseInt((metrics.costSavings || '0').replace(/[^\d]/g, '')) || 0) : 0,
        duration: 2000,
        delay: 400
    });
    const animatedResponseTime = useNumberAnimation({
        end: variant === 'caseStudy' && metrics ? (parseInt((metrics.responseTime || '0').replace(/[^\d]/g, '')) || 0) : 0,
        duration: 2000,
        delay: 600
    });

    // Render based on variant to preserve exact original styling
    if (variant === 'article') {
        return (
            <div className={`grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 ${className}`}>
                <div className="bg-white/80 dark:bg-slate-800 rounded-xl p-3 sm:p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-teal-100 dark:border-teal-500">
                    <FaClock className="w-4 h-4 sm:w-5 sm:h-5 text-teal-500 dark:text-white mx-auto mb-2" />
                    <div className="text-lg sm:text-xl font-bold text-teal-600 dark:text-white mb-1">{readTime}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">Read Time</div>
                </div>
                <div className="bg-white/80 dark:bg-slate-800 rounded-xl p-3 sm:p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-teal-100 dark:border-teal-500">
                    <FaStar className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 dark:text-white mx-auto mb-2" />
                    <div className="text-lg sm:text-xl font-bold text-teal-600 dark:text-white mb-1">{rating}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">Rating</div>
                </div>
                <div className="bg-white/80 dark:bg-slate-800 rounded-xl p-3 sm:p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-teal-100 dark:border-teal-500">
                    <FaEye className="w-4 h-4 sm:w-5 sm:h-5 text-teal-500 dark:text-white mx-auto mb-2" />
                    <div className="text-lg sm:text-xl font-bold text-teal-600 dark:text-white mb-1">{views}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">Views</div>
                </div>
            </div>
        );
    }

    if (variant === 'caseStudy' && metrics) {
        return (
            <div className={`grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 ${className}`}>
                <div className="bg-white/90 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-blue-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-600 group">
                    <div className="flex justify-center mb-2">
                        <FaRobot className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors" />
                    </div>
                    <div className="text-lg sm:text-xl font-bold text-blue-600 dark:text-blue-400 mb-1">{animatedAutomation}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">Automation</div>
                </div>
                <div className="bg-white/90 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-blue-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-pink-500 group">
                    <div className="flex justify-center mb-2">
                        <FaHeart className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500 dark:text-pink-400 group-hover:text-pink-600 dark:group-hover:text-pink-300 transition-colors" />
                    </div>
                    <div className="text-lg sm:text-xl font-bold text-blue-600 dark:text-pink-400 mb-1">{animatedSatisfaction}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">Satisfaction</div>
                </div>
                <div className="bg-white/90 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-blue-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-green-500 group">
                    <div className="flex justify-center mb-2">
                        <FaDollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 dark:text-green-400 group-hover:text-green-600 dark:group-hover:text-green-300 transition-colors" />
                    </div>
                    <div className="text-lg sm:text-xl font-bold text-blue-600 dark:text-green-400 mb-1">{animatedCostSavings}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">Savings</div>
                </div>
                <div className="bg-white/90 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-blue-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-purple-500 group">
                    <div className="flex justify-center mb-2">
                        <FaClock className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 dark:text-purple-400 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors" />
                    </div>
                    <div className="text-lg sm:text-xl font-bold text-blue-600 dark:text-purple-400 mb-1">{animatedResponseTime}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">Response Time</div>
                </div>
            </div>
        );
    }

    if (variant === 'resource') {
        // Determine if it's downloadable or watchable content
        const isDownloadable = !attendees && (downloadCount || fileSize);
        const isWatchable = attendees || duration;

        return (
            <div className={`grid grid-cols-2 gap-4 ${className}`}>
                {/* For downloadable content: File Size + Downloads */}
                {isDownloadable && (
                    <>
                        {fileSize && (
                            <div className="bg-white/90 dark:bg-slate-700 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-purple-100 dark:border-slate-600">
                                <div className="flex justify-center mb-2">
                                    <FaFileAlt className="w-5 h-5 text-purple-500 dark:text-white" />
                                </div>
                                <div className="text-2xl font-bold text-purple-600 dark:text-white mb-1">{fileSize}</div>
                                <div className="text-sm text-gray-600 dark:text-gray-300">File Size</div>
                            </div>
                        )}
                        <div className="bg-white/90 dark:bg-slate-700 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-teal-100 dark:border-slate-600">
                            <div className="flex justify-center mb-2">
                                <FaDownload className="w-5 h-5 text-teal-500 dark:text-white" />
                            </div>
                            <div className="text-2xl font-bold text-teal-600 dark:text-white mb-1">{downloadCount || '0'}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-300">Downloads</div>
                        </div>
                    </>
                )}

                {/* For watchable content: Duration + Attendees/Views */}
                {isWatchable && (
                    <>
                        {duration && (
                            <div className="bg-white/90 dark:bg-slate-700 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-blue-100 dark:border-slate-600">
                                <div className="flex justify-center mb-2">
                                    <FaClock className="w-5 h-5 text-blue-500 dark:text-white" />
                                </div>
                                <div className="text-2xl font-bold text-blue-600 dark:text-white mb-1">{duration}</div>
                                <div className="text-sm text-gray-600 dark:text-gray-300">Duration</div>
                            </div>
                        )}
                        <div className="bg-white/90 dark:bg-slate-700 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-teal-100 dark:border-slate-600">
                            <div className="flex justify-center mb-2">
                                <FaUsers className="w-5 h-5 text-teal-500 dark:text-white" />
                            </div>
                            <div className="text-2xl font-bold text-teal-600 dark:text-white mb-1">{attendees || '0'}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-300">Attendees</div>
                        </div>
                    </>
                )}
            </div>
        );
    }

    // Custom variant - use the generic approach
    return (
        <div className={`${currentLayout} ${currentSize.container} ${className}`}>
            {stats?.map((stat, index) => (
                <div
                    key={index}
                    className={`bg-white/80 backdrop-blur-sm rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border ${stat.color || 'border-teal-100'} ${currentSize.card}`}
                >
                    <div className="flex justify-center mb-2">
                        <stat.icon className={`${currentSize.icon} ${stat.color?.includes('blue') ? 'text-blue-500' : stat.color?.includes('pink') ? 'text-pink-500' : stat.color?.includes('green') ? 'text-green-500' : stat.color?.includes('purple') ? 'text-purple-500' : 'text-teal-500'} group-hover:${stat.color?.includes('blue') ? 'text-blue-600' : stat.color?.includes('pink') ? 'text-pink-600' : stat.color?.includes('green') ? 'text-green-600' : stat.color?.includes('purple') ? 'text-purple-600' : 'text-teal-600'} transition-colors`} />
                    </div>
                    <div className={`font-bold ${stat.color?.includes('blue') ? 'text-blue-600' : 'text-teal-600'} mb-1 ${currentSize.value}`}>
                        {stat.value}
                    </div>
                    <div className={`text-gray-600 ${currentSize.label}`}>{stat.label}</div>
                </div>
            ))}
        </div>
    );
}


