const fs = require('fs');
const https = require('https');
const path = require('path');

const publicFontsDir = path.join('public', 'fonts');
if (!fs.existsSync(publicFontsDir)) fs.mkdirSync(publicFontsDir, { recursive: true });

const fonts = [
  { name: 'cormorant-garamond-400', url: 'https://fonts.gstatic.com/s/cormorantgaramond/v16/co3bmX5slCNuHLi8bLeY9MK7whSqcl583-U-.woff2' },
  { name: 'cormorant-garamond-500', url: 'https://fonts.gstatic.com/s/cormorantgaramond/v16/co3bmX5slCNuHLi8bLeY9MK7whSqcl58w-U-.woff2' },
  { name: 'cormorant-garamond-600', url: 'https://fonts.gstatic.com/s/cormorantgaramond/v16/co3bmX5slCNuHLi8bLeY9MK7whSqcl58ueU-.woff2' },
  { name: 'jost-400', url: 'https://fonts.gstatic.com/s/jost/v15/92zPtBhPNqw79Ij1E865zBUv7myjJTVBNQ.woff2' },
  { name: 'jost-500', url: 'https://fonts.gstatic.com/s/jost/v15/92zPtBhPNqw79Ij1E865zBUv7mx9JjVBNQ.woff2' },
  { name: 'jost-600', url: 'https://fonts.gstatic.com/s/jost/v15/92zPtBhPNqw79Ij1E865zBUv7myRJjVBNQ.woff2' }
];

Promise.all(fonts.map(font => new Promise((resolve, reject) => {
  const file = fs.createWriteStream(path.join(publicFontsDir, font.name + '.woff2'));
  https.get(font.url, response => {
    response.pipe(file);
    file.on('finish', () => {
      file.close(resolve);
    });
  }).on('error', err => {
    fs.unlink(file.path, () => reject(err));
  });
}))).then(() => console.log('Fonts downloaded successfully.')).catch(err => console.error('Error downloading fonts:', err));
