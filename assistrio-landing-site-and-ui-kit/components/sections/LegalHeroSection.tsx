import { LegalDocumentBadge } from '@/components/ui';

interface LegalHeroSectionProps {
    title: string;
    lastUpdated: string;
}

export default function LegalHeroSection({ title, lastUpdated }: LegalHeroSectionProps) {
    return (
        <section className="bg-gradient-to-br from-brand-50 to-brand-100 dark:from-slate-900 dark:to-slate-800 py-16 sm:py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                        {title}
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8">
                        Last updated: {lastUpdated}
                    </p>
                    <LegalDocumentBadge />
                </div>
            </div>
        </section>
    );
}
