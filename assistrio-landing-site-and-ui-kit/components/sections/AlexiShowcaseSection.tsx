import React from 'react';
import Section from '@/components/Section';
import { AnimatedBadge } from '@/components/ui';
import FeatureList from '@/components/content/FeatureList';
import AlexiDemoCard from '@/components/content/AlexiDemoCard';

export default function AlexiShowcaseSection() {
    const features = [
        {
            icon: (
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            title: "Context-Aware Intelligence",
            description: "Alexi doesn't just match keywords—it understands the full context of customer inquiries and provides relevant, helpful responses."
        },
        {
            icon: (
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
            ),
            title: "Continuous Learning",
            description: "Every conversation makes Alexi smarter. It learns from your knowledge base, customer feedback, and support patterns to improve over time."
        },
        {
            icon: (
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
            ),
            title: "Brand-Consistent Voice",
            description: "Alexi speaks in your brand's voice, maintaining consistency across all customer interactions while delivering personalized experiences."
        }
    ];

    return (
        <Section className="bg-gradient-to-br from-brand-50 to-white dark:from-slate-900 dark:to-slate-800 py-16 sm:py-20">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <AnimatedBadge>
                        Meet Alexi
                    </AnimatedBadge>
                    <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                        Alexi: Your Intelligent Customer Success Bot
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-wMid-3xl mx-auto">
                        Alexi is our advanced AI customer success bot that transforms how businesses handle customer support.
                        Built with cutting-edge natural language processing, Alexi understands context, learns from every interaction,
                        and delivers personalized responses that feel genuinely human.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <FeatureList
                        title="Why Alexi Stands Out"
                        features={features}
                    />
                    <AlexiDemoCard />
                </div>
            </div>
        </Section>
    );
}
