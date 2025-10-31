import React from 'react';
import Section from '@/components/Section';
import { TwoColumnLayout } from '@/components/ui';
import { ContactHeroSection, ContactInfoSection, ContactFormSection } from '@/components/sections';

interface ContactPageLayoutProps {
    className?: string;
}

const ContactPageLayout: React.FC<ContactPageLayoutProps> = () => {
    return (
        <>
            <ContactHeroSection />

            <Section>
                <TwoColumnLayout>
                    <ContactFormSection />
                    <ContactInfoSection />
                </TwoColumnLayout>
            </Section>

            {/* Floating Action Buttons */}
        </>
    );
};

export default ContactPageLayout;
