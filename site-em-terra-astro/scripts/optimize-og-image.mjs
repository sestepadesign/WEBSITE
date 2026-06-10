/**
 * Create WhatsApp/Facebook-friendly OG JPEG from a source image.
 * Run: node scripts/optimize-og-image.mjs
 */
import sharp from 'sharp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

const jobs = [
  {
    input: 'public/portfolio/sant-llorenc/images/landscape-garden-malorca-sestepa.png',
    output: 'public/portfolio/sant-llorenc/images/landscape-garden-malorca-sestepa-og.jpg',
  },
];

for (const { input, output } of jobs) {
  const inPath = path.join(ROOT, input);
  const outPath = path.join(ROOT, output);
  await sharp(inPath)
    .resize(1200, 630, { fit: 'cover', position: 'centre' })
    .jpeg({ quality: 85, mozjpeg: true })
    .toFile(outPath);
  console.log(`✓ ${output}`);
}
