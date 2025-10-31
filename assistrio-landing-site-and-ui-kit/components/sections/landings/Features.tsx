'use client';

import { motion } from 'framer-motion';
import Section from '@/components/common/Section';

interface FeatureItem {
    icon: string;
    title: string;
    desc: string;
}

interface FeaturesProps {
    items: FeatureItem[];
    title?: string;
    subtitle?: string;
}

export default function Features({ items, title, subtitle }: FeaturesProps) {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <Section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {(title || subtitle) && (
                    <div className="text-center mb-16">
                        {subtitle && (
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="text-sm font-medium text-teal-600 uppercase tracking-wider mb-2"
                            >
                                {subtitle}
                            </motion.p>
                        )}
                        {title && (
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900"
                            >
                                {title}
                            </motion.h2>
                        )}
                    </div>
                )}

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {items.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            whileHover={{ y: -8 }}
                            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="text-5xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </Section>
    );
}

