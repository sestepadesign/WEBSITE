import fs from 'fs';
import path from 'path';
import { projects } from '../src/data/projects';

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.resolve(__dirname, '../public');

let missingFiles = 0;
let totalFiles = 0;

for (const project of projects) {
  console.log(`\nAuditing project: ${project.title} (${project.slug})`);

  // Check feature image
  if (project.image) {
    totalFiles++;
    const featureImagePath = path.join(publicDir, project.image);
    if (!fs.existsSync(featureImagePath)) {
      console.error(`  [MISSING] Feature Image: ${project.image}`);
      missingFiles++;
    } else {
      // console.log(`  [OK] Feature Image: ${project.image}`);
    }
  }

  // Check gallery images
  if (project.images && project.images.length > 0) {
    for (const img of project.images) {
      totalFiles++;
      const galleryImagePath = path.join(publicDir, 'portfolio', project.slug, 'images', img);
      if (!fs.existsSync(galleryImagePath)) {
        console.error(`  [MISSING] Gallery Image: portfolio/${project.slug}/images/${img}`);
        missingFiles++;
      } else {
        // console.log(`  [OK] Gallery Image: portfolio/${project.slug}/images/${img}`);
      }
    }
  }
}

console.log(`\n--- Audit Complete ---`);
console.log(`Total images checked: ${totalFiles}`);
if (missingFiles === 0) {
  console.log(`Result: ALL OK! 0 missing files.`);
} else {
  console.error(`Result: ${missingFiles} missing files found!`);
}
