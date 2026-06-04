import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Calendar } from 'lucide-react';
import { getPostBySlug, getAllPosts, formatDate } from '../../lib/blog';

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://www.ateliercode.fr/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.ateliercode.fr/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { '@type': 'Person', name: 'Vladyslav Bevz', url: 'https://www.ateliercode.fr/a-propos' },
    publisher: { '@type': 'Organization', name: 'AtelierCode', url: 'https://www.ateliercode.fr' },
  };

  return (
    <div className="relative bg-zinc-950 min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 py-20 md:py-28 relative z-10">

        {/* Back */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-100 transition-colors mb-10">
          <ArrowLeft className="w-4 h-4" />
          Retour au blog
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-5">
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

          <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-100 leading-tight mb-5">
            {post.title}
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed">{post.excerpt}</p>
          <div className="mt-8 border-t border-zinc-800" />
        </header>

        {/* Content */}
        <div className="space-y-2">
          {post.sections.map((section, idx) => (
            <div key={idx} className={section.heading ? 'mt-10' : ''}>
              {section.heading && (
                <h2 className="text-2xl font-black tracking-tighter text-zinc-100 mb-4">{section.heading}</h2>
              )}
              {section.paragraphs[0] && (
                <p className="text-lg text-zinc-300 leading-relaxed">{section.paragraphs[0]}</p>
              )}
              {section.list && (
                <ul className="my-5 space-y-2.5">
                  {section.list.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-zinc-300">
                      <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      <span className="text-lg leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              {section.paragraphs.slice(1).map((p, i) => (
                <p key={i} className="text-lg text-zinc-300 leading-relaxed mt-4">{p}</p>
              ))}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 md:p-10 bg-zinc-900 border border-zinc-800 rounded-2xl text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/6 rounded-full blur-[60px] pointer-events-none" />
          <div className="relative z-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-3">AtelierCode · Nîmes</p>
            <h3 className="text-2xl md:text-3xl font-black tracking-tighter text-zinc-100 mb-3">
              Vous êtes artisan ou commerçant ?
            </h3>
            <p className="text-zinc-400 mb-7 max-w-md mx-auto">
              Devis gratuit sous 24h. Site vitrine sur mesure dès 499 €, livré en une semaine.
            </p>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber-400 hover:bg-amber-300 text-zinc-950 rounded-xl font-bold transition-all shadow-lg shadow-amber-400/20">
              Demander un devis gratuit
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
