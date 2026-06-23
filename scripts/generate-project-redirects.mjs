/**
 * Generates Cloudflare _redirects rules so legacy /{lang}/portfolio/{slug}/ URLs
 * always resolve to design.sestepa.com canonical project paths.
 *
 * Run: node scripts/generate-project-redirects.mjs
 */
import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const SITE_URLS_PATH = path.join(ROOT, 'src/data/site-urls.ts');
const REDIRECTS_PATH = path.join(ROOT, 'public/_redirects');
const MARKER_START = '# --- project-url-redirects (auto-generated) ---';
const MARKER_END = '# --- end project-url-redirects ---';

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

function parsePathAliases(source) {
  const block = source.match(
    /export const PROJECT_PATH_ALIASES[\s\S]*?=\s*\{([\s\S]*?)\n\};/,
  )?.[1];
  if (!block) return { en: {}, es: {}, de: {} };

  const aliases = { en: {}, es: {}, de: {} };
  for (const lang of ['en', 'es', 'de']) {
    const langBlock = block.match(new RegExp(`${lang}:\\s*\\{([^}]*)\\}`, 's'))?.[1] ?? '';
    for (const [, alias, target] of langBlock.matchAll(/['"]([^'"]+)['"]:\s*'([^']+)'/g)) {
      aliases[lang][alias] = target;
    }
  }
  return aliases;
}

function ensureTrailingSlash(p) {
  return p.endsWith('/') ? p : `${p}/`;
}

function buildRedirectLines(projectPaths, aliases) {
  const lines = [];
  const seen = new Set();

  const add = (from, to) => {
    const source = ensureTrailingSlash(from);
    const target = ensureTrailingSlash(to);
    if (source === target) return;
    const line = `${source}  ${target}  301`;
    if (seen.has(line)) return;
    seen.add(line);
    lines.push(line);
  };

  for (const [slug, locales] of Object.entries(projectPaths)) {
    add(`/en/portfolio/${slug}/`, locales.en);
    add(`/es/portfolio/${slug}/`, locales.es);
    add(`/de/portfolio/${slug}/`, locales.de);
  }

  for (const lang of ['en', 'es', 'de']) {
    const prefix = lang === 'en' ? '' : `/${lang}`;
    for (const [aliasSegment, canonicalPath] of Object.entries(aliases[lang])) {
      add(`${prefix}/${aliasSegment}/`, canonicalPath);
      add(`${prefix}/portfolio/${aliasSegment}/`, canonicalPath);
    }
  }

  return lines.sort();
}

async function main() {
  const source = await fs.readFile(SITE_URLS_PATH, 'utf8');
  const projectPaths = parseProjectPublicPaths(source);
  const aliases = parsePathAliases(source);

  if (Object.keys(projectPaths).length < 16) {
    throw new Error(`Expected 16 projects, got ${Object.keys(projectPaths).length}`);
  }

  const generated = [
    MARKER_START,
    '# Internal Astro slugs → design.sestepa.com canonical URLs',
    ...buildRedirectLines(projectPaths, aliases),
    MARKER_END,
    '',
  ].join('\n');

  let redirects = await fs.readFile(REDIRECTS_PATH, 'utf8');
  const startIdx = redirects.indexOf(MARKER_START);
  const endIdx = redirects.indexOf(MARKER_END);

  if (startIdx !== -1 && endIdx !== -1) {
    redirects =
      redirects.slice(0, startIdx) + generated + redirects.slice(endIdx + MARKER_END.length);
  } else {
    redirects = redirects.trimEnd() + '\n\n' + generated;
  }

  await fs.writeFile(REDIRECTS_PATH, redirects);
  console.log(`Updated ${REDIRECTS_PATH} (${Object.keys(projectPaths).length} projects)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
