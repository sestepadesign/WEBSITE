/**
 * Generates public/sitemap-images.xml — a standalone image sitemap
 * (https://developers.google.com/search/docs/crawling-indexing/sitemaps/image-sitemaps)
 * listing every portfolio photo per project page, per locale.
 *
 * @astrojs/sitemap does not support <image:image> entries (confirmed against
 * its docs), so this is generated separately and referenced directly from
 * robots.txt rather than folded into Astro's own sitemap-index.xml.
 *
 * Rules kept in sync with the sitemaps.org / Google spec:
 *   - every <loc> / <image:loc> is a fully URL-encoded absolute URL
 *     (spaces -> %20, parens -> %28/%29) THEN XML-entity-escaped;
 *   - an image is only listed if its file actually exists in public/, so the
 *     sitemap never points Googlebot at a 404;
 *   - output is deterministic (stable ordering) so diffs stay readable.
 *
 * Run: node scripts/generate-image-sitemap.mjs
 */
import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const PUBLIC_DIR = path.join(ROOT, 'public');
const SITE_URLS_PATH = path.join(ROOT, 'src/data/site-urls.ts');
const PROJECTS_PATH = path.join(ROOT, 'src/data/projects.ts');
const OUTPUT_PATH = path.join(PUBLIC_DIR, 'sitemap-images.xml');
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

/** Encode a root-relative pathname into a spec-valid absolute URL. */
function toAbsoluteUrl(pathname) {
  // encodeURI leaves reserved chars intact but fixes spaces/UTF-8; then the
  // few sub-delimiters Googlebot is picky about in practice.
  const encoded = encodeURI(pathname)
    .replace(/\(/g, '%28')
    .replace(/\)/g, '%29')
    .replace(/'/g, '%27');
  return `${SITE_URL}${encoded}`;
}

function xmlEscape(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

async function fileExists(pathname) {
  try {
    await fs.access(path.join(PUBLIC_DIR, pathname.replace(/^\//, '')));
    return true;
  } catch {
    return false;
  }
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

function renderUrlEntry(locPathname, imagePathnames) {
  const images = imagePathnames
    .map(
      (p) =>
        `    <image:image>\n      <image:loc>${xmlEscape(
          toAbsoluteUrl(p),
        )}</image:loc>\n    </image:image>`,
    )
    .join('\n');
  return `  <url>\n    <loc>${xmlEscape(
    toAbsoluteUrl(locPathname),
  )}</loc>\n${images}\n  </url>`;
}

async function buildSitemapXml(projectPaths, projectImages) {
  const urlEntries = [];
  const skipped = [];

  // Homepage entries in all locales.
  const homeImages = [];
  for (const imgPath of HOMEPAGE_FEATURED_IMAGES) {
    if (await fileExists(imgPath)) homeImages.push(imgPath);
    else skipped.push(imgPath);
  }
  for (const locale of LOCALES) {
    urlEntries.push(renderUrlEntry(HOMEPAGE_PATHS[locale], homeImages));
  }

  for (const [slug, filenames] of Object.entries(projectImages)) {
    const paths = projectPaths[slug];
    if (!paths) continue; // no public URL for this project — nothing to point a sitemap entry at

    const present = [];
    for (const filename of filenames) {
      const rel = `/portfolio/${slug}/images/${filename}`;
      if (await fileExists(rel)) present.push(rel);
      else skipped.push(rel);
    }
    if (present.length === 0) continue;

    for (const locale of LOCALES) {
      urlEntries.push(renderUrlEntry(paths[locale], present));
    }
  }

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
    ...urlEntries,
    '</urlset>',
    '',
  ].join('\n');

  return { xml, skipped };
}

async function main() {
  const [siteUrlsSource, projectsSource] = await Promise.all([
    fs.readFile(SITE_URLS_PATH, 'utf8'),
    fs.readFile(PROJECTS_PATH, 'utf8'),
  ]);

  const projectPaths = parseProjectPublicPaths(siteUrlsSource);
  const projectImages = parseProjectImages(projectsSource);

  const { xml, skipped } = await buildSitemapXml(projectPaths, projectImages);
  await fs.writeFile(OUTPUT_PATH, xml);

  const uniqueImages = new Set();
  for (const m of xml.matchAll(/<image:loc>([^<]+)<\/image:loc>/g)) uniqueImages.add(m[1]);
  const urlCount = [...xml.matchAll(/<url>/g)].length;

  console.log(
    `Updated ${path.relative(ROOT, OUTPUT_PATH)} — ${urlCount} <url> entries, ${uniqueImages.size} unique images.`,
  );
  if (skipped.length) {
    console.warn(
      `\n${skipped.length} image(s) referenced in projects.ts but missing from public/ — left OUT of the sitemap:`,
    );
    for (const s of skipped) console.warn(`  - ${s}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
