import React from 'react';
import { SlideIn, StaggeredItem, ContactInfoCard, ContactInfoItem } from '@/components/ui';
import { useStaggeredAnimation } from '@/hooks/useAnimations';

interface ContactInfoSectionProps {
    className?: string;
}

const ContactInfoSection: React.FC<ContactInfoSectionProps> = ({ className = "" }) => {
    const { ref, isVisible } = useStaggeredAnimation(150);

    const emailIcon = (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
    );

    const clockIcon = (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    );

    return (
        <SlideIn direction="right">
            <div className={className}>
                <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Get in touch</h2>
                <div ref={ref} className="space-y-8">
                    {/* Email Section */}
                    <StaggeredItem index={0} staggerDelay={150} isVisible={isVisible}>
                        <ContactInfoCard
                            icon={emailIcon}
                            title="Email Support"
                            description="Get help from our support team"
                            gradientClasses="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-brand-900/20 dark:to-cyan-900/20"
                            borderClasses="border-blue-200 dark:border-brand-500/30"
                            iconBgClasses="bg-brand-500 dark:bg-brand-600"
                        >
                            <a
                                href="mailto:hello@your-domain.com"
                                className="text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 font-semibold text-lg transition-colors"
                            >
                                hello@your-domain.com
                            </a>
                        </ContactInfoCard>
                    </StaggeredItem>

                    {/* Business Hours Section */}
                    <StaggeredItem index={1} staggerDelay={150} isVisible={isVisible}>
                        <ContactInfoCard
                            icon={clockIcon}
                            title="Business Hours"
                            description="When we're available to help"
                            gradientClasses="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-slate-700 dark:to-slate-800"
                            borderClasses="border-gray-200 dark:border-slate-600"
                            iconBgClasses="bg-gray-600 dark:bg-slate-700"
                        >
                            <div className="space-y-2 text-gray-700 dark:text-gray-300">
                                <ContactInfoItem
                                    day="Monday - Friday"
                                    time="9:00 AM - 6:00 PM PST"
                                />
                                <ContactInfoItem
                                    day="Saturday"
                                    time="10:00 AM - 4:00 PM PST"
                                />
                                <ContactInfoItem
                                    day="Sunday"
                                    time="Closed"
                                    isClosed={true}
                                />
                            </div>
                        </ContactInfoCard>
                    </StaggeredItem>
                </div>
            </div>
        </SlideIn>
    );
};

export default ContactInfoSection;
