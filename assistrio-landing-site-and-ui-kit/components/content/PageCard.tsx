'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ComponentType } from 'react';

interface PageCardProps {
    id: number;
    name: string;
    page: string;
    gradient: string;
    icon: ComponentType<{ className?: string }>;
    openInNewTab?: boolean;
    description?: string;
}

export default function PageCard({ id, name, page, gradient, icon: Icon, openInNewTab = false, description = 'Well-structured' }: PageCardProps) {
    const linkProps = openInNewTab
        ? { href: page, target: '_blank', rel: 'noopener noreferrer' }
        : { href: page };

    return (
        <motion.div
            key={id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
            <Link {...linkProps} className="block group">
                <div className="relative h-[100px] sm:h-[120px] bg-white dark:bg-slate-800 rounded-xl p-3 sm:p-4 border-2 border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all hover:border-teal-300 dark:hover:border-teal-500 overflow-hidden">
                    <div className={`absolute top-0 right-0 w-12 h-16 bg-gradient-to-br ${gradient} opacity-10 dark:opacity-20 rounded-bl-full`} />

                    <div className="relative h-full flex flex-col items-center justify-center text-center">
                        <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br ${gradient} dark:brightness-110 flex items-center justify-center shadow-md dark:shadow-lg mb-1.5 sm:mb-2 group-hover:scale-110 transition-transform`}>
                            <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white dark:text-white dark:drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)]" />
                        </div>
                        <h4 className="font-bold text-[10px] sm:text-xs text-gray-900 dark:text-gray-100 group-hover:text-teal-600 transition-colors mb-0.5 sm:mb-1">
                            {name}
                        </h4>
                        <p className="text-[9px] sm:text-[10px] text-gray-500 dark:text-gray-400">{description}</p>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}

