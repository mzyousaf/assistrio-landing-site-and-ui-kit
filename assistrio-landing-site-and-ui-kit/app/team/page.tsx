"use client";

import Section from '../../components/Section';
import { StatCard, TrustBadge, CTAButton, CTAStats, TeamSectionHeader, AnimatedBadge } from '../../components/ui';
import {
    TeamMemberCard,
    TeamMemberCompactCard,
    CultureCard,
    ValueCard,
    CultureImageGrid
} from '../../components/content';
import { teamMembers, companyValues } from '../../data/landingData';


// Helper function to get icon component based on icon name
const getIconComponent = (iconName: string) => {
    const iconProps = {
        className: "w-8 h-8 text-brand-600",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24"
    };

    switch (iconName) {
        case "lightbulb":
            return (
                <svg {...iconProps}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            );
        case "heart":
            return (
                <svg {...iconProps}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            );
        case "check-circle":
            return (
                <svg {...iconProps}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            );
        case "book":
            return (
                <svg {...iconProps}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            );
        default:
            return (
                <svg {...iconProps}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            );
    }
};

export default function Team() {
    const leadershipTeam = teamMembers.slice(0, 6);
    const extendedTeam = teamMembers.slice(6);

    const teamStats = [
        { number: "50+", label: "Years Combined Experience" },
        { number: "15+", label: "Countries Represented" },
        { number: "95%", label: "Employee Satisfaction" },
        { number: "24/7", label: "Innovation Mindset" }
    ];

    const cultureData = [
        {
            title: "Collaborative Spirit",
            description: "We work together as one team, sharing knowledge and supporting each other to achieve our common goals.",
            icon: (
                <svg className="w-8 h-8 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            )
        },
        {
            title: "Innovation First",
            description: "We encourage creative thinking and aren't afraid to challenge the status quo to find better solutions.",
            icon: (
                <svg className="w-8 h-8 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        },
        {
            title: "Work-Life Balance",
            description: "We believe in sustainable productivity and support our team members in maintaining a healthy work-life balance.",
            icon: (
                <svg className="w-8 h-8 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            )
        }
    ];

    const cultureImages = [
        { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop&auto=format", alt: "Team collaboration meeting" },
        { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop&auto=format", alt: "Team brainstorming session" },
        { src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=400&fit=crop&auto=format", alt: "Team working on laptops" },
        { src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=400&fit=crop&auto=format", alt: "Team celebration" },
        { src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=400&fit=crop&auto=format", alt: "Team coffee break" },
        { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop&auto=format", alt: "Team learning session" },
        { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop&auto=format", alt: "Team building activity" },
        { src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=400&fit=crop&auto=format", alt: "Team innovation lab" }
    ];

    const ctaStats = [
        { number: "15+", label: "Open Positions" },
        { number: "100%", label: "Remote Friendly" },
        { number: "$120k+", label: "Competitive Salary" },
        { number: "Unlimited", label: "Growth Potential" }
    ];

    return (
        <>
            {/* Enhanced Hero Section */}
            <Section className="bg-gradient-to-br from-brand-50 via-white to-brand-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-40">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2314B8A6' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}></div>
                </div>
                <div className="relative text-center">
                    <div className="animate-fade-in-up opacity-100">
                        <AnimatedBadge>
                            Team
                        </AnimatedBadge>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                            Meet Our Team
                        </h1>
                        <div className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                            The passionate experts behind our AI customer support platform.
                            We&apos;re building the future of customer experience, one conversation at a time.
                        </div>
                    </div>
                </div>
            </Section>

            {/* Team Statistics */}
            <Section className="bg-white py-16">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {teamStats.map((stat, index) => (
                            <StatCard
                                key={index}
                                number={stat.number}
                                label={stat.label}
                            />
                        ))}
                    </div>
                </div>
            </Section>

            {/* Leadership Team */}
            <Section className="bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <TeamSectionHeader
                        title="Leadership Team"
                        subtitle="Meet the visionaries and leaders who are shaping the future of AI-powered customer support"
                    />

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {leadershipTeam.map((member, index) => (
                            <TeamMemberCard
                                key={index}
                                name={member.name}
                                role={member.role}
                                bio={member.bio}
                                image={member.image}
                                linkedin={member.linkedin}
                                x={member.x}
                                email={member.email}
                            />
                        ))}
                    </div>
                </div>
            </Section>

            {/* Extended Team */}
            <Section className="bg-white">
                <div className="max-w-7xl mx-auto">
                    <TeamSectionHeader
                        title="Our Amazing Team"
                        subtitle="The talented individuals who make our mission possible every day"
                    />

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {extendedTeam.map((member, index) => (
                            <TeamMemberCompactCard
                                key={index}
                                name={member.name}
                                role={member.role}
                                bio={member.bio}
                                image={member.image}
                            />
                        ))}
                    </div>
                </div>
            </Section>

            {/* Company Culture Section */}
            <Section className="bg-gradient-to-br from-brand-50 to-blue-50">
                <div className="max-w-7xl mx-auto">
                    <TeamSectionHeader
                        title="Our Culture"
                        subtitle="We believe great products come from great teams and great teams come from great culture"
                    />

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {cultureData.map((culture, index) => (
                            <CultureCard
                                key={index}
                                title={culture.title}
                                description={culture.description}
                                icon={culture.icon}
                            />
                        ))}
                    </div>

                    {/* Team Culture Photos Grid */}
                    <CultureImageGrid images={cultureImages} />
                </div>
            </Section>

            {/* Company Values */}
            <Section className="bg-white">
                <div className="max-w-7xl mx-auto">
                    <TeamSectionHeader
                        title="Our Values"
                        subtitle="The principles that guide everything we do and shape our company culture"
                    />

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {companyValues.map((value, index) => (
                            <ValueCard
                                key={index}
                                title={value.title}
                                description={value.description}
                                icon={getIconComponent(value.icon)}
                            />
                        ))}
                    </div>
                </div>
            </Section>

            {/* Join Our Team CTA */}
            <Section className="bg-gradient-to-br from-brand-600 via-brand-700 to-blue-800 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-600/90 to-blue-600/90"></div>
                <div className="relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <TrustBadge variant="white" className="mb-8">
                            We&apos;re hiring! Join our growing team
                        </TrustBadge>

                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Ready to Make an
                            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                                Impact?
                            </span>
                        </h2>

                        <p className="text-xl sm:text-2xl opacity-90 mb-12 max-w-3xl mx-auto leading-relaxed">
                            Join our mission to revolutionize customer support with AI.
                            We&apos;re looking for passionate individuals who want to build the future.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <CTAButton href="/careers">
                                View Open Positions
                            </CTAButton>
                            <CTAButton href="mailto:careers@your-domain.com" variant="secondary">
                                Send Us Your Resume
                            </CTAButton>
                        </div>

                        <CTAStats stats={ctaStats} />
                    </div>
                </div>
            </Section>

        </>
    );
}
