import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import { getAllPosts, formatDate } from '../lib/blog';

export const metadata: Metadata = {
  title: 'Blog — Conseils création de sites web pour artisans et PME',
  description:
    "Articles pratiques sur la création de sites web, le SEO local et le digital pour les artisans, commerçants et PME du Gard et d'Occitanie. Par AtelierCode, agence web à Nîmes.",
  alternates: { canonical: 'https://www.ateliercode.fr/blog' },
  openGraph: {
    title: 'Blog — AtelierCode | Conseils création de sites web',
    description: "Articles pratiques sur la création de sites web, le SEO local et le digital pour les artisans et PME du Gard.",
    url: 'https://www.ateliercode.fr/blog',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="relative min-h-screen bg-zinc-950 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-600/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-4">Blog</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-zinc-100 leading-[0.9] mb-5">
            Conseils pour votre<br />
            <span className="text-zinc-500">présence en ligne.</span>
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed">
            Articles pratiques sur la création de sites web, le SEO local et le digital pour les professionnels du Gard et d&apos;Occitanie.
          </p>
        </div>

        {/* Posts */}
        {posts.length === 0 ? (
          <p className="text-center text-zinc-600 py-20">Aucun article pour le moment.</p>
        ) : (
          <div className="max-w-3xl mx-auto space-y-5">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <article className="p-7 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-2xl transition-all hover:shadow-xl hover:shadow-zinc-950/50">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    {post.category && (
                      <span className="text-xs font-semibold text-zinc-400 bg-zinc-800 px-2.5 py-1 rounded-full">
                        {post.category}
                      </span>
                    )}
                    <time dateTime={post.date} className="flex items-center gap-1.5 text-sm text-zinc-600">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(post.date)}
                    </time>
                  </div>
                  <h2 className="text-xl font-bold text-zinc-100 mb-3 group-hover:text-amber-400 transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-zinc-400 leading-relaxed mb-5 text-sm">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-400 group-hover:text-amber-400 group-hover:gap-3 transition-all">
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
