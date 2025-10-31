'use client';

import { motion } from 'framer-motion';
import {
    FaCode,
    FaBox,
    FaPuzzlePiece,
    FaRocket,
    FaCheckCircle,
    FaTimesCircle,
    FaArrowRight
} from 'react-icons/fa';

const benefits = [
    {
        icon: FaCode,
        title: 'No External Libraries',
        description: 'No need to install or manage external component libraries. All components are user-defined and self-contained, giving you full control over every aspect of your UI.',
        gradient: 'from-blue-500 to-cyan-500',
        bgGradient: 'from-blue-50 to-cyan-50',
        borderColor: 'border-blue-200',
        iconBg: 'bg-blue-100 dark:bg-blue-900/30',
        pros: [
            'Zero dependency bloat',
            'Full code ownership',
            'Easy to customize',
            'Lightweight & fast'
        ]
    },
    {
        icon: FaBox,
        title: 'Complete Landing Site Included',
        description: 'A fully-built SaaS landing site with 15+ pages, all components, and features ready to deploy. Just customize your content and launch—no assembly required.',
        gradient: 'from-teal-500 to-green-500',
        bgGradient: 'from-teal-50 to-green-50',
        borderColor: 'border-teal-200',
        iconBg: 'bg-teal-100 dark:bg-teal-900/30',
        pros: [
            'Ready to deploy immediately',
            'All pages included',
            'Production-tested',
            'Customize and launch'
        ]
    },
    {
        icon: FaPuzzlePiece,
        title: 'Fully Customizable',
        description: 'Every component is designed to be modified according to your needs. Adjust props, styles, colors, and functionality without breaking anything. Your design, your rules.',
        gradient: 'from-purple-500 to-pink-500',
        bgGradient: 'from-purple-50 to-pink-50',
        borderColor: 'border-purple-200',
        iconBg: 'bg-purple-100 dark:bg-purple-900/30',
        pros: [
            'Modify any component',
            'Tailor to your brand',
            'Add custom features',
            'No vendor lock-in'
        ]
    },
    {
        icon: FaRocket,
        title: 'Plus Reusable UI Kit',
        description: 'The same 200+ components used to build the landing site are included as a UI kit. Use them to customize the site or create entirely new projects—one purchase, unlimited possibilities.',
        gradient: 'from-orange-500 to-red-500',
        bgGradient: 'from-orange-50 to-red-50',
        borderColor: 'border-orange-200',
        iconBg: 'bg-orange-100 dark:bg-orange-900/30',
        pros: [
            'Build multiple sites',
            'Reuse components',
            'Consistent design system',
            'Unlimited projects'
        ]
    }
];

const problems = [
    { text: 'Creating components from scratch', icon: FaTimesCircle },
    { text: 'Managing external library dependencies', icon: FaTimesCircle },
    { text: 'Learning complex library APIs', icon: FaTimesCircle },
    { text: 'Dealing with library breaking changes', icon: FaTimesCircle }
];

const solutions = [
    { text: 'Use our pre-built, customizable components', icon: FaCheckCircle },
    { text: 'Zero external dependencies - all components included', icon: FaCheckCircle },
    { text: 'Simple, intuitive component API', icon: FaCheckCircle },
    { text: 'Full control over updates and changes', icon: FaCheckCircle }
];

const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, amount: 0.2 },
    transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
    },
};

const childVariant = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: 'easeOut' },
};

