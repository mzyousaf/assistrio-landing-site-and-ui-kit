import Link from 'next/link';
import Image from 'next/image';
import BaseBadge from '../ui/BaseBadge';
import { FaClock } from 'react-icons/fa';

interface ContentCardProps {
    id: string | number;
    title: string;
    description: string;
    image: string;
    category?: string;
    readTime?: string;
    duration?: string;
    author?: string;
    authorRole?: string;
    authorImage?: string;
    publishedAt?: string;
    lastUpdated?: string;
    date?: string;
    tags?: string[];
    slug: string;
    viewMode: 'grid' | 'list';
    type: 'blog' | 'case-study' | 'resource';
    metrics?: {
        automation?: string;
        satisfaction?: string;
        costSavings?: string;
        responseTime?: string;
    };
    company?: string;
    companySize?: string;
    logo?: string;
    difficulty?: string;
    downloadCount?: string;
    attendees?: string;
    className?: string;
}

export default function ContentCard({
    title,
    description,
    image,
    category,
    readTime,
    duration,
    author,
    authorRole,
    authorImage,
    publishedAt,
    lastUpdated,
    date,
    tags,
    slug,
    viewMode,
    type,
    metrics,
    company,
    companySize,
    logo,
    className = ''
}: ContentCardProps) {
    const getContentType = () => {
        switch (type) {
            case 'blog': return 'blog';
            case 'case-study': return 'case-studies';
            case 'resource': return 'resources';
            default: return 'blog';
        }
    };

    const getDisplayDate = () => {
        if (publishedAt) return new Date(publishedAt).toLocaleDateString();
        if (lastUpdated) return lastUpdated;
        if (date) return date;
        return '';
    };

    const getDisplayTime = () => {
        if (readTime) return readTime;
        if (duration) return duration;
        return '';
    };

    return (
        <article className={`bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group border border-gray-100 ${viewMode === "list" ? "flex flex-col sm:flex-row" : ""} ${className}`}>
            <div className={`relative overflow-hidden ${viewMode === "list" ? "sm:w-80 flex-shrink-0 self-stretch" : ""}`}>
                <Image
                    src={image}
                    alt={title}
                    width={320}
                    height={200}
                    className={`object-cover group-hover:scale-105 transition-transform duration-300 w-full ${viewMode === "list" ? "h-full min-h-[200px]" : "h-48"}`}
                />
                <div className="absolute top-4 left-4">
                    {type === 'blog' && category ? (
                        <BaseBadge
                            variant="category"
                            content={category}
                            size="sm"
                            className="backdrop-blur-sm"
                        />
                    ) : (
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-xs font-medium text-gray-700 shadow-sm">
                            {category || type.charAt(0).toUpperCase() + type.slice(1)}
                        </span>
                    )}
                </div>
                <div className="absolute top-4 right-4">
                    <BaseBadge
                        variant="custom"
                        content={getDisplayTime()}
                        size="sm"
                        gradient="from-black/20 to-black/20"
                        icon={FaClock}
                        className="backdrop-blur-sm"
                    />
                </div>
            </div>
            <div className={`p-4 sm:p-6 ${viewMode === "list" ? "flex-1" : ""}`}>
                {/* Company/Author Info */}
                {(company || author) && (
                    <div className="flex items-center mb-4">
                        {logo && (
                            <Image
                                src={logo}
                                alt={company || 'Company logo'}
                                width={32}
                                height={32}
                                className="h-7 sm:h-8 w-auto mr-3 rounded shadow-sm"
                            />
                        )}
                        {authorImage && (
                            <Image
                                src={authorImage}
                                alt={author || 'Author'}
                                width={32}
                                height={32}
                                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover mr-3"
                            />
                        )}
                        <div>
                            <p className="font-medium text-gray-900 text-sm">{company || author}</p>
                            <p className="text-xs text-gray-500">{companySize || authorRole}</p>
                        </div>
                    </div>
                )}

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-600 transition-colors line-clamp-2">
                    <Link href={`/${getContentType()}/${slug}`}>
                        {title}
                    </Link>
                </h3>
                <p className={`text-sm sm:text-base text-gray-600 mb-4 leading-relaxed ${viewMode === "list" ? "line-clamp-2" : "line-clamp-3"}`}>
                    {description}
                </p>

                {/* Tags */}
                {tags && tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-4">
                        {tags.slice(0, viewMode === "list" ? 4 : 2).map((tag, index) => (
                            <span key={index} className="inline-flex items-center px-2 py-1 rounded-md bg-gray-100 text-gray-600 text-xs font-medium hover:bg-brand-100 hover:text-brand-700 transition-colors cursor-pointer">
                                #{tag}
                            </span>
                        ))}
                    </div>
                )}

                {/* Metrics for Case Studies */}
                {metrics && type === 'case-study' && (
                    <div className="grid grid-cols-2 gap-2 mb-4">
                        <div className="bg-brand-50 dark:bg-brand-900 rounded-lg p-3 text-center hover:bg-brand-100 dark:hover:bg-brand-800 transition-colors">
                            <div className="text-lg font-bold text-brand-600 dark:text-brand-300">{metrics.automation}</div>
                            <div className="text-xs text-gray-600 dark:text-gray-300">Automation</div>
                        </div>
                        <div className="bg-brand-50 dark:bg-brand-900 rounded-lg p-3 text-center hover:bg-brand-100 dark:hover:bg-brand-800 transition-colors">
                            <div className="text-lg font-bold text-brand-600 dark:text-brand-300">{metrics.satisfaction}</div>
                            <div className="text-xs text-gray-600 dark:text-gray-300">Satisfaction</div>
                        </div>
                    </div>
                )}

                {getDisplayDate() && (
                    <div className={`flex items-center justify-between ${viewMode === "list" ? "flex-col sm:flex-row gap-4" : ""}`}>
                        <div className="flex items-center space-x-2 sm:space-x-3">
                            {/* Author info removed from blog cards */}
                        </div>
                        <div className={`text-right ${viewMode === "list" ? "text-left md:text-right" : ""}`}>
                            <p className="text-xs text-gray-500">
                                {getDisplayDate()}
                            </p>
                        </div>
                    </div>
                )}

                <div className="mt-4 pt-4 border-t border-gray-100">
                    <Link
                        href={`/${getContentType()}/${slug}`}
                        className="inline-flex items-center text-brand-600 hover:text-brand-700 font-medium text-sm group-hover:translate-x-1 transition-transform"
                    >
                        Read more
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </article>
    );
}
