/**
 * Validate all portfolio pages on live site using design.sestepa.com canonical URLs.
 * Run: node scripts/validate-portfolio-live.mjs
 */
import fs from 'node:fs/promises';

const BASE = process.env.SITE_URL || 'https://sestepadesign.pages.dev';
const LANGS = ['en', 'es', 'de'];

function parseProjectPublicPaths(source) {
  const block = source.match(
    /export const PROJECT_PUBLIC_PATHS[\s\S]*?=\s*\{([\s\S]*?)\n\};/,
  )?.[1];
  if (!block) throw new Error('PROJECT_PUBLIC_PATHS not found');
  const paths = {};
  const entries = block.matchAll(
    /['"]?([\w-]+)['"]?:\s*\{\s*en:\s*'([^']+)',\s*es:\s*'([^']+)',\s*de:\s*'([^']+)',?\s*\}/g,
  );
  for (const [, slug, en, es, de] of entries) {
    paths[slug] = { en, es, de };
  }
  return paths;
}

// Minimal language markers to detect wrong-language bleed
const LANG_MARKERS = {
  en: [/\bthe\b/i, /\band\b/i, /\bwith\b/i, /\bour\b/i, /\bthis garden\b/i],
  es: [/\bel\b/i, /\bla\b/i, /\bdel\b/i, /\bhemos\b/i, /\beste jardín\b/i, /\bpara\b/i],
  de: [/\bder\b/i, /\bdie\b/i, /\bdas\b/i, /\bhaben wir\b/i, /\bdieser garten\b/i, /\bund\b/i],
};

function extractProjects(source) {
  const projects = [];
  const blocks = source.split(/\n  \{/).slice(1);
  for (const block of blocks) {
    const slug = block.match(/slug: "([^"]+)"/)?.[1];
    if (!slug) continue;
    const cover = block.match(/cover: "([^"]+)"/)?.[1];
    const images = [...block.matchAll(/images: \[[\s\S]*?\]/g)];
    const imageList = images[0]?.[0].match(/"([^"]+\.(jpg|webp|png|jpeg))"/gi) || [];
    const entry = { slug, cover, imageCount: imageList.length, en: {}, es: {}, de: {} };
    for (const lang of LANGS) {
      const langBlock = block.match(new RegExp(`${lang}:\\s*\\{([\\s\\S]*?)\\n    \\}`, 'm'))?.[1];
      if (!langBlock) continue;
      entry[lang].title = langBlock.match(/title: "([^"]+)"/)?.[1] || '';
      entry[lang].subtitle = langBlock.match(/subtitle: "([^"]+)"/)?.[1] || '';
      const descMatch = langBlock.match(/description:\s*\[([\s\S]*?)\]/);
      entry[lang].paragraphs = descMatch
        ? [...descMatch[1].matchAll(/"((?:\\.|[^"\\])*)"/g)].map((m) =>
            m[1].replace(/\\"/g, '"').replace(/\\\\/g, '\\'),
          )
        : [];
    }
    projects.push(entry);
  }
  return projects;
}

