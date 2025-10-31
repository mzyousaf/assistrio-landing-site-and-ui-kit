'use client';

import { motion } from 'framer-motion';
import HighlightCard from '@/components/content/HighlightCard';
import {
    FaLayerGroup,
    FaSitemap,
    FaMagic,
    FaCode,
    FaCheckCircle,
    FaInfinity,
    FaRocket,
    FaExclamationTriangle,
    FaMoon,
    FaLock,
    FaSearch,
    FaBolt,
    FaEye,
    FaMobile
} from 'react-icons/fa';

const highlights = [
    {
        title: '200+ Production Components',
        description: 'Buttons, Cards, Forms, Modals, Badges, Stats, Tables, Navigation & more - all well-structured',
        icon: FaLayerGroup,
        gradient: 'from-blue-500 to-cyan-500',
    },
    {
        title: '15+ Complete Pages',
        description: 'Product, Pricing, About, Contact, Help Center, Blog, Case Studies, Resources, Team, Careers, Status, Legal, and Error pages - all beautifully structured',
        icon: FaSitemap,
        gradient: 'from-cyan-500 to-teal-500',
    },
    {
        title: 'Modern Tech Stack',
        description: 'Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion, GSAP & Lenis smooth scroll',
        icon: FaRocket,
        gradient: 'from-teal-500 to-blue-500',
    },
    {
        title: 'SEO & Accessibility',
        description: 'Dynamic XML sitemap (auto-updates), robots.txt, meta tags, Open Graph, Schema markup, WCAG AA compliant, semantic HTML & ARIA labels',
        icon: FaSearch,
        gradient: 'from-blue-600 to-indigo-600',
    },
    {
        title: 'Privacy & Cookie Compliance',
        description: 'GDPR-compliant cookie banner, conditional analytics (only loads with consent), automatic cookie cleanup, user consent management',
        icon: FaLock,
        gradient: 'from-green-600 to-emerald-600',
    },
    {
        title: 'Smooth Animations',
        description: 'Framer Motion transitions, GSAP parallax effects, Lenis smooth scroll & hover animations',
        icon: FaMagic,
        gradient: 'from-purple-500 to-pink-500',
    },
    {
        title: 'Fully Responsive',
        description: 'Mobile-first design that works perfectly on all devices - phones, tablets & desktops',
        icon: FaCheckCircle,
        gradient: 'from-indigo-500 to-purple-500',
    },
    {
        title: 'TypeScript & Type-Safe',
        description: '100% TypeScript with strict typing for better developer experience and reliability',
        icon: FaCode,
        gradient: 'from-blue-600 to-cyan-600',
    },
    {
        title: 'Production-Ready',
        description: 'Used in production by developers worldwide. Optimized performance, accessibility & SEO built-in',
        icon: FaInfinity,
        gradient: 'from-blue-600 to-teal-600',
    },
    {
        title: 'Beautiful Error Pages',
        description: 'Custom 404, 500, and error pages with helpful suggestions, quick links, and smooth animations',
        icon: FaExclamationTriangle,
        gradient: 'from-red-500 to-orange-500',
    },
    {
        title: 'Dark Mode Support',
        description: 'Fully integrated dark mode with system preference detection, localStorage persistence, and smooth transitions',
        icon: FaMoon,
        gradient: 'from-indigo-600 to-purple-600',
    },
];

const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: false, amount: 0.2 },
    transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
    },
};

const childVariant = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false },
    transition: { duration: 0.6, ease: 'easeOut' },
};

export default function Highlights() {
    return (
        <section className="py-16 sm:py-20 md:py-24 lg:py-36 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/50 text-blue-700 dark:text-blue-300 text-sm font-semibold"
                        >
                            <FaCheckCircle className="w-4 h-4" />
                            <span>PRODUCTION-READY</span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-50 dark:bg-green-900/30 border border-green-100 dark:border-green-800/50 text-green-700 dark:text-green-300 text-sm font-semibold"
                        >
                            <FaLock className="w-4 h-4" />
                            <span>SEO & PRIVACY OPTIMIZED</span>
                        </motion.div>
                    </div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight"
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            Well-Structured &{' '}
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: 0.4, type: 'spring', stiffness: 200 }}
                            className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent"
                        >
                            Production-Ready
                        </motion.span>
                    </motion.h2>

                    {/* Tech Stack & Features Grid */}
                    <div className="max-w-5xl mx-auto">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                            {/* Tech Stack */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.4, delay: 0.1 }}
                                className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-100 dark:border-blue-800/50"
                            >
                                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500 dark:bg-blue-600 flex items-center justify-center mt-0.5">
                                    <FaRocket className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">Modern Tech Stack</h4>
                                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                                        Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion, Lenis & GSAP
                                    </p>
                                </div>
                            </motion.div>

                            {/* SEO Features */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                                className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-100 dark:border-green-800/50"
                            >
                                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-500 dark:bg-green-600 flex items-center justify-center mt-0.5">
                                    <FaSearch className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">SEO Optimized</h4>
                                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                                        Dynamic XML sitemap, robots.txt, meta tags, Open Graph & Schema markup
                                    </p>
                                </div>
                            </motion.div>

                            {/* Privacy & Compliance */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.4, delay: 0.3 }}
                                className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-100 dark:border-purple-800/50"
                            >
                                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-500 dark:bg-purple-600 flex items-center justify-center mt-0.5">
                                    <FaLock className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">Privacy Compliant</h4>
                                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                                        GDPR-compliant cookie consent, conditional analytics & privacy controls
                                    </p>
                                </div>
                            </motion.div>

                            {/* Content & Components */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.4, delay: 0.4 }}
                                className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 border border-orange-100 dark:border-orange-800/50"
                            >
                                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange-500 dark:bg-orange-600 flex items-center justify-center mt-0.5">
                                    <FaLayerGroup className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">Rich Content</h4>
                                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                                        AI landing demo, 15+ pages, 200+ components, error pages & dark mode
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Additional Features Row */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.4, delay: 0.5 }}
                            className="flex flex-wrap items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-gray-200 dark:border-slate-700"
                        >
                            <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                                <FaBolt className="w-4 h-4 text-yellow-500" />
                                <span>Production-ready animations</span>
                            </div>
                            <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                            <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                                <FaEye className="w-4 h-4 text-blue-500" />
                                <span>Beautifully structured</span>
                            </div>
                            <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                            <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                                <FaMobile className="w-4 h-4 text-green-500" />
                                <span>Fully responsive</span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    {...staggerContainer}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {highlights.map((highlight, index) => {
                        const Icon = highlight.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={childVariant}
                                viewport={{ once: false }}
                                whileHover={{ y: -8 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                            >
                                <HighlightCard
                                    title={highlight.title}
                                    description={highlight.description}
                                    icon={Icon}
                                    gradient={highlight.gradient}
                                />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
