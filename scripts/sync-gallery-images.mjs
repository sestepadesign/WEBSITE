/**
 * Copy all gallery SEO images from Drive folder → public/gallery/.
 * Run: npm run sync:gallery
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const driveGallery = path.resolve(root, '..', 'gallery');
const publicGallery = path.resolve(root, 'public', 'gallery');

async function main() {
  await fs.mkdir(publicGallery, { recursive: true });

  const entries = await fs.readdir(driveGallery, { withFileTypes: true });
  const files = entries.filter((e) => e.isFile()).map((e) => e.name);

  let copied = 0;
  for (const name of files) {
    await fs.copyFile(path.join(driveGallery, name), path.join(publicGallery, name));
    copied++;
  }

  console.log(`Gallery sync: ${copied} files copied → public/gallery/`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
