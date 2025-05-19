import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://jayvaliya.me';

    // Use a fixed date for better cache control and consistency
    // Update this date whenever you make significant changes to the site
    // Last updated: May 19, 2025
    const lastModified = new Date('2025-05-19');

    // All routes with their metadata
    return [
        {
            url: baseUrl,
            lastModified,
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/#about`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.8,
        }, {
            url: `${baseUrl}/#journey`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/#skills`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/#projects`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/#testimonials`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/#blog`,
            lastModified,
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/#contact`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
    ];
}
