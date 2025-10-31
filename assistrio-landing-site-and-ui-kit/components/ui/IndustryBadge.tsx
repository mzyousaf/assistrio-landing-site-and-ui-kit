import { FaBuilding, FaHospital, FaUniversity, FaStore, FaIndustry, FaCreditCard, FaShoppingCart, FaCloud } from 'react-icons/fa';

interface IndustryBadgeProps {
    industry: string;
    className?: string;
}

export default function IndustryBadge({ industry, className = '' }: IndustryBadgeProps) {
    const getIndustryConfig = (industry: string) => {
        const configs = {
            'Technology': {
                gradient: 'from-blue-500 to-cyan-500',
                icon: FaBuilding,
                iconColor: 'text-blue-100'
            },
            'Healthcare': {
                gradient: 'from-green-500 to-emerald-500',
                icon: FaHospital,
                iconColor: 'text-green-100'
            },
            'Finance': {
                gradient: 'from-purple-500 to-pink-500',
                icon: FaCreditCard,
                iconColor: 'text-purple-100'
            },
            'E-commerce': {
                gradient: 'from-orange-500 to-red-500',
                icon: FaShoppingCart,
                iconColor: 'text-orange-100'
            },
            'Manufacturing': {
                gradient: 'from-gray-500 to-gray-600',
                icon: FaIndustry,
                iconColor: 'text-gray-100'
            },
            'Education': {
                gradient: 'from-indigo-500 to-purple-500',
                icon: FaUniversity,
                iconColor: 'text-indigo-100'
            },
            'Retail': {
                gradient: 'from-pink-500 to-rose-500',
                icon: FaStore,
                iconColor: 'text-pink-100'
            },
            'SaaS': {
                gradient: 'from-cyan-500 to-blue-500',
                icon: FaCloud,
                iconColor: 'text-cyan-100'
            }
        };
        return configs[industry as keyof typeof configs] || {
            gradient: 'from-gray-500 to-gray-600',
            icon: FaBuilding,
            iconColor: 'text-gray-100'
        };
    };

    const config = getIndustryConfig(industry);
    const IconComponent = config.icon;

    return (
        <div className={`inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r ${config.gradient} text-white text-xs sm:text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group ${className}`}>
            <div className="relative">
                <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 transition-transform duration-300 group-hover:rotate-12" />
                <div className={`absolute inset-0 ${config.iconColor} opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-full blur-sm`}></div>
            </div>
            {industry}
        </div>
    );
}
