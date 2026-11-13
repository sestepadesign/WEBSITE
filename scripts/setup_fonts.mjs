import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const FONTS_DIR = path.join(ROOT, 'public', 'fonts');

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36';

async function fetchFont(family, weights, outName) {
  const url = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${weights}&display=swap`;
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!res.ok) throw new Error(`Failed CSS fetch for ${family}: ${res.status}`);
  const css = await res.text();

  // Extract all latin + latin-ext woff2 blocks; prefer latin (last block usually) or download latin block
  const blocks = [...css.matchAll(/\/\*\s*([a-z0-9-]+)\s*\*\/[\s\S]*?url\((https:\/\/[^)]+\.woff2)\)/g)];
  const latinBlock = blocks.find((m) => m[1] === 'latin') || blocks[blocks.length - 1];
  if (!latinBlock) throw new Error(`No woff2 URL found in CSS for ${family}`);

  const woffUrl = latinBlock[2];
  const fontRes = await fetch(woffUrl);
  if (!fontRes.ok) throw new Error(`Failed WOFF2 fetch for ${family}: ${fontRes.status}`);
  const buf = Buffer.from(await fontRes.arrayBuffer());
  const outPath = path.join(FONTS_DIR, outName);
  await fs.writeFile(outPath, buf);
  console.log(`[+] ${outName}: ${(buf.length / 1024).toFixed(1)} KB (subset: ${latinBlock[1]})`);
}

await fs.mkdir(FONTS_DIR, { recursive: true });
await fetchFont('Cormorant Garamond', '300..700', 'cormorant-garamond-variable.woff2');
await fetchFont('Jost', '300..700', 'jost-variable.woff2');
