import Link from 'next/link';
import { BaseBadge, BaseMetaInfo, BaseStats } from '../ui';
import { TestimonialCard, CaseStudyImage } from '../content';
import { FaClock, FaBookOpen, FaArrowRight } from 'react-icons/fa';

interface CaseStudyFeaturedSectionProps {
    title: string;
    featuredItem: {
        id: number;
        title: string;
        slug: string;
        company: string;
        industry: string;
        metrics: {
            automation: string;
            satisfaction: string;
            costSavings: string;
            responseTime: string;
        };
        companySize?: string;
        logo?: string;
        challenge?: string;
        testimonial?: string;
        testimonialAuthor?: string;
        duration?: string;
        readTime?: string;
        image?: string;
        [key: string]: unknown;
    };
    className?: string;
}

export default function CaseStudyFeaturedSection({
    title,
    featuredItem,
    className = ''
}: CaseStudyFeaturedSectionProps) {
    if (!featuredItem) return null;

    return (
        <div className={`mb-12 sm:mb-16 ${className}`}>
            <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3 animate-fade-in">{title}</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-teal-500 dark:from-blue-400 dark:to-teal-400 mx-auto rounded-full"></div>
            </div>
            <div className="relative bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 dark:bg-gradient-to-br dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-12 shadow-2xl dark:shadow-xl dark:shadow-brand-500/20 hover:shadow-3xl dark:hover:shadow-brand-500/30 transition-all duration-500 group border border-blue-100 dark:border-teal-500/30 animate-scale-in overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-teal-200/30 dark:from-brand-500/20 dark:to-cyan-500/20 rounded-full blur-2xl opacity-50 group-hover:opacity-70 dark:group-hover:opacity-90 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-cyan-200/30 to-blue-200/30 dark:from-teal-500/20 dark:to-brand-500/20 rounded-full blur-xl opacity-40 group-hover:opacity-60 dark:group-hover:opacity-80 transition-opacity duration-500"></div>

                <div className="relative grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6 animate-slide-in-left">
                            <BaseBadge variant="industry" content={featuredItem.industry} />
                            <BaseBadge variant="success" content="Success Story" />
                        </div>

                        <BaseMetaInfo
                            variant="company"
                            company={featuredItem.company}
                            industry={featuredItem.industry}
                            companySize={featuredItem.companySize}
                            logo={featuredItem.logo}
                            className="mb-4 sm:mb-6 animate-slide-in-right"
                        />

                        <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 group-hover:text-blue-600 dark:group-hover:text-brand-400 transition-colors duration-300 animate-slide-in-right">
                            <Link href={`/case-studies/${featuredItem.slug}`}>
                                {featuredItem.title}
                            </Link>
                        </h4>

                        {/* Enhanced Challenge Preview */}
                        <div className="relative mb-4 sm:mb-6 animate-fade-in">
                            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-teal-500 dark:from-brand-400 dark:to-cyan-400 rounded-full"></div>
                            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed pl-4">
                                <strong className="text-gray-800 dark:text-white font-semibold">Challenge:</strong> {featuredItem.challenge}
                            </p>
                        </div>

                        <BaseStats
                            variant="caseStudy"
                            metrics={featuredItem.metrics}
                            className="mb-6 sm:mb-8 animate-scale-in"
                        />

                        <TestimonialCard
                            variant="case-study"
                            testimonial={featuredItem.testimonial}
                            author={featuredItem.testimonialAuthor}
                            className="mb-6 sm:mb-8 animate-slide-in-left"
                        />

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 animate-fade-in">
                            <div className="text-sm text-gray-500 dark:text-white/90 flex items-center space-x-4">
                                <span className="flex items-center">
                                    <FaClock className="w-4 h-4 mr-1 text-blue-500 dark:text-brand-400" />
                                    {featuredItem.duration}
                                </span>
                                <span className="flex items-center">
                                    <FaBookOpen className="w-4 h-4 mr-1 text-teal-500 dark:text-brand-400" />
                                    {featuredItem.readTime}
                                </span>
                            </div>
                            <Link
                                href={`/case-studies/${featuredItem.slug}`}
                                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-teal-600 dark:from-brand-500 dark:to-teal-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold hover:from-blue-600 hover:to-teal-700 dark:hover:from-brand-600 dark:hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg dark:shadow-xl dark:shadow-brand-500/30 hover:shadow-xl dark:hover:shadow-brand-500/50 text-sm sm:text-base group/btn w-full sm:w-auto hover:brightness-110"
                            >
                                <span className="text-white dark:text-white group-hover/btn:mr-2 transition-all duration-300">Read Full Story</span>
                                <FaArrowRight className="w-4 h-4 ml-2 text-white dark:text-white group-hover/btn:translate-x-1 transition-transform duration-300" />
                            </Link>
                        </div>
                    </div>

                    {featuredItem.image && (
                        <CaseStudyImage
                            image={featuredItem.image}
                            title={featuredItem.title}
                            slug={featuredItem.slug}
                            className="order-1 lg:order-2 animate-slide-in-right"
                        />
                    )}
                    {!featuredItem.image && (
                        <div className="order-1 lg:order-2">
                            <div className="w-full h-64 sm:h-80 bg-gradient-to-br from-blue-100 to-teal-100 rounded-xl sm:rounded-2xl flex items-center justify-center">
                                <span className="text-gray-400">No Image</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
