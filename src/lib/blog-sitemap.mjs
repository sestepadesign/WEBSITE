// Read at build time by astro.config.mjs — no TS, no content-collection API here.
// Walks src/content/blog/**/*.md and returns, per public URL:
//   - noindex     : missing `noindex:` or `noindex: true` → true (matches the schema default)
//   - lastmod     : YYYY-MM-DD from updatedDate ?? pubDate
//   - alternates  : xhtml:link set for posts that exist in en + es + de
//   - all         : every blog-post pathname (to strip @astrojs/sitemap's mis-guessed i18n links)
// URL shape mirrors the routes:  en → /<slug>/ ,  es → /es/blog/<slug>/ ,  de → /de/blog/<slug>/
import fs from 'node:fs';
import path from 'node:path';

const SITE = 'https://design.sestepa.com';
const BLOG_DIR = path.resolve('./src/content/blog');
const LOCALE_TAG = { en: 'en-US', es: 'es-ES', de: 'de-DE' };

function frontmatter(src) {
  const m = /^---\r?\n([\s\S]*?)\r?\n---/.exec(src);
  return m ? m[1] : '';
}
function fmValue(fm, key) {
  const m = new RegExp(`^${key}:\\s*["']?([^"'\\r\\n]+?)["']?\\s*$`, 'm').exec(fm);
  return m ? m[1].trim() : undefined;
}
function walk(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (entry.name.endsWith('.md')) out.push(full);
  }
  return out;
}
const urlFor = (lang, slug) =>
  lang === 'es' ? `/es/blog/${slug}/` : lang === 'de' ? `/de/blog/${slug}/` : `/${slug}/`;

export function readBlogSitemapData() {
  const noindex = new Set();
  const lastmod = {};
  const all = new Set();
  const bySlug = {}; // slug -> Set<lang>

  for (const file of walk(BLOG_DIR)) {
    const rel = path.relative(BLOG_DIR, file).replace(/\\/g, '/');
    const slug = rel.replace(/\.md$/, '').split('/').pop();
    const lang = rel.includes('/') ? rel.split('/')[0] : 'en';
    const pathname = urlFor(lang, slug);
    all.add(pathname);
    (bySlug[slug] ??= new Set()).add(lang);

    const fm = frontmatter(fs.readFileSync(file, 'utf8'));
    if (fmValue(fm, 'noindex') !== 'false') noindex.add(pathname);

    const date = fmValue(fm, 'updatedDate') || fmValue(fm, 'pubDate');
    if (date) {
      const d = new Date(date);
      if (!isNaN(d)) lastmod[pathname] = d.toISOString().slice(0, 10);
    }
  }

  // xhtml:link alternates only for posts translated into all three locales.
  const alternates = {};
  for (const [slug, langs] of Object.entries(bySlug)) {
    if (!(langs.has('en') && langs.has('es') && langs.has('de'))) continue;
    const links = ['en', 'es', 'de'].map((l) => ({ lang: LOCALE_TAG[l], url: `${SITE}${urlFor(l, slug)}` }));
    for (const l of ['en', 'es', 'de']) alternates[urlFor(l, slug)] = links;
  }

  return { noindex, lastmod, alternates, all };
}

// Non-blog pages that render <meta name="robots" content="noindex"> and must
// stay out of the sitemap. Keep in sync with components that pass noindex={true}.
export const NOINDEX_PATHS = ['/404/', '/dashboard/', '/lab/home-preview/'];
