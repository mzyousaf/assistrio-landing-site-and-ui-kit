import { Metadata } from 'next';
import { caseStudies } from '../../../data/landingData';

interface CaseStudyLayoutProps {
    children: React.ReactNode;
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CaseStudyLayoutProps): Promise<Metadata> {
    const { slug } = await params;
    const caseStudy = caseStudies.find(cs => cs.slug === slug);

    if (!caseStudy) {
        return {
            title: 'Case Study Not Found',
            description: 'The requested case study could not be found.',
        };
    }

    return {
        title: `${caseStudy.title} - ${caseStudy.company} | AI Customer Support Success Story`,
        description: `${caseStudy.challenge.substring(0, 160)}... Discover how ${caseStudy.company} achieved ${caseStudy.metrics.automation}% automation and ${caseStudy.metrics.satisfaction}% satisfaction with our AI platform.`,
        keywords: [
            'AI customer support',
            'case study',
            caseStudy.company,
            caseStudy.industry,
            'automation',
            'customer satisfaction',
            'AI implementation'
        ],
        openGraph: {
            title: `${caseStudy.title} - ${caseStudy.company}`,
            description: `${caseStudy.challenge.substring(0, 160)}...`,
            images: [
                {
                    url: caseStudy.image,
                    width: 1200,
                    height: 630,
                    alt: `${caseStudy.company} AI Implementation Success Story`,
                },
            ],
            type: 'article',
        },
        twitter: {
            card: 'summary_large_image',
            title: `${caseStudy.title} - ${caseStudy.company}`,
            description: `${caseStudy.challenge.substring(0, 160)}...`,
            images: [caseStudy.image],
        },
    };
}

export default function CaseStudyLayout({ children }: CaseStudyLayoutProps) {
    return children;
}
