import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import { getAllPosts, formatDate } from '../lib/blog';

export const metadata: Metadata = {
  title: 'Blog — Conseils web pour artisans & entreprises à Nîmes',
  description:
    'Guides et conseils pour les professionnels à Nîmes : création de site web, SEO local, e-commerce, applications web.',
  alternates: {
    canonical: 'https://www.ateliercode.fr/blog',
  },
  openGraph: {
    title: 'Blog — Conseils web pour artisans & entreprises à Nîmes',
    description:
      'Guides et conseils pour les professionnels à Nîmes : création de site web, SEO local, e-commerce, applications web.',
    url: 'https://www.ateliercode.fr/blog',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-white via-gray-50/60 to-white pointer-events-none" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-gray-100 rounded-full blur-3xl opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">

        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Blog</p>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Conseils pour votre<br />
            <span className="text-gray-400">présence en ligne.</span>
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            Articles pratiques sur la création de sites web, le SEO local et le digital pour les professionnels du Gard et d&apos;Occitanie.
          </p>
        </div>

        {/* Posts */}
        {posts.length === 0 ? (
          <p className="text-center text-gray-400 py-20">Aucun article pour le moment.</p>
        ) : (
          <div className="max-w-3xl mx-auto space-y-6">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <article className="p-8 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    {post.category && (
                      <span className="text-xs font-semibold text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full">
                        {post.category}
                      </span>
                    )}
                    <time
                      dateTime={post.date}
                      className="flex items-center gap-1.5 text-sm text-gray-400"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(post.date)}
                    </time>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-600 transition-colors leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-gray-500 leading-relaxed mb-5">{post.excerpt}</p>

                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 group-hover:gap-3 transition-all">
                    Lire la suite
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
