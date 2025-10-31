'use client';

import React from 'react';
import Image from 'next/image';
import { ScaleIn } from '@/components/ui';

interface TeamMemberCardProps {
    name: string;
    role: string;
    bio: string;
    image: string;
    linkedin: string;
    x: string;
    email: string;
    className?: string;
    index?: number;
}

export default function TeamMemberCard({
    name,
    role,
    bio,
    image,
    linkedin,
    x,
    email,
    className = '',
    index = 0
}: TeamMemberCardProps) {
    return (
        <ScaleIn
            className={`transition-all duration-700 ease-out`}
            // @ts-expect-error: Allow 'style' for transitionDelay animation
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div className={`bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 group border border-gray-100 dark:border-slate-700 hover:border-brand-200 dark:hover:border-brand-600 ${className}`}>
                <div className="relative mb-8">
                    <div className="w-40 h-40 mx-auto relative">
                        <Image
                            src={image}
                            alt={name}
                            width={160}
                            height={160}
                            className="w-full h-full rounded-2xl object-cover group-hover:scale-105 transition-transform duration-300"
                            unoptimized={image.includes('ui-avatars.com')}
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                if (!target.src.includes('ui-avatars.com')) {
                                    target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=400&background=6366f1&color=ffffff&bold=true`;
                                }
                            }}
                        />
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-brand-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-brand-500 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                        {name}
                    </h3>
                    <p className="text-brand-600 dark:text-brand-400 font-semibold text-lg mb-4">{role}</p>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-sm">{bio}</p>

                    <div className="flex justify-center space-x-4">
                        <a
                            href={linkedin}
                            className="w-10 h-10 bg-gray-100 dark:bg-slate-700 rounded-full flex items-center justify-center text-gray-400 dark:text-gray-500 hover:bg-brand-100 dark:hover:bg-brand-900/50 hover:text-brand-600 dark:hover:text-brand-400 transition-all duration-200 group/link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg className="w-5 h-5 group-hover/link:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                        <a
                            href={x}
                            className="w-10 h-10 bg-gray-100 dark:bg-slate-700 rounded-full flex items-center justify-center text-gray-400 dark:text-gray-500 hover:bg-brand-100 dark:hover:bg-brand-900/50 hover:text-brand-600 dark:hover:text-brand-400 transition-all duration-200 group/link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg className="w-5 h-5 group-hover/link:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>
                        <a
                            href={`mailto:${email}`}
                            className="w-10 h-10 bg-gray-100 dark:bg-slate-700 rounded-full flex items-center justify-center text-gray-400 dark:text-gray-500 hover:bg-brand-100 dark:hover:bg-brand-900/50 hover:text-brand-600 dark:hover:text-brand-400 transition-all duration-200 group/link"
                        >
                            <svg className="w-5 h-5 group-hover/link:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </ScaleIn>
    );
}
