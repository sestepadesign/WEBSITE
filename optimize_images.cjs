const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dirs = [
  './public/portfolio/jardin-mediterraneo/images',
  './public/portfolio/sant-llorenc'
];

async function processDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.png') || file.toLowerCase().endsWith('.jpeg')) {
      const inputPath = path.join(dir, file);
      const ext = path.extname(file);
      const base = path.basename(file, ext);
      
      const safeBase = base.replace(/\s+/g, '-').replace(/[()]/g, '');
      const outputPath = path.join(dir, safeBase + '.webp');
      
      console.log("Converting", inputPath, "to", outputPath);
      try {
        await sharp(inputPath)
          .webp({ quality: 80, effort: 6 })
          .toFile(outputPath);
        fs.unlinkSync(inputPath);
      } catch (e) {
        console.error('Error on', inputPath, e);
      }
    }
  }
}

async function run() {
  for (const dir of dirs) {
    await processDir(dir);
  }
}
run();
