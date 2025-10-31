'use client';

import { useState, use } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Section from '../../../components/Section';
import { MetricCard, TabButton, ResultCard } from '@/components/ui';
import { TestimonialBlock, RelatedCaseStudyCard } from '@/components/content';
import { CaseStudyHeroSection } from '@/components/sections';
import { caseStudies } from '../../../data/landingData';

interface CaseStudyPageProps {
    params: Promise<{ slug: string }>;
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
    const { slug } = use(params);
    const caseStudy = caseStudies.find(cs => cs.slug === slug);

    if (!caseStudy) {
        notFound();
    }

    const [activeTab, setActiveTab] = useState('overview');

    // Get related case studies (same industry, excluding current one)
    const relatedCaseStudies = caseStudies
        .filter(cs => cs.industry === caseStudy.industry && cs.id !== caseStudy.id)
        .slice(0, 3);

    return (
        <>
            {/* Hero Section */}
            <CaseStudyHeroSection caseStudy={caseStudy} />

            {/* Content Section */}
            <Section className="bg-white">
                <div className="max-w-7xl mx-auto px-4 py-12">
                    {/* Tab Navigation */}
                    <div className="flex flex-wrap gap-2 mb-12 border-b border-gray-200">
                        <TabButton
                            label="Overview"
                            isActive={activeTab === 'overview'}
                            onClick={() => setActiveTab('overview')}
                        />
                        <TabButton
                            label="Challenge"
                            isActive={activeTab === 'challenge'}
                            onClick={() => setActiveTab('challenge')}
                        />
                        <TabButton
                            label="Solution"
                            isActive={activeTab === 'solution'}
                            onClick={() => setActiveTab('solution')}
                        />
                        <TabButton
                            label="Results"
                            isActive={activeTab === 'results'}
                            onClick={() => setActiveTab('results')}
                        />
                    </div>

                    {/* Tab Content */}
                    <div className="max-w-4xl">
                        {activeTab === 'overview' && (
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h3>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        {caseStudy.company} successfully implemented our AI customer support platform,
                                        achieving remarkable results in automation, efficiency, and customer satisfaction.
                                        This case study details their journey from initial challenges to outstanding outcomes.
                                    </p>
                                </div>

                                {/* Testimonial */}
                                <TestimonialBlock
                                    testimonial={caseStudy.testimonial}
                                    author={caseStudy.testimonialAuthor}
                                />
                            </div>
                        )}

                        {activeTab === 'challenge' && (
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">The Challenge</h3>
                                <div className="prose prose-lg max-w-none">
                                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                        {caseStudy.challenge}
                                    </p>

                                    <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
                                        <h4 className="text-lg font-semibold text-red-800 mb-2">Key Pain Points:</h4>
                                        <ul className="list-disc list-inside text-red-700 space-y-1">
                                            <li>High support costs and resource requirements</li>
                                            <li>Slow response times affecting customer satisfaction</li>
                                            <li>Repetitive queries overwhelming support teams</li>
                                            <li>Difficulty scaling support operations</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'solution' && (
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Solution</h3>
                                <div className="prose prose-lg max-w-none">
                                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                        {caseStudy.solution}
                                    </p>

                                    <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                                        <h4 className="text-lg font-semibold text-green-800 mb-2">Implementation Approach:</h4>
                                        <ul className="list-disc list-inside text-green-700 space-y-1">
                                            <li>Comprehensive AI training on company-specific data</li>
                                            <li>Seamless integration with existing systems</li>
                                            <li>Gradual rollout with continuous monitoring</li>
                                            <li>Ongoing optimization based on performance metrics</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'results' && (
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Results & Impact</h3>
                                <div className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        {caseStudy.results.map((result, index) => (
                                            <ResultCard key={index} result={result} />
                                        ))}
                                    </div>

                                    {/* Key Metrics Summary */}
                                    <div className="bg-gradient-to-r from-brand-50 to-blue-50 rounded-2xl p-8">
                                        <h4 className="text-xl font-bold text-gray-900 mb-6">Key Performance Indicators</h4>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                            <MetricCard
                                                value={caseStudy.metrics.automation || '0%'}
                                                label="Automation Rate"
                                                size="lg"
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
                                                size="lg"
                                                variant="satisfaction"
                                                icon={
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                    </svg>
                                                }
                                            />
                                            {caseStudy.metrics.costSavings && (
                                                <MetricCard
                                                    value={caseStudy.metrics.costSavings}
                                                    label="Cost Savings"
                                                    size="lg"
                                                    variant="savings"
                                                    icon={
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                                        </svg>
                                                    }
                                                />
                                            )}
                                            {caseStudy.metrics.responseTime && (
                                                <MetricCard
                                                    value={caseStudy.metrics.responseTime}
                                                    label="Response Time"
                                                    size="lg"
                                                    variant="response"
                                                    icon={
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                    }
                                                />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Section>

            {/* Related Case Studies */}
            {relatedCaseStudies.length > 0 && (
                <Section className="bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 py-12">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">More {caseStudy.industry} Success Stories</h3>
                        <div className="grid md:grid-cols-3 gap-8">
                            {relatedCaseStudies.map((relatedCaseStudy) => (
                                <RelatedCaseStudyCard
                                    key={relatedCaseStudy.id}
                                    id={relatedCaseStudy.id}
                                    title={relatedCaseStudy.title}
                                    industry={relatedCaseStudy.industry}
                                    challenge={relatedCaseStudy.challenge}
                                    duration={relatedCaseStudy.duration}
                                    readTime={relatedCaseStudy.readTime}
                                    image={relatedCaseStudy.image}
                                    slug={relatedCaseStudy.slug}
                                />
                            ))}
                        </div>
                    </div>
                </Section>
            )}

            {/* CTA Section */}
            <Section className="bg-gradient-to-r from-brand-500 to-blue-600 text-white">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Achieve Similar Results?</h2>
                    <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                        Join {caseStudy.company} and hundreds of other businesses that have transformed their customer support with AI
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-brand-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
                        >
                            Start Your Free Trial
                        </Link>
                        <Link
                            href="/case-studies"
                            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-brand-600 transition-colors"
                        >
                            View More Case Studies
                        </Link>
                    </div>
                </div>
            </Section>

        </>
    );
}
