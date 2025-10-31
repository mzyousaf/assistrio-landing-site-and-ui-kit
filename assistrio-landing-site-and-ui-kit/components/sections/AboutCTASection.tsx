import React from 'react';
import Link from 'next/link';
import Section from '@/components/Section';
import { LINKS } from '../../config/links';

export default function AboutCTASection() {
    return (
        <Section className="bg-white dark:bg-slate-900 py-16 sm:py-20">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-6">
                    Ready to Transform Your Customer Support?
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                    Join thousands of companies who trust Assistrio to deliver exceptional customer experiences.
                    Start your journey with AI-powered support today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href={LINKS.SIGNUP_GROWTH}
                        target="_blank"
                        className="bg-brand-500 dark:bg-brand-600 text-white dark:text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-brand-600 dark:hover:bg-brand-700 hover:text-white dark:hover:text-white transition-all duration-300 shadow-card hover:shadow-hover dark:hover:shadow-brand-500/50 transform hover:-translate-y-2 hover:scale-105 relative overflow-hidden group"
                    >
                        <span className="relative z-10">
                            <svg className="w-5 h-5 mr-2 inline text-white dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            Buy Assistrio
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-400 to-brand-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Link>
                    <Link
                        href={LINKS.PRICING}
                        className="border-2 border-brand-500 dark:border-brand-500 text-brand-600 dark:text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-brand-500 dark:hover:bg-brand-600 hover:text-white dark:hover:text-white transition-all duration-300 shadow-card hover:shadow-hover dark:hover:shadow-brand-500/50 transform hover:-translate-y-2 hover:scale-105 relative overflow-hidden group"
                    >
                        <span className="relative z-10">View Pricing</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-400 to-brand-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Link>
                </div>
            </div>
        </Section>
    );
}
