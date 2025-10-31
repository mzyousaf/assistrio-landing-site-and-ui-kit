import Section from '../Section';
import { StatisticCard } from '../ui';

interface SecuritySectionProps {
    className?: string;
}

export default function SecuritySection({ className = '' }: SecuritySectionProps) {
    const certifications = [
        {
            icon: (
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: "SOC 2 Type II",
            description: "Certified for security, availability, and confidentiality",
            bgColor: "bg-green-100",
            iconColor: "text-green-600"
        },
        {
            icon: (
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            ),
            title: "GDPR Compliant",
            description: "Full compliance with EU data protection regulations",
            bgColor: "bg-blue-100",
            iconColor: "text-blue-600",
            animationDelay: "0.2s"
        },
        {
            icon: (
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: "HIPAA Ready",
            description: "Healthcare data protection and privacy compliance",
            bgColor: "bg-purple-100",
            iconColor: "text-purple-600",
            animationDelay: "0.4s"
        },
        {
            icon: (
                <svg className="w-8 h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            ),
            title: "256-bit SSL",
            description: "End-to-end encryption for all data transmission",
            bgColor: "bg-red-100",
            iconColor: "text-red-600",
            animationDelay: "0.6s"
        }
    ];

    const features = [
        {
            icon: (
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Data Residency Options",
            description: "Choose where your data is stored and processed"
        },
        {
            icon: (
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: "Regular Security Audits",
            description: "Third-party security assessments and penetration testing"
        },
        {
            icon: (
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            ),
            title: "Zero-Knowledge Architecture",
            description: "We never store or access your sensitive customer data"
        },
        {
            icon: (
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: "99.9% Uptime SLA",
            description: "Guaranteed service availability with financial backing"
        }
    ];

    return (
        <Section id="security" className={`bg-white dark:bg-slate-900 ${className}`} containerSize="lg">
            <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                    Enterprise-Grade Security & Compliance
                </h2>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    Your data security is our top priority. We maintain the highest standards of security and compliance.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
                {certifications.map((cert, index) => (
                    <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: cert.animationDelay }}>
                        <div className={`w-16 h-16 ${cert.bgColor} dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                            {cert.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{cert.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{cert.description}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div className="animate-fade-in-up">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                        Your Data, Your Control
                    </h3>
                    <div className="space-y-4">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start">
                                <div className="flex-shrink-0 mr-3 mt-1">
                                    <div className="w-8 h-8 bg-gray-100 dark:bg-slate-700 rounded-lg flex items-center justify-center">
                                        {feature.icon}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{feature.title}</h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Security Features</h4>
                        <div className="grid grid-cols-2 gap-4">
                            <StatisticCard
                                value="256-bit"
                                label="Encryption"
                                variant="security"
                            />
                            <StatisticCard
                                value="99.9%"
                                label="Uptime"
                                variant="security"
                            />
                            <StatisticCard
                                value="24/7"
                                label="Monitoring"
                                variant="security"
                            />
                            <StatisticCard
                                value="SOC 2"
                                label="Certified"
                                variant="security"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
