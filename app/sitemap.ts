import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vexlo.co.uk'
  const now = new Date()

  const core = [
    { url: baseUrl, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/services`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/portfolio`, priority: 0.9, changeFrequency: 'monthly' as const },

    { url: `${baseUrl}/about`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/privacy`, priority: 0.3, changeFrequency: 'yearly' as const },
    { url: `${baseUrl}/terms`, priority: 0.3, changeFrequency: 'yearly' as const },
    { url: `${baseUrl}/google-reviews`, priority: 0.95, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/listings`, priority: 0.95, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/articles`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/articles/ai-missed-call-text-back-for-trades`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/articles/missed-call-automation-small-business-uk`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/articles/how-to-reply-to-missed-calls-automatically`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/articles/automated-appointment-booking-tradespeople`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/articles/missed-call-text-back-plumbers-uk`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/articles/missed-call-text-back-electricians-uk`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/articles/missed-call-text-back-roofers-uk`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/articles/ai-receptionist-vs-answering-service-uk`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/articles/how-much-are-missed-calls-costing-your-business`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/articles/missed-call-automation-cost-uk`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/articles/missed-call-automation-hvac-engineers-uk`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/articles/missed-call-automation-cleaning-companies-uk`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/articles/best-missed-call-text-back-software-uk`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/articles/what-to-say-in-missed-call-text-back-sms`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/articles/missed-call-text-back-vs-voicemail-which-wins`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/articles/auto-reply-missed-calls-without-answering-service`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/articles/sms-auto-reply-setup-small-business-uk`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/articles/online-booking-system-builders-uk`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/articles/automated-follow-up-after-missed-call`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/articles/ai-appointment-booking-landscapers-gardeners`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/articles/google-reviews-recency-vs-quantity`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/articles/google-review-ranking-factors-explained`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/articles/how-to-get-more-google-reviews-trades`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/articles/automated-google-review-requests-after-job`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/articles/why-consistent-business-listings-matter-uk`, priority: 0.8, changeFrequency: 'monthly' as const },
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
