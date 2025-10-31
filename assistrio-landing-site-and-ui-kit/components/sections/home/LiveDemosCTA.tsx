'use client';

import { motion } from 'framer-motion';
import { FaRocket, FaEye } from 'react-icons/fa';
import GradientBlur from '@/components/ui/GradientBlur';
import Button from '@/components/ui/Button';

export default function LiveDemosCTA() {
    return (
        <section className="relative py-16 sm:py-20 md:py-24 lg:py-36 overflow-hidden bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600">
            <GradientBlur size="xl" opacity={0.2} className="top-0 left-0" />
            <GradientBlur size="xl" opacity={0.15} className="bottom-0 right-0" />

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 10, 0],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
                />
                <motion.div
                    animate={{
                        y: [0, 20, 0],
                        rotate: [0, -10, 0],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
                />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm text-white mb-8 border border-white/20"
                    >
                        <FaRocket className="w-4 h-4" />
                        <span className="font-semibold text-sm">Ready to Get Started?</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight"
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            Ready to Build Something
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4, type: 'spring', stiffness: 200 }}
                            className="block"
                        >
                            Amazing?
                        </motion.span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="text-base sm:text-lg md:text-xl text-blue-100 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed"
                    >
                        Explore our AI SaaS landing demo and see the full power of this theme
                    </motion.p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button
                            href="/ai-saas-landing"
                            variant="secondary"
                            size="lg"
                            className="bg-white dark:bg-slate-800 text-blue-600 dark:text-brand-400 hover:bg-gray-100 dark:hover:bg-slate-700 group shadow-xl"
                        >
                            <FaEye className="mr-2" />
                            Explore AI SaaS Landing
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Button>
                        <Button
                            href="/product"
                            variant="secondary"
                            size="lg"
                            className="bg-white/10 dark:bg-slate-800/30 backdrop-blur-sm text-white border-2 border-white/30 dark:border-white/20 hover:bg-white/20 dark:hover:bg-slate-600/50 hover:brightness-110"
                        >
                            Explore Assistrio Kit
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
