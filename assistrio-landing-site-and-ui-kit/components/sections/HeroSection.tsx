import Section from '../Section';
import { AnimatedStatCard } from '../ui';


interface HeroSectionProps {
    variant: 'blog' | 'case-studies' | 'resources' | 'status';
    className?: string;
}

export default function HeroSection({ variant, className = '' }: HeroSectionProps) {
    // Variant-specific data
    const getVariantData = () => {
        switch (variant) {
            case 'blog':
                return {
                    badge: {
                        text: 'Latest AI Insights & Best Practices',
                        icon: (
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        )
                    },
                    title: 'Our Blog',
                    subtitle: 'Discover expert insights, practical tips, and cutting-edge trends in AI customer support, automation, and technology',
                    trustedText: 'Trusted by 5,000+ Professionals',
                    stats: [
                        { value: "10+", label: "Expert Articles" },
                        { value: "5K+", label: "Monthly Readers" },
                        { value: "98%", label: "Satisfaction Rate" }
                    ],
                    backgroundPattern: 'blog'
                };
            case 'case-studies':
                return {
                    badge: {
                        text: 'Real Success Stories & Proven Results',
                        icon: (
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        )
                    },
                    title: 'Case Studies',
                    subtitle: 'Discover how businesses across industries have transformed their customer support with our AI platform',
                    trustedText: 'Trusted by Industry Leaders',
                    stats: [
                        { value: "60%", label: "Average Cost Reduction" },
                        { value: "75%", label: "Average Automation Rate" },
                        { value: "95%", label: "Average Satisfaction Rate" },
                        { value: "24/7", label: "Always Available" }
                    ],
                    backgroundPattern: 'case-studies'
                };
            case 'resources':
                return {
                    badge: {
                        text: 'Comprehensive Guides & Expert Tools',
                        icon: (
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        )
                    },
                    title: 'Resources',
                    subtitle: 'Everything you need to succeed with AI customer support - guides, tools, and expert insights',
                    trustedText: 'Trusted by 10,000+ Professionals',
                    stats: [
                        { value: "25+", label: "Free Resources" },
                        { value: "50K+", label: "Downloads" },
                        { value: "95%", label: "Success Rate" },
                        { value: "24/7", label: "Support" }
                    ],
                    backgroundPattern: 'resources'
                };
            case 'status':
                return {
                    badge: {
                        text: 'Real-Time System Status & Monitoring',
                        icon: (
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        )
                    },
                    title: 'System Status',
                    subtitle: 'Monitor our platform\'s performance, track service availability, and stay informed about any incidents',
                    trustedText: '',
                    stats: [
                        { value: "99.9%", label: "Uptime" },
                        { value: "24/7", label: "Monitoring" },
                        { value: "5min", label: "Avg Response" },
                        { value: "100%", label: "Transparency" }
                    ],
                    backgroundPattern: 'status'
                };
            default:
                return {
                    badge: { text: '', icon: null },
                    title: '',
                    subtitle: '',
                    trustedText: '',
                    stats: [],
                    backgroundPattern: 'default'
                };
        }
    };

    const data = getVariantData();

    // Background pattern components
    const getBackgroundPattern = () => {
        switch (data.backgroundPattern) {
            case 'blog':
                return (
                    <>
                        {/* Blog-specific Pattern - Geometric Writing Elements */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-20 left-20 w-16 h-16 bg-blue-400 rotate-45 animate-pulse"></div>
                            <div className="absolute top-40 right-32 w-12 h-12 bg-cyan-400 rounded-full animate-pulse delay-1000"></div>
                            <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-teal-400 transform rotate-12 animate-pulse delay-2000"></div>
                            <div className="absolute bottom-20 right-1/4 w-14 h-14 bg-indigo-400 rounded-full animate-pulse delay-500"></div>
                            <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-blue-300 rotate-45 animate-pulse delay-1500"></div>
                        </div>
                        {/* Blog Pattern - Article/Document Theme */}
                        <div className="absolute inset-0 opacity-5">
                            <div className="absolute inset-0" style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2306B6D4' fill-opacity='0.1'%3E%3Cpath d='M20 20h80v80H20V20zm10 10v60h60V30H30zm10 10h40v4H40v-4zm0 8h40v4H40v-4zm0 8h30v4H40v-4zm0 8h35v4H40v-4zm0 8h25v4H40v-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                            }} />
                        </div>
                    </>
                );
            case 'resources':
                return (
                    <>
                        {/* Resources-specific Pattern - Tools/Download Elements */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-20 left-20 w-16 h-16 bg-blue-400 transform rotate-45 animate-pulse"></div>
                            <div className="absolute top-40 right-32 w-12 h-12 bg-cyan-400 rounded-full animate-pulse delay-1000"></div>
                            <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-teal-400 transform rotate-12 animate-pulse delay-2000"></div>
                            <div className="absolute bottom-20 right-1/4 w-14 h-14 bg-indigo-400 rounded-full animate-pulse delay-500"></div>
                            <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-blue-300 transform rotate-45 animate-pulse delay-1500"></div>
                        </div>
                        {/* Resources Pattern - Download/Tools Theme */}
                        <div className="absolute inset-0 opacity-5">
                            <div className="absolute inset-0" style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2306B6D4' fill-opacity='0.1'%3E%3Cpath d='M50 10L30 30h15v40h10V30h15L50 10zm-20 60h40v10H30V70zm0 15h40v5H30v-5z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                            }} />
                        </div>
                    </>
                );
            case 'case-studies':
            case 'status':
            default:
                return (
                    <>
                        {/* Wave Pattern */}
                        <div className="absolute inset-0 opacity-10 w-full">
                            <svg className="w-full" viewBox="0 0 1000 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0,100 C150,200 350,0 500,100 C650,200 850,0 1000,100 L1000,300 L0,300 Z" fill="url(#waveGradient)" />
                                <defs>
                                    <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#3B82F6" />
                                        <stop offset="50%" stopColor="#06B6D4" />
                                        <stop offset="100%" stopColor="#10B981" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </>
                );
        }
    };

    return (
        <Section className={`relative bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden ${className}`}>
            {/* Floating Elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-16 left-16 w-20 h-20 bg-blue-400 rounded-full animate-bounce"></div>
                <div className="absolute top-32 right-20 w-16 h-16 bg-cyan-400 rounded-full animate-bounce delay-1000"></div>
                <div className="absolute bottom-24 left-1/4 w-12 h-12 bg-teal-400 rounded-full animate-bounce delay-2000"></div>
                <div className="absolute bottom-16 right-1/3 w-14 h-14 bg-indigo-400 rounded-full animate-bounce delay-500"></div>
            </div>

            {/* Variant-specific Background Pattern */}
            {getBackgroundPattern()}

            <div className="relative">
                {/* Hero Content */}
                <div className={`text-center ${variant === 'status' ? 'py-12 lg:py-16' : 'py-16 lg:py-20'}`}>
                    <div className={`max-w-${variant === 'status' ? '4xl' : '5xl'} mx-auto px-4`}>
                        {/* Badge */}
                        <div className="relative z-10 inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-fade-in bg-gradient-to-r from-cyan-500 to-teal-500 text-white border border-cyan-400 shadow-md">
                            {data.badge.icon}
                            {data.badge.text}
                        </div>

                        {/* Main Heading */}
                        <h1 className={`${variant === 'status' ? 'text-4xl sm:text-5xl lg:text-6xl' : 'text-5xl sm:text-6xl lg:text-7xl'} font-bold text-gray-900 dark:text-white mb-6 leading-tight animate-slide-in-left`}>
                            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 dark:from-blue-400 dark:via-cyan-400 dark:to-teal-400 bg-clip-text text-transparent">
                                {data.title}
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <p className={`${variant === 'status' ? 'text-lg lg:text-xl' : 'text-xl lg:text-2xl'} text-gray-600 dark:text-gray-300 max-w-${variant === 'status' ? '3xl' : '4xl'} mx-auto mb-8 leading-relaxed animate-slide-in-right`}>
                            {data.subtitle}
                        </p>

                        {/* Trusted Section */}
                        {data.trustedText && (
                            <div className="mb-8 animate-fade-in">
                                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">{data.trustedText}</h3>
                            </div>
                        )}

                        {/* Stats Grid */}
                        <div className={`${variant === 'status' ? 'flex flex-wrap justify-center gap-8 mb-10' : 'flex flex-wrap justify-center gap-6 mb-12'} animate-scale-in`}>
                            {data.stats.map((stat, index) => (
                                variant === 'status' ? (
                                    <div key={index} className="text-center">
                                        <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-1">
                                            {stat.value}
                                        </div>
                                        <div className="text-sm font-medium text-gray-600 dark:text-gray-300">{stat.label}</div>
                                    </div>
                                ) : (
                                    <AnimatedStatCard
                                        key={index}
                                        value={stat.value}
                                        label={stat.label}
                                        delay={index * 200}
                                        className="min-w-[200px]"
                                    />
                                )
                            ))}
                        </div>

                        {/* Status-specific RSS Button */}
                        {variant === 'status' && (
                            <div className="animate-fade-in">
                                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19 7.38 20 6.18 20C4.97 20 4 19 4 17.82a2.18 2.18 0 0 1 2.18-2.18M6.18 4C4.97 4 4 4.97 4 6.18S4.97 8.36 6.18 8.36C7.38 8.36 8.36 7.38 8.36 6.18S7.38 4 6.18 4M6.18 9.82C4.97 9.82 4 10.79 4 12S4.97 14.18 6.18 14.18C7.38 14.18 8.36 13.21 8.36 12S7.38 9.82 6.18 9.82M12 6.18C12 4.97 12.97 4 14.18 4S16.36 4.97 16.36 6.18 15.39 8.36 14.18 8.36 12 7.38 12 6.18M12 12C12 10.79 12.97 9.82 14.18 9.82S16.36 10.79 16.36 12 15.39 14.18 14.18 14.18 12 13.21 12 12M12 17.82C12 16.61 12.97 15.64 14.18 15.64S16.36 16.61 16.36 17.82 15.39 20 14.18 20 12 19 12 17.82M18 6.18C18 4.97 18.97 4 20.18 4S22.36 4.97 22.36 6.18 21.39 8.36 20.18 8.36 18 7.38 18 6.18M18 12C18 10.79 18.97 9.82 20.18 9.82S22.36 10.79 22.36 12 21.39 14.18 20.18 14.18 18 13.21 18 12M18 17.82C18 16.61 18.97 15.64 20.18 15.64S22.36 16.61 22.36 17.82 21.39 20 20.18 20 18 19 18 17.82" />
                                    </svg>
                                    Subscribe to RSS
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Section>
    );
}
