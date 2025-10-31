import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

interface SEOData {
    title: string;
    description: string;
    url?: string;
    images?: Array<{ url: string; width: number; height: number; alt: string }>;
    type?: 'website' | 'article' | 'product';
    siteName?: string;
}

/**
 * Generate metadata for SEO with OpenGraph and Twitter cards
 */
export function generateMetadata(data: SEOData): Metadata {
    const siteUrl = data.url || siteConfig.url;
    const images = data.images || [
        {
            url: '/og-image.png',
            width: 1200,
            height: 630,
            alt: data.title,
        },
    ];

    // Map 'product' type to 'website' since OpenGraph only supports 'article' | 'website'
    const openGraphType = data.type === 'product' ? 'website' : (data.type || 'website');

    return {
        title: data.title,
        description: data.description,
        openGraph: {
            title: data.title,
            description: data.description,
            url: siteUrl,
            siteName: data.siteName || siteConfig.name,
            images,
            locale: 'en_US',
            type: openGraphType,
        },
        twitter: {
            card: 'summary_large_image',
            title: data.title,
            description: data.description,
            images: images.map(img => img.url),
        },
        alternates: {
            canonical: siteUrl,
        },
    };
}

/**
 * Generate JSON-LD structured data for Product schema
 */
export function generateProductSchema(data: {
    name: string;
    description: string;
    brand?: string;
    price?: number;
    currency?: string;
    url?: string;
    image?: string;
    aggregateRating?: {
        ratingValue: number;
        reviewCount: number;
    };
    sameAs?: string[];
}) {
    const {
        name,
        description,
        brand = siteConfig.name,
        price = 49,
        currency = 'USD',
        url = siteConfig.url,
        image = '/og-image.png',
        aggregateRating,
        sameAs = [],
    } = data;

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name,
        description,
        brand: {
            '@type': 'Brand',
            name: brand,
        },
        offers: {
            '@type': 'Offer',
            price,
            priceCurrency: currency,
            url,
            availability: 'https://schema.org/InStock',
        },
        image,
        url,
    };

    if (aggregateRating) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (schema as any).aggregateRating = {
            '@type': 'AggregateRating',
            ...aggregateRating,
        };
    }

    if (sameAs.length > 0) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (schema as any).sameAs = sameAs;
    }

    return schema;
}
