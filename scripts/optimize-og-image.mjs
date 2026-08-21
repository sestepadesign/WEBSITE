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
    input: 'public/portfolio/sant-llorenc/images tratadas com magnific/FOTOS SELECIONADAS/garden-design-mallorca-sestepa-landscape-design-sant-llorenc-18.jpg',
    output: 'public/portfolio/sant-llorenc/images/garden-design-mallorca-sestepa-landscape-design-sant-llorenc-18.jpg',
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
