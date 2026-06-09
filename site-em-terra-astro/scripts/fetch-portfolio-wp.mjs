/**
 * Fetch official portfolio texts from design.sestepa.com
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

function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n')
    .replace(/<\/h[1-6]>/gi, '\n')
    .replace(/<li>/gi, '• ')
    .replace(/<\/li>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#8217;/g, "'")
    .replace(/&rsquo;/g, "'")
    .replace(/&ldquo;/g, '"')
    .replace(/&rdquo;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&em;/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function toParagraphs(text) {
  return text
    .split(/\n+/)
    .map((p) => p.trim())
    .filter((p) => p.length > 40 && !/^VIDEO YOUTUBE/i.test(p) && !/^BINISSALEM$/i.test(p));
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
  return { title, excerpt, paragraphs };
}

async function main() {
  const out = {};

  for (const slug of SLUGS) {
    out[slug] = {};
    for (const { code, base } of LANGS) {
      try {
        const post = await fetchPost(base, slug);
        out[slug][code] = post;
        console.log(`${slug} [${code}]: ${post ? post.paragraphs.length + ' paragraphs' : 'NOT FOUND'}`);
      } catch (err) {
        out[slug][code] = null;
        console.log(`${slug} [${code}]: ERROR`);
      }
    }
  }

  await fs.writeFile('src/data/wp-portfolio-raw.json', JSON.stringify(out, null, 2), 'utf8');
  console.log('\nSaved src/data/wp-portfolio-raw.json');
}

main();
