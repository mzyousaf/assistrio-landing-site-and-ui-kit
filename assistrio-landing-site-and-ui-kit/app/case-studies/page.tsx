'use client';

import { useState } from 'react';
import Section from '../../components/Section';
import { CategoryFilter, SearchBar } from '@/components/ui';
import { ViewModeToggle, SortDropdown } from '@/components/ui';
import { CaseStudyCard } from '@/components/content';
import { CaseStudyFeaturedSection, HeroSection } from '@/components/sections';
import { caseStudies, industries } from '../../data/landingData';

export default function CaseStudies() {
    const [selectedIndustry, setSelectedIndustry] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState("newest");
    const [viewMode, setViewMode] = useState("grid"); // grid or list

    // Filter and sort case studies
    const filteredCaseStudies = caseStudies.filter(caseStudy => {
        const matchesIndustry = selectedIndustry === "All" || caseStudy.industry === selectedIndustry;
        const matchesSearch = searchQuery === "" ||
            caseStudy.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            caseStudy.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
            caseStudy.challenge.toLowerCase().includes(searchQuery.toLowerCase()) ||
            caseStudy.solution.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesIndustry && matchesSearch;
    });

    // Sort case studies
    const sortedCaseStudies = [...filteredCaseStudies].sort((a, b) => {
        switch (sortBy) {
            case "newest":
                return b.id - a.id; // Sort by ID descending (newest first)
            case "oldest":
                return a.id - b.id; // Sort by ID ascending (oldest first)
            case "automation":
                const automationA = parseInt(a.metrics.automation || "0");
                const automationB = parseInt(b.metrics.automation || "0");
                return automationB - automationA;
            case "satisfaction":
                const satisfactionA = parseInt(a.metrics.satisfaction || "0");
                const satisfactionB = parseInt(b.metrics.satisfaction || "0");
                return satisfactionB - satisfactionA;
            default:
                return 0;
        }
    });

    const featuredCaseStudy = sortedCaseStudies[0];
    const regularCaseStudies = sortedCaseStudies.slice(1);
    return (
        <>
            <HeroSection variant="case-studies" />

            {/* Search and Filter Controls */}
            <Section className="bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="max-w-4xl mx-auto">
                        {/* Industry Filter Tags */}
                        <CategoryFilter
                            categories={industries}
                            selectedCategory={selectedIndustry}
                            onCategoryChange={setSelectedIndustry}
                        />

                        <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
                            {/* Search Bar */}
                            <SearchBar
                                searchQuery={searchQuery}
                                onSearchChange={setSearchQuery}
                                placeholder="Search case studies..."
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
                                        { value: "automation", label: "Highest Automation" },
                                        { value: "satisfaction", label: "Highest Satisfaction" }
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
                                Showing {filteredCaseStudies.length} case {filteredCaseStudies.length === 1 ? 'study' : 'studies'}
                                {selectedIndustry !== "All" && ` in ${selectedIndustry}`}
                                {searchQuery && ` matching "${searchQuery}"`}
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            <Section className="bg-white dark:bg-slate-900">
                <div className="max-w-7xl mx-auto">
                    {/* Featured Case Study */}
                    {featuredCaseStudy && (
                        <CaseStudyFeaturedSection
                            title="Featured Success Story"
                            featuredItem={featuredCaseStudy}
                        />
                    )}

                    {/* Case Studies Grid */}
                    <div className="mb-8">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                All Case Studies
                            </h2>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                {regularCaseStudies.length} case studies
                            </span>
                        </div>

                        <div className={viewMode === "grid" ? "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" : "space-y-6"}>
                            {regularCaseStudies.map((caseStudy) => (
                                <CaseStudyCard
                                    key={caseStudy.id}
                                    id={caseStudy.id}
                                    title={caseStudy.title}
                                    company={caseStudy.company}
                                    industry={caseStudy.industry}
                                    companySize={caseStudy.companySize}
                                    challenge={caseStudy.challenge}
                                    solution={caseStudy.solution}
                                    image={caseStudy.image}
                                    logo={caseStudy.logo}
                                    metrics={caseStudy.metrics}
                                    testimonial={caseStudy.testimonial}
                                    testimonialAuthor={caseStudy.testimonialAuthor}
                                    duration={caseStudy.duration}
                                    readTime={caseStudy.readTime}
                                    slug={caseStudy.slug}
                                    viewMode={viewMode as 'grid' | 'list'}
                                />
                            ))}
                        </div>

                        {regularCaseStudies.length === 0 && (
                            <div className="text-center py-16">
                                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.709M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">No case studies found</h3>
                                <p className="text-gray-600 mb-6">
                                    {searchQuery ? `No case studies match "${searchQuery}"` : `No case studies found in ${selectedIndustry}`}
                                </p>
                                <button
                                    onClick={() => {
                                        setSearchQuery("");
                                        setSelectedIndustry("All");
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

            {/* CTA Section */}
            <Section className="bg-gradient-to-r from-brand-500 to-blue-600 text-white">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Create Your Success Story?</h2>
                    <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                        Join hundreds of businesses that have transformed their customer support with AI
                    </p>
                    <a
                        href="https://app.your-domain.com/signup?plan=growth"
                        className="bg-white text-brand-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                        Start Your Free Trial
                    </a>
                </div>
            </Section>

        </>
    );
}
