import Link from 'next/link';
import { ArrowRight, Calendar, BookOpen } from 'lucide-react';
import { getAllPosts, formatDate } from '../lib/blog';

export default function HomeBlogTeaser() {
  const post = getAllPosts()[0];
  if (!post) return null;

  return (
    <section className="border-y border-gray-200 bg-gray-50 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">

          {/* Left label */}
          <div className="shrink-0 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-3">
              <BookOpen className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-semibold text-gray-600">Dernier article</span>
            </div>
            <p className="text-sm text-gray-400">
              Conseils gratuits pour<br />votre présence en ligne
            </p>
          </div>

          {/* Separator */}
          <div className="hidden md:block w-px h-20 bg-gray-200 shrink-0" />

          {/* Article card */}
          <Link href={`/blog/${post.slug}`} className="group flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row items-start gap-5 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <div className="flex-1 min-w-0">
                {post.category && (
                  <span className="inline-block text-xs font-semibold text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full mb-3">
                    {post.category}
                  </span>
                )}
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-gray-600 transition-colors leading-snug mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2 mb-3">{post.excerpt}</p>
                <time className="flex items-center gap-1.5 text-xs text-gray-400">
                  <Calendar className="w-3.5 h-3.5" />
                  {formatDate(post.date)}
                </time>
              </div>
              <div className="shrink-0 flex items-center gap-1 text-sm font-semibold text-gray-900 group-hover:gap-2 transition-all mt-1 sm:mt-0 whitespace-nowrap">
                Lire
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>

          {/* Blog link */}
          <Link
            href="/blog"
            className="shrink-0 text-sm font-medium text-gray-400 hover:text-gray-900 transition-colors whitespace-nowrap"
          >
            Voir tous les articles →
          </Link>
        </div>
      </div>
    </section>
  );
}
