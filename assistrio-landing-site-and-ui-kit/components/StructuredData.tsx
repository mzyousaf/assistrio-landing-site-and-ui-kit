export default function StructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Assistrio",
        "description": "Elevate your customer support with Alexi by Assistrio. Get instant, intelligent responses 24/7, reduce support costs by 60%, and delight customers with AI that understands your brand.",
        "url": "https://assistrio.com",
        "logo": "https://assistrio.com/og-image.png",
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "email": "support@assistrio.com"
        },
        "sameAs": [
            "https://x.com/assistrio",
            "https://linkedin.com/company/assistrio"
        ],
        "offers": {
            "@type": "AggregateOffer",
            "name": "AI Customer Support Plans",
            "description": "Professional AI-powered customer support solutions with flexible pricing",
            "priceRange": "$29-$199",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "itemCondition": "https://schema.org/NewCondition"
        },
        "serviceType": "AI Customer Support",
        "areaServed": "Worldwide",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Assistrio AI Support Plans",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "name": "Starter Plan",
                    "description": "Perfect for small businesses getting started with AI support",
                    "price": "29",
                    "priceCurrency": "USD",
                    "priceSpecification": {
                        "@type": "PriceSpecification",
                        "price": "29",
                        "priceCurrency": "USD",
                        "billingIncrement": "P1M"
                    },
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Starter AI Support",
                        "description": "Up to 1,000 conversations per month with basic AI responses and knowledge base training"
                    }
                },
                {
                    "@type": "Offer",
                    "name": "Growth Plan",
                    "description": "Ideal for growing businesses with advanced AI features",
                    "price": "99",
                    "priceCurrency": "USD",
                    "priceSpecification": {
                        "@type": "PriceSpecification",
                        "price": "99",
                        "priceCurrency": "USD",
                        "billingIncrement": "P1M"
                    },
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Growth AI Support",
                        "description": "Up to 10,000 conversations per month with advanced AI, custom training, and analytics"
                    }
                },
                {
                    "@type": "Offer",
                    "name": "Enterprise Plan",
                    "description": "For large organizations with unlimited conversations and custom features",
                    "price": "199",
                    "priceCurrency": "USD",
                    "priceSpecification": {
                        "@type": "PriceSpecification",
                        "price": "199",
                        "priceCurrency": "USD",
                        "billingIncrement": "P1M"
                    },
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Enterprise AI Support",
                        "description": "Unlimited conversations with custom AI models, dedicated support, and enterprise features"
                    }
                }
            ]
        },
        "foundingDate": "2024",
        "founder": {
            "@type": "Person",
            "name": "Assistrio Team"
        },
        "keywords": "AI customer support, chatbot, customer service automation, knowledge base training, 24/7 support, AI assistant, customer support software",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "US"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "1250"
        },
        "review": [
            {
                "@type": "Review",
                "author": {
                    "@type": "Person",
                    "name": "Sarah Mitchell"
                },
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                },
                "reviewBody": "Assistrio handles 75% of our customer conversations automatically. Our customers love the instant, accurate responses based on our knowledge base."
            }
        ]
    };

    const breadcrumbData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://assistrio.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Pricing",
                "item": "https://assistrio.com/pricing"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "About",
                "item": "https://assistrio.com/about"
            },
            {
                "@type": "ListItem",
                "position": 4,
                "name": "Product",
                "item": "https://assistrio.com/product"
            },
            {
                "@type": "ListItem",
                "position": 5,
                "name": "Help Center",
                "item": "https://assistrio.com/help-center"
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
            />
        </>
    );
}
