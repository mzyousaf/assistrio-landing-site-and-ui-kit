'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
    FaPalette, FaEdit, FaRocket, FaDollarSign, FaQuestionCircle,
    FaComments, FaBars, FaListUl, FaChartBar, FaStar, FaMousePointer,
    FaFileAlt, FaCube, FaThLarge, FaCode, FaBox, FaSearch,
    FaCheckCircle, FaArrowRight, FaLayerGroup, FaTable
} from 'react-icons/fa';

const componentCategories = [
    {
        id: 'ui',
        category: 'UI Components',
        count: 45,
        description: 'Essential building blocks for forms and interactions',
        icon: FaBox,
        color: 'from-blue-500 to-cyan-500',
        bgColor: 'from-blue-50 to-cyan-50',
        borderColor: 'border-blue-200',
        hoverBorderColor: 'hover:border-blue-400',
        items: [
            { name: 'Buttons', slug: 'ui-button', icon: FaPalette },
            { name: 'Inputs', slug: 'ui-input', icon: FaEdit },
            { name: 'Forms', slug: 'ui-form', icon: FaFileAlt },
            { name: 'Modals', slug: 'ui-modal', icon: FaBox },
            { name: 'Dropdowns', slug: 'ui-dropdown', icon: FaTable },
        ]
    },
    {
        id: 'sections',
        category: 'Sections',
        count: 82,
        description: 'Complete page sections and content blocks',
        icon: FaThLarge,
        color: 'from-purple-500 to-pink-500',
        bgColor: 'from-purple-50 to-pink-50',
        borderColor: 'border-purple-200',
        hoverBorderColor: 'hover:border-purple-400',
        items: [
            { name: 'Hero', slug: 'sections-hero', icon: FaRocket },
            { name: 'Pricing', slug: 'sections-pricing', icon: FaDollarSign },
            { name: 'FAQ', slug: 'sections-faq', icon: FaQuestionCircle },
            { name: 'Features', slug: 'sections-features', icon: FaStar },
            { name: 'Stats', slug: 'sections-stats', icon: FaChartBar },
            { name: 'CTA', slug: 'sections-cta', icon: FaMousePointer },
        ]
    },
    {
        id: 'layout',
        category: 'Layout',
        count: 28,
        description: 'Structure and navigation components',
        icon: FaCube,
        color: 'from-green-500 to-emerald-500',
        bgColor: 'from-green-50 to-emerald-50',
        borderColor: 'border-green-200',
        hoverBorderColor: 'hover:border-green-400',
        items: [
            { name: 'Header', slug: 'layout-header', icon: FaBars },
            { name: 'Footer', slug: 'layout-footer', icon: FaListUl },
            { name: 'Sidebar', slug: 'layout-sidebar', icon: FaCode },
            { name: 'Navigation', slug: 'layout-nav', icon: FaBars },
            { name: 'Breadcrumbs', slug: 'layout-breadcrumbs', icon: FaFileAlt },
        ]
    },
    {
        id: 'complex',
        category: 'Complex',
        count: 55,
        description: 'Advanced interactive components',
        icon: FaCode,
        color: 'from-orange-500 to-red-500',
        bgColor: 'from-orange-50 to-red-50',
        borderColor: 'border-orange-200',
        hoverBorderColor: 'hover:border-orange-400',
        items: [
            { name: 'Testimonials', slug: 'sections-testimonials', icon: FaComments },
            { name: 'Search', slug: 'ui-search', icon: FaSearch },
            { name: 'Carousel', slug: 'ui-carousel', icon: FaCode },
            { name: 'Tabs', slug: 'ui-tabs', icon: FaTable },
            { name: 'Accordion', slug: 'ui-accordion', icon: FaListUl },
        ]
    },
];

const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, amount: 0.2 },
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
};

const childVariant = {
    initial: { opacity: 0, y: 30, scale: 0.95 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.6, ease: 'easeOut' },
};

