import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/homepage`,
      lastModified: new Date('2026-03-24'),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ];
}