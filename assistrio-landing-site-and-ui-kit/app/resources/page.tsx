'use client';

import { useState } from 'react';
import Section from '../../components/Section';
import { CategoryFilter, SearchBar } from '@/components/ui';
import { ViewModeToggle, SortDropdown } from '@/components/ui';
import { ResourceCard } from '@/components/content';
import { ResourceFeaturedSection, HeroSection } from '@/components/sections';
import { resources, resourceCategories } from '../../data/landingData';

// Define proper types for resources
type ResourceType = 'guide' | 'whitepaper' | 'webinar' | 'tool';

interface BaseResource {
    title: string;
    description: string;
    image: string;
    slug: string;
    difficulty?: string;
    type: ResourceType;
}

interface GuideResource extends BaseResource {
    type: 'guide';
    readTime: string;
    downloadCount: string;
    fileSize: string;
    lastUpdated: string;
    tags: string[];
}

interface WhitepaperResource extends BaseResource {
    type: 'whitepaper';
    pages: string;
    downloadCount: string;
    lastUpdated: string;
    tags: string[];
}

interface WebinarResource extends BaseResource {
    type: 'webinar';
    duration: string;
    attendees: string;
    date: string;
    presenter: string;
}

interface ToolResource extends BaseResource {
    type: 'tool';
    category: string;
    features: string[];
}

type Resource = GuideResource | WhitepaperResource | WebinarResource | ToolResource;

