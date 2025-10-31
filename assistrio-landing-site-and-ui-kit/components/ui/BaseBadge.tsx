import { FaBolt, FaBuilding, FaHospital, FaUniversity, FaStore, FaIndustry, FaCreditCard, FaShoppingCart, FaCloud, FaStar, FaBook, FaFileAlt, FaVideo, FaCog, FaChartBar, FaCogs, FaPalette, FaShieldAlt, FaGlobe, FaLightbulb, FaRocket } from 'react-icons/fa';

interface BaseBadgeProps {
    variant: 'category' | 'industry' | 'featured' | 'type' | 'difficulty' | 'success' | 'custom';
    content: string;
    className?: string;
    icon?: React.ComponentType<{ className?: string }>;
    gradient?: string;
    size?: 'sm' | 'md' | 'lg';
}

export default function BaseBadge({
    variant,
    content,
    className = '',
    icon,
    gradient,
    size = 'md'
}: BaseBadgeProps) {
    // Size variants
    const sizeClasses = {
        sm: 'px-2 py-1 text-xs',
        md: 'px-3 py-1.5 text-xs sm:text-sm',
        lg: 'px-4 py-2 text-sm sm:text-base'
    };

    // Get configuration based on variant
    const getVariantConfig = () => {
        switch (variant) {
            case 'category':
                return getCategoryConfig(content);
            case 'industry':
                return getIndustryConfig(content);
            case 'featured':
                return {
                    gradient: 'from-yellow-400 to-orange-400',
                    icon: FaStar,
                    text: 'Featured'
                };
            case 'type':
                return getTypeConfig(content);
            case 'difficulty':
                return getDifficultyConfig(content);
            case 'success':
                return {
                    gradient: 'from-green-400 to-emerald-500',
                    icon: FaStar,
                    text: 'Success Story'
                };
            case 'custom':
                return {
                    gradient: gradient || 'from-gray-500 to-gray-600',
                    icon: icon || FaBolt,
                    text: content
                };
            default:
                return {
                    gradient: 'from-gray-500 to-gray-600',
                    icon: FaBolt,
                    text: content
                };
        }
    };

    const config = getVariantConfig();
    const IconComponent = config.icon;

    // Determine text color based on variant
    const getTextColor = () => {
        if (variant === 'custom' && gradient?.includes('white')) {
            return 'text-gray-700 dark:text-gray-800';
        }
        return 'text-white';
    };

    // Add dark mode support to gradients
    const getDarkModeClasses = () => {
        // Add dark mode variants for gradient backgrounds
        if (variant === 'industry' || variant === 'custom') {
            return 'dark:opacity-90 dark:hover:opacity-100';
        }
        return '';
    };

    return (
        <div className={`inline-flex items-center rounded-full bg-gradient-to-r font-semibold shadow-lg dark:shadow-xl dark:shadow-brand-500/20 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group ${config.gradient} ${sizeClasses[size]} ${getTextColor()} ${getDarkModeClasses()} ${className}`}>
            <div className="relative">
                <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 transition-transform duration-300 group-hover:rotate-12" />
                {variant === 'industry' && (
                    <div className="absolute inset-0 text-white opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-full blur-sm"></div>
                )}
            </div>
            {config.text}
        </div>
    );
}

// Category configurations (for blog)
function getCategoryConfig(category: string) {
    const configs = {
        'AI Trends': {
            gradient: 'from-teal-500 to-cyan-500',
            icon: FaRocket,
            text: category
        },
        'Best Practices': {
            gradient: 'from-teal-500 to-emerald-500',
            icon: FaLightbulb,
            text: category
        },
        'Analytics': {
            gradient: 'from-cyan-500 to-teal-500',
            icon: FaChartBar,
            text: category
        },
        'Integration': {
            gradient: 'from-teal-500 to-blue-500',
            icon: FaCogs,
            text: category
        },
        'UX Design': {
            gradient: 'from-cyan-500 to-teal-500',
            icon: FaPalette,
            text: category
        },
        'Case Study': {
            gradient: 'from-teal-500 to-cyan-500',
            icon: FaFileAlt,
            text: category
        },
        'AI Ethics': {
            gradient: 'from-teal-500 to-emerald-500',
            icon: FaShieldAlt,
            text: category
        },
        'Global Support': {
            gradient: 'from-cyan-500 to-teal-500',
            icon: FaGlobe,
            text: category
        }
    };
    return configs[category as keyof typeof configs] || {
        gradient: 'from-teal-500 to-cyan-500',
        icon: FaBolt,
        text: category
    };
}

// Industry configurations (for case studies)
function getIndustryConfig(industry: string) {
    const configs = {
        'Technology': {
            gradient: 'from-blue-500 to-cyan-500',
            icon: FaBuilding,
            text: industry
        },
        'Healthcare': {
            gradient: 'from-green-500 to-emerald-500',
            icon: FaHospital,
            text: industry
        },
        'Finance': {
            gradient: 'from-purple-500 to-pink-500',
            icon: FaCreditCard,
            text: industry
        },
        'E-commerce': {
            gradient: 'from-orange-500 to-red-500',
            icon: FaShoppingCart,
            text: industry
        },
        'Manufacturing': {
            gradient: 'from-gray-500 to-gray-600',
            icon: FaIndustry,
            text: industry
        },
        'Education': {
            gradient: 'from-indigo-500 to-purple-500',
            icon: FaUniversity,
            text: industry
        },
        'Retail': {
            gradient: 'from-pink-500 to-rose-500',
            icon: FaStore,
            text: industry
        },
        'SaaS': {
            gradient: 'from-cyan-500 to-blue-500',
            icon: FaCloud,
            text: industry
        }
    };
    return configs[industry as keyof typeof configs] || {
        gradient: 'from-gray-500 to-gray-600',
        icon: FaBuilding,
        text: industry
    };
}

// Type configurations (for resources)
function getTypeConfig(type: string) {
    const configs = {
        'guide': {
            gradient: 'from-blue-500 to-cyan-500',
            icon: FaBook,
            text: 'Guide'
        },
        'whitepaper': {
            gradient: 'from-teal-500 to-blue-500',
            icon: FaFileAlt,
            text: 'Whitepaper'
        },
        'webinar': {
            gradient: 'from-cyan-500 to-teal-500',
            icon: FaVideo,
            text: 'Webinar'
        },
        'tool': {
            gradient: 'from-blue-600 to-teal-600',
            icon: FaCog,
            text: 'Tool'
        }
    };
    return configs[type.toLowerCase() as keyof typeof configs] || {
        gradient: 'from-blue-500 to-teal-500',
        icon: FaBook,
        text: type
    };
}

// Difficulty configurations (for resources)
function getDifficultyConfig(difficulty: string) {
    const configs = {
        'beginner': {
            gradient: 'from-green-500 to-emerald-500',
            icon: FaStar,
            text: 'Beginner'
        },
        'intermediate': {
            gradient: 'from-yellow-500 to-orange-500',
            icon: FaStar,
            text: 'Intermediate'
        },
        'advanced': {
            gradient: 'from-red-500 to-pink-500',
            icon: FaStar,
            text: 'Advanced'
        }
    };
    return configs[difficulty.toLowerCase() as keyof typeof configs] || {
        gradient: 'from-blue-500 to-teal-500',
        icon: FaStar,
        text: difficulty
    };
}
