import Section from '../Section';
import { SectionHeader, ChatMessage, ChatInput } from '../ui';
import Alexi from '../Alexi';

interface ProductDemoSectionProps {
    className?: string;
}

export default function ProductDemoSection({ className = '' }: ProductDemoSectionProps) {
    return (
        <Section className={`bg-gray-50 ${className}`}>
            <div className="max-w-4xl mx-auto">
                <SectionHeader
                    title={
                        <>
                            See <Alexi /> in Action
                        </>
                    }
                    subtitle={
                        <>
                            Experience how <Alexi /> handles real customer interactions
                        </>
                    }
                />

                <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg">
                    <div className="space-y-4 mb-6">
                        <ChatMessage
                            sender="Alexi"
                            message="Hello! I'm Alexi, your Customer Success bot. How can I help you today?"
                        />
                        <ChatMessage
                            sender="You"
                            message="What are your business hours?"
                            isCustomer={true}
                        />
                        <ChatMessage
                            sender="Alexi"
                            message="We're open Monday through Friday from 9 AM to 6 PM PST, and Saturday from 10 AM to 4 PM PST. We're closed on Sundays. Is there anything specific you'd like to know about our services?"
                        />
                    </div>

                    <ChatInput />
                </div>
            </div>
        </Section>
    );
}
