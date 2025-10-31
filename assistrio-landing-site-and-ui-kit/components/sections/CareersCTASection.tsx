'use client';

import Section from '../Section';
import { ScaleIn } from '@/components/ui';

interface CareersCTASectionProps {
    title: string;
    subtitle: string;
    buttonText: string;
    buttonHref: string;
}

export default function CareersCTASection({ title, subtitle, buttonText, buttonHref }: CareersCTASectionProps) {
    return (
        <Section className="bg-gradient-to-r from-brand-500 to-blue-600 dark:from-brand-600 dark:to-brand-700 text-white">
            <ScaleIn className="text-center">
                <h2 className="text-3xl font-bold mb-4">{title}</h2>
                <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                    {subtitle}
                </p>
                <a
                    href={buttonHref}
                    className="bg-white text-brand-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                    {buttonText}
                </a>
            </ScaleIn>
        </Section>
    );
}
