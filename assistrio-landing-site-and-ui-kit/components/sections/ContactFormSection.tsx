import React from 'react';
import ContactForm from '@/components/ContactForm';
import { SlideIn } from '@/components/ui';

interface ContactFormSectionProps {
    title?: string;
    className?: string;
}

const ContactFormSection: React.FC<ContactFormSectionProps> = ({
    title = "Send us a message",
    className = ""
}) => {
    return (
        <SlideIn direction="left">
            <div className={className}>
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{title}</h2>
                <ContactForm />
            </div>
        </SlideIn>
    );
};

export default ContactFormSection;
