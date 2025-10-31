import React from 'react';
import Section from '@/components/Section';
import Alexi from '@/components/Alexi';
import FeatureCard from '@/components/ui/FeatureCard';

export default function WhatWeDoSection() {
    const features = [
        {
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            title: "Smart Learning",
            description: (
                <>
                    <Alexi /> learns from your knowledge base, customer interactions, and support history to provide
                    responses that are not just accurate, but truly helpful.
                </>
            )
        },
        {
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
            ),
            title: "Instant Responses",
            description: "Provide your customers with immediate, accurate answers 24/7, reducing wait times and improving satisfaction scores."
        },
        {
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            ),
            title: "Continuous Improvement",
            description: (
                <>
                    The more interactions we have, the better we become. <Alexi /> continuously learns and
                    adapts to provide increasingly accurate responses.
                </>
            )
        }
    ];

    return (
        <Section className="bg-gray-50 dark:bg-slate-800 py-16 sm:py-20">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                        What We Do
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Through Alexi, our intelligent customer success bot, we provide comprehensive support solutions that combine
                        the power of artificial intelligence with deep understanding of your business needs.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
}
