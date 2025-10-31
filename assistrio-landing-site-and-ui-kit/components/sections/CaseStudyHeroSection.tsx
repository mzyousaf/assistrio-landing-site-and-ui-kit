import Link from 'next/link';
import Image from 'next/image';
import { MetricCard } from '@/components/ui';
import { Breadcrumb } from '@/components/ui';

interface CaseStudyHeroProps {
    caseStudy: {
        company: string;
        industry: string;
        companySize: string;
        title: string;
        duration: string;
        readTime: string;
        image: string;
        metrics: {
            automation?: string;
            satisfaction?: string;
            costSavings?: string;
            responseTime?: string;
        };
    };
}

export default function CaseStudyHero({ caseStudy }: CaseStudyHeroProps) {
    return (
        <section className="relative overflow-hidden">
            {/* Blue and Teal Gradient Background */}
            <div className="absolute inset-0 w-full h-full">
                {/* Main Blue to Teal Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br 
                    from-blue-50 via-blue-100/50 to-teal-100
                    dark:from-blue-950 dark:via-blue-900/80 dark:to-teal-950"></div>

                {/* Subtle Radial Gradients for Depth */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] pointer-events-none opacity-30 dark:opacity-20" style={{
                    background: 'radial-gradient(circle at top right, rgba(59, 130, 246, 0.20), transparent 60%)'
                }}></div>

                <div className="absolute bottom-0 left-0 w-[700px] h-[700px] pointer-events-none opacity-25 dark:opacity-15" style={{
                    background: 'radial-gradient(circle at bottom left, rgba(20, 184, 166, 0.15), transparent 65%)'
                }}></div>

                {/* Center Accent Gradient - Blue to Teal blend */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] pointer-events-none opacity-15 dark:opacity-10" style={{
                    background: 'radial-gradient(ellipse at center, rgba(14, 165, 233, 0.12), rgba(20, 184, 166, 0.08), transparent 70%)'
                }}></div>
            </div>

            <div className="relative w-full">
                {/* Enhanced Breadcrumb */}
                <div className="max-w-7xl mx-auto px-4 pt-6 pb-4">
                    <Breadcrumb
                        items={[
                            { label: "Case Studies", href: "/case-studies" },
                            { label: caseStudy.company }
                        ]}
                    />
                </div>

                <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="space-y-8">
                            {/* Enhanced Main Header */}
                            <div className="space-y-4">
                                {/* Company Badge */}
                                <div className="inline-flex items-center px-4 py-2 bg-white/80 dark:bg-slate-700/80 backdrop-blur-sm rounded-full border border-gray-200 dark:border-slate-600 shadow-sm">
                                    <svg className="w-5 h-5 text-brand-500 dark:text-brand-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{caseStudy.industry}</span>
                                </div>

                                {/* Company Name */}
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                                    {caseStudy.company}
                                </h1>

                                {/* Title */}
                                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-white leading-relaxed">
                                    {caseStudy.title}
                                </h2>

                                {/* Company Details */}
                                <div className="flex items-center space-x-6 text-gray-600 dark:text-gray-300">
                                    <div className="flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span className="font-medium">{caseStudy.industry}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                                        </svg>
                                        <span className="font-medium">{caseStudy.companySize}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Key Metrics */}
                            <div className="grid grid-cols-2 gap-4">
                                <MetricCard
                                    value={caseStudy.metrics.automation || '0%'}
                                    label="Automation Rate"
                                    variant="automation"
                                    icon={
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    }
                                />
                                <MetricCard
                                    value={caseStudy.metrics.satisfaction || '0%'}
                                    label="Satisfaction Rate"
                                    variant="satisfaction"
                                    icon={
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    }
                                />
                            </div>

                            {/* Enhanced Duration & Read Time */}
                            <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                                <div className="flex items-center">
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="font-medium">{caseStudy.duration}</span>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                    <span className="font-medium">{caseStudy.readTime}</span>
                                </div>
                            </div>

                            {/* Enhanced CTA Button */}
                            <div className="pt-4">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5
                                        bg-gradient-to-r from-brand-500 to-brand-600 text-white
                                        hover:from-brand-600 hover:to-brand-700
                                        dark:from-brand-700 dark:to-brand-900 dark:text-white
                                        dark:hover:from-brand-800 dark:hover:to-brand-800
                                        focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 dark:focus-visible:ring-brand-500"
                                    style={{
                                        backdropFilter: 'blur(2px)',
                                        backgroundBlendMode: 'overlay'
                                    }}
                                >
                                    Get Similar Results
                                    <svg className="w-5 h-5 ml-2 text-white dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        {/* Enhanced Image Section */}
                        <div className="relative order-first lg:order-last">
                            <div className="relative">
                                <Image
                                    src={caseStudy.image}
                                    alt={caseStudy.title}
                                    width={1200}
                                    height={600}
                                    className="w-full h-80 sm:h-96 lg:h-[600px] object-cover rounded-3xl shadow-2xl"
                                />
                                {/* Enhanced Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-3xl"></div>

                                {/* Floating Success Badge */}
                                <div className="absolute top-6 right-6 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                                    <div className="flex items-center">
                                        <svg className="w-5 h-5 text-green-500 dark:text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">Success Story</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
