'use client';

import { useState, useEffect } from 'react';
import { LegalQuickActions, LegalTableOfContents, LegalHeroSection } from '@/components/sections';
import '../legal-pages.css';

interface LegalPageLayoutProps {
    title: string;
    lastUpdated: string;
    children: React.ReactNode;
    sections: Array<{
        id: string;
        title: string;
        subsections?: Array<{
            id: string;
            title: string;
        }>;
    }>;
}

export default function LegalPageLayout({ title, lastUpdated, children, sections }: LegalPageLayoutProps) {
    const [activeSection, setActiveSection] = useState<string>('');

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;

            // Find active section based on scroll position
            const sectionElements = sections.map(section => ({
                id: section.id,
                element: document.getElementById(section.id)
            }));

            for (let i = sectionElements.length - 1; i >= 0; i--) {
                const { id, element } = sectionElements[i];
                if (element && element.offsetTop - 100 <= scrollTop) {
                    setActiveSection(id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sections]);

    return (
        <>
            {/* Hero Section */}
            <LegalHeroSection title={title} lastUpdated={lastUpdated} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Table of Contents - Sidebar */}
                    <div className="lg:w-80 flex-shrink-0">
                        <div className="sticky top-24">
                            <LegalTableOfContents sections={sections} activeSection={activeSection} />

                            {/* Quick Actions */}
                            <LegalQuickActions />
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 min-w-0">
                        <div className="prose prose-lg prose-gray max-w-none dark:prose-invert">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
