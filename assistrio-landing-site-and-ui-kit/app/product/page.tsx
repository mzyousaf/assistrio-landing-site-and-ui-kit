import ProductHeroSection from '../../components/sections/ProductHeroSection';
import ProductStepsSection from '../../components/sections/ProductStepsSection';
import ProductDemoSection from '../../components/sections/ProductDemoSection';
import ProductCTASection from '../../components/sections/ProductCTASection';

export const metadata = {
    title: 'Assistrio Product - How AI Customer Support Works',
    description: 'Discover how Assistrio&apos;s AI customer support platform works. Learn about our product features, capabilities, and the technology that powers intelligent customer support automation.',
    keywords: ['assistrio product', 'AI customer support product', 'how it works', 'AI chatbot features', 'customer support automation', 'product capabilities'],
    openGraph: {
        title: 'Assistrio Product - How AI Customer Support Works',
        description: 'Discover how Assistrio&apos;s AI customer support platform works. Learn about our product features, capabilities, and the technology that powers intelligent customer support automation.',
        type: 'website',
        url: 'https://assistrio.com/product',
        images: [
            {
                url: 'https://assistrio.com/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Assistrio Product - AI Customer Support',
            },
        ],
    },
    x: {
        card: 'summary_large_image',
        title: 'Assistrio Product - How AI Customer Support Works',
        description: 'Discover how Assistrio&apos;s AI customer support platform works and learn about our product capabilities.',
        images: ['https://assistrio.com/og-image.png'],
    },
    alternates: {
        canonical: 'https://assistrio.com/product',
    },
};

export default function Product() {
    return (
        <>
            <ProductHeroSection />

            <ProductStepsSection />

            <ProductDemoSection />

            <ProductCTASection />

            {/* Floating Action Buttons */}
        </>
    );
}
