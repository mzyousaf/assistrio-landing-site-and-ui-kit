'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Section from '../../../components/Section';
import {
    LoadingSpinner,
    NotFoundState,
    CopyNotification,
    ResourceTypeBadge,
    ResourceStats,
    ResourceTags,
    ResourceActionButtons,
    TabNavigation,
} from '../../../components/ui';
import {
    ResourceDetailedStats,
    BenefitsList,
    RelatedResourceCard,
} from '../../../components/content';
import { ResourceCTASection } from '../../../components/sections';
import {
    getTypeColor,
    getDifficultyColor,
} from '../../../utils/resourceHelpers';
import {
    FaBook,
    FaFileAlt,
    FaVideo,
    FaCog,
    FaClock,
    FaStar,
    FaCalendarAlt,
    FaUser,
    FaRocket,
    FaAward,
    FaChartLine
} from 'react-icons/fa';
import { LINKS } from '../../../config/links';
import { resources } from '../../../data/landingData';

type ResourceType = {
    id?: string | number;
    slug: string;
    title: string;
    description: string;
    type: string;
    difficulty?: string;
    duration?: string;
    attendees?: string;
    fileSize?: string;
    downloadCount?: string;
    tags?: string[];
    image?: string;
    presenter?: string;
    date?: string;
    lastUpdated?: string;
    readTime?: string;
    [key: string]: unknown;
};

