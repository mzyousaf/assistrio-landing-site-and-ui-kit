import Link from 'next/link';
import Image from 'next/image';
import { BaseBadge } from '../ui';
import { FaClock, FaDownload, FaUsers } from 'react-icons/fa';

interface ResourceCardProps {
    id: string | number;
    title: string;
    description: string;
    image: string;
    type: string;
    difficulty?: string;
    duration?: string;
    downloadCount?: string;
    attendees?: string;
    fileSize?: string;
    tags?: string[];
    slug: string;
    viewMode: 'grid' | 'list';
    className?: string;
}

export default function ResourceCard({
    title,
    description,
    image,
    type,
    difficulty,
    duration,
    downloadCount,
    attendees,
    fileSize,
    tags,
    slug,
    viewMode,
    className = ''
}: ResourceCardProps) {

    return (
        <article className={`bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-gray-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-brand-500 flex flex-col ${viewMode === "list" ? "sm:flex-row" : ""} ${className}`}>
            <div className={`relative overflow-hidden ${viewMode === "list" ? "sm:w-80 flex-shrink-0" : ""}`}>
                <Image
                    src={image}
                    alt={title}
                    width={320}
                    height={224}
                    className={`object-cover rounded-t-2xl group-hover:scale-110 transition-transform duration-700 ${viewMode === "list" ? "w-full h-56 sm:h-full sm:rounded-l-2xl sm:rounded-t-none sm:rounded-b-2xl" : "w-full h-56"}`}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent ${viewMode === "list" ? "sm:rounded-l-2xl sm:rounded-t-none sm:rounded-b-2xl" : "rounded-t-2xl"}`}></div>
                <div className={`absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${viewMode === "list" ? "sm:rounded-l-2xl sm:rounded-t-none sm:rounded-b-2xl" : "rounded-t-2xl"}`}></div>

                {/* Type Badge */}
                <div className="absolute top-4 left-4">
                    <BaseBadge
                        variant="type"
                        content={type}
                        size="sm"
                        className="backdrop-blur-sm shadow-lg"
                    />
                </div>

                {/* Difficulty Badge */}
                {difficulty && (
                    <div className="absolute top-4 right-4">
                        <BaseBadge
                            variant="difficulty"
                            content={difficulty}
                            size="sm"
                            className="backdrop-blur-sm shadow-lg"
                        />
                    </div>
                )}

                {/* Download/Attendee Count */}
                <div className="absolute bottom-4 right-4">
                    <BaseBadge
                        variant="custom"
                        content={type === 'webinar' ? `${attendees} attendees` : `${downloadCount} downloads`}
                        size="sm"
                        gradient="from-white/90 to-white/90 dark:from-slate-800/90 dark:to-slate-800/90"
                        icon={type === 'webinar' ? FaUsers : FaDownload}
                        className="backdrop-blur-sm dark:backdrop-blur-md shadow-lg dark:shadow-xl dark:shadow-brand-500/30"
                    />
                </div>
            </div>

            <div className={`p-6 flex flex-col flex-1 ${viewMode === "list" ? "sm:flex-1" : ""}`}>
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-brand-400 transition-colors duration-300 line-clamp-2">
                            <Link href={`/resources/${slug}`}>
                                {title}
                            </Link>
                        </h3>
                        <p className={`text-gray-600 dark:text-gray-300 leading-relaxed ${viewMode === "list" ? "line-clamp-2" : "line-clamp-3"}`}>
                            {description}
                        </p>
                    </div>
                </div>

                {/* Tags */}
                {tags && tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {tags.slice(0, viewMode === "list" ? 3 : 2).map((tag, index) => (
                            <span key={index} className="inline-flex items-center px-2.5 py-1 rounded-full bg-gradient-to-r from-blue-50 to-teal-50 dark:from-slate-700 dark:to-slate-700 text-blue-700 dark:text-brand-400 text-xs font-medium border border-blue-200 dark:border-slate-600 hover:from-blue-100 hover:to-teal-100 dark:hover:from-slate-600 dark:hover:to-slate-600 transition-all duration-200 cursor-pointer">
                                #{tag}
                            </span>
                        ))}
                    </div>
                )}

                {/* Spacer to push footer to bottom */}
                <div className="flex-1"></div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-slate-700 mt-auto">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                        {type === 'webinar' ? (
                            <span className="flex items-center">
                                <FaClock className="w-4 h-4 mr-1 text-blue-500 dark:text-brand-400" />
                                {duration}
                            </span>
                        ) : (
                            <span className="flex items-center">
                                <FaDownload className="w-4 h-4 mr-1 text-blue-500 dark:text-brand-400" />
                                {fileSize || '2.4 MB'}
                            </span>
                        )}
                    </div>

                    <Link
                        href={`/resources/${slug}`}
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-600 dark:from-brand-500 dark:to-teal-500 text-white dark:text-white font-semibold rounded-lg hover:from-blue-600 hover:to-teal-700 dark:hover:from-brand-600 dark:hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg dark:shadow-xl dark:shadow-brand-500/30 hover:shadow-xl dark:hover:shadow-brand-500/50 group/btn hover:brightness-110"
                    >
                        <span className="group-hover/btn:mr-1 transition-all duration-300">
                            {type === 'webinar' ? 'Watch Now' : 'Download Free'}
                        </span>
                        <svg className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </article>
    );
}
