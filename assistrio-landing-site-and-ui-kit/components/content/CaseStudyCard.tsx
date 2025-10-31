import Link from 'next/link';
import Image from 'next/image';
import { BaseBadge } from '../ui';
import { CompanyInfo } from './';
import { FaClock, FaBookOpen, FaArrowRight, FaQuoteLeft, FaStar, FaEye } from 'react-icons/fa';

interface CaseStudyCardProps {
    id: string | number;
    title: string;
    company: string;
    industry: string;
    companySize: string;
    challenge: string;
    solution: string;
    image: string;
    logo: string;
    metrics: {
        automation?: string;
        satisfaction?: string;
        costSavings?: string;
        responseTime?: string;
        capacityIncrease?: string;
        callReduction?: string;
        accuracy?: string;
        compliance?: string;
        timeReduction?: string;
        completion?: string;
        leadIncrease?: string;
        conversion?: string;
    };
    testimonial: string;
    testimonialAuthor: string;
    duration: string;
    readTime: string;
    slug: string;
    viewMode: 'grid' | 'list';
    className?: string;
}

export default function CaseStudyCard({
    title,
    company,
    industry,
    companySize,
    image,
    logo,
    metrics,
    testimonial,
    testimonialAuthor,
    duration,
    readTime,
    slug,
    viewMode,
    className = ''
}: CaseStudyCardProps) {
    return (
        <article className={`bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-gray-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-brand-500 ${viewMode === "list" ? "flex flex-col sm:flex-row" : ""} ${className}`}>
            <div className={`relative overflow-hidden ${viewMode === "list" ? "sm:w-80 flex-shrink-0" : ""}`}>
                <Image
                    src={image}
                    alt={title}
                    width={320}
                    height={192}
                    style={{ width: 'auto', height: 'auto' }}
                    className={`object-cover rounded-t-xl sm:rounded-t-2xl group-hover:scale-110 transition-transform duration-700 ${viewMode === "list" ? "w-full h-48 sm:h-full sm:rounded-l-xl sm:rounded-t-none sm:rounded-b-xl" : "w-full h-48"}`}
                />

                {/* Enhanced gradient overlays */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent ${viewMode === "list" ? "rounded-l-xl sm:rounded-t-none sm:rounded-b-xl" : "rounded-t-xl sm:rounded-t-2xl"}`}></div>
                <div className={`absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${viewMode === "list" ? "rounded-l-xl sm:rounded-t-none sm:rounded-b-xl" : "rounded-t-xl sm:rounded-t-2xl"}`}></div>

                {/* Top badges */}
                <div className="absolute top-3 left-3 right-3 flex justify-between items-start z-10">
                    <BaseBadge
                        variant="industry"
                        content={industry}
                        size="sm"
                        className="backdrop-blur-sm dark:backdrop-blur-md"
                    />
                    <div className="flex flex-col gap-2">
                        <BaseBadge
                            variant="custom"
                            content={`${metrics.automation || '0'}%`}
                            size="sm"
                            gradient="from-blue-500 to-teal-500 dark:from-brand-500 dark:to-teal-500"
                            icon={FaStar}
                            className="backdrop-blur-sm dark:backdrop-blur-md shadow-lg dark:shadow-xl dark:shadow-brand-500/30"
                        />
                        <BaseBadge
                            variant="custom"
                            content="Featured"
                            size="sm"
                            gradient="from-white/90 to-white/90 dark:from-slate-800/90 dark:to-slate-800/90"
                            icon={FaEye}
                            className="backdrop-blur-sm dark:backdrop-blur-md shadow-lg dark:shadow-xl"
                        />
                    </div>
                </div>

            </div>

            <div className={`p-4 sm:p-6 ${viewMode === "list" ? "flex-1" : ""}`}>
                {/* Company Info */}
                <CompanyInfo
                    company={company}
                    industry={industry}
                    companySize={companySize}
                    logo={logo}
                    className="mb-3 sm:mb-4"
                />

                {/* Title */}
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-brand-400 transition-colors duration-300 line-clamp-2">
                    <Link href={`/case-studies/${slug}`}>
                        {title}
                    </Link>
                </h4>


                {/* Key Metrics - Enhanced */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-700 dark:to-slate-700 rounded-lg p-3 text-center hover:from-blue-100 hover:to-blue-200 dark:hover:from-slate-600 dark:hover:to-slate-600 transition-all duration-300 border border-blue-200 dark:border-slate-600 group/metric">
                        <div className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-1 group-hover/metric:scale-110 transition-transform duration-300">{metrics.automation || '0%'}</div>
                        <div className="text-xs text-blue-700 dark:text-blue-300 font-medium">Automation</div>
                    </div>
                    <div className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-slate-700 dark:to-slate-700 rounded-lg p-3 text-center hover:from-teal-100 hover:to-teal-200 dark:hover:from-slate-600 dark:hover:to-slate-600 transition-all duration-300 border border-teal-200 dark:border-slate-600 group/metric">
                        <div className="text-lg font-bold text-teal-600 dark:text-teal-400 mb-1 group-hover/metric:scale-110 transition-transform duration-300">{metrics.satisfaction || '0%'}</div>
                        <div className="text-xs text-teal-700 dark:text-teal-300 font-medium">Satisfaction</div>
                    </div>
                </div>

                {/* Testimonial Preview - Enhanced */}
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-slate-700 dark:to-slate-700 rounded-lg p-4 mb-4 hover:from-gray-100 hover:to-blue-100 dark:hover:from-slate-600 dark:hover:to-slate-600 transition-all duration-300 border border-gray-200 dark:border-slate-600 group/testimonial flex-grow">
                    <div className="flex items-start">
                        <div className="flex-shrink-0 mr-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-500 dark:from-brand-400 dark:to-teal-400 rounded-full flex items-center justify-center">
                                <FaQuoteLeft className="w-3 h-3 text-white" />
                            </div>
                        </div>
                        <div className="flex-1">
                            <p className="text-sm text-gray-700 dark:text-gray-300 italic mb-2 leading-relaxed group-hover/testimonial:text-gray-800 dark:group-hover/testimonial:text-gray-200 transition-colors duration-300">
                                &quot;{testimonial.substring(0, 100)}...&quot;
                            </p>
                            <div className="flex items-center">
                                <div className="w-1 h-4 bg-gradient-to-b from-blue-500 to-teal-500 dark:from-brand-400 dark:to-teal-400 rounded-full mr-2"></div>
                                <p className="text-xs font-semibold text-gray-900 dark:text-white">{testimonialAuthor}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex flex-col gap-3 pt-3 sm:pt-4 border-t border-gray-100 dark:border-slate-700 mt-auto">
                    <div className="flex items-center justify-center sm:justify-start space-x-6 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                        <span className="flex items-center bg-gray-50 dark:bg-slate-700 px-3 py-1.5 rounded-full">
                            <FaClock className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-blue-500 dark:text-brand-400" />
                            <span className="font-medium">{duration}</span>
                        </span>
                        <span className="flex items-center bg-gray-50 dark:bg-slate-700 px-3 py-1.5 rounded-full">
                            <FaBookOpen className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-teal-500 dark:text-brand-400" />
                            <span className="font-medium">{readTime}</span>
                        </span>
                    </div>

                    <div className="flex justify-center sm:justify-start">
                        <Link
                            href={`/case-studies/${slug}`}
                            className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 bg-gradient-to-r from-blue-500 to-teal-600 dark:from-brand-500 dark:to-teal-500 text-white dark:text-white font-semibold rounded-lg hover:from-blue-600 hover:to-teal-700 dark:hover:from-brand-600 dark:hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg dark:shadow-xl dark:shadow-brand-500/30 hover:shadow-xl dark:hover:shadow-brand-500/50 text-sm group/btn w-full sm:w-auto min-w-[140px] hover:brightness-110"
                        >
                            <span className="text-white dark:text-white group-hover/btn:mr-1 transition-all duration-300">Read Story</span>
                            <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 text-white dark:text-white group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
}
