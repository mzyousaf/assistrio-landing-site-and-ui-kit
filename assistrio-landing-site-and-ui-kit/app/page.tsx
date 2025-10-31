import Script from 'next/script';
import { generateMetadata as generateSeoMetadata, generateProductSchema } from '@/lib/seo';
import { siteConfig } from '@/config/site';
import {
  Hero,
  Highlights,
  OtherPages,
  ComponentsPreview,
  LiveDemosCTA,
  PricingTeaser,
  WhyAssistrio,
} from '@/components/sections/home';

// Generate metadata for SEO
export const metadata = generateSeoMetadata({
  title: 'Assistrio - Complete SaaS Landing Site Ready to Deploy',
  description: 'Production Ready Landing Site Theme with UI Kit For Marketing & Startups. Complete SaaS landing site ready to deploy. Plus 200+ reusable UI components to customize your site or build new projects. Production-ready, SEO optimized, and fully customizable.',
  url: siteConfig.url,
  type: 'website',
  siteName: siteConfig.name,
});

// Generate JSON-LD structured data
const productSchema = generateProductSchema({
  name: 'Assistrio - Complete SaaS Landing Site Ready to Deploy',
  description: 'Production Ready Landing Site Theme with UI Kit For Marketing & Startups. Complete SaaS landing site ready to deploy. Plus 200+ reusable UI components to customize your site or build new projects.',
  brand: siteConfig.name,
  price: 49,
  currency: 'USD',
  url: siteConfig.url,
  image: '/og-image.png',
  aggregateRating: {
    ratingValue: 4.9,
    reviewCount: 127,
  },
  sameAs: [
    'https://themeforest.net/item/your-item',
  ],
});

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Page Sections */}
      <Hero />
      <Highlights />
      <OtherPages />
      <ComponentsPreview />
      <LiveDemosCTA />
      <WhyAssistrio />
      <PricingTeaser />
    </>
  );
}