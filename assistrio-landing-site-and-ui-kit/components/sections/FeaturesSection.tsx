import Section from '../Section';
import { FeatureCard } from '../content';
import Alexi from '../Alexi';

interface FeaturesSectionProps {
    className?: string;
}

export default function FeaturesSection({ className = '' }: FeaturesSectionProps) {
    const features = [
        {
            icon: (
                <svg className="w-10 h-10 text-brand-600 dark:text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
            title: "Knowledge Base Training",
            description: "Upload your documents, websites, FAQs, and knowledge base. Our AI learns from your specific business information to provide accurate answers.",
            tag: "Documents • Websites • FAQs • Knowledge Base"
        },
        {
            icon: (
                <svg className="w-10 h-10 text-brand-600 dark:text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
            ),
            title: "Intelligent Conversations",
            description: (
                <>
                    <Alexi /> handles customer conversations intelligently, understanding context and providing accurate responses based on your trained knowledge base.
                </>
            ),
            tag: "Context-aware responses",
            animationDelay: "0.2s"
        },
        {
            icon: (
                <svg className="w-10 h-10 text-brand-600 dark:text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Conversation Resolution",
            description: "Our AI resolves customer conversations by providing accurate answers from your knowledge base, not ticket management or resolution.",
            tag: "Knowledge-based answers",
            animationDelay: "0.4s"
        },
        {
            icon: (
                <svg className="w-10 h-10 text-brand-600 dark:text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2" />
                    <circle cx="12" cy="12" r="1" fill="currentColor" />
                </svg>
            ),
            title: "24/7 Availability",
            description: "Never miss a customer inquiry again. Our AI works around the clock, providing consistent support even during holidays and off-hours.",
            tag: "Zero downtime guarantee",
            animationDelay: "0.6s"
        },
        {
            icon: (
                <svg className="w-10 h-10 text-brand-600 dark:text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            title: "Advanced Analytics",
            description: "Get detailed insights into customer interactions, popular questions, and satisfaction metrics to continuously improve your support strategy.",
            tag: "Real-time dashboard",
            animationDelay: "0.8s"
        },
        {
            icon: (
                <svg className="w-10 h-10 text-brand-600 dark:text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
            ),
            title: "Easy Integration",
            description: "Add our script to any website, or use direct integrations with WordPress, Shopify, and Wix. Connect your knowledge base from Google Drive or Notion.",
            showButton: true,
            buttonText: "Click to see how",
            buttonIcon: (
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
            ),
            onButtonClick: () => {
                // You can add functionality here to show integration examples
                alert('Integration examples coming soon!');
            },
            additionalContent: (
                <div className="flex flex-wrap justify-center gap-3 text-xs">
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <svg className="w-3 h-3 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        1 line of code
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <svg className="w-3 h-3 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        30 seconds setup
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <svg className="w-3 h-3 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        WordPress, Shopify, Wix
                    </div>
                </div>
            ),
            animationDelay: "1s"
        }
    ];

    return (
        <Section className={`bg-gray-50 ${className}`} containerSize="lg">
            <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-3 sm:mb-4">
                    Why Choose Our AI Assistant?
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                    Our AI learns from your knowledge base to handle customer conversations intelligently and accurately
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {features.map((feature, index) => (
                    <FeatureCard
                        key={index}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description as string || ''}
                        tag={feature.tag}
                        animationDelay={feature.animationDelay}
                        showButton={feature.showButton}
                        buttonText={feature.buttonText}
                        buttonIcon={feature.buttonIcon}
                        onButtonClick={feature.onButtonClick}
                        additionalContent={feature.additionalContent}
                    />
                ))}
            </div>
        </Section>
    );
}