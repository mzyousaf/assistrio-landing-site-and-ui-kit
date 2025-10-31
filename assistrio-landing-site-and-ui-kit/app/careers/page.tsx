import { CareersHeroSection, PerksSection, JobsSection, ProcessSection, CareersCTASection } from '@/components/sections';
import { jobOpenings, companyPerks } from '../../data/landingData';

export const metadata = {
    title: 'Careers - Join Our AI Team',
    description: 'Join our team of AI experts and help shape the future of customer support. Explore open positions and learn about our company culture.',
    keywords: ['careers', 'jobs', 'AI jobs', 'tech careers', 'customer support jobs', 'remote jobs'],
    openGraph: {
        title: 'Careers - Join Our AI Team',
        description: 'Join our team of AI experts and help shape the future of customer support. Explore open positions and learn about our company culture.',
        type: 'website',
        url: 'https://your-domain.com/careers',
        images: [
            {
                url: 'https://your-domain.com/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Careers - AI Assistant',
            },
        ],
    },
    x: {
        card: 'summary_large_image',
        title: 'Careers - Join Our AI Team',
        description: 'Join our team of AI experts and help shape the future of customer support.',
        images: ['https://your-domain.com/og-image.png'],
    },
    alternates: {
        canonical: 'https://your-domain.com/careers',
    },
};


export default function Careers() {
    const processSteps = [
        {
            stepNumber: 1,
            title: "Apply",
            description: "Submit your application with resume and cover letter"
        },
        {
            stepNumber: 2,
            title: "Initial Review",
            description: "Our team reviews your application and portfolio"
        },
        {
            stepNumber: 3,
            title: "Interview",
            description: "Video interview with the hiring manager and team"
        },
        {
            stepNumber: 4,
            title: "Decision",
            description: "We make a decision and extend an offer"
        }
    ];

    return (
        <>
            <CareersHeroSection
                title="Join Our Team"
                subtitle="Help us build the future of AI-powered customer support"
            />

            <PerksSection
                title="Why Work With Us?"
                perks={companyPerks}
            />

            <JobsSection
                title="Open Positions"
                jobs={jobOpenings}
            />

            <ProcessSection
                title="Our Hiring Process"
                steps={processSteps}
            />

            <CareersCTASection
                title="Don't See the Right Role?"
                subtitle="We're always looking for talented people. Send us your resume and we'll keep you in mind for future opportunities."
                buttonText="Send Your Resume"
                buttonHref="mailto:careers@your-domain.com"
            />

        </>
    );
}
