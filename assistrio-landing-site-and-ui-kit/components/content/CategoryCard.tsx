'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ComponentType } from 'react';
import { FaArrowRight } from 'react-icons/fa';

interface CategoryItem {
    name: string;
    slug: string;
    icon: ComponentType<{ className?: string }>;
}

interface CategoryCardProps {
    id: string;
    category: string;
    description: string;
    icon: ComponentType<{ className?: string }>;
    color: string;
    bgColor: string;
    borderColor: string;
    hoverBorderColor: string;
    items: CategoryItem[];
    onHoverStart?: () => void;
    onHoverEnd?: () => void;
}

const childVariant = {
    initial: { opacity: 0, y: 30, scale: 0.95 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.6, ease: 'easeOut' },
};

export default function CategoryCard({
    id,
    category,
    description,
    icon: CategoryIcon,
    color,
    bgColor,
    borderColor,
    hoverBorderColor,
    items,
    onHoverStart,
    onHoverEnd
}: CategoryCardProps) {
    return (
        <motion.div
            key={id}
            variants={childVariant}
            viewport={{ once: true }}
            onHoverStart={onHoverStart}
            onHoverEnd={onHoverEnd}
            whileHover={{ y: -12 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className={`group relative bg-white dark:bg-slate-800 rounded-3xl p-6 border-2 ${borderColor} dark:border-brand-500/30 ${hoverBorderColor} dark:hover:border-brand-500 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden`}
        >
            {/* Animated gradient overlay */}
            <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${bgColor} dark:from-slate-700 dark:to-slate-600 opacity-0 group-hover:opacity-100 dark:group-hover:opacity-30`}
                transition={{ duration: 0.4 }}
            />

            {/* Header */}
            <div className="relative mb-5">
                <div className="flex items-start mb-4">
                    <motion.div
                        whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                        transition={{ duration: 0.5 }}
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:shadow-2xl transition-all`}
                    >
                        <CategoryIcon className="w-8 h-8 text-white" />
                    </motion.div>
                </div>
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">{category}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
            </div>

            {/* All items (up to 5 items) */}
            <div className="relative space-y-2">
                {items.slice(0, 5).map((item, itemIndex) => {
                    const ItemIcon = item.icon;
                    return (
                        <Link
                            key={itemIndex}
                            href={`/showcase#${item.slug}`}
                            className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-700 hover:shadow-md transition-all border-2 border-transparent hover:border-blue-100 dark:hover:border-slate-600 group/item relative mb-1"
                        >
                            <div className={`w-10 h-10 min-w-[2.5rem] rounded-xl bg-white dark:bg-slate-700 flex items-center justify-center border-2 border-gray-200 dark:border-slate-600 group-hover/item:border-transparent transition-all group-hover/item:bg-gradient-to-br ${color} group-hover/item:shadow-md`}>
                                <ItemIcon className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover/item:text-white transition-all duration-200" />
                            </div>
                            <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover/item:text-gray-900 dark:group-hover/item:text-gray-100 flex-1">
                                {item.name}
                            </span>
                            <FaArrowRight className="w-4 h-4 min-w-[1rem] text-gray-400 dark:text-gray-500 flex-shrink-0 opacity-0 group-hover/item:opacity-100 group-hover/item:text-brand-600 dark:group-hover/item:text-brand-400 transition-all group-hover/item:translate-x-1" />
                        </Link>
                    );
                })}
            </div>

            {/* View all link */}
            <Link
                href="/showcase"
                className="relative flex items-center justify-center gap-2 mt-5 pt-5 border-t-2 border-gray-100 dark:border-slate-700 text-sm font-bold text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 group/viewAll transition-colors"
            >
                <span>View All {category}</span>
                <svg className="w-4 h-4 group-hover/viewAll:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </Link>
        </motion.div>
    );
}
