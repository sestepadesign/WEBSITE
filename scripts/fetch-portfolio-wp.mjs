/**
 * Fetch official portfolio texts from design.sestepa.com (API + HTML fallback)
 * Run: node scripts/fetch-portfolio-wp.mjs
 */
import fs from 'node:fs/promises';

const SLUGS = [
  'binissalem',
  'bunyola',
  'campanet-garden',
  'finca-garden-campos-mallorca',
  'costadelacalma',
  'crestatx-garden-design',
  'hotelcabotlasvelas',
  'garden-design-llubi-mallorca',
  'sant-llorenc',
  'terrace-garden-santa-eugenia',
  'santa-ponsa',
  'son-vida',
  'terrace-garden-in-palma',
  'vertical-gardens-in-mallorca',
  'finca-garden-inca',
  'seaside-house-alcudia',
];

const LANGS = [
  { code: 'en', base: 'https://design.sestepa.com' },
  { code: 'es', base: 'https://design.sestepa.com/es' },
  { code: 'de', base: 'https://design.sestepa.com/de' },
];

function decodeHtml(str) {
  return str
    .replace(/&nbsp;/g, ' ')
    .replace(/&#8217;/g, "'")
    .replace(/&rsquo;/g, "'")
    .replace(/&ldquo;/g, '"')
    .replace(/&rdquo;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)));
}

function stripHtml(html) {
  return decodeHtml(
    html
      .replace(/<script[\s\S]*?<\/script>/gi, '')
      .replace(/<style[\s\S]*?<\/style>/gi, '')
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<\/p>/gi, '\n')
      .replace(/<\/h[1-6]>/gi, '\n')
      .replace(/<li>/gi, '• ')
      .replace(/<\/li>/gi, '\n')
      .replace(/<[^>]+>/g, '')
      .replace(/\n{3,}/g, '\n\n')
      .trim(),
  );
}

function toParagraphs(text) {
  return text
    .split(/\n+/)
    .map((p) => p.replace(/\s+/g, ' ').trim())
    .filter(
      (p) =>
        p.length >= 60 &&
        !/^VIDEO YOUTUBE/i.test(p) &&
        !/^(BINISSALEM|BUNYOLA|CAMPOS|CRESTATX|SANT LLORENÇ|BINISSALEM|CAMPOS)$/i.test(p) &&
        !/^NOMBRE$|^CORREO|^CONTACTO|^PORTFOLIO$/i.test(p),
    );
}

function extractParagraphsFromHtml(html) {
  const matches = [...html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)];
  const paragraphs = matches
    .map((m) => stripHtml(m[1]))
    .filter((p) => p.length >= 60);
  return toParagraphs(paragraphs.join('\n'));
}

async function fetchPost(base, slug) {
  const url = `${base}/wp-json/wp/v2/posts?slug=${encodeURIComponent(slug)}&_fields=slug,title,content,excerpt`;
  const res = await fetch(url);
  if (!res.ok) return null;
  const data = await res.json();
  if (!data.length) return null;
  const post = data[0];
  const title = stripHtml(post.title?.rendered ?? '');
  const excerpt = stripHtml(post.excerpt?.rendered ?? '');
  const paragraphs = toParagraphs(stripHtml(post.content?.rendered ?? ''));
  return { title, excerpt, paragraphs, source: 'api' };
}

async function fetchHtml(base, slug) {
  const url = `${base}/${slug}/`;
  const res = await fetch(url, { headers: { 'User-Agent': 'SESTEPA-migration/1.0' } });
  if (!res.ok) return null;
  const html = await res.text();
  const paragraphs = extractParagraphsFromHtml(html);
  if (!paragraphs.length) return null;
  return { title: '', excerpt: '', paragraphs, source: 'html' };
}

async function fetchLang(base, slug) {
  const api = await fetchPost(base, slug);
  if (api?.paragraphs?.length) return api;
  const html = await fetchHtml(base, slug);
  if (html?.paragraphs?.length) return html;
  return null;
}

async function main() {
  const out = {};

  for (const slug of SLUGS) {
    out[slug] = {};
    for (const { code, base } of LANGS) {
      try {
        const post = await fetchLang(base, slug);
        out[slug][code] = post;
        const info = post
          ? `${post.paragraphs.length}¶ (${post.source})`
          : 'NOT FOUND';
        console.log(`${slug} [${code}]: ${info}`);
      } catch {
        out[slug][code] = null;
        console.log(`${slug} [${code}]: ERROR`);
      }
    }
  }

  await fs.writeFile('src/data/wp-portfolio-raw.json', JSON.stringify(out, null, 2), 'utf8');
  console.log('\nSaved src/data/wp-portfolio-raw.json');
}

main();