export default function ComponentsPreview() {

    return (
        <section className="py-16 sm:py-20 md:py-24 lg:py-36 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
            {/* Enhanced background */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-40 right-20 w-[600px] h-[600px] bg-gradient-to-br from-purple-100 via-blue-100 to-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob" />
                <div className="absolute bottom-40 left-20 w-[500px] h-[500px] bg-gradient-to-br from-teal-100 via-cyan-100 to-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex flex-wrap items-center gap-2 px-3 py-2 sm:px-5 sm:py-2.5 rounded-full bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/30 dark:to-teal-900/30 border border-blue-200 dark:border-blue-800/50 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-bold mb-4 sm:mb-6 shadow-sm"
                    >
                        <FaLayerGroup className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>200+ PRODUCTION-READY COMPONENTS</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6"
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Explore Our{' '}
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3, type: 'spring', stiffness: 200 }}
                            className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent"
                        >
                            Components
                        </motion.span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8"
                    >
                        <strong>No external libraries required!</strong> All components are <strong>user-defined and fully customizable</strong> to match your exact needs. Simply import, customize props, adjust styles, and use—everything is ready-to-use and tailored to your landing page requirements. Build faster without creating components from scratch.
                    </motion.p>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap items-center justify-center gap-6 text-sm"
                    >
                        <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                            <FaCheckCircle className="w-4 h-4 text-green-500" />
                            <span className="font-semibold">Well-documented</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                            <FaCheckCircle className="w-4 h-4 text-green-500" />
                            <span className="font-semibold">TypeScript</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                            <FaCheckCircle className="w-4 h-4 text-green-500" />
                            <span className="font-semibold">No external libraries</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                            <FaCheckCircle className="w-4 h-4 text-green-500" />
                            <span className="font-semibold">Fully customizable</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                            <FaCheckCircle className="w-4 h-4 text-green-500" />
                            <span className="font-semibold">Ready-to-use</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Category Grid */}
                <motion.div
                    variants={staggerContainer}
                    {...staggerContainer}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
                >
                    {componentCategories.map((category) => {
                        const CategoryIcon = category.icon;

                        return (
                            <motion.div
                                key={category.id}
                                variants={childVariant}
                                viewport={{ once: true }}
                                whileHover={{ y: -12 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                                className={`group relative bg-white dark:bg-slate-800 rounded-3xl p-6 border-2 ${category.borderColor} dark:border-brand-500/30 ${category.hoverBorderColor} dark:hover:border-brand-500 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden`}
                            >
                                {/* Animated gradient overlay */}
                                <motion.div
                                    className={`absolute inset-0 bg-gradient-to-br ${category.bgColor} dark:from-slate-700 dark:to-slate-600 opacity-0 group-hover:opacity-100 dark:group-hover:opacity-30`}
                                    transition={{ duration: 0.4 }}
                                />

                                {/* Header */}
                                <div className="relative mb-5">
                                    <div className="flex items-start mb-4">
                                        <motion.div
                                            whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                                            transition={{ duration: 0.5 }}
                                            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:shadow-2xl transition-all`}
                                        >
                                            <CategoryIcon className="w-8 h-8 text-white" />
                                        </motion.div>
                                    </div>
                                    <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">{category.category}</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{category.description}</p>
                                </div>

                                {/* All items (5 items) */}
                                <div className="relative space-y-2">
                                    {category.items.slice(0, 5).map((item, itemIndex) => {
                                        const ItemIcon = item.icon;
                                        return (
                                            <Link
                                                key={itemIndex}
                                                href={`/showcase#${item.slug}`}
                                                className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-700 hover:shadow-md transition-all border-2 border-transparent hover:border-blue-100 dark:hover:border-slate-600 group/item relative mb-1"
                                            >
                                                <div className={`w-10 h-10 min-w-[2.5rem] rounded-xl bg-white dark:bg-slate-700 flex items-center justify-center border-2 border-gray-200 dark:border-slate-600 group-hover/item:border-transparent transition-all group-hover/item:bg-gradient-to-br ${category.color} group-hover/item:shadow-md`}>
                                                    <ItemIcon className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover/item:text-white transition-all duration-200" />
                                                </div>
                                                <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover/item:text-gray-900 dark:group-hover/item:text-gray-100 flex-1">
                                                    {item.name}
                                                </span>
                                                <FaArrowRight className="w-4 h-4 min-w-[1rem] text-gray-400 dark:text-gray-500 flex-shrink-0 opacity-0 group-hover/item:opacity-100 group-hover/item:text-brand-600 dark:group-hover/item:text-brand-400 transition-all group-hover/item:translate-x-1" />
                                            </Link>
                                        );
                                    })}
                                </div>

                                {/* View all link */}
                                <Link
                                    href="/showcase"
                                    className="relative flex items-center justify-center gap-2 mt-5 pt-5 border-t-2 border-gray-100 dark:border-slate-700 text-sm font-bold text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 group/viewAll transition-colors"
                                >
                                    <span>View All {category.category}</span>
                                    <svg className="w-4 h-4 group-hover/viewAll:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="text-center"
                >
                    <Link href="/showcase">
                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-3xl hover:brightness-110 transition-all text-lg"
                        >
                            <FaCube className="w-6 h-6" />
                            <span>Browse All 200+ Components</span>
                            <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    </Link>
                </motion.div>
            </div>

            <style jsx>{`
                @keyframes blob {
                    0%, 100% {
                        transform: translate(0, 0) scale(1);
                    }
                    33% {
                        transform: translate(30px, -50px) scale(1.05);
                    }
                    66% {
                        transform: translate(-20px, 20px) scale(0.95);
                    }
                }
                .animate-blob {
                    animation: blob 9s infinite ease-in-out;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
            `}</style>
        </section>
    );
}