export default function WhyAssistrio() {
    return (
        <section className="relative py-16 sm:py-20 md:py-24 lg:py-36 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-200/20 dark:bg-teal-900/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
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
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/30 dark:to-teal-900/30 border border-blue-200 dark:border-blue-800/50 text-blue-700 dark:text-blue-300 text-sm font-bold mb-6"
                    >
                        <FaRocket className="w-4 h-4" />
                        <span>WHY CHOOSE OUR SaaS LANDING SITE</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight"
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Complete SaaS Landing Site{' '}
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3, type: 'spring', stiffness: 200 }}
                            className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent"
                        >
                            Plus UI Kit
                        </motion.span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
                    >
                        <strong>Start with a complete SaaS landing site ready to deploy.</strong> Plus, get access to <strong>200+ reusable UI components</strong> that power the site—use them to customize your landing site or build entirely new sites.
                    </motion.p>
                </motion.div>

                {/* Problem vs Solution Comparison */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-16"
                >
                    {/* Problems */}
                    <div className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-2xl p-6 sm:p-8 border-2 border-red-200 dark:border-red-800/50">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center shadow-lg">
                                <FaTimesCircle className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">The Old Way</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300">Common pain points</p>
                            </div>
                        </div>
                        <ul className="space-y-4">
                            {problems.map((problem, index) => {
                                const Icon = problem.icon;
                                return (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 + 0.3 }}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <Icon className="w-4 h-4 text-red-600 dark:text-red-400" />
                                        </div>
                                        <span className="font-medium text-gray-800 dark:text-gray-200 pt-0.5">{problem.text}</span>
                                    </motion.li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Solutions */}
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6 sm:p-8 border-2 border-green-200 dark:border-green-800/50">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg">
                                <FaCheckCircle className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">With Assistrio</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300">The better way</p>
                            </div>
                        </div>
                        <ul className="space-y-4">
                            {solutions.map((solution, index) => {
                                const Icon = solution.icon;
                                return (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 + 0.3 }}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <Icon className="w-4 h-4 text-green-600 dark:text-green-400" />
                                        </div>
                                        <span className="font-medium text-gray-800 dark:text-gray-200 pt-0.5">{solution.text}</span>
                                    </motion.li>
                                );
                            })}
                        </ul>
                    </div>
                </motion.div>

                {/* Benefits Grid */}
                <motion.div
                    variants={staggerContainer}
                    {...staggerContainer}
                    className="grid sm:grid-cols-2 gap-6 sm:gap-8"
                >
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={childVariant}
                                viewport={{ once: true }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                                className={`group relative bg-white dark:bg-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 ${benefit.borderColor} dark:border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden`}
                            >
                                {/* Gradient Overlay on Hover */}
                                <motion.div
                                    className={`absolute inset-0 bg-gradient-to-br ${benefit.bgGradient} dark:from-slate-700 dark:to-slate-600 opacity-0 group-hover:opacity-100 dark:group-hover:opacity-20 transition-opacity duration-300`}
                                />

                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div className="flex items-start justify-between mb-6">
                                        <motion.div
                                            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                                            transition={{ duration: 0.5 }}
                                            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform`}
                                        >
                                            <Icon className="w-8 h-8 text-white" />
                                        </motion.div>
                                        <div className={`w-10 h-10 rounded-lg ${benefit.iconBg} flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity`}>
                                            <FaArrowRight className={`w-5 h-5 bg-gradient-to-r ${benefit.gradient} bg-clip-text text-transparent`} />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                        {benefit.description}
                                    </p>

                                    {/* Pros List */}
                                    <ul className="space-y-2">
                                        {benefit.pros.map((pro, proIndex) => (
                                            <li key={proIndex} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                                                <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${benefit.gradient} flex items-center justify-center flex-shrink-0`}>
                                                    <FaCheckCircle className="w-3 h-3 text-white" />
                                                </div>
                                                <span>{pro}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-12 sm:mt-16 text-center"
                >
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-6 sm:px-8 py-6 bg-gradient-to-r from-blue-50 via-cyan-50 to-teal-50 dark:from-blue-900/30 dark:via-cyan-900/30 dark:to-teal-900/30 rounded-2xl border-2 border-blue-200 dark:border-blue-800/50">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center">
                                <FaRocket className="w-6 h-6 text-white" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-bold text-gray-900 dark:text-white">Ready to Get Started?</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-300">Deploy your SaaS landing site and explore the UI kit</p>
                            </div>
                        </div>
                        <a
                            href="/showcase"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all hover:scale-105"
                        >
                            View Landing Site
                            <FaArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

