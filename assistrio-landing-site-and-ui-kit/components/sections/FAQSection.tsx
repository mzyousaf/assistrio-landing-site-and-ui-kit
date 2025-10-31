import Section from '../Section';
import { FAQItem } from '../content';
import Link from 'next/link';
import { LINKS } from '../../config/links';
import Alexi from '../Alexi';

interface FAQSectionProps {
    className?: string;
}

export default function FAQSection({ className = '' }: FAQSectionProps) {
    const faqs = [
        {
            question: "How quickly can I Buy Assistrio with our AI platform?",
            answer: "You can be up and running in under 5 minutes. Simply upload your knowledge base, customize your AI assistant's personality, and embed the chat widget on your website."
        },
        {
            question: "Does our AI platform work with my existing tools?",
            answer: "Yes! Our AI can be integrated anywhere using our simple script, or through direct integrations with WordPress, Shopify, and Wix. For knowledge base, you can connect Google Drive, Notion, or upload documents directly. We also support product details integration for e-commerce platforms.",
            animationDelay: "0.2s"
        },
        {
            question: "How accurate are the AI responses?",
            answer: (
                <>
                    <Alexi /> is trained on your specific knowledge base and continuously learns from your data to provide highly accurate, relevant, and brand-consistent answers. The more data you provide, the better it becomes.
                </>
            ),
            animationDelay: "0.4s"
        },
        {
            question: "What if the AI can't answer a question?",
            answer: (
                <>
                    When <Alexi /> encounters a question it can&apos;t answer, it seamlessly escalates to your human support team with full context, ensuring no customer inquiry goes unanswered.
                </>
            ),
            animationDelay: "0.6s"
        }
    ];

    return (
        <Section className={`bg-white ${className}`}>
            <div className="text-center mb-12 sm:mb-16 animate-fade-in-up px-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-3 sm:mb-4">
                    Frequently Asked Questions
                </h2>
                <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                    Get answers to common questions about our AI customer support platform
                </p>
            </div>

            <div className="max-w-3xl mx-auto">
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            animationDelay={faq.animationDelay}
                        />
                    ))}
                </div>

                <div className="text-center mt-8">
                    <Link
                        href={LINKS.HELP_CENTER}
                        className="text-brand-600 hover:text-brand-700 font-semibold inline-flex items-center"
                    >
                        View all FAQs
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </Section>
    );
}
