import Link from 'next/link';
import Image from 'next/image';

interface FeaturedContentSectionProps {
    title: string;
    featuredItem: {
        title: string;
        slug: string;
        excerpt?: string;
        description?: string;
        image?: string;
        category?: string;
        type?: string;
        readTime?: string;
        duration?: string;
        author?: string;
        authorRole?: string;
        authorImage?: string;
        publishedAt?: string;
        lastUpdated?: string;
        date?: string;
        tags?: string[];
        metrics?: {
            automation?: string;
            satisfaction?: string;
            costSavings?: string;
            responseTime?: string;
        };
        company?: string;
        companySize?: string;
        logo?: string;
        testimonial?: string;
        testimonialAuthor?: string;
        [key: string]: unknown;
    };
    type: 'blog' | 'case-study' | 'resource';
    className?: string;
}

export default function FeaturedContentSection({
    title,
    featuredItem,
    type,
    className = ''
}: FeaturedContentSectionProps) {
    if (!featuredItem) return null;

    const getContentType = () => {
        switch (type) {
            case 'blog': return 'blog';
            case 'case-study': return 'case-studies';
            case 'resource': return 'resources';
            default: return 'blog';
        }
    };

    const getFeaturedLabel = () => {
        switch (type) {
            case 'blog': return 'Featured';
            case 'case-study': return 'Featured Success Story';
            case 'resource': return 'Featured Resource';
            default: return 'Featured';
        }
    };

    const getCTAButton = () => {
        switch (type) {
            case 'blog': return 'Read Article';
            case 'case-study': return 'Read Full Story';
            case 'resource': return featuredItem.type && typeof featuredItem.type === 'string' && featuredItem.type === 'webinar' ? 'Watch Now' : 'Download Free';
            default: return 'Read More';
        }
    };

    return (
        <div className={`mb-16 ${className}`}>
            <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">{title}</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-brand-500 to-blue-500 mx-auto rounded-full"></div>
            </div>
            <div className="bg-gradient-to-r from-brand-50 to-blue-50 rounded-2xl p-8 lg:p-12 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                    <div>
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-sm font-medium">
                                {featuredItem.category || (featuredItem.type && typeof featuredItem.type === 'string'
                                    ? featuredItem.type.charAt(0).toUpperCase() + featuredItem.type.slice(1)
                                    : '')}
                            </span>
                            <span className="inline-flex items-center px-2 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-medium">
                                {getFeaturedLabel()}
                            </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 group-hover:text-brand-600 transition-colors duration-200">
                            <Link href={`/${getContentType()}/${featuredItem.slug}`}>
                                {featuredItem.title}
                            </Link>
                        </h3>
                        <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                            {(typeof featuredItem.excerpt === 'string' ? featuredItem.excerpt : undefined) ||
                                (typeof featuredItem.description === 'string' ? featuredItem.description : undefined) || null}
                        </p>

                        {/* Tags for Blog */}
                        {featuredItem.tags && Array.isArray(featuredItem.tags) && (
                            <div className="flex flex-wrap gap-2 mb-6">
                                {featuredItem.tags.slice(0, 3).map((tag: string, index: number) => (
                                    <span key={index} className="inline-flex items-center px-2 py-1 rounded-md bg-gray-100 text-gray-700 text-xs font-medium">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Metrics for Case Studies */}
                        {featuredItem.metrics && type === 'case-study' && (
                            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
                                <div className="bg-white rounded-lg p-3 sm:p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                                    <div className="text-xl sm:text-2xl font-bold text-brand-600 mb-1">{featuredItem.metrics.costSavings || ''}</div>
                                    <div className="text-xs sm:text-sm text-gray-600">Annual Savings</div>
                                </div>
                                <div className="bg-white rounded-lg p-3 sm:p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                                    <div className="text-xl sm:text-2xl font-bold text-brand-600 mb-1">{featuredItem.metrics.automation || ''}</div>
                                    <div className="text-xs sm:text-sm text-gray-600">Automation Rate</div>
                                </div>
                                <div className="bg-white rounded-lg p-3 sm:p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                                    <div className="text-xl sm:text-2xl font-bold text-brand-600 mb-1">{featuredItem.metrics.responseTime || ''}</div>
                                    <div className="text-xs sm:text-sm text-gray-600">Avg Response Time</div>
                                </div>
                                <div className="bg-white rounded-lg p-3 sm:p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                                    <div className="text-xl sm:text-2xl font-bold text-brand-600 mb-1">{featuredItem.metrics.satisfaction || ''}</div>
                                    <div className="text-xs sm:text-sm text-gray-600">Satisfaction Rate</div>
                                </div>
                            </div>
                        )}

                        {/* Testimonial for Case Studies */}
                        {featuredItem.testimonial && typeof featuredItem.testimonial === 'string' && type === 'case-study' && (
                            <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
                                <div className="flex items-start">
                                    <svg className="w-6 h-6 text-brand-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                    <div>
                                        <p className="text-gray-700 italic mb-3">&quot;{featuredItem.testimonial}&quot;</p>
                                        <p className="text-sm font-semibold text-gray-900">— {featuredItem.testimonialAuthor || ''}</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <div className="flex items-center space-x-3">
                                {featuredItem.authorImage && typeof featuredItem.authorImage === 'string' && (
                                    <Image
                                        src={featuredItem.authorImage}
                                        alt={typeof featuredItem.author === 'string' ? featuredItem.author : ''}
                                        width={48}
                                        height={48}
                                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                                    />
                                )}
                                {featuredItem.logo && typeof featuredItem.logo === 'string' && (
                                    <Image
                                        src={featuredItem.logo}
                                        alt={typeof featuredItem.company === 'string' ? featuredItem.company : ''}
                                        width={48}
                                        height={48}
                                        className="h-10 sm:h-12 w-auto rounded-lg shadow-sm"
                                    />
                                )}
                                <div>
                                    <p className="font-semibold text-gray-900 text-sm sm:text-base">{featuredItem.author || featuredItem.company || ''}</p>
                                    <p className="text-xs sm:text-sm text-gray-600">{featuredItem.authorRole || featuredItem.companySize || ''}</p>
                                </div>
                            </div>
                            <div className="text-xs sm:text-sm text-gray-500 text-left sm:text-right">
                                <p>
                                    {featuredItem.publishedAt && typeof featuredItem.publishedAt === 'string'
                                        ? new Date(featuredItem.publishedAt).toLocaleDateString()
                                        : (typeof featuredItem.lastUpdated === 'string' ? featuredItem.lastUpdated : '') || (typeof featuredItem.date === 'string' ? featuredItem.date : '')}
                                </p>
                                <p>{featuredItem.readTime || featuredItem.duration || ''}</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative group/image">
                        {featuredItem.image && typeof featuredItem.image === 'string' && (
                            <Image
                                src={featuredItem.image}
                                alt={featuredItem.title}
                                width={800}
                                height={320}
                                className="w-full h-64 lg:h-80 object-cover rounded-xl group-hover/image:scale-105 transition-transform duration-300"
                            />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                            <Link
                                href={`/${getContentType()}/${featuredItem.slug}`}
                                className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-900 font-semibold rounded-lg hover:bg-white transition-colors"
                            >
                                {getCTAButton()}
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
