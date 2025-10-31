import Section from '../Section';
import { StatisticCard } from '../ui';

interface LiveStatsSectionProps {
    className?: string;
}

export default function LiveStatsSection({ className = '' }: LiveStatsSectionProps) {
    return (
        <Section className={`bg-gradient-to-r from-brand-500 to-blue-600 text-white ${className}`}>
            <div className="text-center mb-12 sm:mb-16 animate-fade-in-up px-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-3 sm:mb-4">
                    Live Platform Statistics
                </h2>
                <p className="text-base sm:text-lg opacity-90 max-w-2xl mx-auto">
                    Real-time data from our global AI support network
                </p>
            </div>

            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
                    <StatisticCard
                        value="2,847"
                        label="Knowledge Base Items"
                        sublabel="Processed per hour"
                        variant="live-stats"
                        bounceDelay="1s"
                    />
                    <StatisticCard
                        value="1,203"
                        label="Conversations Handled"
                        sublabel="Daily average"
                        variant="live-stats"
                        bounceDelay="1.2s"
                    />
                    <StatisticCard
                        value="98.7%"
                        label="Satisfaction Rate"
                        sublabel="This month"
                        variant="live-stats"
                        bounceDelay="1.4s"
                    />
                    <StatisticCard
                        value="99.9%"
                        label="Uptime"
                        sublabel="Last 30 days"
                        variant="live-stats"
                        bounceDelay="1.6s"
                    />
                </div>
            </div>
        </Section>
    );
}
