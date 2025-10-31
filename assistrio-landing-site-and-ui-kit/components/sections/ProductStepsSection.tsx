import Section from '../Section';
import { StepCard, ChatDemo, SectionHeader } from '../ui';
import { VisualCard } from '../content';
import Alexi from '../Alexi';

interface ProductStepsSectionProps {
    className?: string;
}

export default function ProductStepsSection({ className = '' }: ProductStepsSectionProps) {
    return (
        <Section className={className}>
            <div className="max-w-6xl mx-auto">
                <SectionHeader
                    title="Alexi's Features & Technology"
                    subtitle={
                        <>
                            Explore the powerful features and advanced technology that make <Alexi /> the leading AI Customer Success bot
                        </>
                    }
                />

                {/* Step-by-Step Process */}
                <div className="space-y-16">
                    {/* Step 1 */}
                    <StepCard
                        stepNumber={1}
                        title="Upload Your Knowledge Base"
                        description="Start by uploading your existing documentation, FAQs, product manuals, and support tickets. Alexi learns from your specific content to provide accurate, brand-consistent responses."
                        features={[
                            "Support documentation",
                            "Product manuals and guides",
                            "Historical support tickets"
                        ]}
                        visualCard={
                            <VisualCard
                                icon={
                                    <svg className="w-8 h-8 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                    </svg>
                                }
                                title="Knowledge Upload"
                                description="Drag & drop your files or connect your existing systems"
                            />
                        }
                    />

                    {/* Step 2 */}
                    <StepCard
                        stepNumber={2}
                        title="Alexi Learns Your Business"
                        description="Alexi processes your content and learns your business context, terminology, and customer service patterns. This typically takes just a few minutes."
                        features={[
                            "Understands your products and services",
                            "Learns your brand voice and tone",
                            "Identifies common customer questions"
                        ]}
                        visualCard={
                            <VisualCard
                                icon={
                                    <svg className="w-8 h-8 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                }
                                title="Alexi Training"
                                description="Alexi processes and learns from your content"
                            />
                        }
                        reverseOrder={true}
                    />

                    {/* Step 3 */}
                    <StepCard
                        stepNumber={3}
                        title="Deploy Alexi & Customize"
                        description="Deploy Alexi across your preferred channels and customize its responses, appearance, and behavior to match your brand perfectly."
                        features={[
                            "Website chat widget",
                            "Email and ticket integration",
                            "Custom branding and styling"
                        ]}
                        visualCard={
                            <VisualCard
                                icon={
                                    <svg className="w-8 h-8 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                }
                                title="Customization"
                                description="Configure appearance, responses, and behavior"
                            />
                        }
                    />

                    {/* Step 4 */}
                    <StepCard
                        stepNumber={4}
                        title="Alexi Handles Customer Queries"
                        description="Alexi now handles customer questions 24/7, providing instant, accurate responses that match your brand voice and resolve issues quickly."
                        features={[
                            "Instant 24/7 responses",
                            "Escalates complex issues to humans",
                            "Learns and improves over time"
                        ]}
                        visualCard={
                            <ChatDemo
                                messages={[
                                    {
                                        sender: "Customer",
                                        message: "What are your business hours?",
                                        isCustomer: true
                                    },
                                    {
                                        sender: "Alexi",
                                        message: "We're open Monday-Friday 9AM-6PM PST, Saturday 10AM-4PM PST. Closed Sundays. How can I help you today?"
                                    }
                                ]}
                            />
                        }
                        reverseOrder={true}
                    />
                </div>
            </div>
        </Section>
    );
}
