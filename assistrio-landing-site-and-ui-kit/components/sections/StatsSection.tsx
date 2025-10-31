import React from 'react';
import Section from '@/components/Section';
import StatCard from '@/components/ui/StatCard';

export default function StatsSection() {
    const stats = [
        { value: "10,000+", label: "Active Businesses" },
        { value: "2M+", label: "Conversations Handled" },
        { value: "98%", label: "Customer Satisfaction" }
    ];

    return (
        <Section className="bg-gradient-to-r from-brand-500 to-brand-600 py-16 sm:py-20">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
                        Trusted by Businesses Worldwide
                    </h2>
                    <p className="text-xl text-brand-100">
                        Join thousands of companies who trust Assistrio to deliver exceptional customer experiences
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <StatCard
                            key={index}
                            number={stat.value}
                            label={stat.label}
                            variant="white"
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
}
