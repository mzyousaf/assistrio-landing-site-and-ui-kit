'use client';

import { motion } from 'framer-motion';
import PageCard from '@/components/content/PageCard';
import {
    FaLaptop, FaDollarSign, FaUsers, FaEnvelope, FaQuestionCircle, FaBlog,
    FaFileAlt, FaBusinessTime, FaProjectDiagram, FaChartLine,
    FaLock, FaCookieBite, FaMoneyBillWave, FaExclamationTriangle, FaServer,
    FaSitemap
} from 'react-icons/fa';

const otherPages = [
    { id: 1, name: 'Product', page: '/product', gradient: 'from-purple-600 to-pink-600', icon: FaLaptop, description: 'Feature-rich' },
    { id: 2, name: 'Pricing', page: '/pricing', gradient: 'from-green-600 to-emerald-600', icon: FaDollarSign, description: 'Conversion-focused' },
    { id: 3, name: 'About', page: '/about', gradient: 'from-orange-600 to-red-600', icon: FaUsers, description: 'Professional' },
    { id: 4, name: 'Contact', page: '/contact', gradient: 'from-blue-600 to-indigo-600', icon: FaEnvelope, description: 'Interactive' },
    { id: 5, name: 'Help Center', page: '/help-center', gradient: 'from-indigo-600 to-purple-600', icon: FaQuestionCircle, description: 'SEO optimized' },
    { id: 6, name: 'Blog', page: '/blog', gradient: 'from-pink-600 to-rose-600', icon: FaBlog, description: 'Content-ready' },
    { id: 7, name: 'Case Studies', page: '/case-studies', gradient: 'from-violet-600 to-purple-600', icon: FaFileAlt, description: 'Engaging' },
    { id: 8, name: 'Resources', page: '/resources', gradient: 'from-emerald-600 to-teal-600', icon: FaBusinessTime, description: 'Comprehensive' },
    { id: 9, name: 'Careers', page: '/careers', gradient: 'from-cyan-600 to-blue-600', icon: FaProjectDiagram, description: 'Modern' },
    { id: 10, name: 'Team', page: '/team', gradient: 'from-teal-600 to-cyan-600', icon: FaUsers, description: 'Showcase' },
    { id: 11, name: 'Status', page: '/status', gradient: 'from-slate-600 to-gray-700', icon: FaChartLine, description: 'Real-time' },
    { id: 12, name: 'Privacy', page: '/legal/privacy', gradient: 'from-blue-700 to-indigo-700', icon: FaLock, description: 'GDPR compliant' },
    { id: 13, name: 'Terms', page: '/legal/terms', gradient: 'from-gray-700 to-slate-700', icon: FaFileAlt, description: 'Legal-ready' },
    { id: 14, name: 'Refund', page: '/legal/refund', gradient: 'from-green-600 to-emerald-600', icon: FaMoneyBillWave, description: 'Compliant' },
    { id: 15, name: 'Cookies', page: '/legal/cookies', gradient: 'from-amber-600 to-orange-600', icon: FaCookieBite, description: 'Privacy-first' },
    { id: 16, name: '404 Error', page: '/page-not-found', gradient: 'from-red-600 to-orange-600', icon: FaExclamationTriangle, description: 'User-friendly' },
    { id: 17, name: '500 Error', page: '/server-error', gradient: 'from-orange-700 to-red-700', icon: FaServer, description: 'Helpful' },
    { id: 18, name: 'General Error', page: '/general-error', gradient: 'from-pink-600 to-rose-600', icon: FaExclamationTriangle, description: 'Custom' },
    { id: 19, name: 'Sitemap', page: '/sitemap.xml', gradient: 'from-blue-600 to-indigo-600', icon: FaSitemap, description: 'Auto-generated', openInNewTab: true },
];

const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, amount: 0.2 },
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
};


export default function OtherPages() {
    return (
        <section className="py-16 sm:py-20 lg:py-28 bg-white dark:bg-slate-900 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 sm:mb-12"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-teal-50 dark:bg-teal-900/30 border border-teal-100 dark:border-teal-800/50 text-teal-700 dark:text-teal-300 text-xs sm:text-sm font-semibold mb-4 sm:mb-6"
                    >
                        <FaChartLine className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>OTHER PAGES</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4"
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Plus All Supporting
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3, type: 'spring', stiffness: 200 }}
                            className="block bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent"
                        >
                            Pages
                        </motion.span>
                    </motion.h2>
                    {/* Page Categories with Badges */}
                    <div className="max-w-4xl mx-auto">
                        <div className="flex flex-wrap items-center justify-center gap-3 gap-y-2 mb-6">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/50 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                Core Pages
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-50 dark:bg-purple-900/30 border border-purple-100 dark:border-purple-800/50 text-purple-700 dark:text-purple-300 text-xs sm:text-sm font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                                Content Pages
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-50 dark:bg-green-900/30 border border-green-100 dark:border-green-800/50 text-green-700 dark:text-green-300 text-xs sm:text-sm font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                Legal Pages
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-50 dark:bg-orange-900/30 border border-orange-100 dark:border-orange-800/50 text-orange-700 dark:text-orange-300 text-xs sm:text-sm font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                                Error Pages
                            </span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    {...staggerContainer}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4"
                >
                    {otherPages.map((page) => (
                        <PageCard
                            key={page.id}
                            id={page.id}
                            name={page.name}
                            page={page.page}
                            gradient={page.gradient}
                            icon={page.icon}
                            openInNewTab={page.openInNewTab || false}
                            description={page.description}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
