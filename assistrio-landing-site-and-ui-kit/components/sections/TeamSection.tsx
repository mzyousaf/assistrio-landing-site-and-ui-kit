import React from 'react';
import Section from '@/components/Section';
import TeamMemberCard from '@/components/ui/TeamMemberCard';

export default function TeamSection() {
    const teamMembers = [
        {
            initials: "AR",
            title: "AI Research Team",
            description: "Leading experts in machine learning and natural language processing",
            gradientFrom: "from-brand-400",
            gradientTo: "to-brand-600"
        },
        {
            initials: "CX",
            title: "Customer Experience",
            description: "Dedicated to creating exceptional customer support experiences",
            gradientFrom: "from-gray-400",
            gradientTo: "to-gray-600"
        },
        {
            initials: "SE",
            title: "Software Engineers",
            description: "Building scalable, reliable, and innovative solutions",
            gradientFrom: "from-brand-300",
            gradientTo: "to-brand-500"
        }
    ];

    return (
        <Section className="bg-gray-50 py-16 sm:py-20">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
                        Our Team
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Founded by a team of AI researchers, customer experience experts, and software engineers,
                        Assistrio brings together decades of experience in machine learning, natural language processing,
                        and customer service innovation.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <TeamMemberCard
                            key={index}
                            initials={member.initials}
                            title={member.title}
                            description={member.description}
                            gradientFrom={member.gradientFrom}
                            gradientTo={member.gradientTo}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
}
