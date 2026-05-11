import { MetadataRoute } from 'next'
import { cities } from '@/lib/cities'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.soundforlife.in'

  const staticPages = [
    { url: `${base}/`,                       priority: 1.0 },
    { url: `${base}/hearing-aids`,           priority: 0.9 },
    { url: `${base}/book-appointment`,       priority: 0.9 },
    { url: `${base}/hearing-loss`,           priority: 0.8 },
    { url: `${base}/hearing-aid-offers`,     priority: 0.8 },
    { url: `${base}/hearing-aid-centres`,    priority: 0.8 },
    { url: `${base}/about`,                  priority: 0.7 },
    { url: `${base}/how-it-works`,           priority: 0.7 },
    { url: `${base}/testimonials`,           priority: 0.7 },
    { url: `${base}/faq`,                    priority: 0.7 },
    { url: `${base}/contact`,                priority: 0.7 },
    { url: `${base}/signia-hearing-aids`,    priority: 0.7 },
    { url: `${base}/phonak-hearing-aids`,    priority: 0.7 },
    { url: `${base}/unitron-hearing-aids`,   priority: 0.7 },
    { url: `${base}/resound-hearing-aids`,   priority: 0.7 },
    { url: `${base}/sonic-hearing-aids`,     priority: 0.7 },
    { url: `${base}/am-hearing-aids`,        priority: 0.7 },
    { url: `${base}/terms-and-conditions`,   priority: 0.3 },
    { url: `${base}/imprint`,                priority: 0.3 },
  ].map(({ url, priority }) => ({
    url,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority,
  }))

  const cityPages = cities.map((city) => ({
    url: `${base}/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...cityPages]
}