export default function ResourceDetail() {
    const params = useParams();
    const [resource, setResource] = useState<ResourceType | null>(null);
    const [loading, setLoading] = useState(true);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [showShareMenu, setShowShareMenu] = useState(false);
    const [activeTab, setActiveTab] = useState('overview');
    const [copied, setCopied] = useState(false);

    // Fix: Use correct param for dynamic route
    useEffect(() => {
        // Handle params possibly being an object or array from useParams()
        const slug =
            typeof params === 'object' && params.slug
                ? Array.isArray(params.slug)
                    ? params.slug[0]
                    : params.slug
                : undefined;

        if (slug) {
            // Find the resource by slug
            const allResources = [
                ...resources.guides.map((r) => ({ ...r, type: 'guide' })),
                ...resources.whitepapers.map((r) => ({ ...r, type: 'whitepaper' })),
                ...resources.webinars.map((r) => ({
                    ...r,
                    type:
                        typeof r.type === 'string'
                            ? r.type.toLowerCase()
                            : 'webinar',
                })),
                ...resources.tools.map((r) => ({ ...r, type: 'tool' })),
            ];

            const foundResource = allResources.find((r) => r.slug === slug);
            setResource(foundResource || null);
            setLoading(false);
        } else {
            setResource(null);
            setLoading(false);
        }
    }, [params]);

    if (loading) {
        return <LoadingSpinner />;
    }

    if (!resource) {
        return <NotFoundState />;
    }

    const handleShare = async (platform: string) => {
        if (typeof window === 'undefined') return;
        const url = window.location.href;
        const title = resource?.title || '';

        switch (platform) {
            case 'x':
                window.open(
                    `https://x.com/intent/tweet?text=${encodeURIComponent(
                        title
                    )}&url=${encodeURIComponent(url)}`,
                    '_blank',
                    'noopener'
                );
                break;
            case 'linkedin':
                window.open(
                    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                        url
                    )}`,
                    '_blank',
                    'noopener'
                );
                break;
            case 'facebook':
                window.open(
                    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                        url
                    )}`,
                    '_blank',
                    'noopener'
                );
                break;
            case 'copy':
                try {
                    await navigator.clipboard.writeText(url);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                } catch {
                    // Fallback copy for unsupported browser
                    try {
                        const textArea = document.createElement('textarea');
                        textArea.value = url;
                        document.body.appendChild(textArea);
                        textArea.focus();
                        textArea.select();
                        document.execCommand('copy');
                        document.body.removeChild(textArea);
                        setCopied(true);
                        setTimeout(() => setCopied(false), 2000);
                    } catch {
                        // Silent fail - already handled above
                    }
                }
                break;
            default:
                break;
        }
    };

    const handleBookmark = () => {
        setIsBookmarked((prev) => !prev);
    };

    const handleLike = () => {
        setIsLiked((prev) => !prev);
    };

    // Defensive: Set image fallback to placeholder if missing
    const imageUrl =
        resource.image && typeof resource.image === 'string'
            ? resource.image
            : 'https://via.placeholder.com/800x500?text=No+Image';

    return (
        <>
            {/* Copy Notification */}
            <CopyNotification show={copied} />

            {/* Hero Section */}
            <Section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 pointer-events-none select-none" aria-hidden="true">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230EA5E9' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}
                    />
                </div>

                <div className="relative">
                    {/* Breadcrumb */}
                    <div className="max-w-7xl mx-auto px-4 pt-4 pb-2">
                        <nav
                            aria-label="Breadcrumb"
                            role="navigation"
                        >
                            <ol className="flex items-center space-x-2 text-sm text-gray-600">
                                <li>
                                    <Link
                                        href={LINKS.RESOURCES}
                                        className="hover:text-blue-600 transition-colors"
                                    >
                                        Resources
                                    </Link>
                                </li>
                                <li aria-hidden="true">
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </li>
                                <li aria-current="page">
                                    <span className="text-gray-900 capitalize">{resource.type as string}</span>
                                </li>
                            </ol>
                        </nav>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                            <div>
                                {/* Type Badge */}
                                <ResourceTypeBadge
                                    type={resource.type}
                                    difficulty={resource.difficulty || ''}
                                />

                                {/* Title */}
                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
                                    <span className="bg-gradient-to-r from-gray-900 via-blue-600 to-teal-600 bg-clip-text text-transparent dark:text-white">
                                        {resource.title}
                                    </span>
                                </h1>

                                {/* Description */}
                                <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-2xl">
                                    {resource.description}
                                </p>

                                {/* Key Stats */}
                                <ResourceStats resource={resource} />

                                {/* Tags */}
                                <ResourceTags tags={Array.isArray(resource.tags) ? resource.tags : []} />

                                {/* CTA Button */}
                                <ResourceActionButtons
                                    resource={resource}
                                    isBookmarked={isBookmarked}
                                    isLiked={isLiked}
                                    showShareMenu={showShareMenu}
                                    copied={copied}
                                    onBookmark={handleBookmark}
                                    onLike={handleLike}
                                    onShare={handleShare}
                                    onToggleShareMenu={() =>
                                        setShowShareMenu((prev) => !prev)
                                    }
                                />
                            </div>

                            <div className="relative order-first lg:order-last group">
                                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={imageUrl}
                                        alt={resource.title}
                                        className="w-full h-48 sm:h-64 md:h-80 lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/50 transition-all duration-500"></div>
                                    <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                                        <div className="flex items-center justify-between">
                                            <div className="flex flex-wrap items-center gap-2">
                                                <div className="flex items-center px-2.5 sm:px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm group-hover:bg-white/95 transition-all duration-300">
                                                    <FaClock className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-blue-600" />
                                                    <span className="text-xs sm:text-sm font-medium text-gray-900">
                                                        {resource.readTime || ''}
                                                    </span>
                                                </div>
                                                <div className="flex items-center px-2.5 sm:px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm group-hover:bg-white/95 transition-all duration-300">
                                                    <div className={`w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 rounded-full bg-gradient-to-r ${getTypeColor(resource.type)}`}></div>
                                                    <span className="text-xs sm:text-sm font-medium text-gray-900 capitalize">{resource.type}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Shine effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Content Section */}
            <Section className="bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                    {/* Tab Navigation */}
                    <TabNavigation
                        tabs={[
                            { id: 'overview', label: 'Overview' },
                            { id: 'details', label: 'Details' },
                            { id: 'benefits', label: 'Benefits' },
                        ]}
                        activeTab={activeTab}
                        onTabChange={setActiveTab}
                    />

                    {/* Tab Content */}
                    <div className="max-w-4xl">
                        {activeTab === 'overview' && (
                            <div className="space-y-6 sm:space-y-8">
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                                        Resource Overview
                                    </h3>
                                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                                        {resource.description}
                                    </p>
                                </div>

                                {/* Enhanced Stats */}
                                <ResourceDetailedStats resource={resource} />
                            </div>
                        )}

                        {activeTab === 'details' && (
                            <div className="space-y-6 sm:space-y-8">
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                                        Resource Details
                                    </h3>

                                    <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                                        <div className="space-y-6">
                                            <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-4 sm:p-6 border border-blue-100">
                                                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 flex items-center">
                                                    <FaRocket className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-600" />
                                                    Resource Type
                                                </h4>
                                                <div className="flex items-center">
                                                    <div
                                                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r ${getTypeColor(
                                                            resource.type
                                                        )} flex items-center justify-center mr-3 sm:mr-4 shadow-lg`}
                                                    >
                                                        {resource.type === 'guide' ? (
                                                            <FaBook className="w-6 h-6 text-white" />
                                                        ) : resource.type === 'whitepaper' ? (
                                                            <FaFileAlt className="w-6 h-6 text-white" />
                                                        ) : resource.type === 'webinar' ? (
                                                            <FaVideo className="w-6 h-6 text-white" />
                                                        ) : resource.type === 'tool' ? (
                                                            <FaCog className="w-6 h-6 text-white" />
                                                        ) : (
                                                            <FaBook className="w-6 h-6 text-white" />
                                                        )}
                                                    </div>
                                                    <span className="font-semibold text-gray-900 capitalize text-base sm:text-lg">
                                                        {resource.type}
                                                    </span>
                                                </div>
                                            </div>

                                            {resource.difficulty && (
                                                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-100">
                                                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                                                        <FaAward className="w-5 h-5 mr-2 text-yellow-600" />
                                                        Difficulty Level
                                                    </h4>
                                                    <span
                                                        className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold text-white ${getDifficultyColor(
                                                            resource.difficulty
                                                        )} shadow-lg`}
                                                    >
                                                        <FaAward className="w-4 h-4 mr-2" />
                                                        {resource.difficulty}
                                                    </span>
                                                </div>
                                            )}

                                            {resource.presenter && (
                                                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                                                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                                                        <FaUser className="w-5 h-5 mr-2 text-green-600" />
                                                        Presenter
                                                    </h4>
                                                    <span className="font-semibold text-gray-900 text-lg">{resource.presenter}</span>
                                                </div>
                                            )}
                                        </div>

                                        <div className="space-y-6">
                                            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                                                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                                                    <FaCalendarAlt className="w-5 h-5 mr-2 text-purple-600" />
                                                    Last Updated
                                                </h4>
                                                <span className="font-semibold text-gray-900 text-lg">{resource.lastUpdated || resource.date || 'N/A'}</span>
                                            </div>

                                            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-100">
                                                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                                                    <FaChartLine className="w-5 h-5 mr-2 text-gray-600" />
                                                    Popularity
                                                </h4>
                                                <div className="flex items-center">
                                                    <div className="flex text-yellow-400 mr-2" aria-label="5 star rating">
                                                        {Array.from({ length: 5 }).map((_, i) => (
                                                            <FaStar key={i} className="w-4 h-4" />
                                                        ))}
                                                    </div>
                                                    <span className="text-sm text-gray-600">Highly Rated</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'benefits' && (
                            <BenefitsList resourceType={resource.type} />
                        )}
                    </div>
                </div>
            </Section>

            {/* Related Resources */}
            <Section className="bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                    <div className="text-center mb-8 sm:mb-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                            Related Resources
                        </h2>
                        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                            Discover more resources to enhance your AI knowledge and skills
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {(() => {
                            const allResources = [
                                ...resources.guides.map((r) => ({ ...r, type: 'guide' })),
                                ...resources.whitepapers.map((r) => ({ ...r, type: 'whitepaper' })),
                                ...resources.webinars.map((r) => ({
                                    ...r,
                                    type:
                                        typeof r.type === 'string'
                                            ? r.type.toLowerCase()
                                            : 'webinar',
                                })),
                                ...resources.tools.map((r) => ({ ...r, type: 'tool' })),
                            ];
                            const relatedResources = allResources
                                .filter(
                                    (r) =>
                                        r.slug !== resource.slug &&
                                        r.type === resource.type // Only show related by type for relevance
                                )
                                .slice(0, 6);

                            // If not enough, fallback to fill up 6 from other types
                            if (relatedResources.length < 6) {
                                const filler = allResources
                                    .filter(
                                        (r) =>
                                            r.slug !== resource.slug &&
                                            !relatedResources.some((rr) => rr.slug === r.slug)
                                    )
                                    .slice(0, 6 - relatedResources.length);
                                relatedResources.push(...filler);
                            }

                            return relatedResources.map((relatedResource) => (
                                <RelatedResourceCard
                                    key={relatedResource.slug ?? relatedResource.title}
                                    resource={relatedResource}
                                />
                            ));
                        })()}
                    </div>
                    <div className="text-center mt-8 sm:mt-12">
                        <Link
                            href={LINKS.RESOURCES}
                            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-teal-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            <FaBook className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                            <span className="text-sm sm:text-base">View All Resources</span>
                        </Link>
                    </div>
                </div>
            </Section>

            {/* CTA Section */}
            <ResourceCTASection />
        </>
    );
}