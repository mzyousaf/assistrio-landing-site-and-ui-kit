'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface SectionHeaderProps {
    title: React.ReactNode | string;
    subtitle?: React.ReactNode | string;
    className?: string;
}

export default function SectionHeader({ title, subtitle, className = '' }: SectionHeaderProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className={`text-center mb-16 ${className}`}
        >
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6"
            >
                {title}
            </motion.h2>
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                >
                    {subtitle}
                </motion.p>
            )}
        </motion.div>
    );
}