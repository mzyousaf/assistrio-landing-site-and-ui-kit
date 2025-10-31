'use client';

import { useState } from 'react';
import Section from '../../components/Section';
import { CategoryFilter, SearchBar } from '@/components/ui';
import { ViewModeToggle, SortDropdown } from '@/components/ui';
import { ContentCard } from '@/components/content';
import { ArticleFeaturedSection, HeroSection } from '@/components/sections';
import { blogPostsArray } from '../../data/landingData';

const categories = ["All", "AI Trends", "Best Practices", "Analytics", "Integration", "UX Design", "Case Study", "AI Ethics", "Global Support"];

export default function Blog() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [showAll, setShowAll] = useState(false);
    const [sortBy, setSortBy] = useState("newest");
    const [viewMode, setViewMode] = useState("grid"); // grid or list

    // Filter and sort posts
    const filteredPosts = blogPostsArray.filter(post => {
        const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
        const matchesSearch = searchQuery === "" ||
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    // Sort posts
    const sortedPosts = [...filteredPosts].sort((a, b) => {
        switch (sortBy) {
            case "newest":
                return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
            case "oldest":
                return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
            case "readTime":
                return parseInt(a.readTime) - parseInt(b.readTime);
            case "title":
                return a.title.localeCompare(b.title);
            default:
                return 0;
        }
    });

    const featuredPost = sortedPosts.find(post => post.featured);
    const regularPosts = sortedPosts.filter(post => !post.featured);
    const displayedPosts = showAll ? regularPosts : regularPosts.slice(0, 6);

    return (
        <>
            <HeroSection variant="blog" />

            {/* Search and Filter Controls */}
            <Section className="bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="max-w-4xl mx-auto">
                        {/* Category Filter Tags */}
                        <CategoryFilter
                            categories={categories}
                            selectedCategory={selectedCategory}
                            onCategoryChange={setSelectedCategory}
                        />

                        <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
                            {/* Search Bar */}
                            <SearchBar
                                searchQuery={searchQuery}
                                onSearchChange={setSearchQuery}
                                placeholder="Search articles, tags, or authors..."
                            />

                            {/* Controls */}
                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                                {/* Sort Dropdown */}
                                <SortDropdown
                                    sortBy={sortBy}
                                    onSortChange={setSortBy}
                                    options={[
                                        { value: "newest", label: "Newest First" },
                                        { value: "oldest", label: "Oldest First" },
                                        { value: "readTime", label: "Reading Time" },
                                        { value: "title", label: "Title A-Z" }
                                    ]}
                                    placeholder="Sort by..."
                                />

                                {/* View Mode Toggle */}
                                <ViewModeToggle
                                    viewMode={viewMode}
                                    onViewModeChange={setViewMode}
                                />
                            </div>
                        </div>

                        {/* Results Count */}
                        <div className="text-center mt-6">
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                                Showing {filteredPosts.length} article{filteredPosts.length === 1 ? '' : 's'}
                                {selectedCategory !== "All" && ` in ${selectedCategory}`}
                                {searchQuery && ` matching "${searchQuery}"`}
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            <Section className="bg-white">
                <div className="max-w-7xl mx-auto">

                    {/* Featured Post */}
                    {featuredPost && (
                        <ArticleFeaturedSection
                            title="Featured Article"
                            featuredItem={featuredPost}
                        />
                    )}

                    {/* Blog Posts Grid */}
                    <div className="mb-8">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                {selectedCategory === "All" ? "All Articles" : `${selectedCategory} Articles`}
                            </h2>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                {displayedPosts.length} of {regularPosts.length} articles
                            </span>
                        </div>

                        <div className={viewMode === "grid" ? "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" : "space-y-6"}>
                            {displayedPosts.map((post) => (
                                <ContentCard
                                    key={post.id}
                                    id={post.id}
                                    title={post.title}
                                    description={post.excerpt}
                                    image={post.image}
                                    category={post.category}
                                    readTime={post.readTime}
                                    author={post.author}
                                    authorRole={post.authorRole}
                                    authorImage={post.authorImage}
                                    publishedAt={post.publishedAt}
                                    tags={post.tags}
                                    slug={post.slug}
                                    viewMode={viewMode as 'grid' | 'list'}
                                    type="blog"
                                />
                            ))}
                        </div>

                        {regularPosts.length === 0 && (
                            <div className="text-center py-12">
                                <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.709M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No articles found</h3>
                                <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
                            </div>
                        )}
                    </div>

                    {/* Load More Button */}
                    {regularPosts.length > 6 && (
                        <div className="text-center mt-12">
                            <button
                                onClick={() => setShowAll(!showAll)}
                                className="bg-brand-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                {showAll ? 'Show Less' : `Load More Articles (${regularPosts.length - 6} more)`}
                            </button>
                        </div>
                    )}
                </div>
            </Section>

            {/* Newsletter Signup */}
            <Section className="bg-gradient-to-r from-brand-500 to-blue-600 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-500/90 to-blue-600/90"></div>
                <div className="relative text-center">
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-8">
                            <h2 className="text-4xl font-bold mb-4 text-white">Stay Updated</h2>
                            <p className="text-xl mb-8 max-w-2xl mx-auto text-white">
                                Get the latest AI insights, industry trends, and exclusive content delivered to your inbox
                            </p>
                        </div>

                        <div className="max-w-lg mx-auto mb-8">
                            <div className="flex gap-3">
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50 placeholder-gray-500 shadow-lg"
                                />
                                <button className="bg-white dark:bg-white text-brand-600 dark:text-brand-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 hover:brightness-110">
                                    Subscribe
                                </button>
                            </div>
                            <p className="text-sm mt-3 text-white">
                                Join 10,000+ professionals. Unsubscribe anytime.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                            <div className="text-center">
                                <div className="text-2xl font-bold mb-1 text-white">10K+</div>
                                <div className="text-sm opacity-75 text-white">Subscribers</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold mb-1 text-white">2x</div>
                                <div className="text-sm opacity-75 text-white">Weekly Updates</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold mb-1 text-white">98%</div>
                                <div className="text-sm opacity-75 text-white">Open Rate</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

        </>
    );
}
