'use client';

import { useState, useEffect } from 'react';

interface Heading {
    id: string;
    text: string;
    level: number;
}

interface TableOfContentsProps {
    content: string;
}

export default function TableOfContents({ content }: TableOfContentsProps) {
    const [headings, setHeadings] = useState<Heading[]>([]);
    const [activeId, setActiveId] = useState<string>('');

    useEffect(() => {
        // Extract headings from HTML content
        const parser = new DOMParser();
        const doc = parser.parseFromString(content, 'text/html');
        const headingElements = doc.querySelectorAll('h2, h3, h4');

        const extractedHeadings: Heading[] = Array.from(headingElements).map((heading, index) => {
            const id = `heading-${index}`;
            heading.id = id;
            return {
                id,
                text: heading.textContent || '',
                level: parseInt(heading.tagName.charAt(1))
            };
        });

        setHeadings(extractedHeadings);
    }, [content]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '-20% 0% -35% 0%' }
        );

        headings.forEach((heading) => {
            const element = document.getElementById(heading.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [headings]);

    const scrollToHeading = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    if (headings.length === 0) return null;

    return (
        <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-200 shadow-sm">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Table of Contents</h3>
            <nav className="space-y-1.5 sm:space-y-2">
                {headings.map((heading) => (
                    <button
                        key={heading.id}
                        onClick={() => scrollToHeading(heading.id)}
                        className={`block w-full text-left px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm transition-colors ${activeId === heading.id
                            ? 'bg-brand-100 text-brand-700 font-medium'
                            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                            }`}
                        style={{ paddingLeft: `${(heading.level - 2) * 10 + 10}px` }}
                    >
                        {heading.text}
                    </button>
                ))}
            </nav>
        </div>
    );
}
