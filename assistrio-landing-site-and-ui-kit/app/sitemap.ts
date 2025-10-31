import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { blogPostsArray } from '@/data/landingData';
import { caseStudies } from '@/data/landingData';
import { resources } from '@/data/landingData';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = siteConfig.url;
    const currentDate = new Date().toISOString().split('T')[0];

    // Static routes with priorities and change frequencies
    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/pricing`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/product`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/case-studies`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/resources`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/showcase`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/help-center`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/careers`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/team`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/status`,
            lastModified: currentDate,
            changeFrequency: 'daily',
            priority: 0.4,
        },
        {
            url: `${baseUrl}/legal/privacy`,
            lastModified: currentDate,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/legal/terms`,
            lastModified: currentDate,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/legal/cookies`,
            lastModified: currentDate,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/legal/refund`,
            lastModified: currentDate,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ];

    // Dynamic blog post routes
    const blogRoutes: MetadataRoute.Sitemap = blogPostsArray.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.publishedAt || currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    // Dynamic case study routes
    const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((study) => ({
        url: `${baseUrl}/case-studies/${study.slug}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    // Dynamic resource routes
    const resourceRoutes: MetadataRoute.Sitemap = [
        ...resources.guides.map((guide) => ({
            url: `${baseUrl}/resources/${guide.slug}`,
            lastModified: guide.lastUpdated || currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        })),
        ...resources.whitepapers.map((paper) => ({
            url: `${baseUrl}/resources/${paper.slug}`,
            lastModified: paper.lastUpdated || currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        })),
        ...resources.webinars.map((webinar) => ({
            url: `${baseUrl}/resources/${webinar.slug}`,
            lastModified: webinar.date || currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        })),
        ...resources.tools.map((tool) => ({
            url: `${baseUrl}/resources/${tool.slug}`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        })),
    ];

    return [...staticRoutes, ...blogRoutes, ...caseStudyRoutes, ...resourceRoutes];
}
