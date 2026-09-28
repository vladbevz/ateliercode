import { MetadataRoute } from 'next'
import { getAllPosts } from './lib/blog'
import { villes } from './lib/villes-data'

// Dates de dernière modification réelle du contenu de chaque page (pas la
// date de build). À mettre à jour manuellement quand le contenu change,
// pas automatiquement à chaque déploiement.
const LAST_MODIFIED = {
  home: '2026-09-27',
  agenceWebNimes: '2026-09-28',
  applicationWebNimes: '2026-09-12',
  tarifs: '2026-09-20',
  realisations: '2026-09-14',
  contact: '2026-09-28',
  pourqui: '2026-08-20',
  processus: '2026-09-17',
  aPropos: '2026-08-22',
  faq: '2026-09-14',
  blog: '2026-08-15',
  audit: '2026-09-04',
  villes: '2026-09-28',
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.ateliercode.fr'

  const blogPosts = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const villePages = villes.map((ville) => ({
    url: `${baseUrl}/agence-web/${ville.slug}`,
    lastModified: new Date(LAST_MODIFIED.villes),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(LAST_MODIFIED.home),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/agence-web-nimes`,
      lastModified: new Date(LAST_MODIFIED.agenceWebNimes),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/application-web-nimes`,
      lastModified: new Date(LAST_MODIFIED.applicationWebNimes),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tarifs`,
      lastModified: new Date(LAST_MODIFIED.tarifs),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/realisations`,
      lastModified: new Date(LAST_MODIFIED.realisations),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(LAST_MODIFIED.contact),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/pourqui`,
      lastModified: new Date(LAST_MODIFIED.pourqui),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/processus`,
      lastModified: new Date(LAST_MODIFIED.processus),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/a-propos`,
      lastModified: new Date(LAST_MODIFIED.aPropos),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(LAST_MODIFIED.faq),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(LAST_MODIFIED.blog),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/audit`,
      lastModified: new Date(LAST_MODIFIED.audit),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    ...villePages,
    ...blogPosts,
  ]
}