export default function Resources() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState("popular");
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

    // Get all resources in a flat array with proper typing
    const allResources: Resource[] = [
        ...resources.guides.map(r => ({ ...r, type: 'guide' as const })),
        ...resources.whitepapers.map(r => ({ ...r, type: 'whitepaper' as const })),
        ...resources.webinars.map(r => ({ ...r, type: r.type.toLowerCase() as 'webinar' })),
        ...resources.tools.map(r => ({ ...r, type: 'tool' as const }))
    ];

    // Filter and sort resources with proper type safety
    const filteredResources = allResources.filter(resource => {
        const matchesCategory = selectedCategory === "All" ||
            (selectedCategory === "Guides" && resource.type === "guide") ||
            (selectedCategory === "Whitepapers" && resource.type === "whitepaper") ||
            (selectedCategory === "Webinars" && resource.type === "webinar") ||
            (selectedCategory === "Tools" && resource.type === "tool");

        const matchesSearch = searchQuery === "" ||
            resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            ('tags' in resource && resource.tags?.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase()))) ||
            ('presenter' in resource && resource.presenter?.toLowerCase().includes(searchQuery.toLowerCase()));

        return matchesCategory && matchesSearch;
    });

    // Sort resources with proper type safety
    const sortedResources = [...filteredResources].sort((a, b) => {
        switch (sortBy) {
            case "popular":
                const aCount = parseInt(('downloadCount' in a ? a.downloadCount : 'attendees' in a ? a.attendees : "0") || "0");
                const bCount = parseInt(('downloadCount' in b ? b.downloadCount : 'attendees' in b ? b.attendees : "0") || "0");
                return bCount - aCount;
            case "newest":
                const aDate = new Date(('lastUpdated' in a ? a.lastUpdated : 'date' in a ? a.date : "2024-01-01") || "2024-01-01").getTime();
                const bDate = new Date(('lastUpdated' in b ? b.lastUpdated : 'date' in b ? b.date : "2024-01-01") || "2024-01-01").getTime();
                return bDate - aDate;
            case "title":
                return a.title.localeCompare(b.title);
            case "difficulty":
                const difficultyOrder: Record<string, number> = { "Beginner": 1, "Intermediate": 2, "Advanced": 3 };
                const aDifficulty = difficultyOrder[a.difficulty || ""] || 0;
                const bDifficulty = difficultyOrder[b.difficulty || ""] || 0;
                return aDifficulty - bDifficulty;
            default:
                return 0;
        }
    });

    const featuredResource = sortedResources[0];
    const regularResources = sortedResources.slice(1);
    return (
        <>
            <HeroSection variant="resources" />

            {/* Search and Filter Controls */}
            <Section className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="max-w-4xl mx-auto">
                        {/* Category Filter Tags */}
                        <CategoryFilter
                            categories={resourceCategories}
                            selectedCategory={selectedCategory}
                            onCategoryChange={setSelectedCategory}
                        />

                        <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
                            {/* Search Bar */}
                            <SearchBar
                                searchQuery={searchQuery}
                                onSearchChange={setSearchQuery}
                                placeholder="Search resources..."
                            />

                            {/* Controls */}
                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                                {/* Sort Dropdown */}
                                <SortDropdown
                                    sortBy={sortBy}
                                    onSortChange={setSortBy}
                                    options={[
                                        { value: "popular", label: "Most Popular" },
                                        { value: "newest", label: "Newest First" },
                                        { value: "title", label: "Alphabetical" },
                                        { value: "difficulty", label: "By Difficulty" }
                                    ]}
                                    placeholder="Sort by..."
                                />

                                {/* View Mode Toggle */}
                                <ViewModeToggle
                                    viewMode={viewMode}
                                    onViewModeChange={(mode: string) => setViewMode(mode as "grid" | "list")}
                                />
                            </div>
                        </div>

                        {/* Results Count */}
                        <div className="text-center mt-6">
                            <p className="text-xs text-gray-600">
                                Showing {filteredResources.length} resource{filteredResources.length === 1 ? '' : 's'}
                                {selectedCategory !== "All" && ` in ${selectedCategory}`}
                                {searchQuery && ` matching "${searchQuery}"`}
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            <Section className="bg-white">
                <div className="max-w-7xl mx-auto">
                    {/* Featured Resource */}
                    {featuredResource && (
                        <ResourceFeaturedSection
                            title="Featured Resource"
                            featuredItem={{
                                ...featuredResource,
                                // Ensure all necessary keys for type compatibility
                                title: featuredResource.title,
                                slug: featuredResource.slug,
                                type: featuredResource.type,
                            }}
                        />
                    )}

                    {/* Resources Grid */}
                    <div className="mb-8">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold text-gray-900">
                                All Resources
                            </h2>
                            <span className="text-sm text-gray-500">
                                {regularResources.length} resources
                            </span>
                        </div>

                        <div className={viewMode === "grid" ? "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" : "space-y-6"}>
                            {regularResources.map((resource) => (
                                <ResourceCard
                                    key={resource.slug}
                                    id={resource.slug}
                                    title={resource.title}
                                    description={resource.description}
                                    image={resource.image}
                                    type={resource.type}
                                    difficulty={resource.difficulty}
                                    duration={'duration' in resource ? resource.duration : undefined}
                                    downloadCount={'downloadCount' in resource ? resource.downloadCount : undefined}
                                    attendees={'attendees' in resource ? resource.attendees : undefined}
                                    fileSize={'fileSize' in resource ? resource.fileSize : undefined}
                                    tags={'tags' in resource ? resource.tags : undefined}
                                    slug={resource.slug}
                                    viewMode={viewMode}
                                />
                            ))}
                        </div>

                        {regularResources.length === 0 && (
                            <div className="text-center py-16">
                                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.709M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">No resources found</h3>
                                <p className="text-gray-600 mb-6">
                                    {searchQuery ? `No resources match "${searchQuery}"` : `No resources found in ${selectedCategory}`}
                                </p>
                                <button
                                    onClick={() => {
                                        setSearchQuery("");
                                        setSelectedCategory("All");
                                    }}
                                    className="bg-brand-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-brand-600 transition-colors"
                                >
                                    Clear Filters
                                </button>
                            </div>
                        )}
                    </div>

                </div>
            </Section>

            {/* Newsletter Signup */}
            <Section className="bg-gradient-to-r from-brand-500 to-blue-600 text-white">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
                    <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                        Get the latest resources, guides, and insights delivered to your inbox
                    </p>
                    <div className="max-w-md mx-auto flex gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
                        />
                        <button className="bg-white text-brand-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>
            </Section>

        </>
    );
}
