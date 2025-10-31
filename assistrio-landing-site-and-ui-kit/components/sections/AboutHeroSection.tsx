'use client';

import { motion } from 'framer-motion';
import Section from '@/components/Section';
import Alexi from '@/components/Alexi';
import { AnimatedBadge } from '@/components/ui';

interface AboutHeroSectionProps {
    isVisible: boolean;
}

export default function AboutHeroSection({ isVisible }: AboutHeroSectionProps) {
    return (
        <Section className="bg-gradient-to-br from-brand-50 via-white to-brand-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
            <div className="absolute inset-0 opacity-40">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2314B8A6' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}></div>
            </div>
            <div className="relative text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                >
                    <AnimatedBadge>
                        About Assistrio
                    </AnimatedBadge>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight"
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            Revolutionizing Customer Support{' '}
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.6, delay: 0.4, type: 'spring', stiffness: 200 }}
                            className="bg-gradient-to-r from-brand-600 via-teal-600 to-blue-600 bg-clip-text text-transparent"
                        >
                            with AI
                        </motion.span>
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
                    >
                        We believe every customer deserves exceptional support, regardless of time or complexity.
                        <Alexi /> delivers instant, accurate, and personalized responses that feel truly human.
                    </motion.div>
                </motion.div>
            </div>
        </Section>
    );
}
