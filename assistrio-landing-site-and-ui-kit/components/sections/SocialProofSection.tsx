import Section from '../Section';
import { StatisticCard } from '../ui';
import Alexi from '../Alexi';

interface SocialProofSectionProps {
    className?: string;
}

export default function SocialProofSection({ className = '' }: SocialProofSectionProps) {
    return (
        <Section className={`bg-white ${className}`}>
            <div className="text-center mb-12 sm:mb-16 animate-fade-in-up px-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-3 sm:mb-4">
                    Trusted by Growing Businesses
                </h2>
                <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                    Join thousands of companies that have transformed their customer support with <Alexi />
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
                <StatisticCard
                    value="10,000+"
                    label="Active Businesses"
                    bounceDelay="1s"
                />
                <StatisticCard
                    value="2M+"
                    label="Conversations Handled"
                    animationDelay="0.2s"
                    bounceDelay="1.2s"
                />
                <StatisticCard
                    value="98%"
                    label="Customer Satisfaction"
                    animationDelay="0.4s"
                    bounceDelay="1.4s"
                />
            </div>

            <div className="bg-gradient-to-r from-brand-50 to-blue-50 rounded-2xl p-8 mb-8">
                <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                        Growing Every Day
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-brand-600 dark:text-brand-400 mb-2">+500</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">New businesses this month</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-brand-600 dark:text-brand-400 mb-2">+50K</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Conversations this week</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-brand-600 dark:text-brand-400 mb-2">99.9%</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Uptime guarantee</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center">
                <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-sm text-gray-600 dark:text-gray-400 mb-6">
                    <div className="flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Enterprise-grade security
                    </div>
                    <div className="flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        GDPR compliant
                    </div>
                    <div className="flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        SOC 2 certified
                    </div>
                    <div className="flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        HIPAA ready
                    </div>
                    <div className="flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        No industry limits
                    </div>
                </div>
            </div>
        </Section>
    );
}
