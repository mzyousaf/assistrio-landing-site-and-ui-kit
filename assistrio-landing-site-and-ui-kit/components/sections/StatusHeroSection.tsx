import Section from '../Section';
import { RSSButton } from '../ui';

interface StatusHeroSectionProps {
    className?: string;
}

export default function StatusHeroSection({ className = '' }: StatusHeroSectionProps) {
    return (
        <Section className={`bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 ${className}`}>
            <div className="text-center">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-100 dark:bg-brand-900/50 text-brand-700 dark:text-brand-300 text-sm font-medium mb-6">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    Live Status
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">System Status</h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                    Real-time monitoring of our AI Assistant platform performance and availability
                </p>

                {/* RSS Subscription */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                    <RSSButton />
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                        Last updated: {new Date().toLocaleTimeString()}
                    </div>
                </div>
            </div>
        </Section>
    );
}
