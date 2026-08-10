const fs = require('fs');
const path = require('path');

// Paths to files
const projectsTsPath = path.join(__dirname, '..', 'src', 'data', 'projects.ts');

// Correct location for documents and exports: docs/pinterest/
const outputDir = path.join(__dirname, '..', '..', 'docs', 'pinterest');
const outputPath = path.join(outputDir, 'pinterest_bulk_upload.csv');

// Base URL for the production site
const BASE_URL = 'https://design.sestepa.com';

// Local project mapping to public paths (duplicated here from site-urls.ts for reliability)
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

// Boards defined in the user's Pinterest account
const BOARDS = {
  PROJECTS: "S'Estepa Design Projects",
  DETAILS: "Garden Design Details",
  MALLORCA: "Mallorca Gardens",
  PLANTING: "Mediterranean Planting",
  LANDSCAPE: "Landscape Design Mallorca",
  TERRACE: "Terrace Garden Design",
  POOL: "Pool Garden Design",
  FINCA: "Mallorca Finca Gardens",
  MEDITERRANEAN: "Mediterranean Garden Design",
  FLAGSHIP: "Garden Design Mallorca"
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

const pins = [];

// Loop through each project
for (const p of projects) {
  if (p.hidden) continue;

  const slug = p.slug;
  const location = p.location;
  const paths = PROJECT_PUBLIC_PATHS[slug];
  
  if (!paths) {
    console.warn(`Skipping paths for ${slug} (not found in PROJECT_PUBLIC_PATHS)`);
    continue;
  }

  // Generate English and Spanish Pinterest destinations
  const linkEN = `${BASE_URL}${paths.en}`;
  const linkES = `${BASE_URL}${paths.es}`;

  // Image list
  const coverUrl = `${BASE_URL}${p.cover}`;
  const galleryUrls = p.images.map(img => `${BASE_URL}/portfolio/${slug}/images/${img}`);
  const allImages = [coverUrl, ...galleryUrls];

  // Unique image allocator for this project to prevent duplicate Media URL + Link errors on Pinterest
  let imgIdx = 0;
  const getNextImage = () => {
    const img = allImages[imgIdx % allImages.length];
    imgIdx++;
    return img;
  };

  const tEN = p.en;
  const tES = p.es;

  // Botanical tags (for planting and descriptions)
  const plants = tEN.botanical || '';

  // Helper to push a Pin to our array
  function addPin(board, title, description, link, imageUrl) {
    const finalTitle = title.substring(0, 100);
    const finalDescription = description.substring(0, 500);
    
    pins.push({
      title: finalTitle,
      description: finalDescription,
      link: link,
      image_url: imageUrl,
      board_name: board
    });
  }

  // 1. BOARD: S'Estepa Design Projects
  // Uses coverUrl (img 0) and first detail (img 1)
  addPin(
    BOARDS.PROJECTS,
    `Garden Design Case Study: ${tEN.title} in Mallorca`,
    `Explore the full landscape architecture project of ${tEN.title} in ${location}. Designed and built by S'Estepa Design. ${tEN.subtitle}. #gardendesignmallorca #mallorcagardens #landscapingmallorca #sestepadesign`,
    linkEN,
    getNextImage()
  );
  addPin(
    BOARDS.PROJECTS,
    `Diseño de Jardín Exclusivo: ${tES.title} en Mallorca`,
    `Estudio de caso completo del diseño paisajístico de ${tES.title} en ${location}. Diseñado y ejecutado por S'Estepa Design. ${tES.subtitle}. #disenodejardines #paisajismomallorca #jardinesmallorca #sestepadesign`,
    linkES,
    getNextImage()
  );

  // 2. BOARD: Garden Design Details
  // Uses details (img 2 and img 3)
  if (galleryUrls.length > 0) {
    addPin(
      BOARDS.DETAILS,
      `Exquisite Garden Details - ${tEN.title} | S'Estepa Design`,
      `A close-up look at the materials, textures, and bespoke details of ${tEN.title} in Mallorca. Sustainable stone, level changes, and premium finishes. #gardendetails #landscapematerials #mediterraneangarden #exteriordesign`,
      linkEN,
      getNextImage()
    );
  }
  if (galleryUrls.length > 1) {
    addPin(
      BOARDS.DETAILS,
      `Detalles y Texturas de Paisajismo - ${tES.title} | Mallorca`,
      `Detalles constructivos y texturas del jardín ${tES.title}. Integración de piedra natural, caminos de grava e iluminación exterior. #detallesdejardin #piedranatural #diseñoexterior #sestepadesign`,
      linkES,
      getNextImage()
    );
  }

  // 3. BOARD: Mallorca Gardens
  // Uses img 4
  addPin(
    BOARDS.MALLORCA,
    `Beautiful Mallorca Gardens - ${tEN.title} Project`,
    `A beautiful example of luxury garden design in Mallorca, framing the island's natural scenery. Project in ${location} by S'Estepa Design. #mallorcagardens #gardendesignmallorca #mediterraneanliving #luxuryvilla`,
    linkEN,
    getNextImage()
  );

  // 4. BOARD: Mediterranean Planting
  // Uses img 5 and img 6
  if (plants) {
    addPin(
      BOARDS.PLANTING,
      `Mediterranean Garden Plants | ${tEN.title} Botanical Selection`,
      `Low-water and drought-resistant plant palette for Mallorca gardens. Botanical species: ${plants}. Landscape design by S'Estepa. #mediterraneanplanting #xeriscape #drygarden #savethewater #botany`,
      linkEN,
      getNextImage()
    );
    addPin(
      BOARDS.PLANTING,
      `Plantas y Flores para Clima Mediterráneo | ${tES.title}`,
      `Selección de especies autóctonas y de bajo consumo de agua en Mallorca. Especies empleadas: ${plants}. Diseño de plantación por S'Estepa. #plantasmediterraneas #botanica #jardinsostenible #xerojardineria`,
      linkES,
      getNextImage()
    );
  }

  // 5. BOARD: Landscape Design Mallorca
  // Uses img 7 (or render layout)
  addPin(
    BOARDS.LANDSCAPE,
    `Landscape Design Mallorca - Architecture Layout for ${tEN.title}`,
    `Visualizing level changes, dry-stone retaining walls, and circulation axes in ${location}. Landscape planning by S'Estepa Design. #landscapedesignmallorca #landscapearchitecture #gardendesign #3drender`,
    linkEN,
    getNextImage()
  );

  // 6. BOARD: Terrace Garden Design
  // Uses terrace details (img 8, 9, 10)
  const isTerrace = slug.includes('terrace') || slug === 'terrace-garden-in-palma' || slug === 'terrace-garden-santa-eugenia';
  if (isTerrace) {
    for (let idx = 0; idx < 3; idx++) {
      addPin(
        BOARDS.TERRACE,
        `Terrace Garden Design in Mallorca | ${tEN.title} (Detail ${idx + 1})`,
        `Detail ${idx + 1} of the premium terrace and rooftop garden design of ${tEN.title} in Palma de Mallorca. Maximizing outdoor space with vertical greenery and planters. #terracegarden #rooftopgarden #palmademallorca #exteriorarchitecture`,
        linkEN,
        getNextImage()
      );
    }
  }

  // 7. BOARD: Pool Garden Design
  // Uses pool specific image if found (by filename), otherwise gets next unique image
  const hasPool = ['jardin-mediterraneo', 'sant-llorenc', 'santa-ponsa', 'son-vida', 'costadelacalma', 'finca-garden-campos-mallorca'].includes(slug);
  if (hasPool) {
    const poolImg = allImages.find(url => url.toLowerCase().includes('piscina') || url.toLowerCase().includes('pool') || url.toLowerCase().includes('15') || url.toLowerCase().includes('8')) || getNextImage();
    addPin(
      BOARDS.POOL,
      `Pool Garden Landscape in Mallorca - ${tEN.title}`,
      `Integrating the swimming pool with wild grasses, olive trees, and natural stone pathways. Landscape design of ${tEN.title} in ${location}. #poolgardendesign #poollandscape #swimmingpool #luxuryoutdoor`,
      linkEN,
      poolImg
    );
    addPin(
      BOARDS.POOL,
      `Diseño de Jardín con Piscina - Proyecto ${tES.title}`,
      `Integración paisajística de piscinas con praderas de gramíneas, olivos y piedra local. Proyecto de ${tES.title} en ${location}. #jardinconpiscina #paisajismoexterior #arquitecturaexterior #sestepadesign`,
      linkES,
      getNextImage()
    );
  }

  // 8. BOARD: Mallorca Finca Gardens
  // Uses finca details (img 11, 12, 13)
  const isFinca = ['sant-llorenc', 'finca-garden-campos-mallorca', 'jardin-mediterraneo', 'finca-garden-inca'].includes(slug);
  if (isFinca) {
    for (let idx = 0; idx < 3; idx++) {
      addPin(
        BOARDS.FINCA,
        `Traditional Finca Garden Design Mallorca | ${tEN.title} (Detail ${idx + 1})`,
        `Detail ${idx + 1} of the rustic and elegant landscaping of ${tEN.title} in Mallorca. Respecting the local architectural heritage with dry-stone. #fincagarden #mallorcafinca #rusticgarden #sestepadesign`,
        linkEN,
        getNextImage()
      );
    }
  }

  // 9. BOARD: Mediterranean Garden Design
  // Uses Mediterranean ideas (img 14 and img 15)
  addPin(
    BOARDS.MEDITERRANEAN,
    `Mediterranean Garden Design - ${tEN.title} Inspiration`,
    `A masterclass in Mediterranean garden design featuring ${tEN.title}: dry gardens, limestone paths, native palms, and movement-rich grasses. S'Estepa Design. #mediterraneangardendesign #drygardening #xeriscaping #outdoorspace`,
    linkEN,
    getNextImage()
  );
  if (galleryUrls.length > 2) {
    addPin(
      BOARDS.MEDITERRANEAN,
      `Diseño de Jardín Mediterráneo Sostenible - ${tES.title}`,
      `Inspiración para diseñar un jardín mediterráneo moderno y de bajo mantenimiento. Proyecto ${tES.title} por S'Estepa Design, Mallorca. #diseñodejardines #jardinesmediterraneos #jardineriasostenible`,
      linkES,
      getNextImage()
    );
  }

  // 10. BOARD: Garden Design Mallorca
  // Uses flagship views (img 16 and img 17)
  addPin(
    BOARDS.FLAGSHIP,
    `Garden Design Mallorca | ${tEN.title} Landscape Architecture`,
    `Premium garden design and landscape architecture studio in Mallorca. Transforming outdoor spaces into discrete luxury retreats. #gardendesignmallorca #landscapearchitecture #mallorcaexterior`,
    linkEN,
    getNextImage()
  );
  addPin(
    BOARDS.FLAGSHIP,
    `Diseño de Jardines Mallorca | Proyecto ${tES.title}`,
    `Estudio de arquitectura paisajística y diseño de jardines de alta gama en Mallorca. Proyectos residenciales y fincas. #diseñodejardinesmallorca #paisajismoexterior #sestepadesign`,
    linkES,
    getNextImage()
  );
}

// Clean up old single file if it exists in the root folder
const rootSinglePath = path.join(__dirname, '..', '..', 'pinterest_bulk_upload.csv');
if (fs.existsSync(rootSinglePath)) {
  fs.unlinkSync(rootSinglePath);
  console.log('Deleted obsolete single CSV file from root.');
}

// Clean up old chunked files in the root folder if they exist
const rootPart1Path = path.join(__dirname, '..', '..', 'pinterest_bulk_upload_part1.csv');
const rootPart2Path = path.join(__dirname, '..', '..', 'pinterest_bulk_upload_part2.csv');
if (fs.existsSync(rootPart1Path)) {
  fs.unlinkSync(rootPart1Path);
  console.log('Deleted obsolete part1 CSV file from root.');
}
if (fs.existsSync(rootPart2Path)) {
  fs.unlinkSync(rootPart2Path);
  console.log('Deleted obsolete part2 CSV file from root.');
}

// Ensure docs/pinterest folder exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
  console.log(`Created directory: ${outputDir}`);
}

