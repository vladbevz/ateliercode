import fs from 'fs';
import path from 'path';

export type BlogSection = {
  heading?: string;
  paragraphs: string[];
  list?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category?: string;
  sections: BlogSection[];
};

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.json'))
    .map((f) => JSON.parse(fs.readFileSync(path.join(BLOG_DIR, f), 'utf-8')) as BlogPost)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
  const file = path.join(BLOG_DIR, `${slug}.json`);
  if (!fs.existsSync(file)) return null;
  return JSON.parse(fs.readFileSync(file, 'utf-8')) as BlogPost;
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
