import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Resource Details | Alexi AI Assistant',
    description: 'Detailed information about our AI resources, guides, webinars, and tools.',
};

export default function ResourceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
