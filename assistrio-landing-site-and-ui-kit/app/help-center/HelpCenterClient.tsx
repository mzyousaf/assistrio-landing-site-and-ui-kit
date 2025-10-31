'use client';

import { useState } from 'react';
import Section from '../../components/Section';
import FAQSchema from '../../components/FAQSchema';
import { HelpCenterHeroSection, ContactSupportSection, SearchResultsSection, HelpCenterStatsSection, HelpCenterFAQsSection, HelpCenterCategoriesSection } from '@/components/sections';
import { FAQItem } from '@/components/ui';
import { helpCenterFAQs, helpCategories } from '../../data/landingData';
import { renderHtmlContent } from '../../utils/htmlHelpers';

export default function HelpCenterClient() {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    const faqs = helpCenterFAQs;

    const filteredFAQs = faqs.filter(faq =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <>
            <FAQSchema />

            {/* Hero Section */}
            <HelpCenterHeroSection
                title="Help Center"
                subtitle="Find answers to common questions and get the support you need"
                searchPlaceholder="Search for help articles, FAQs, or topics..."
                onSearchChange={setSearchQuery}
                searchQuery={searchQuery}
            />

            <Section>
                <div className="max-w-7xl mx-auto">
                    {/* Stats */}
                    <HelpCenterStatsSection faqCount={faqs.length} categoryCount={helpCategories.length} />

                    {/* Search Results or FAQs */}
                    {searchQuery ? (
                        <SearchResultsSection searchQuery={searchQuery} resultCount={filteredFAQs.length}>
                            {filteredFAQs.map((faq, index) => (
                                <FAQItem
                                    key={index}
                                    question={faq.question}
                                    category={faq.category}
                                    answer={faq.answer}
                                    hasAlexi={faq.hasAlexi}
                                    isOpen={openFAQ === index}
                                    onToggle={() => toggleFAQ(index)}
                                    renderHtmlContent={renderHtmlContent}
                                />
                            ))}
                        </SearchResultsSection>
                    ) : (
                        <>
                            {/* FAQ Section */}
                            <HelpCenterFAQsSection
                                faqs={faqs}
                                openFAQ={openFAQ}
                                onToggleFAQ={toggleFAQ}
                                renderHtmlContent={renderHtmlContent}
                            />
                        </>
                    )}

                    {/* Help Categories */}
                    <HelpCenterCategoriesSection
                        categories={helpCategories}
                        renderHtmlContent={renderHtmlContent}
                    />

                    {/* Contact Support */}
                    <ContactSupportSection />
                </div>
            </Section>

        </>
    );
}
