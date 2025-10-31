export default function FAQSchema() {
    const faqData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How quickly can I Buy Assistrio?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can be up and running in under 5 minutes. Simply upload your knowledge base, customize Alexi's personality, and embed the chat widget on your website."
                }
            },
            {
                "@type": "Question",
                "name": "Does Assistrio work with my existing tools?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! Assistrio can be integrated anywhere using our simple script, or through direct integrations with WordPress, Shopify, and Wix. For knowledge base, you can connect Google Drive, Notion, or upload documents directly. We also support product details integration for e-commerce platforms."
                }
            },
            {
                "@type": "Question",
                "name": "How accurate are the AI responses?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Alexi is trained on your specific knowledge base and continuously learns from your data to provide highly accurate, relevant, and brand-consistent answers. The more data you provide, the better it becomes."
                }
            },
            {
                "@type": "Question",
                "name": "What if the AI can't answer a question?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "When Alexi encounters a question it can't answer, it seamlessly escalates to your human support team with full context, ensuring no customer inquiry goes unanswered."
                }
            },
            {
                "@type": "Question",
                "name": "How much does Assistrio cost?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our pricing starts at $29/month for the Starter plan, $99/month for Growth, and $199/month for Enterprise. All plans include transparent pricing with no hidden fees. Visit our pricing page for detailed feature comparisons."
                }
            },
            {
                "@type": "Question",
                "name": "Is my data secure with Assistrio?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we maintain enterprise-grade security with SOC 2 Type II certification, GDPR compliance, HIPAA readiness, and 256-bit SSL encryption. Your data security is our top priority."
                }
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
        />
    );
}