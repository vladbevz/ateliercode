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
    alternates: {
      canonical: `https://www.ateliercode.fr/blog/${post.slug}`,
    },
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
    url: `https://www.ateliercode.fr/blog/${post.slug}`,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.ateliercode.fr/blog/${post.slug}`,
    },
    author: {
      '@type': 'Person',
      name: 'Vladyslav Bevz',
      url: 'https://www.ateliercode.fr/a-propos',
    },
    publisher: {
      '@type': 'Organization',
      name: 'AtelierCode',
      url: 'https://www.ateliercode.fr',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.ateliercode.fr/favicon.ico',
      },
    },
  };

  return (
    <div className="relative bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="max-w-3xl mx-auto px-4 py-16 md:py-24">

        {/* Back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-900 transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour au blog
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-5">
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

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            {post.title}
          </h1>

          <p className="text-xl text-gray-500 leading-relaxed">{post.excerpt}</p>

          <div className="mt-8 border-t border-gray-200" />
        </header>

        {/* Content */}
        <div className="space-y-2">
          {post.sections.map((section, idx) => (
            <div key={idx} className={section.heading ? 'mt-10' : ''}>
              {section.heading && (
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {section.heading}
                </h2>
              )}

              {section.paragraphs[0] && (
                <p className="text-lg text-gray-600 leading-relaxed">
                  {section.paragraphs[0]}
                </p>
              )}

              {section.list && (
                <ul className="my-5 space-y-2.5">
                  {section.list.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                      <span className="text-lg leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.paragraphs.slice(1).map((p, i) => (
                <p key={i} className="text-lg text-gray-600 leading-relaxed mt-4">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 md:p-10 bg-gray-900 rounded-2xl text-center relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-gray-800 rounded-full blur-3xl opacity-60 pointer-events-none" />
          <div className="relative z-10">
            <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-3">
              AtelierCode · Nîmes
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Vous êtes artisan ou commerçant ?
            </h3>
            <p className="text-gray-400 mb-7 max-w-md mx-auto">
              Devis gratuit sous 24h. Site vitrine sur mesure dès 499 €, livré en une semaine.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg"
            >
              Demander un devis gratuit
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
