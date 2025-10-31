import Section from '../Section';
import { Badge, Button } from '../ui';

interface ComparisonSectionProps {
    className?: string;
}

export default function ComparisonSection({ className = '' }: ComparisonSectionProps) {
    const comparisonData = [
        {
            feature: "Response Time",
            ourPlatform: { value: "0.3 seconds", isGood: true },
            traditionalSupport: "2-24 hours",
            basicChatbots: "1-5 minutes"
        },
        {
            feature: "Response Quality",
            ourPlatform: { value: "Excellent", isGood: true },
            traditionalSupport: "Good",
            basicChatbots: "Basic"
        },
        {
            feature: "24/7 Availability",
            ourPlatform: { value: "Yes", isGood: true },
            traditionalSupport: "Limited hours",
            basicChatbots: "Yes"
        },
        {
            feature: "Context Understanding",
            ourPlatform: { value: "Advanced", isGood: true },
            traditionalSupport: "Human-level",
            basicChatbots: "Basic"
        },
        {
            feature: "Cost per Conversation",
            ourPlatform: { value: "$0.10", isGood: true },
            traditionalSupport: "$5-15",
            basicChatbots: "$0.50-2"
        },
        {
            feature: "Setup Time",
            ourPlatform: { value: "5 minutes", isGood: true },
            traditionalSupport: "Weeks",
            basicChatbots: "Days"
        }
    ];

    return (
        <Section className={`bg-white ${className}`}>
            <div className="text-center mb-12 sm:mb-16 animate-fade-in-up px-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-3 sm:mb-4">
                    Why Our AI Platform Stands Out
                </h2>
                <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                    See how we compare to traditional support solutions
                </p>
            </div>

            <div className="max-w-4xl mx-auto">
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b border-gray-200">
                                <th className="text-left py-4 px-4 font-semibold text-gray-900">Features</th>
                                <th className="text-center py-4 px-4 font-semibold text-brand-600">Our AI Platform</th>
                                <th className="text-center py-4 px-4 font-semibold text-gray-600">Traditional Support</th>
                                <th className="text-center py-4 px-4 font-semibold text-gray-600">Basic Chatbots</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {comparisonData.map((row, index) => (
                                <tr key={index}>
                                    <td className="py-4 px-4 font-medium text-gray-900">{row.feature}</td>
                                    <td className="py-4 px-4 text-center">
                                        <Badge>
                                            {row.ourPlatform.value}
                                        </Badge>
                                    </td>
                                    <td className="py-4 px-4 text-center text-gray-600">{row.traditionalSupport}</td>
                                    <td className="py-4 px-4 text-center text-gray-600">{row.basicChatbots}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Call to Action */}
                <div className="mt-12 text-center">
                    <div className="bg-gradient-to-r from-brand-50 to-blue-50 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Ready to see our pricing?</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                            Get transparent, competitive pricing that scales with your business.
                            No hidden fees, no surprises - just straightforward pricing for powerful AI support.
                        </p>
                        <Button
                            href="/pricing"
                            variant="primary"
                            size="lg"
                            className="inline-flex items-center justify-center"
                        >
                            <span>View Pricing Plans</span>
                            <svg className="w-4 h-4 ml-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Button>
                    </div>
                </div>
            </div>
        </Section>
    );
}
