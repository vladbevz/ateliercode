import { MetadataRoute } from 'next'
import { getAllPosts } from './lib/blog'
import { villes } from './lib/villes-data'
import { SERVICES, SITE_URL } from './lib/site'

// Dates de dernière modification réelle du contenu de chaque page (pas la
// date de build). À mettre à jour manuellement quand le contenu change,
// pas automatiquement à chaque déploiement.
const LAST_MODIFIED = {
  home: '2026-11-24',
  services: '2026-11-24',
  audit: '2026-11-24',
  realisations: '2026-09-14',
  aPropos: '2026-11-24',
  contact: '2026-11-24',
  faq: '2026-09-14',
  blog: '2026-08-15',
  nimes: '2026-09-28',
  villes: '2026-09-28',
}

type Entry = MetadataRoute.Sitemap[number]

function page(path: string, date: string, priority: number, changeFrequency: Entry['changeFrequency'] = 'monthly'): Entry {
  return { url: `${SITE_URL}${path}`, lastModified: new Date(date), changeFrequency, priority }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = getAllPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    page('', LAST_MODIFIED.home, 1),
    ...SERVICES.map((s) => page(s.href, LAST_MODIFIED.services, 0.9)),
    page('/audit', LAST_MODIFIED.audit, 0.9),
    page('/realisations', LAST_MODIFIED.realisations, 0.8),
    page('/a-propos', LAST_MODIFIED.aPropos, 0.6),
    page('/contact', LAST_MODIFIED.contact, 0.7, 'yearly'),
    page('/faq', LAST_MODIFIED.faq, 0.6),
    page('/blog', LAST_MODIFIED.blog, 0.8, 'weekly'),
    page('/agence-web/nimes', LAST_MODIFIED.nimes, 0.9),
    ...villes.map((v) => page(`/agence-web/${v.slug}`, LAST_MODIFIED.villes, 0.7)),
    ...blogPosts,
  ]
}
