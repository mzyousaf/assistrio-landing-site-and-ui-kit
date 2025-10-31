import Image from 'next/image';
import { FaUser, FaCalendarAlt, FaClock, FaBuilding, FaUsers, FaExternalLinkAlt, FaHospital, FaUniversity, FaStore, FaIndustry, FaCreditCard, FaShoppingCart, FaCloud, FaHome } from 'react-icons/fa';

interface BaseMetaInfoProps {
    variant: 'author' | 'company' | 'resource' | 'custom';
    // Author variant props
    author?: string;
    authorRole?: string;
    authorImage?: string;
    publishedAt?: string;
    readTime?: string;
    // Company variant props
    company?: string;
    industry?: string;
    companySize?: string;
    logo?: string;
    // Resource variant props
    presenter?: string;
    presenterRole?: string;
    presenterImage?: string;
    lastUpdated?: string;
    duration?: string;
    // Custom variant props
    title?: string;
    subtitle?: string;
    image?: string;
    metadata?: Array<{
        icon: React.ComponentType<{ className?: string }>;
        label: string;
        value: string;
        color?: string;
    }>;
    // Common props
    className?: string;
    size?: 'sm' | 'md' | 'lg';
    layout?: 'horizontal' | 'vertical' | 'compact';
}

export default function BaseMetaInfo({
    variant,
    // Author props
    author,
    authorRole,
    authorImage,
    publishedAt,
    readTime,
    // Company props
    company,
    industry,
    companySize,
    // Resource props
    presenter,
    presenterRole,
    presenterImage,
    lastUpdated,
    duration,
    // Custom props
    title,
    subtitle,
    image,
    metadata,
    // Common props
    className = '',
    size = 'md',
    layout = 'horizontal'
}: BaseMetaInfoProps) {
    // Size variants
    const sizeClasses = {
        sm: {
            container: 'space-y-2',
            image: 'w-8 h-8',
            text: 'text-sm',
            subtitle: 'text-xs',
            metadata: 'text-xs'
        },
        md: {
            container: 'space-y-3 sm:space-y-0 sm:space-x-4',
            image: 'w-12 h-12 sm:w-14 sm:h-14',
            text: 'text-base sm:text-lg',
            subtitle: 'text-sm',
            metadata: 'text-sm'
        },
        lg: {
            container: 'space-y-4 sm:space-y-0 sm:space-x-6',
            image: 'w-16 h-16 sm:w-20 sm:h-20',
            text: 'text-lg sm:text-xl',
            subtitle: 'text-base',
            metadata: 'text-base'
        }
    };

    // Layout variants
    const layoutClasses = {
        horizontal: 'flex flex-col sm:flex-row sm:items-center',
        vertical: 'flex flex-col',
        compact: 'flex items-center space-x-3'
    };


    // Render based on variant to preserve exact original styling
    if (variant === 'author') {
        return (
            <div className={`flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 ${className}`}>
                <div className="flex items-center space-x-3 sm:space-x-4">
                    {authorImage && (
                        <Image
                            src={authorImage}
                            alt={author || 'Author'}
                            width={56}
                            height={56}
                            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-3 border-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                        />
                    )}
                    <div>
                        <p className="font-semibold text-gray-900 dark:text-white text-base sm:text-lg flex items-center">
                            <FaUser className="w-4 h-4 mr-2 text-teal-500 dark:text-brand-400" />
                            {author}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{authorRole}</p>
                    </div>
                </div>
                <div className="flex sm:ml-auto sm:text-right space-x-4 sm:space-x-6">
                    <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                        <FaCalendarAlt className="w-3 h-3 mr-1" />
                        {publishedAt ? new Date(publishedAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                        }) : publishedAt}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                        <FaClock className="w-3 h-3 mr-1" />
                        {readTime}
                    </p>
                </div>
            </div>
        );
    }

    if (variant === 'company') {
        // Map companies to their specific icons
        const getCompanyIcon = (companyName: string) => {
            const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
                'TechCorp': FaCloud,
                'EcomPlus': FaShoppingCart,
                'HealthCare Pro': FaHospital,
                'FinanceFirst': FaCreditCard,
                'EduTech Solutions': FaUniversity,
                'RealEstate Pro': FaHome
            };
            return iconMap[companyName] || FaBuilding;
        };

        // Map industries to their specific icons
        const getIndustryIcon = (industryName: string) => {
            const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
                'SaaS Technology': FaCloud,
                'E-commerce': FaShoppingCart,
                'Healthcare': FaHospital,
                'Financial Services': FaCreditCard,
                'Education Technology': FaUniversity,
                'Real Estate': FaHome,
                'Manufacturing': FaIndustry,
                'Retail': FaStore
            };
            return iconMap[industryName] || FaBuilding;
        };

        const CompanyIcon = getCompanyIcon(company || '');
        const IndustryIcon = getIndustryIcon(industry || '');

        return (
            <div className={`group ${className}`}>
                <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="relative flex-shrink-0">
                        <div className="relative">
                            <div className="h-12 sm:h-14 w-12 sm:w-14 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group-hover:rotate-2 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-slate-700 dark:to-slate-700 border border-blue-200 dark:border-slate-600 flex items-center justify-center">
                                <CompanyIcon className="h-6 sm:h-7 w-6 sm:w-7 text-blue-600 dark:text-white" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                                <FaExternalLinkAlt className="w-2 h-2 text-white" />
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                            <div className="flex-1 min-w-0">
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-brand-400 transition-colors duration-300 truncate leading-tight">
                                    {company}
                                </h3>
                                <div className="mt-1 space-y-1">
                                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                                        <div className="flex items-center bg-blue-50 dark:bg-slate-700 rounded-full px-2 py-1 mr-2">
                                            <IndustryIcon className="w-3 h-3 text-blue-500 dark:text-brand-400 mr-1" />
                                            <span className="text-xs font-medium text-blue-700 dark:text-blue-300">{industry}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                                        <div className="flex items-center bg-teal-50 dark:bg-slate-700 rounded-full px-2 py-1">
                                            <FaUsers className="w-3 h-3 text-teal-500 dark:text-brand-400 mr-1" />
                                            <span className="text-xs font-medium text-teal-700 dark:text-teal-300">{companySize}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (variant === 'resource') {
        return (
            <div className={`flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 ${className}`}>
                <div className="flex items-center space-x-3 sm:space-x-4">
                    {presenterImage && (
                        <Image
                            src={presenterImage}
                            alt={presenter || 'Presenter'}
                            width={56}
                            height={56}
                            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-3 border-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                        />
                    )}
                    <div>
                        <p className="font-semibold text-gray-900 text-base sm:text-lg flex items-center">
                            <FaUser className="w-4 h-4 mr-2 text-teal-500" />
                            {presenter}
                        </p>
                        <p className="text-sm text-gray-600">{presenterRole}</p>
                    </div>
                </div>
                <div className="flex sm:ml-auto sm:text-right space-x-4 sm:space-x-6">
                    <p className="text-sm text-gray-500 flex items-center">
                        <FaCalendarAlt className="w-3 h-3 mr-1" />
                        {lastUpdated}
                    </p>
                    <p className="text-sm text-gray-500 flex items-center">
                        <FaClock className="w-3 h-3 mr-1" />
                        {duration}
                    </p>
                </div>
            </div>
        );
    }

    // Custom variant - use the generic approach
    const currentLayout = layoutClasses[layout];
    const currentSize = sizeClasses[size];

    return (
        <div className={`group ${currentLayout} ${currentSize.container} ${className}`}>
            {image && (
                <div className="relative flex-shrink-0">
                    <Image
                        src={image || ''}
                        alt={title || 'Image'}
                        width={80}
                        height={80}
                        className={`${currentSize.image} rounded-full object-cover border-3 border-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110`}
                    />
                </div>
            )}

            <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                        <p className={`font-semibold text-gray-900 ${currentSize.text} flex items-center`}>
                            {title}
                        </p>
                        {subtitle && (
                            <p className={`text-gray-600 ${currentSize.subtitle}`}>{subtitle}</p>
                        )}

                        {/* Metadata */}
                        {metadata && metadata.length > 0 && (
                            <div className="mt-1 space-y-1">
                                {metadata.map((meta, index) => (
                                    <div key={index} className="flex items-center">
                                        <div className={`flex items-center rounded-full px-2 py-1 mr-2 ${meta.color || 'bg-blue-50'}`}>
                                            <meta.icon className={`w-3 h-3 mr-1 ${meta.color?.includes('blue') ? 'text-blue-500' : 'text-teal-500'}`} />
                                            <span className={`text-xs font-medium ${meta.color?.includes('blue') ? 'text-blue-700' : 'text-teal-700'}`}>
                                                {meta.value}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