function stripHtml(html) {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function scoreLanguage(text, lang) {
  const markers = LANG_MARKERS[lang];
  return markers.reduce((n, re) => n + (re.test(text) ? 1 : 0), 0);
}

async function headOk(url) {
  try {
    const res = await fetch(url, { method: 'HEAD', redirect: 'follow' });
    return res.ok;
  } catch {
    return false;
  }
}

async function validatePage(project, lang, projectPaths) {
  const path = projectPaths[project.slug]?.[lang];
  if (!path) {
    return { url: project.slug, status: 0, issues: ['MISSING_CANONICAL_PATH'] };
  }
  const url = `${BASE}${path}`;
  const issues = [];
  let status = 0;
  let html = '';

  try {
    const res = await fetch(url, { redirect: 'follow' });
    status = res.status;
    html = await res.text();
  } catch (err) {
    return { url, status: 0, issues: [`FETCH_ERROR: ${err.message}`] };
  }

  if (status !== 200) issues.push(`HTTP_${status}`);

  const t = project[lang];
  if (!t.title) issues.push('MISSING_EXPECTED_TITLE_IN_DATA');

  if (!html.includes(t.title)) issues.push(`TITLE_NOT_FOUND: "${t.title}"`);
  if (t.subtitle && !html.includes(t.subtitle)) issues.push(`SUBTITLE_NOT_FOUND`);

  const descParas = (html.match(/class="project-description"[\s\S]*?<\/div>/i)?.[0] || '')
    .match(/<p[^>]*>[\s\S]*?<\/p>/gi) || [];
  if (descParas.length < 3) issues.push(`LOW_PARAGRAPH_COUNT: ${descParas.length}`);
  if (descParas.length !== t.paragraphs.length) {
    issues.push(`PARAGRAPH_MISMATCH: live ${descParas.length} vs data ${t.paragraphs.length}`);
  }

  for (const p of t.paragraphs.slice(0, 2)) {
    const snippet = p.slice(0, 48);
    if (snippet.length > 20 && !html.includes(snippet)) {
      issues.push(`MISSING_TEXT: "${snippet}..."`);
    }
  }

  for (const p of t.paragraphs) {
    if (p.startsWith('•') && p.length < 80) issues.push(`TRUNCATED_BULLET: ${p.slice(0, 40)}...`);
    if (p.includes('&#')) issues.push(`HTML_ENTITY_IN_DATA: ${p.slice(0, 30)}`);
  }

  const bodyText = stripHtml(html).slice(0, 3000);
  const expectedScore = scoreLanguage(bodyText, lang);
  for (const other of LANGS.filter((l) => l !== lang)) {
    const otherScore = scoreLanguage(bodyText, other);
    if (otherScore > expectedScore + 2) issues.push(`POSSIBLE_WRONG_LANGUAGE: ${other} score ${otherScore} > ${lang} ${expectedScore}`);
  }

  const htmlLang = html.match(/<html[^>]*lang="([^"]+)"/i)?.[1];
  if (htmlLang !== lang) issues.push(`HTML_LANG: ${htmlLang}`);

  const coverOk = project.cover ? await headOk(`${BASE}${project.cover}`) : true;
  if (!coverOk) issues.push(`COVER_404: ${project.cover}`);

  if (project.imageCount > 0) {
    const firstImg = html.match(/portfolio\/[^/]+\/images\/[^"']+/i)?.[0];
    if (firstImg) {
      const imgOk = await headOk(`${BASE}/${firstImg}`);
      if (!imgOk) issues.push(`GALLERY_IMG_404: ${firstImg}`);
    } else {
      issues.push('NO_GALLERY_IMG_IN_HTML');
    }
  }

  if (html.includes('project-title') && !html.includes('project-description')) {
    issues.push('MISSING_DESCRIPTION_SECTION');
  }

  return { url, status, issues, paragraphs: descParas.length, title: t.title };
}

async function main() {
  const projectsSource = await fs.readFile('src/data/projects.ts', 'utf8');
  const siteUrlsSource = await fs.readFile('src/data/site-urls.ts', 'utf8');
  const projects = extractProjects(projectsSource);
  const projectPaths = parseProjectPublicPaths(siteUrlsSource);
  if (projects.length !== 16) {
    console.error(`Expected 16 projects, got ${projects.length}`);
    process.exit(1);
  }

  const results = [];
  for (const lang of LANGS) {
    for (const project of projects) {
      const r = await validatePage(project, lang, projectPaths);
      results.push({ lang, slug: project.slug, ...r });
      const icon = r.issues.length ? '✗' : '✓';
      const extra = r.issues.length ? ` — ${r.issues.join('; ')}` : ` (${r.paragraphs}¶)`;
      console.log(`${icon} [${lang}] ${project.slug}${extra}`);
    }
  }

  const failed = results.filter((r) => r.issues.length > 0 || r.status !== 200);
  console.log('\n--- SUMMARY ---');
  console.log(`Total: ${results.length}`);
  console.log(`OK: ${results.length - failed.length}`);
  console.log(`Issues: ${failed.length}`);

  if (failed.length) {
    console.log('\nFAILED PAGES:');
    for (const f of failed) {
      console.log(`  ${f.url}`);
      for (const i of f.issues) console.log(`    - ${i}`);
    }
    process.exit(1);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
