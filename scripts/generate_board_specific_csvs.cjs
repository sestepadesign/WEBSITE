const fs = require('fs');
const path = require('path');

const projectsTsPath = path.join(__dirname, '..', 'src', 'data', 'projects.ts');
const outputDir = path.join(__dirname, '..', '..', 'docs', 'pinterest');
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

// Helper to convert embed YouTube links to watch links
function getYouTubeUrl(embedUrl) {
  if (!embedUrl) return null;
  return embedUrl.replace('/embed/', '/watch?v=').replace('?feature=oembed', '');
}

// Clean text helper (strip HTML, double quotes, newlines)
function cleanText(text) {
  if (!text) return '';
  return text
    .replace(/<\/?[^>]+(>|$)/g, "") // Strip HTML tags
    .replace(/"/g, '""')            // Escape double quotes
    .replace(/\r?\n|\r/g, " ")      // Flatten newlines
    .trim();
}

// Helper to write CSV files
function writeCsv(filename, boardName, pinsArray) {
  const csvHeaders = 'Title,Media URL,Pinterest board,Description,Link,Publish date,Keywords\n';
  const csvRows = pinsArray.map(pin => {
    const encodedMediaUrl = encodeURI(pin.media_url);
    const encodedLink = encodeURI(pin.link);
    return `"${cleanText(pin.title)}",${encodedMediaUrl},"${boardName}","${cleanText(pin.description)}",${encodedLink},,`;
  }).join('\n');
  
  const fileFullPath = path.join(outputDir, filename);
  fs.writeFileSync(fileFullPath, csvHeaders + csvRows, 'utf8');
  console.log(`Successfully compiled ${pinsArray.length} Pins for '${boardName}' -> ${fileFullPath}`);
}

// ----------------------------------------------------
// 1. TERRACE GARDEN DESIGN
// ----------------------------------------------------
const terracePins = [];
const terraceSlugs = ['terrace-garden-in-palma', 'terrace-garden-santa-eugenia'];

for (const slug of terraceSlugs) {
  const p = projects.find(item => item.slug === slug);
  if (!p) continue;
  
  const paths = PROJECT_PUBLIC_PATHS[slug];
  const linkEN = `${BASE_URL}${paths.en}`;
  const linkES = `${BASE_URL}${paths.es}`;
  
  // Add YouTube Video if present
  const videoUrl = getYouTubeUrl(p.video);
  if (videoUrl) {
    terracePins.push({
      title: `Bespoke Terrace Garden Design Video - ${p.en.title}`,
      media_url: `${BASE_URL}${p.cover}`, // Video cover/poster
      description: `Watch the video showcasing the design and execution of the terrace garden project ${p.en.title} in ${p.location} by S'Estepa Design. #terracegarden #exteriorarchitecture #landscaping`,
      link: videoUrl
    });
    terracePins.push({
      title: `Video de Diseño de Terraza y Ático - Proyecto ${p.es.title}`,
      media_url: `${BASE_URL}${p.cover}`,
      description: `Video completo del diseño y paisajismo de la terraza y ático ${p.es.title} en ${p.location} por S'Estepa Design. #terraza #jardin #paisajismoexterior`,
      link: videoUrl
    });
  }
  
  // Add all gallery images
  p.images.forEach((img, idx) => {
    const imageUrl = `${BASE_URL}/portfolio/${slug}/images/${img}`;
    const isEven = idx % 2 === 0;
    
    if (isEven) {
      terracePins.push({
        title: `Luxury Terrace Design Mallorca - ${p.en.title} (Detail ${idx + 1})`,
        media_url: imageUrl,
        description: `Bespoke terrace and rooftop garden design of ${p.en.title} in ${p.location}. Maximizing outdoor spaces with curated Mediterranean plants. Landscape architecture by S'Estepa. #terracegarden #rooftop #outdoorspaces`,
        link: linkEN
      });
    } else {
      terracePins.push({
        title: `Diseño de Áticos y Terrazas en Mallorca - ${p.es.title} (Detalle ${idx + 1})`,
        media_url: imageUrl,
        description: `Diseño exclusivo y optimización de espacios exteriores en la terraza ${p.es.title} en ${p.location}. Jardinería de diseño por el estudio S'Estepa. #disenodeterrazas #paisajismo #atico`,
        link: linkES
      });
    }
  });
}
writeCsv('terrace_garden_pins.csv', 'Terrace Garden Design', terracePins);


// ----------------------------------------------------
// 2. POOL GARDEN DESIGN
// ----------------------------------------------------
const poolPins = [];

// A: Crestatx-garden-design (ONLY renders and the YouTube video)
const crestatx = projects.find(item => item.slug === 'crestatx-garden-design');
if (crestatx) {
  const paths = PROJECT_PUBLIC_PATHS['crestatx-garden-design'];
  const linkEN = `${BASE_URL}${paths.en}`;
  const linkES = `${BASE_URL}${paths.es}`;
  
  // YouTube Video
  const videoUrl = getYouTubeUrl(crestatx.video);
  if (videoUrl) {
    poolPins.push({
      title: `Bespoke Pool & Garden Design Video: Crestatx | Mallorca`,
      media_url: `${BASE_URL}${crestatx.cover}`,
      description: `Watch the full project render video showcasing the pool integration and mineral layers of Crestatx in Sa Pobla by S'Estepa Design. #poollandscape #gardendesign #landscapevideo`,
      link: videoUrl
    });
    poolPins.push({
      title: `Video de Paisajismo de Piscina y Jardín: Crestatx | Sa Pobla`,
      media_url: `${BASE_URL}${crestatx.cover}`,
      description: `Video del render constructivo del proyecto de piscina y jardín Crestatx en Sa Pobla. Diseño por S'Estepa Design. #jardinconpiscina #paisajismo #renders3d`,
      link: videoUrl
    });
  }
  
  // ONLY Renders from gallery
  crestatx.images.forEach((img, idx) => {
    if (img.toLowerCase().includes('render')) {
      const imageUrl = `${BASE_URL}/portfolio/crestatx-garden-design/images/${img}`;
      const isEven = idx % 2 === 0;
      
      if (isEven) {
        poolPins.push({
          title: `Pool Garden Landscape Render: Crestatx (Design View ${idx + 1})`,
          media_url: imageUrl,
          description: `Architectural render of the swimming pool and dry-mineral landscape integration in Crestatx, Sa Pobla. Landscape design by S'Estepa. #poollandscape #landscapeplanning #3drender`,
          link: linkEN
        });
      } else {
        poolPins.push({
          title: `Render 3D de Jardín con Piscina: Crestatx (Detalle ${idx + 1})`,
          media_url: imageUrl,
          description: `Visualización 3D del diseño de piscina, pavimentos y zonas de estar en Crestatx, Sa Pobla. Proyecto de S'Estepa Design. #renders3d #disenodejardines #piscina`,
          link: linkES
        });
      }
    }
  });
}

// B: Other pool projects (with pool integration)
const otherPoolSlugs = ['jardin-mediterraneo', 'sant-llorenc', 'santa-ponsa', 'son-vida', 'costadelacalma', 'finca-garden-campos-mallorca'];
for (const slug of otherPoolSlugs) {
  const p = projects.find(item => item.slug === slug);
  if (!p) continue;
  
  const paths = PROJECT_PUBLIC_PATHS[slug];
  const linkEN = `${BASE_URL}${paths.en}`;
  const linkES = `${BASE_URL}${paths.es}`;
  
  // Add YouTube video if exists
  const videoUrl = getYouTubeUrl(p.video);
  if (videoUrl) {
    poolPins.push({
      title: `Mediterranean Pool Landscape Design Video - ${p.en.title}`,
      media_url: `${BASE_URL}${p.cover}`,
      description: `Watch the landscape design walk-through showing the pool and garden integration of ${p.en.title} in ${p.location} by S'Estepa. #poollandscape #gardenvideo #landscaping`,
      link: videoUrl
    });
  }
  
  // Filter for pool related images, or select up to 3 gallery images showcasing the pool
  const poolImages = p.images.filter(img => 
    img.toLowerCase().includes('piscina') || 
    img.toLowerCase().includes('pool') || 
    img.toLowerCase().includes('15') || 
    img.toLowerCase().includes('8') ||
    img.toLowerCase().includes('11') ||
    img.toLowerCase().includes('12')
  ).slice(0, 3);
  
  // Fallback to first 2 gallery images if no matches
  const selectedImages = poolImages.length > 0 ? poolImages : p.images.slice(0, 2);
  
  selectedImages.forEach((img, idx) => {
    const imageUrl = `${BASE_URL}/portfolio/${slug}/images/${img}`;
    const isEven = idx % 2 === 0;
    
    if (isEven) {
      poolPins.push({
        title: `Luxury Swimming Pool Landscape - ${p.en.title} (Detail ${idx + 1})`,
        media_url: imageUrl,
        description: `Integrating the swimming pool with the Mediterranean landscape, featuring wild grasses and local stone. ${p.en.title} in ${p.location} by S'Estepa. #poolgardendesign #poollandscape #swimmingpool`,
        link: linkEN
      });
    } else {
      poolPins.push({
        title: `Paisajismo Alrededor de la Piscina - ${p.es.title} (Detalle ${idx + 1})`,
        media_url: imageUrl,
        description: `Diseño y adecuación del entorno de piscina con pavimentos naturales y vegetación adaptada al clima de Mallorca. ${p.es.title} en ${p.location}. #jardinconpiscina #paisajismoexterior #sestepadesign`,
        link: linkES
      });
    }
  });
}
writeCsv('pool_garden_pins.csv', 'Pool Garden Design', poolPins);


// ----------------------------------------------------
// 3. MALLORCA FINCA GARDENS (Estate Category)
// ----------------------------------------------------
const fincaPins = [];
const estateSlugs = ['finca-garden-campos-mallorca', 'sant-llorenc', 'jardin-mediterraneo'];

for (const slug of estateSlugs) {
  const p = projects.find(item => item.slug === slug);
  if (!p) continue;
  
  const paths = PROJECT_PUBLIC_PATHS[slug];
  const linkEN = `${BASE_URL}${paths.en}`;
  const linkES = `${BASE_URL}${paths.es}`;
  
  // Add YouTube video if exists
  const videoUrl = getYouTubeUrl(p.video);
  if (videoUrl) {
    fincaPins.push({
      title: `Traditional Finca Garden Landscape Video - ${p.en.title}`,
      media_url: `${BASE_URL}${p.cover}`,
      description: `Watch the full landscape architecture walk-through video of the estate garden ${p.en.title} in ${p.location} by S'Estepa. #fincagarden #mallorcafinca #landscapevideo`,
      link: videoUrl
    });
  }
  
  // Add all gallery images (up to 12 to avoid oversaturating the board in one batch)
  const maxImages = Math.min(p.images.length, 12);
  for (let idx = 0; idx < maxImages; idx++) {
    const imgName = p.images[idx];
    const imageUrl = `${BASE_URL}/portfolio/${slug}/images/${imgName}`;
    const isEven = idx % 2 === 0;
    
    if (isEven) {
      fincaPins.push({
        title: `Traditional Finca Landscaping Mallorca - ${p.en.title} (Detail ${idx + 1})`,
        media_url: imageUrl,
        description: `Bespoke estate landscape design of ${p.en.title} in ${p.location}. Blending rustic architecture with native planting. Landscape design by S'Estepa. #fincagarden #mallorcafinca #rusticgarden`,
        link: linkEN
      });
    } else {
      fincaPins.push({
        title: `Jardín de Finca Rústica en Mallorca - Proyecto ${p.es.title} (Detalle ${idx + 1})`,
        media_url: imageUrl,
        description: `Diseño paisajístico de finca tradicional en ${p.location}. Integración de olivos, frutales y muros de piedra en seco. Proyecto por S'Estepa Design. #jardindefinca #fincarustica #paisajismoexterior`,
        link: linkES
      });
    }
  }
}
writeCsv('finca_garden_pins.csv', 'Mallorca Finca Gardens', fincaPins);
