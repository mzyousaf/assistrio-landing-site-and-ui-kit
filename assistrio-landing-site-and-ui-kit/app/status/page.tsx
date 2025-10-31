'use client';

import Section from '../../components/Section';
import StatusHeroSection from '../../components/sections/StatusHeroSection';
import OverallStatusSection from '../../components/sections/OverallStatusSection';
import ServicesSection from '../../components/sections/ServicesSection';
import IncidentsSection from '../../components/sections/IncidentsSection';
import { services } from '../../data/landingData';


const incidents = [
    {
        id: 1,
        title: 'Email Service Degradation',
        status: 'investigating',
        severity: 'minor',
        description: 'Some email notifications may be delayed by up to 5 minutes.',
        startedAt: '2024-01-15T10:30:00Z',
        updatedAt: '2024-01-15T11:45:00Z',
        affectedServices: ['Email Service']
    },
    {
        id: 2,
        title: 'Database Performance Issue',
        status: 'resolved',
        severity: 'major',
        description: 'Database queries were experiencing slow response times due to high load.',
        startedAt: '2024-01-10T14:20:00Z',
        resolvedAt: '2024-01-10T16:30:00Z',
        updatedAt: '2024-01-10T16:30:00Z',
        affectedServices: ['Database', 'AI Assistant API']
    }
];

export default function StatusPage() {
    const operationalServices = services.filter(service => service.status === 'operational').length;
    const totalServices = services.length;

    return (
        <>
            <StatusHeroSection />

            {/* Overall Status */}
            <Section className="bg-white dark:bg-slate-900">
                <div className="max-w-6xl mx-auto">
                    <OverallStatusSection
                        operationalServices={operationalServices}
                        totalServices={totalServices}
                    />

                    <ServicesSection services={services} />

                    <IncidentsSection incidents={incidents} />
                </div>
            </Section>

            {/* RSS Feed Info */}
            <Section className="bg-gradient-to-r from-brand-500 to-blue-600 text-white">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
                    <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                        Subscribe to our RSS feed to get real-time status updates and incident notifications
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/status/rss"
                            className="bg-white text-brand-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                            RSS Feed
                        </a>
                        <a
                            href="mailto:status@your-domain.com"
                            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-brand-600 transition-colors"
                        >
                            Email Alerts
                        </a>
                    </div>
                </div>
            </Section>

        </>
    );
}