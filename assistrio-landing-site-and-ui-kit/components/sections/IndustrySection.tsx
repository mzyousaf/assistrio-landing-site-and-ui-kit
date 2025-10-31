import Section from '../Section';
import { IndustryCard } from '../content';
import Alexi from '../Alexi';

interface IndustrySectionProps {
    className?: string;
}

export default function IndustrySection({ className = '' }: IndustrySectionProps) {
    const industries = [
        {
            icon: (
                <svg className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" style={{ animationDelay: '1s', animationDuration: '2s' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
            ),
            title: "E-commerce",
            description: "Order tracking, product info, and customer support",
            iconColor: "blue" as const,
            animationDelay: "0s"
        },
        {
            icon: (
                <svg className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" style={{ animationDelay: '1.2s', animationDuration: '2s' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            ),
            title: "Healthcare",
            description: "HIPAA-compliant support, appointments, and patient care",
            iconColor: "green" as const,
            animationDelay: "0.1s"
        },
        {
            icon: (
                <svg className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" style={{ animationDelay: '1.4s', animationDuration: '2s' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: "SaaS & Technology",
            description: "Technical support, onboarding, and feature guidance",
            iconColor: "purple" as const,
            animationDelay: "0.2s"
        },
        {
            icon: (
                <svg className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" style={{ animationDelay: '1.6s', animationDuration: '2s' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
            ),
            title: "Financial Services",
            description: "Account inquiries, transaction support, and compliance",
            iconColor: "yellow" as const,
            animationDelay: "0.3s"
        },
        {
            icon: (
                <svg className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" style={{ animationDelay: '1.8s', animationDuration: '2s' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            ),
            title: "Real Estate",
            description: "Property inquiries, scheduling, and market information",
            iconColor: "indigo" as const,
            animationDelay: "0.4s"
        },
        {
            icon: (
                <svg className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" style={{ animationDelay: '2s', animationDuration: '2s' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
            title: "Education",
            description: "Student support, courses, and enrollment assistance",
            iconColor: "pink" as const,
            animationDelay: "0.5s"
        },
        {
            icon: (
                <svg className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" style={{ animationDelay: '2.2s', animationDuration: '2s' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Travel & Hospitality",
            description: "Booking assistance, travel info, and customer service",
            iconColor: "cyan" as const,
            animationDelay: "0.6s"
        },
        {
            icon: (
                <svg className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" style={{ animationDelay: '2.4s', animationDuration: '2s' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
            ),
            title: "Legal Services",
            description: "Case inquiries, appointment scheduling, and legal guidance",
            iconColor: "red" as const,
            animationDelay: "0.7s"
        },
        {
            icon: (
                <svg className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" style={{ animationDelay: '2.6s', animationDuration: '2s' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            ),
            title: "Manufacturing",
            description: "Product support, technical specs, and order management",
            iconColor: "orange" as const,
            animationDelay: "0.8s"
        },
        {
            icon: (
                <svg className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" style={{ animationDelay: '2.8s', animationDuration: '2s' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
            title: "Food & Beverage",
            description: "Menu inquiries, reservations, and dietary information",
            iconColor: "emerald" as const,
            animationDelay: "0.9s"
        },
        {
            icon: (
                <svg className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" style={{ animationDelay: '3s', animationDuration: '2s' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
            ),
            title: "Automotive",
            description: "Service appointments, parts inquiries, and vehicle support",
            iconColor: "gray" as const,
            animationDelay: "1.0s"
        },
        {
            icon: (
                <svg className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" style={{ animationDelay: '3.2s', animationDuration: '2s' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            ),
            title: "Non-Profit",
            description: "Volunteer coordination, donation info, and program support",
            iconColor: "teal" as const,
            animationDelay: "1.1s"
        }
    ];

    return (
        <Section className={`bg-white ${className}`} containerSize="xl">
            <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-3 sm:mb-4">
                    Perfect for Every Industry
                </h2>
                <div className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                    <Alexi /> learns from your website content, documents, and knowledge base to provide industry-specific support.
                    From e-commerce to healthcare, we adapt to any business type.
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {industries.map((industry, index) => (
                    <IndustryCard
                        key={index}
                        icon={industry.icon}
                        title={industry.title}
                        description={industry.description}
                        iconColor={industry.iconColor}
                        animationDelay={industry.animationDelay}
                    />
                ))}
            </div>
        </Section>
    );
}
