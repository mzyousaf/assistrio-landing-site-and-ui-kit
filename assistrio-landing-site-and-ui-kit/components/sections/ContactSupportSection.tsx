import React from 'react';

interface ContactSupportSectionProps {
    className?: string;
}

const ContactSupportSection: React.FC<ContactSupportSectionProps> = ({
    className = ""
}) => {
    return (
        <div className={`bg-gradient-to-r from-brand-500 to-brand-600 dark:from-brand-600 dark:to-brand-700 rounded-2xl p-8 text-center text-white ${className}`}>
            <h2 className="text-2xl font-bold mb-4">Still need help?</h2>
            <p className="text-blue-100 mb-6">Our support team is here to help you get the most out of Assistrio.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                    href="/contact"
                    className="bg-white dark:bg-white text-brand-600 dark:text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-white/90 dark:hover:text-brand-600 transition-colors"
                >
                    Email Support
                </a>
                <a
                    href="https://app.assistrio.com/signup?plan=growth"
                    target="_blank"
                    className="border-2 border-white text-white dark:text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-brand-600 dark:hover:bg-white dark:hover:text-brand-600 transition-colors inline-flex items-center justify-center"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    Buy Assistrio
                </a>
            </div>
        </div>
    );
};

export default ContactSupportSection;
