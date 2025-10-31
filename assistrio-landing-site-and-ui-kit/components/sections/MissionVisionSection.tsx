import React from 'react';
import Section from '@/components/Section';
import MissionVisionCard from '@/components/content/MissionVisionCard';

export default function MissionVisionSection() {
    const missionIcon = (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
    );

    const visionIcon = (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
    );

    return (
        <Section className="bg-white dark:bg-slate-900 py-16 sm:py-20">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    <MissionVisionCard
                        icon={missionIcon}
                        title="Our Mission"
                        description="To democratize exceptional customer support through Alexi, our intelligent customer success bot, making AI-powered assistance accessible to every business and ensuring no customer question goes unanswered."
                        gradientFrom="from-brand-50"
                        gradientTo="to-brand-100"
                        iconBgColor="bg-brand-500"
                    />
                    <MissionVisionCard
                        icon={visionIcon}
                        title="Our Vision"
                        description="A world where every customer interaction is seamless, intelligent, and delightful. Where AI and human expertise work in perfect harmony to create support experiences that exceed expectations."
                        gradientFrom="from-gray-50"
                        gradientTo="to-gray-100"
                        iconBgColor="bg-gray-600"
                    />
                </div>
            </div>
        </Section>
    );
}
