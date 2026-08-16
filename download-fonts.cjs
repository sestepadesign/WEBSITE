const fs = require('fs');
const https = require('https');
const path = require('path');

const publicFontsDir = path.join('public', 'fonts');
if (!fs.existsSync(publicFontsDir)) fs.mkdirSync(publicFontsDir, { recursive: true });

// Google now serves these families as variable fonts: one physical file covers
// the whole weight axis, so 400/500/600 all point at the same URL per family.
const fonts = [
  { name: 'cormorant-garamond-400', url: 'https://fonts.gstatic.com/s/cormorantgaramond/v21/co3bmX5slCNuHLi8bLeY9MK7whWMhyjYqXtK.woff2' },
  { name: 'cormorant-garamond-500', url: 'https://fonts.gstatic.com/s/cormorantgaramond/v21/co3bmX5slCNuHLi8bLeY9MK7whWMhyjYqXtK.woff2' },
  { name: 'cormorant-garamond-600', url: 'https://fonts.gstatic.com/s/cormorantgaramond/v21/co3bmX5slCNuHLi8bLeY9MK7whWMhyjYqXtK.woff2' },
  { name: 'jost-400', url: 'https://fonts.gstatic.com/s/jost/v20/92zatBhPNqw73oTd4g.woff2' },
  { name: 'jost-500', url: 'https://fonts.gstatic.com/s/jost/v20/92zatBhPNqw73oTd4g.woff2' },
  { name: 'jost-600', url: 'https://fonts.gstatic.com/s/jost/v20/92zatBhPNqw73oTd4g.woff2' }
];

function download(font) {
  return new Promise((resolve, reject) => {
    const destPath = path.join(publicFontsDir, font.name + '.woff2');
    https.get(font.url, response => {
      if (response.statusCode !== 200) {
        response.resume();
        reject(new Error(`${font.name}: HTTP ${response.statusCode} from ${font.url}`));
        return;
      }
      const chunks = [];
      response.on('data', chunk => chunks.push(chunk));
      response.on('end', () => {
        const buf = Buffer.concat(chunks);
        // woff2 files start with the 'wOF2' magic signature — refuse to write
        // anything else (e.g. an HTML error page) over a real font file.
        if (buf.length < 4 || buf.toString('ascii', 0, 4) !== 'wOF2') {
          reject(new Error(`${font.name}: response is not a valid woff2 file`));
          return;
        }
        fs.writeFileSync(destPath, buf);
        resolve();
      });
    }).on('error', reject);
  });
}

Promise.all(fonts.map(download))
  .then(() => console.log('Fonts downloaded successfully.'))
  .catch(err => {
    console.error('Error downloading fonts:', err);
    process.exit(1);
  });
