import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vexlo.co.uk'
  const now = new Date()

  const core = [
    { url: baseUrl, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/services`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/about`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/enquiry`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/privacy`, priority: 0.3, changeFrequency: 'yearly' as const },
  ]

  // Niche landing pages — high SEO priority for trade/service-specific searches
  const niches = [
    'ai-receptionist-roofing-companies',
    'ai-receptionist-plumbers',
    'ai-receptionist-electricians',
    'ai-receptionist-kitchen-fitters',
    'ai-receptionist-dentists',
    'ai-receptionist-salons-barbers',
    'ai-receptionist-estate-agents',
    'ai-receptionist-cleaning-companies',
    'ai-receptionist-physio-wellness',
    'ai-receptionist-property-maintenance',
  ]

  return [
    ...core.map(p => ({ ...p, lastModified: now })),
    ...niches.map(slug => ({
      url: `${baseUrl}/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
  ]
}
