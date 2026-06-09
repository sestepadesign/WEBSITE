/**
 * Apply official WordPress portfolio texts to projects.ts
 * Prerequisite: node scripts/fetch-portfolio-wp.mjs
 * Run: node scripts/apply-portfolio-texts.mjs
 */
import fs from 'node:fs/promises';

const PROJECTS_PATH = 'src/data/projects.ts';
const RAW_PATH = 'src/data/wp-portfolio-raw.json';

function pickParagraphs(paragraphs, max = 4) {
  const skip = /^(BINISSALEM|BUNYOLA|CAMPOS|SANT LLORENÇ|VIDEO YOUTUBE|Strategic Landscape|Terrace Garden Design:|Santa Ponsa:|Binissalem:|Finca Garden$|General Concept$|The Project$|Spatial Organization$|Central Focus)/i;

  return paragraphs
    .map((p) => p.replace(/\s+/g, ' ').trim())
    .filter((p) => p.length >= 90)
    .filter((p) => !skip.test(p))
    .slice(0, max);
}

function escapeTs(str) {
  return str.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

function formatDescriptionArray(paragraphs) {
  if (!paragraphs.length) return null;
  const lines = paragraphs.map((p) => `        "${escapeTs(p)}",`);
  return `description: [\n${lines.join('\n')}\n      ]`;
}

function replaceDescriptionBlock(source, lang, newBlock) {
  const pattern = new RegExp(
    `(${lang}:\\s*\\{[\\s\\S]*?)description:\\s*\\[[\\s\\S]*?\\]`,
    'm',
  );

  let count = 0;
  const updated = source.replace(pattern, (match, prefix) => {
    count++;
    return `${prefix}${newBlock}`;
  });

  if (count !== 1) {
    throw new Error(`Expected 1 replacement for ${lang}, got ${count}`);
  }
  return updated;
}

function extractProjectBlock(source, slug) {
  const start = source.indexOf(`slug: "${slug}"`);
  if (start === -1) throw new Error(`Slug not found: ${slug}`);
  const next = source.indexOf('\n  {', start + 1);
  const end = next === -1 ? source.lastIndexOf('\n];') : next;
  return { start, end, block: source.slice(start, end) };
}

function replaceProjectBlock(source, slug, newBlock) {
  const { start, end } = extractProjectBlock(source, slug);
  return source.slice(0, start) + newBlock + source.slice(end);
}

async function main() {
  const raw = JSON.parse(await fs.readFile(RAW_PATH, 'utf8'));
  let projectsTs = await fs.readFile(PROJECTS_PATH, 'utf8');

  for (const slug of Object.keys(raw)) {
    let block = extractProjectBlock(projectsTs, slug).block;

    for (const lang of ['en', 'es', 'de']) {
      const data = raw[slug][lang];
      if (!data?.paragraphs?.length) continue;

      const paragraphs = pickParagraphs(data.paragraphs);
      const formatted = formatDescriptionArray(paragraphs);
      if (!formatted) continue;

      block = replaceDescriptionBlock(block, lang, formatted);
    }

    projectsTs = replaceProjectBlock(projectsTs, slug, block);
    console.log(`✓ ${slug}`);
  }

  await fs.writeFile(PROJECTS_PATH, projectsTs, 'utf8');
  console.log('\nUpdated projects.ts from WordPress official texts.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
