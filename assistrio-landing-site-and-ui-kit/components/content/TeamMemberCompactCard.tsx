'use client';

import React from 'react';
import Image from 'next/image';

interface TeamMemberCompactCardProps {
    name: string;
    role: string;
    bio: string;
    image: string;
    className?: string;
}

export default function TeamMemberCompactCard({
    name,
    role,
    bio,
    image,
    className = ''
}: TeamMemberCompactCardProps) {
    return (
        <div className={`bg-gray-50 dark:bg-slate-800 rounded-xl p-6 text-center group hover:bg-white dark:hover:bg-slate-700 hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-slate-700 ${className}`}>
            <div className="relative mb-4">
                <Image
                    src={image}
                    alt={name}
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
                    unoptimized={image.includes('ui-avatars.com')}
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (!target.src.includes('ui-avatars.com')) {
                            target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=200&background=6366f1&color=ffffff&bold=true`;
                        }
                    }}
                />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                {name}
            </h3>
            <p className="text-brand-600 dark:text-brand-400 font-medium text-sm mb-3">{role}</p>
            <p className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed">{bio}</p>
        </div>
    );
}
