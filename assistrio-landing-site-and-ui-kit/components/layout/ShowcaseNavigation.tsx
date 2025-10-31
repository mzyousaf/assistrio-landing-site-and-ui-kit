'use client';

import React, { useState, useMemo } from 'react';
import { FiLayout, FiLayers, FiGrid, FiTag, FiType, FiBarChart2, FiUser, FiSearch, FiX } from 'react-icons/fi';

interface ShowcaseNavigationProps {
    activeSection: string;
    isSidebar: boolean;
    onSectionClick: (sectionId: string) => void;
    onToggleSidebar: () => void;
    onSearchChange?: (query: string) => void;
}

export default function ShowcaseNavigation({
    activeSection,
    isSidebar,
    onSectionClick,
    onToggleSidebar,
    onSearchChange
}: ShowcaseNavigationProps) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (query: string) => {
        setSearchQuery(query);
        onSearchChange?.(query);
    };

    const filteredSections = useMemo(() => {
        const sections = [
            { id: 'cards', label: 'Cards & Content', icon: FiLayers },
            { id: 'forms', label: 'Forms & Inputs', icon: FiGrid },
            { id: 'badges', label: 'Badges & Tags', icon: FiTag },
            { id: 'stats', label: 'Stats & Metrics', icon: FiBarChart2 },
            { id: 'navigation', label: 'Navigation & Actions', icon: FiType },
            { id: 'team', label: 'Team & Company', icon: FiUser },
            { id: 'section-templates', label: 'Templates & More', icon: FiLayout },
        ];

        if (!searchQuery.trim()) return sections;
        return sections.filter(section =>
            section.label.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery]);

    if (!isSidebar) {
        // Horizontal Navigation Bar
        return (
            <>
                {/* Search Bar - Sticky under Header */}
                <div className="hidden xl:block sticky top-[80px] z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-gray-200 dark:border-slate-800 shadow-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center py-3">
                            <div className="relative flex-1 max-w-md">
                                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
                                <input
                                    type="text"
                                    placeholder="Search components..."
                                    value={searchQuery}
                                    onChange={(e) => handleSearchChange(e.target.value)}
                                    className="w-full pl-10 pr-10 py-2 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-brand-400 focus:border-transparent transition-all"
                                />
                                {searchQuery && (
                                    <button
                                        onClick={() => handleSearchChange('')}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                                    >
                                        <FiX className="w-4 h-4" />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation Bar */}
                <div className="hidden xl:block sticky top-[128px] z-30 bg-gradient-to-r from-blue-500 to-teal-500 dark:from-brand-600 dark:to-brand-700 shadow-lg">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between py-3">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                                    </svg>
                                </div>
                                <h2 className="text-sm font-bold text-white">Assistrio</h2>
                            </div>
                            <div className="flex items-center gap-1 sm:gap-2">
                                <nav className="flex items-center gap-1 sm:gap-2 overflow-x-auto hide-scrollbar px-2 sm:px-0">
                                    {filteredSections.map((section) => {
                                        const isActive = activeSection === section.id;
                                        return (
                                            <button
                                                key={section.id}
                                                onClick={() => onSectionClick(section.id)}
                                                className={`px-2 sm:px-3 md:px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg whitespace-nowrap transition-all duration-200 ${isActive
                                                    ? 'text-blue-900 bg-white shadow-md scale-105'
                                                    : 'text-white/90 hover:text-white hover:bg-white/20'
                                                    }`}
                                            >
                                                {section.label}
                                            </button>
                                        );
                                    })}
                                </nav>
                                <button
                                    onClick={onToggleSidebar}
                                    className="ml-1 sm:ml-2 w-7 h-7 sm:w-9 sm:h-9 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors"
                                    title="Switch to sidebar"
                                >
                                    <FiLayout className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    // Sidebar Layout
    return (
        <>
            <aside className="hidden 2xl:block w-72 bg-white dark:bg-slate-900 border-r border-gray-200 dark:border-slate-800 shadow-xl fixed top-[81px] left-0 h-[calc(100vh-81px)] overflow-y-auto z-30">
                <div className="p-6">
                    <div className="mb-6 pb-6 border-b border-gray-200 dark:border-slate-800">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                                    <FiLayout className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-lg font-bold text-gray-900 dark:text-white">Assistrio Components</h2>
                            </div>
                            <button
                                onClick={onToggleSidebar}
                                className="w-9 h-9 bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 rounded-xl flex items-center justify-center transition-all hover:scale-105 group"
                                title="Switch to navbar"
                            >
                                <svg className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-brand-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                        <div className="inline-flex items-center px-3 py-1.5 bg-blue-50 dark:bg-brand-900/30 border border-blue-200 dark:border-brand-500/30 rounded-lg text-xs font-semibold text-blue-700 dark:text-brand-400 mb-4">
                            💎 Assistrio Component UI Kit
                        </div>

                        {/* Search Bar */}
                        <div className="relative">
                            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
                            <input
                                type="text"
                                placeholder="Search components..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-10 py-2.5 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-brand-400 focus:border-transparent transition-all"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                                >
                                    <FiX className="w-4 h-4" />
                                </button>
                            )}
                        </div>
                    </div>
                    <nav className="space-y-2">
                        {filteredSections.length > 0 ? (
                            filteredSections.map((section) => {
                                const isActive = activeSection === section.id;
                                const Icon = section.icon;
                                return (
                                    <button
                                        key={section.id}
                                        onClick={() => onSectionClick(section.id)}
                                        className={`w-full px-4 py-3 text-sm font-medium rounded-xl text-left transition-all duration-200 flex items-center gap-3 group relative overflow-hidden ${isActive
                                            ? 'text-blue-700 dark:text-brand-400 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-brand-900/30 dark:to-brand-900/20 border-2 border-blue-200 dark:border-brand-500/30'
                                            : 'text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-brand-400 hover:bg-gray-50 dark:hover:bg-slate-800'
                                            }`}
                                    >
                                        <div className={`w-6 h-6 flex items-center justify-center transition-all ${isActive ? 'text-blue-600 dark:text-brand-400' : 'text-gray-400 dark:text-gray-500 group-hover:text-blue-500 dark:group-hover:text-brand-400'
                                            }`}>
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <span className="flex-1">{section.label}</span>
                                        {isActive && (
                                            <div className="absolute right-2 w-2 h-2 bg-blue-600 dark:bg-brand-400 rounded-full"></div>
                                        )}
                                    </button>
                                );
                            })
                        ) : (
                            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                                <FiSearch className="w-12 h-12 mx-auto mb-3 opacity-50" />
                                <p className="text-sm">No components found</p>
                            </div>
                        )}
                    </nav>
                </div>
            </aside>
        </>
    );
}
