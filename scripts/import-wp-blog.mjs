/**
 * Import blog posts from design.sestepa.com WordPress REST API.
 * Run: node scripts/import-wp-blog.mjs
 */
import fs from 'node:fs/promises';
import path from 'node:path';

const API = 'https://design.sestepa.com/wp-json/wp/v2/posts';
const OUT_DIR = path.resolve('src/content/blog');

const PORTFOLIO_SLUGS = new Set([
  'binissalem',
  'bunyola',
  'campanet-garden',
  'campanet',
  'finca-garden-campos-mallorca',
  'finca-garden-campos',
  'costadelacalma',
  'crestatx-garden-design',
  'crestatx',
  'finca-garden-inca',
  'hotelcabotlasvelas',
  'garden-design-llubi-mallorca',
  'llubi',
  'sant-llorenc',
  'terrace-garden-santa-eugenia',
  'santa-eugenia',
  'santa-ponsa',
  'seaside-house-alcudia',
  'son-vida',
  'terrace-garden-in-palma',
  'terrace-garden-palma',
  'vertical-gardens-in-mallorca',
  'vertical-garden',
  'campos',
  'discover-the-art-of-garden-design',
]);

function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function htmlToMarkdown(html) {
  return html
    .replace(/<\/p>\s*<p>/gi, '\n\n')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<h2[^>]*>/gi, '\n\n## ')
    .replace(/<\/h2>/gi, '\n\n')
    .replace(/<h3[^>]*>/gi, '\n\n### ')
    .replace(/<\/h3>/gi, '\n\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#8217;/g, "'")
    .replace(/&rsquo;/g, "'")
    .replace(/&ldquo;/g, '"')
    .replace(/&rdquo;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function yamlEscape(str) {
  return str.replace(/"/g, '\\"');
}

async function fetchAllPosts() {
  const posts = [];
  let page = 1;

  while (page <= 5) {
    const res = await fetch(`${API}?per_page=100&page=${page}&status=publish`);
    if (!res.ok) break;
    const batch = await res.json();
    if (!batch.length) break;
    posts.push(...batch);
    if (batch.length < 100) break;
    page++;
  }

  return posts;
}

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });

  const posts = await fetchAllPosts();
  let imported = 0;

  for (const post of posts) {
    if (PORTFOLIO_SLUGS.has(post.slug)) continue;

    const title = stripHtml(post.title?.rendered ?? '').slice(0, 200);
    const description = stripHtml(post.excerpt?.rendered ?? '').slice(0, 300);
    const body = htmlToMarkdown(post.content?.rendered ?? '');
    const pubDate = (post.date ?? new Date().toISOString()).slice(0, 10);
    const lang = 'en';

    const frontmatter = `---
title: "${yamlEscape(title)}"
description: "${yamlEscape(description)}"
pubDate: ${pubDate}
lang: ${lang}
draft: false
---

`;

    const filePath = path.join(OUT_DIR, `${post.slug}.md`);
    await fs.writeFile(filePath, frontmatter + body + '\n', 'utf8');
    imported++;
    console.log(`✓ ${post.slug}`);
  }

  console.log(`\nImported ${imported} EN blog posts to ${OUT_DIR}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
