import React from 'react';
import { FAQItem } from '@/components/ui';

interface FAQ {
    question: string;
    category: string;
    answer: string;
    hasAlexi?: boolean;
}

interface HelpCenterFAQsSectionProps {
    faqs: FAQ[];
    openFAQ: number | null;
    onToggleFAQ: (index: number) => void;
    renderHtmlContent: (content: string, isInsideLink?: boolean) => React.ReactNode;
    className?: string;
}

const HelpCenterFAQsSection: React.FC<HelpCenterFAQsSectionProps> = ({
    faqs,
    openFAQ,
    onToggleFAQ,
    renderHtmlContent,
    className = ""
}) => {
    return (
        <div className={`mb-16 ${className}`}>
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <FAQItem
                        key={index}
                        question={faq.question}
                        category={faq.category}
                        answer={faq.answer}
                        hasAlexi={faq.hasAlexi}
                        isOpen={openFAQ === index}
                        onToggle={() => onToggleFAQ(index)}
                        renderHtmlContent={renderHtmlContent}
                    />
                ))}
            </div>
        </div>
    );
};

export default HelpCenterFAQsSection;
