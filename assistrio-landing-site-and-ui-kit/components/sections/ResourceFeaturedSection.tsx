import Link from 'next/link';
import Image from 'next/image';
import { BaseBadge, BaseStats } from '../ui';
import { FaBook, FaFileAlt, FaVideo, FaCog, FaArrowRight } from 'react-icons/fa';

interface ResourceFeaturedSectionProps {
    title: string;
    featuredItem: {
        title: string;
        slug: string;
        type?: string;
        description?: string;
        tags?: string[];
        image?: string;
        downloadCount?: string;
        attendees?: string;
        fileSize?: string;
        duration?: string;
        difficulty?: string;
        lastUpdated?: string;
        date?: string;
        [key: string]: unknown;
    };
    className?: string;
}

export default function ResourceFeaturedSection({
    title,
    featuredItem,
    className = ''
}: ResourceFeaturedSectionProps) {
    if (!featuredItem) return null;

    const getTypeIcon = (type: string) => {
        switch (type.toLowerCase()) {
            case 'guide':
                return <FaBook className="w-6 h-6" />;
            case 'whitepaper':
                return <FaFileAlt className="w-6 h-6" />;
            case 'webinar':
                return <FaVideo className="w-6 h-6" />;
            case 'tool':
                return <FaCog className="w-6 h-6" />;
            default:
                return <FaBook className="w-6 h-6" />;
        }
    };


    return (
        <div className={`mb-16 ${className}`}>
            <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3 animate-fade-in">
                    {title}
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-teal-500 dark:from-brand-400 dark:to-teal-400 mx-auto rounded-full"></div>
            </div>

            <div className="relative bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 rounded-2xl p-6 lg:p-10 shadow-2xl dark:shadow-xl dark:shadow-brand-500/20 hover:shadow-3xl dark:hover:shadow-brand-500/30 transition-all duration-500 group border border-blue-100 dark:border-slate-600 animate-scale-in overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-teal-200/30 dark:from-brand-500/20 dark:to-cyan-500/20 rounded-full blur-2xl opacity-50 group-hover:opacity-70 dark:group-hover:opacity-90 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-cyan-200/30 to-blue-200/30 dark:from-teal-500/20 dark:to-brand-500/20 rounded-full blur-xl opacity-40 group-hover:opacity-60 dark:group-hover:opacity-80 transition-opacity duration-500"></div>

                <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
                    <div className="order-2 lg:order-1">
                        {/* Badges */}
                        <div className="flex flex-wrap items-center gap-3 mb-6 animate-slide-in-left">
                            {featuredItem.type && (
                                <BaseBadge variant="type" content={featuredItem.type} size="md" />
                            )}
                            <BaseBadge variant="featured" content="Featured Resource" size="sm" />
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-brand-400 transition-colors duration-300 animate-slide-in-right leading-tight">
                            <Link href={`/resources/${featuredItem.slug}`}>
                                {featuredItem.title}
                            </Link>
                        </h3>

                        {/* Description */}
                        {featuredItem.description && (
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed animate-fade-in">
                                {featuredItem.description}
                            </p>
                        )}

                        {/* Tags */}
                        {featuredItem.tags && Array.isArray(featuredItem.tags) && featuredItem.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-6 animate-scale-in">
                                {featuredItem.tags.slice(0, 4).map((tag: string, index: number) => (
                                    <span key={index} className="inline-flex items-center px-3 py-1 rounded-full bg-white/80 dark:bg-slate-700 dark:text-brand-400 text-blue-700 text-sm font-medium border border-blue-200 dark:border-slate-600 hover:bg-blue-50 dark:hover:bg-slate-600 transition-all duration-200">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Stats Grid */}
                        <BaseStats
                            variant="resource"
                            downloadCount={featuredItem.downloadCount}
                            attendees={featuredItem.attendees}
                            fileSize={featuredItem.fileSize}
                            duration={featuredItem.duration}
                            className="mb-6 animate-slide-in-left"
                            columns={2}
                        />

                        {/* Expert Info */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 animate-fade-in">
                            <div className="flex items-center space-x-3">
                                {featuredItem.type && (
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                                        <div className="text-white">
                                            {getTypeIcon(featuredItem.type)}
                                        </div>
                                    </div>
                                )}
                                <div>
                                    <p className="font-semibold text-gray-900 dark:text-white">Expert Resource</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{featuredItem.difficulty || 'All Levels'}</p>
                                </div>
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 text-left sm:text-right">
                                <p className="font-medium">Last Updated</p>
                                <p>{featuredItem.lastUpdated || featuredItem.date || 'N/A'}</p>
                            </div>
                        </div>
                    </div>

                    {/* Image Section */}
                    {featuredItem.image && (
                        <div className="relative group/image overflow-hidden rounded-2xl animate-slide-in-right">
                            <Image
                                src={featuredItem.image}
                                alt={featuredItem.title}
                                width={600}
                                height={288}
                                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500 shadow-xl"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-teal-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* CTA Button */}
                            <div className="absolute bottom-6 left-6 right-6">
                                <Link
                                    href={`/resources/${featuredItem.slug}`}
                                    className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-500 dark:from-blue-500 dark:to-teal-500 backdrop-blur-sm text-white dark:text-white font-semibold rounded-xl hover:from-blue-600 hover:to-teal-600 dark:hover:from-blue-600 dark:hover:to-teal-600 transition-all duration-300 shadow-lg dark:shadow-xl dark:shadow-blue-500/30 hover:shadow-xl dark:hover:shadow-blue-500/50 transform hover:scale-105 group/btn w-full hover:brightness-110"
                                >
                                    <span className="group-hover/btn:mr-2 transition-all duration-300">
                                        {featuredItem.type === 'webinar' ? 'Watch Now' : 'Download Free'}
                                    </span>
                                    <FaArrowRight className="w-4 h-4 ml-2 text-white dark:text-white group-hover/btn:translate-x-1 transition-transform duration-300" />
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
