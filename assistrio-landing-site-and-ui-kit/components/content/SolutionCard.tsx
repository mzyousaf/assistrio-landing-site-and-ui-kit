'use client';

import { motion } from 'framer-motion';
import { ComponentType } from 'react';

interface SolutionCardProps {
    title: string;
    description: string;
    icon: ComponentType<{ className?: string }>;
    gradient?: string;
    index?: number;
}

export default function SolutionCard({
    title,
    description,
    icon: Icon,
    gradient = 'from-blue-500 to-teal-500',
    index = 0
}: SolutionCardProps) {
    return (
        <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.3 }}
            whileHover={{ y: -4 }}
            className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all group"
        >
            <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-md flex-shrink-0`}>
                    <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-brand-400 transition-colors">
                        {title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
                </div>
            </div>
        </motion.div>
    );
}

