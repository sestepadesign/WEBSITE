/**
 * Generates public/sitemap-images.xml — a standalone image sitemap
 * (https://developers.google.com/search/docs/crawling-indexing/sitemaps/image-sitemaps)
 * listing every portfolio photo per project page, per locale.
 *
 * @astrojs/sitemap does not support <image:image> entries (confirmed against
 * its docs), so this is generated separately and referenced directly from
 * robots.txt rather than folded into Astro's own sitemap-index.xml.
 *
 * Run: node scripts/generate-image-sitemap.mjs
 */
import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const SITE_URLS_PATH = path.join(ROOT, 'src/data/site-urls.ts');
const PROJECTS_PATH = path.join(ROOT, 'src/data/projects.ts');
const OUTPUT_PATH = path.join(ROOT, 'public/sitemap-images.xml');
const SITE_URL = 'https://design.sestepa.com';
const LOCALES = ['en', 'es', 'de'];

function parseProjectPublicPaths(source) {
  const block = source.match(
    /export const PROJECT_PUBLIC_PATHS[\s\S]*?=\s*\{([\s\S]*?)\n\};/,
  )?.[1];
  if (!block) throw new Error('PROJECT_PUBLIC_PATHS not found in site-urls.ts');

  const paths = {};
  const entries = block.matchAll(
    /['"]?([\w-]+)['"]?:\s*\{\s*en:\s*'([^']+)',\s*es:\s*'([^']+)',\s*de:\s*'([^']+)',?\s*\}/g,
  );
  for (const [, slug, en, es, de] of entries) {
    paths[slug] = { en, es, de };
  }
  return paths;
}

/**
 * projects.ts has exactly one `slug:` and one `images: [...]` per project
 * object, in that field order — pairing them positionally avoids needing a
 * full TS parser for what's otherwise a flat data file.
 */
function parseProjectImages(source) {
  const slugs = [...source.matchAll(/^\s*slug: "([\w-]+)"/gm)].map((m) => m[1]);
  const imageBlocks = [...source.matchAll(/^\s*images: \[([\s\S]*?)\n\s*\],?\s*$/gm)].map(
    (m) => m[1],
  );
  const hiddenFlags = [...source.matchAll(/^\s*(slug|hidden): (?:"([\w-]+)"|(true))/gm)];

  if (slugs.length !== imageBlocks.length) {
    throw new Error(
      `Mismatched slug (${slugs.length}) / images (${imageBlocks.length}) counts in projects.ts — parser assumption broken, needs a real fix, not a silent partial sitemap.`,
    );
  }

  // Walk slug/hidden markers in file order so each hidden flag attaches to
  // the slug immediately preceding it.
  const hiddenSlugs = new Set();
  let currentSlug = null;
  for (const [, key, slugVal, hiddenVal] of hiddenFlags) {
    if (key === 'slug') currentSlug = slugVal;
    if (key === 'hidden' && hiddenVal === 'true' && currentSlug) hiddenSlugs.add(currentSlug);
  }

  const result = {};
  slugs.forEach((slug, i) => {
    if (hiddenSlugs.has(slug)) return;
    const filenames = [...imageBlocks[i].matchAll(/"([^"]+)"/g)].map((m) => m[1]);
    if (filenames.length > 0) result[slug] = filenames;
  });
  return result;
}

function xmlEscape(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

const HOMEPAGE_PATHS = {
  en: '/',
  es: '/es/',
  de: '/de/',
};

const HOMEPAGE_FEATURED_IMAGES = [
  '/portfolio/sant-llorenc/images/garden-design-mallorca-sestepa-landscape-design-sant-llorenc-18.webp',
  '/portfolio/sant-llorenc/images/garden-design-mallorca-sestepa-landscape-design-sant-llorenc-15.webp',
  '/portfolio/sant-llorenc/images/garden-design-mallorca-sestepa-landscape-design-sant-llorenc-01.webp',
  '/portfolio/terrace-garden-in-palma/garden-design-mallorca-terrace-garden-in-palma-sestepa.webp',
  '/portfolio/finca-garden-campos-mallorca/garden-design-mallorca-finca-garden-campos-mallorca-sestepa.webp',
  '/portfolio/jardin-mediterraneo/images/garden-design-mallorca-jardin-mediterraneo-sestepa.webp',
  '/portfolio/crestatx-garden-design/garden-design-mallorca-crestatx-garden-design-sestepa.webp',
  '/portfolio/santa-ponsa/images/GARDEN-DESIGN-MALLORCA-SANTA-PONSA-SESTEPA-1.webp',
];

function buildSitemapXml(projectPaths, projectImages) {
  const urlEntries = [];

  // Homepage entries in all locales
  for (const locale of LOCALES) {
    const loc = `${SITE_URL}${HOMEPAGE_PATHS[locale]}`;
    const images = HOMEPAGE_FEATURED_IMAGES
      .map(
        (imgPath) =>
          `    <image:image>\n      <image:loc>${xmlEscape(
            `${SITE_URL}${imgPath}`,
          )}</image:loc>\n    </image:image>`,
      )
      .join('\n');
    urlEntries.push(`  <url>\n    <loc>${xmlEscape(loc)}</loc>\n${images}\n  </url>`);
  }

  for (const [slug, filenames] of Object.entries(projectImages)) {
    const paths = projectPaths[slug];
    if (!paths) continue; // no public URL for this project — nothing to point a sitemap entry at

    for (const locale of LOCALES) {
      const loc = `${SITE_URL}${paths[locale]}`;
      const images = filenames
        .map(
          (filename) =>
            `    <image:image>\n      <image:loc>${xmlEscape(
            `${SITE_URL}/portfolio/${slug}/images/${filename}`,
          )}</image:loc>\n    </image:image>`,
        )
        .join('\n');
      urlEntries.push(`  <url>\n    <loc>${xmlEscape(loc)}</loc>\n${images}\n  </url>`);
    }
  }

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
    ...urlEntries,
    '</urlset>',
    '',
  ].join('\n');
}

async function main() {
  const [siteUrlsSource, projectsSource] = await Promise.all([
    fs.readFile(SITE_URLS_PATH, 'utf8'),
    fs.readFile(PROJECTS_PATH, 'utf8'),
  ]);

  const projectPaths = parseProjectPublicPaths(siteUrlsSource);
  const projectImages = parseProjectImages(projectsSource);

  const xml = buildSitemapXml(projectPaths, projectImages);
  await fs.writeFile(OUTPUT_PATH, xml);

  const totalImages = Object.values(projectImages).reduce((n, imgs) => n + imgs.length, 0);
  console.log(
    `Updated ${OUTPUT_PATH} (${Object.keys(projectImages).length} projects, ${totalImages} images x ${LOCALES.length} locales)`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
