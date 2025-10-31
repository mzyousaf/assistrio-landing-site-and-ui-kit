import { LegalPageLayout } from '@/components/layout';
import { legalContent } from '../../../data/landingData';

const sections = [
    { id: 'acceptance', title: '1. Acceptance of Terms' },
    { id: 'use-license', title: '2. Use License' },
    { id: 'disclaimer', title: '3. Disclaimer' },
    { id: 'limitations', title: '4. Limitations' },
    { id: 'governing-law', title: '5. Governing Law' }
];

export default function Terms() {
    return (
        <LegalPageLayout
            title={legalContent.terms.title}
            lastUpdated={legalContent.terms.lastUpdated}
            sections={sections}
        >
            <div dangerouslySetInnerHTML={{ __html: legalContent.terms.content }} />
        </LegalPageLayout>
    );
}