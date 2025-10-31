'use client';

import { motion } from 'framer-motion';
import SolutionCard from '@/components/content/SolutionCard';
import { FaExclamationTriangle, FaBolt, FaBullseye, FaCode } from 'react-icons/fa';

const problems = [
    'Slow setup and tedious configuration',
    'Messy code without clear structure',
    'Non-converting landing pages',
    'Difficult to customize and extend',
];

const solutions = [
    {
        title: 'Production-Ready Sections',
        description: 'Well-structured, copy-paste sections that work out of the box',
        icon: FaBolt,
        gradient: 'from-blue-500 to-teal-500',
    },
    {
        title: 'Conversion-Focused Design',
        description: 'Professional layouts designed to convert visitors to customers',
        icon: FaBullseye,
        gradient: 'from-purple-500 to-pink-500',
    },
    {
        title: 'Clean & Maintainable Code',
        description: 'TypeScript, well-documented code that&apos;s easy to customize',
        icon: FaCode,
        gradient: 'from-green-500 to-emerald-500',
    },
];

const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
};

export default function ProblemSolution() {
    return (
        <section className="relative py-16 sm:py-20 md:py-24 lg:py-36 bg-white dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <motion.div {...fadeUp} className="text-center mb-20">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
                        Stop Fighting Your{' '}
                        <span className="block bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                            Landing Pages
                        </span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Get a complete SaaS landing site ready to deploy, plus reusable UI components
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left: Problems */}
                    <motion.div {...fadeUp}>
                        <div className="bg-gray-50 dark:bg-slate-800 rounded-2xl p-8 border border-gray-200 dark:border-slate-700">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center shadow-md">
                                    <FaExclamationTriangle className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">The Problem</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">Common pain points</p>
                                </div>
                            </div>
                            <ul className="space-y-4">
                                {problems.map((problem, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 + 0.2 }}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <span className="text-red-600 dark:text-red-400 font-bold text-sm">✗</span>
                                        </div>
                                        <span className="font-medium text-gray-800 dark:text-gray-200 pt-0.5">{problem}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Right: Solutions */}
                    <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="space-y-4">
                        {solutions.map((solution, index) => (
                            <SolutionCard
                                key={index}
                                title={solution.title}
                                description={solution.description}
                                icon={solution.icon}
                                gradient={solution.gradient}
                                index={index}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
