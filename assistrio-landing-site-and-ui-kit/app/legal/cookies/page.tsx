import { LegalPageLayout } from '@/components/layout';
import { legalContent } from '../../../data/landingData';

const sections = [
    { id: 'what-are-cookies', title: '1. What Are Cookies' },
    { id: 'how-we-use-cookies', title: '2. How We Use Cookies' },
    { id: 'types-of-cookies', title: '3. Types of Cookies' },
    { id: 'managing-cookies', title: '4. Managing Cookies' }
];

export default function Cookies() {
    return (
        <LegalPageLayout
            title={legalContent.cookies.title}
            lastUpdated={legalContent.cookies.lastUpdated}
            sections={sections}
        >
            <div dangerouslySetInnerHTML={{ __html: legalContent.cookies.content }} />
        </LegalPageLayout>
    );
}