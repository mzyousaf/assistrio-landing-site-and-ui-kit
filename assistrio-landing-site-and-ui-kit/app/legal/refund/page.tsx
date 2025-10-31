import { LegalPageLayout } from '@/components/layout';
import { legalContent } from '../../../data/landingData';

const sections = [
    { id: 'refund-eligibility', title: '1. Refund Eligibility' },
    { id: 'how-to-request', title: '2. How to Request a Refund' },
    { id: 'processing-time', title: '3. Processing Time' },
    { id: 'non-refundable', title: '4. Non-Refundable Items' }
];

export default function Refund() {
    return (
        <LegalPageLayout
            title={legalContent.refund.title}
            lastUpdated={legalContent.refund.lastUpdated}
            sections={sections}
        >
            <div dangerouslySetInnerHTML={{ __html: legalContent.refund.content }} />
        </LegalPageLayout>
    );
}