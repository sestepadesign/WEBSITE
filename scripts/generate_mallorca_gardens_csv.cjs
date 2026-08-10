const fs = require('fs');
const path = require('path');

const projectsTsPath = path.join(__dirname, '..', 'src', 'data', 'projects.ts');
const outputDir = path.join(__dirname, '..', '..', 'docs', 'pinterest');
const outputPath = path.join(outputDir, 'mallorca_gardens_gallery.csv');
const BASE_URL = 'https://design.sestepa.com';

const PROJECT_PUBLIC_PATHS = {
  binissalem: { en: '/binissalem/', es: '/es/benissalem/' },
  bunyola: { en: '/bunyola/', es: '/es/bunyola/' },
  'campanet-garden': { en: '/campanet-garden/', es: '/es/campanet-garden/' },
  'finca-garden-campos-mallorca': { en: '/finca-garden-campos/', es: '/es/finca-garden-campos/' },
  costadelacalma: { en: '/costadelacalma/', es: '/es/costa-de-la-calma/' },
  'crestatx-garden-design': { en: '/crestatx-garden-design/', es: '/es/crestatx/' },
  hotelcabotlasvelas: { en: '/hotelcabotlasvelas/', es: '/es/hotel-cabot-las-velas/' },
  'garden-design-llubi-mallorca': { en: '/garden-design-llubi-mallorca/', es: '/es/diseno-de-jardines-llubi-mallorca/' },
  'sant-llorenc': { en: '/sant-llorenc/', es: '/es/sant-llorenc/' },
  'jardin-mediterraneo': { en: '/mediterranean-garden/', es: '/es/jardin-mediterraneo/' },
  'terrace-garden-santa-eugenia': { en: '/terrace-garden-santa-eugenia/', es: '/es/terraza-jardin-santa-eugenia/' },
  'santa-ponsa': { en: '/santa-ponsa/', es: '/es/puig-na-morisca/' },
  'son-vida': { en: '/son-vida/', es: '/es/son-vida-mallorca/' },
  'terrace-garden-in-palma': { en: '/terrace-garden-in-palma/', es: '/es/terraza-jardin/' },
  'vertical-gardens-in-mallorca': { en: '/vertical-gardens-in-mallorca/', es: '/es/jardines-verticales-en-mallorca/' },
  'finca-garden-inca': { en: '/finca-garden-inca/', es: '/es/finca-garden-inca/' },
  'seaside-house-alcudia': { en: '/alcanada/', es: '/es/alcanada/' },
  sacabaneta: { en: '/sacabaneta/', es: '/es/sacabaneta/' }
};

// Read projects.ts
console.log('Reading projects.ts...');
const tsContent = fs.readFileSync(projectsTsPath, 'utf8');

// Locate the projects array definition
const startKeyword = 'export const projects: Project[] =';
const startIndex = tsContent.indexOf(startKeyword);

if (startIndex === -1) {
  console.error(`Could not find start keyword: ${startKeyword}`);
  process.exit(1);
}

// Extract the content starting from the opening bracket of the projects array
const codeFromStart = tsContent.substring(startIndex + startKeyword.length).trim();

// Find the matching end of the array
const endPattern = '];';
const endIndex = codeFromStart.indexOf(endPattern);

if (endIndex === -1) {
  console.error(`Could not find end of projects array with pattern: ${endPattern}`);
  process.exit(1);
}

// The clean JS content containing just the projects array
const arrayCode = codeFromStart.substring(0, endIndex + endPattern.length);
const jsContent = `const projects = ${arrayCode};\nreturn projects;`;

// Evaluate the clean JS to load the projects data
let projects = [];
try {
  const fn = new Function(jsContent);
  projects = fn();
  console.log(`Loaded ${projects.length} projects successfully.`);
} catch (e) {
  console.error('Error executing projects JS compilation:', e);
  process.exit(1);
}

// Clean text helper (strip HTML, double quotes, newlines)
function cleanText(text) {
  if (!text) return '';
  return text
    .replace(/<\/?[^>]+(>|$)/g, "") // Strip HTML tags like <i>
    .replace(/"/g, '""')            // Escape double quotes for CSV
    .replace(/\r?\n|\r/g, " ")      // Flatten newlines
    .trim();
}

const BOARD_NAME = 'Mallorca Gardens';
const pins = [];

// Loop through projects and extract gallery images
for (const p of projects) {
  if (p.hidden) continue;

  const slug = p.slug;
  const location = p.location;
  const paths = PROJECT_PUBLIC_PATHS[slug];
  
  if (!paths) {
    console.warn(`Skipping paths for ${slug}`);
    continue;
  }

  const linkEN = `${BASE_URL}${paths.en}`;
  const linkES = `${BASE_URL}${paths.es}`;

  const tEN = p.en;
  const tES = p.es;
  const plants = tEN.botanical || '';

  // Filter gallery images and limit to max 4 to prevent oversized file
  const maxGalleryImages = Math.min(p.images.length, 4);

  for (let idx = 0; idx < maxGalleryImages; idx++) {
    const imgName = p.images[idx];
    const imageUrl = `${BASE_URL}/portfolio/${slug}/images/${imgName}`;

    // Alternate English and Spanish Pins to balance the feed
    const isEven = idx % 2 === 0;

    let title = '';
    let description = '';
    let link = '';

    if (isEven) {
      // English Pin
      title = `Mediterranean Landscape Inspiration - ${tEN.title} (Detail ${idx + 1})`;
      description = `Visualizing bespoke garden design and luxury outdoor living at ${tEN.title} in ${location}. Landscape architecture by S'Estepa Design. ${tEN.subtitle}. #mallorcagardens #mediterraneangarden #landscapemallorca`;
      if (plants) {
        description += ` Species: ${plants}.`;
      }
      link = linkEN;
    } else {
      // Spanish Pin
      title = `Inspiración de Paisajismo Mediterráneo - ${tES.title} (Detalle ${idx + 1})`;
      description = `Diseño de jardines exclusivos y paisajismo sostenible en el proyecto ${tES.title} en ${location}. Creado por el estudio S'Estepa Design. ${tES.subtitle}. #jardinesmallorca #paisajismo #disenodejardines`;
      if (plants) {
        description += ` Flora: ${plants}.`;
      }
      link = linkES;
    }

    pins.push({
      title: title.substring(0, 100),
      media_url: imageUrl,
      board: BOARD_NAME,
      description: description.substring(0, 500),
      link: link
    });
  }
}

// Ensure docs/pinterest folder exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Convert to CSV
const csvHeaders = 'Title,Media URL,Pinterest board,Description,Link,Publish date,Keywords\n';
const csvRows = pins.map(pin => {
  const encodedMediaUrl = encodeURI(pin.media_url);
  const encodedLink = encodeURI(pin.link);
  return `"${cleanText(pin.title)}",${encodedMediaUrl},"${BOARD_NAME}","${cleanText(pin.description)}",${encodedLink},,`;
}).join('\n');

fs.writeFileSync(outputPath, csvHeaders + csvRows, 'utf8');
console.log(`Successfully compiled ${pins.length} unique gallery Pins for '${BOARD_NAME}' board.`);
console.log(`File saved at: ${outputPath}`);
