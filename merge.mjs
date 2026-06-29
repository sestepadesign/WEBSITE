import fs from 'fs';

const clean = fs.readFileSync('src/data/projects.ts', 'utf8');
const seo = fs.readFileSync('src/data/projects_broken_text.ts', 'utf8');

// The SEO version has updated cover, ogImage, and images arrays.
// The structure is identical otherwise (except for the corrupted text which is mostly in `description` fields).
// We can parse the files manually, but since the chunks are in the exact same order, we can extract them sequentially.

const seoCovers = [...seo.matchAll(/cover:\s*"([^"]+)"/g)].map(m => m[0]);
const seoOgImages = [...seo.matchAll(/ogImage:\s*"([^"]+)"/g)].map(m => m[0]);
const seoImages = [...seo.matchAll(/images:\s*\[[\s\S]*?\]/g)].map(m => m[0]);

let c = 0, o = 0, i = 0;

let result = clean.replace(/cover:\s*"([^"]+)"/g, () => seoCovers[c++]);
result = result.replace(/ogImage:\s*"([^"]+)"/g, () => seoOgImages[o++]);
result = result.replace(/images:\s*\[[\s\S]*?\]/g, () => seoImages[i++]);

fs.writeFileSync('src/data/projects_merged.ts', result);
console.log('Done!');
