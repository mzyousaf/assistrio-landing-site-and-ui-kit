'use client';

import { motion } from 'framer-motion';
import { FaCheckCircle, FaDownload, FaStar } from 'react-icons/fa';
import Button from '@/components/ui/Button';
import GradientBlur from '@/components/ui/GradientBlur';

const plan = {
    name: 'Complete Package',
    price: '$50',
    description: 'Everything you need to build beautiful sites',
    features: [
        'AI SaaS Landing Demo',
        'Multiple Other Pages (Product, Pricing, About, Help Center, Blog, Case Studies, Resources, Team, Careers)',
        '200+ Pre-built Components',
        'Production-Ready Animations',
        'Blue & Teal Aesthetic',
        'TypeScript & SEO Optimized',
        'Lifetime Updates',
        'Commercial License'
    ],
};

export default function PricingTeaser() {
    return (
        <section className="relative py-16 sm:py-20 md:py-24 lg:py-36 bg-white dark:bg-slate-900 overflow-hidden">
            <GradientBlur size="lg" opacity={0.1} className="bottom-20 right-20" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-6"
                    >
                        <FaStar className="w-4 h-4" />
                        <span className="ml-2">Best Value</span>
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
                            Simple, Transparent{' '}
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3, type: 'spring', stiffness: 200 }}
                            className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent"
                        >
                            Pricing
                        </motion.span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                    >
                        One simple price for everything
                    </motion.p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, type: 'spring' }}
                    className="max-w-2xl mx-auto"
                >
                    <div className="relative rounded-2xl p-8 border-2 border-gray-200 dark:border-slate-700 shadow-lg transition-all hover:shadow-xl bg-white dark:bg-slate-800">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-gradient-to-r from-blue-600 to-teal-600 text-white text-sm font-semibold rounded-full shadow-md">
                            Complete Access
                        </div>

                        <div className="text-center mb-8 pt-4">
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">{plan.name}</h3>
                            <div className="flex items-baseline justify-center mb-3">
                                <span className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">{plan.price}</span>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-lg">{plan.description}</p>
                        </div>

                        <ul className="space-y-4 mb-10 text-left">
                            {plan.features.map((feature, fIndex) => (
                                <motion.li
                                    key={fIndex}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: fIndex * 0.1, duration: 0.5 }}
                                    className="flex items-start gap-4 group"
                                >
                                    <div className="flex-shrink-0">
                                        <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                                    </div>
                                    <span className="text-gray-700 dark:text-gray-200 pt-1">{feature}</span>
                                </motion.li>
                            ))}
                        </ul>

                        <Button
                            href="/pricing"
                            variant="primary"
                            size="lg"
                            className="w-full group shadow-lg"
                        >
                            <FaDownload className="mr-2" />
                            Get Everything Now
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
