import { LegalPageLayout } from '@/components/layout';
import { legalContent } from '../../../data/landingData';

const sections = [
    { id: 'introduction', title: '1. Introduction' },
    {
        id: 'information-collect', title: '2. Information We Collect', subsections: [
            { id: 'personal-info', title: '2.1 Personal Information' },
            { id: 'auto-collected', title: '2.2 Automatically Collected Information' },
            { id: 'ai-training', title: '2.3 AI Training Data' }
        ]
    },
    {
        id: 'how-we-use', title: '3. How We Use Your Information', subsections: [
            { id: 'service-provision', title: '3.1 Service Provision' },
            { id: 'communication', title: '3.2 Communication' },
            { id: 'analytics', title: '3.3 Analytics and Improvement' }
        ]
    },
    {
        id: 'information-sharing', title: '4. Information Sharing and Disclosure', subsections: [
            { id: 'service-providers', title: '4.1 Service Providers' },
            { id: 'legal-requirements', title: '4.2 Legal Requirements' },
            { id: 'business-transfers', title: '4.3 Business Transfers' }
        ]
    },
    { id: 'data-security', title: '5. Data Security' },
    { id: 'data-retention', title: '6. Data Retention' },
    {
        id: 'your-rights', title: '7. Your Rights and Choices', subsections: [
            { id: 'access-portability', title: '7.1 Access and Portability' },
            { id: 'correction-updates', title: '7.2 Correction and Updates' },
            { id: 'deletion-restriction', title: '7.3 Deletion and Restriction' },
            { id: 'communication-preferences', title: '7.4 Communication Preferences' }
        ]
    },
    {
        id: 'cookies', title: '8. Cookies and Tracking Technologies', subsections: [
            { id: 'cookie-types', title: '8.1 Types of Cookies' }
        ]
    },
    { id: 'international-transfers', title: '9. International Data Transfers' },
    { id: 'children-privacy', title: '10. Children&apos;s Privacy' },
    { id: 'california-rights', title: '11. California Privacy Rights' },
    { id: 'eu-gdpr', title: '12. European Union (GDPR) Rights' },
    { id: 'policy-changes', title: '13. Changes to This Privacy Policy' },
    { id: 'contact', title: '14. Contact Us' },
    { id: 'complaints', title: '15. Complaints' }
];

export default function Privacy() {
    return (
        <LegalPageLayout
            title={legalContent.privacy.title}
            lastUpdated={legalContent.privacy.lastUpdated}
            sections={sections}
        >
            <div dangerouslySetInnerHTML={{ __html: legalContent.privacy.content }} />
        </LegalPageLayout>
    );
}