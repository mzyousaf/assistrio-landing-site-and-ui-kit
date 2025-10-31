'use client';

import { motion } from 'framer-motion';
import React from 'react';
import Section from '../Section';
import { AnimatedBadge } from '@/components/ui';
import { FaSearch } from 'react-icons/fa';

interface HelpCenterHeroSectionProps {
    title?: string;
    subtitle?: string;
    searchPlaceholder?: string;
    onSearchChange?: (query: string) => void;
    searchQuery?: string;
    className?: string;
}

const HelpCenterHeroSection: React.FC<HelpCenterHeroSectionProps> = ({
    title = "Help Center",
    subtitle = "Find answers to common questions and get the support you need",
    searchPlaceholder = "Search for help articles, FAQs, or topics...",
    onSearchChange,
    searchQuery = "",
    className = ""
}) => {
    return (
        <Section className={`bg-gradient-to-br from-brand-50 via-white to-brand-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden ${className}`}>
            <div className="absolute inset-0 opacity-40">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2314B8A6' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}></div>
            </div>
            <div className="relative text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <AnimatedBadge>
                        Help Center
                    </AnimatedBadge>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight"
                    >
                        {title}
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
                    >
                        {subtitle}
                    </motion.div>

                    {/* Search Bar */}
                    {onSearchChange && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="relative max-w-2xl mx-auto mb-8"
                        >
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <FaSearch className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                placeholder={searchPlaceholder}
                                value={searchQuery}
                                onChange={(e) => onSearchChange(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 border border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-xl focus:ring-2 focus:ring-brand-500 dark:focus:ring-brand-400 focus:border-brand-500 dark:focus:border-brand-400 focus:outline-none text-lg shadow-sm"
                            />
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </Section>
    );
};

export default HelpCenterHeroSection;