// Convert to CSV string and split into chunks of max 200 rows (Pinterest limit)
// Schema headers matching the new Pinterest parser:
// Title,Media URL,Pinterest board,Description,Link,Publish date,Keywords
console.log(`Generating CSV files with a maximum of 200 Pins per file...`);
const csvHeaders = 'Title,Media URL,Pinterest board,Description,Link,Publish date,Keywords\n';
const maxRows = 200;
let fileIndex = 1;

for (let i = 0; i < pins.length; i += maxRows) {
  const chunk = pins.slice(i, i + maxRows);
  const chunkRows = chunk.map(pin => {
    const encodedMediaUrl = encodeURI(pin.image_url);
    const encodedLink = encodeURI(pin.link);
    return `"${cleanText(pin.title)}",${encodedMediaUrl},"${cleanText(pin.board_name)}","${cleanText(pin.description)}",${encodedLink},,`;
  }).join('\n');
  
  const chunkOutputPath = path.join(outputDir, `pinterest_bulk_upload_part${fileIndex}.csv`);
  fs.writeFileSync(chunkOutputPath, csvHeaders + chunkRows, 'utf8');
  console.log(`Part ${fileIndex} written to: ${chunkOutputPath} (${chunk.length} pins)`);
  fileIndex++;
}

console.log(`Total Pins compiled across all files: ${pins.length}`);
