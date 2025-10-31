'use client';

import { motion } from 'framer-motion';
import { ComponentType } from 'react';

interface HighlightCardProps {
    title: string;
    description: string;
    icon: ComponentType<{ className?: string }>;
    gradient: string;
}

export default function HighlightCard({ title, description, icon: Icon, gradient }: HighlightCardProps) {
    return (
        <div className="relative h-full bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all hover:border-blue-300 dark:hover:border-blue-600 group">
            <div className="flex items-start gap-4">
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center shadow-md`}
                >
                    <Icon className="w-6 h-6 text-white" />
                </motion.div>

                <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-lg">
                        {title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}

