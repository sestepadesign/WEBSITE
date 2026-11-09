/**
 * Curated gallery — 96 SEO images synchronized with J: PRESENTACIÓN MEJORES JARDINES (01..19).
 */
export interface GalleryImageEntry {
  /** Public URL path under /portfolio/ or /gallery/ */
  src: string;
  alt: string;
  projectSlug: string;
}

const binissalem = 'binissalem';
const binissalemCourtyard = 'binissalem-courtyard';
const bunyola = 'bunyola';
const santaPonsa = 'santa-ponsa';
const sonVida = 'son-vida';
const crestatx = 'crestatx-garden-design';
const campos = 'finca-garden-campos-mallorca';
const santLlorenc = 'sant-llorenc';
const jardinMediterraneo = 'jardin-mediterraneo';
const hotelCabot = 'hotelcabotlasvelas';
const santaEugenia = 'terrace-garden-santa-eugenia';
const llubi = 'garden-design-llubi-mallorca';
const vertical = 'vertical-gardens-in-mallorca';
const puertoAndratx = 'puerto-andratx';
const andratx = 'andratx';
const terracePalma = 'terrace-garden-in-palma';
const portalsNous = 'portals-nous';
const marratxi = 'marratxi';
const alcanada = 'seaside-house-alcudia';

function galleryPath(filename: string): string {
  return `/gallery/${filename}`;
}

export const galleryImages: GalleryImageEntry[] = [
  // 01. Santa Ponsa (9 photos)
  {
    src: '/portfolio/santa-ponsa/images/garden-design-mallorca-santa-ponsa-01-pool-villa-stipa-sestepa.webp',
    alt: 'GARDEN DESIGN SANTA PONSA MALLORCA SESTEPA DESIGN 01',
    projectSlug: santaPonsa,
  },
  {
    src: '/portfolio/santa-ponsa/images/garden-design-mallorca-santa-ponsa-06-covered-terrace-pool-perspective-sestepa.webp',
    alt: 'GARDEN DESIGN SANTA PONSA MALLORCA SESTEPA DESIGN 02',
    projectSlug: santaPonsa,
  },
  {
    src: '/portfolio/santa-ponsa/images/garden-design-mallorca-santa-ponsa-09-architectural-side-walkway-vista-sestepa.webp',
    alt: 'GARDEN DESIGN SANTA PONSA MALLORCA SESTEPA DESIGN 03',
    projectSlug: santaPonsa,
  },
  {
    src: '/portfolio/santa-ponsa/images/garden-design-mallorca-santa-ponsa-07-lateral-stone-corridor-planter-sestepa.webp',
    alt: 'GARDEN DESIGN SANTA PONSA MALLORCA SESTEPA DESIGN 04',
    projectSlug: santaPonsa,
  },
  {
    src: '/portfolio/santa-ponsa/images/garden-design-mallorca-santa-ponsa-05-infinity-edge-cascade-lower-lawn-sestepa.webp',
    alt: 'GARDEN DESIGN SANTA PONSA MALLORCA SESTEPA DESIGN 05',
    projectSlug: santaPonsa,
  },
  {
    src: '/portfolio/santa-ponsa/images/garden-design-mallorca-santa-ponsa-13-hillside-slope-rockery-strelitzia-cycas-sestepa.webp',
    alt: 'GARDEN DESIGN SANTA PONSA MALLORCA SESTEPA DESIGN 06',
    projectSlug: santaPonsa,
  },
  {
    src: '/portfolio/santa-ponsa/images/garden-design-mallorca-santa-ponsa-img-3911-sestepa.webp',
    alt: 'GARDEN DESIGN SANTA PONSA MALLORCA SESTEPA DESIGN 07',
    projectSlug: santaPonsa,
  },
  {
    src: '/portfolio/santa-ponsa/images/garden-design-mallorca-santa-ponsa-17-limestone-boulders-cycas-slope-detail-sestepa.webp',
    alt: 'GARDEN DESIGN SANTA PONSA MALLORCA SESTEPA DESIGN 08',
    projectSlug: santaPonsa,
  },
  {
    src: '/portfolio/santa-ponsa/images/garden-design-mallorca-santa-ponsa-18-timber-sleeper-steps-hillside-vegetation-sestepa.webp',
    alt: 'GARDEN DESIGN SANTA PONSA MALLORCA SESTEPA DESIGN 09',
    projectSlug: santaPonsa,
  },
  // 02. Sant Llorenç (12 photos)
  {
    src: '/portfolio/sant-llorenc/images/2026-10-5-months/garden-design-mallorca-sant-llorenc-5-months-sofia-01-portrait-sestepa-design.webp',
    alt: 'SANT LLORENC ESTATE GARDEN MALLORCA SESTEPA DESIGN 01',
    projectSlug: santLlorenc,
  },
  {
    src: '/portfolio/sant-llorenc/images/2026-10-5-months/garden-design-mallorca-sant-llorenc-5-months-sofia-05-portrait-sestepa-design.webp',
    alt: 'SANT LLORENC ESTATE GARDEN MALLORCA SESTEPA DESIGN 02',
    projectSlug: santLlorenc,
  },
  {
    src: '/portfolio/sant-llorenc/images/2026-10-5-months/garden-design-mallorca-sant-llorenc-5-months-sofia-07-sestepa-design.webp',
    alt: 'SANT LLORENC ESTATE GARDEN MALLORCA SESTEPA DESIGN 03',
    projectSlug: santLlorenc,
  },
  {
    src: '/portfolio/sant-llorenc/images/2026-10-5-months/garden-design-mallorca-sant-llorenc-5-months-sofia-18-sestepa-design.webp',
    alt: 'SANT LLORENC ESTATE GARDEN MALLORCA SESTEPA DESIGN 04',
    projectSlug: santLlorenc,
  },
  {
    src: '/portfolio/sant-llorenc/images/2026-10-5-months/garden-design-mallorca-sant-llorenc-5-months-sofia-27-sestepa-design.webp',
    alt: 'SANT LLORENC ESTATE GARDEN MALLORCA SESTEPA DESIGN 05',
    projectSlug: santLlorenc,
  },
  {
    src: '/portfolio/sant-llorenc/images/2026-10-5-months/garden-design-mallorca-sant-llorenc-5-months-sofia-31-sestepa-design.webp',
    alt: 'SANT LLORENC ESTATE GARDEN MALLORCA SESTEPA DESIGN 06',
    projectSlug: santLlorenc,
  },
  {
    src: '/portfolio/sant-llorenc/images/2026-10-5-months/garden-design-mallorca-sant-llorenc-5-months-sofia-36-sestepa-design.webp',
    alt: 'SANT LLORENC ESTATE GARDEN MALLORCA SESTEPA DESIGN 07',
    projectSlug: santLlorenc,
  },
  {
    src: '/portfolio/sant-llorenc/images/2026-10-5-months/garden-design-mallorca-sant-llorenc-5-months-sofia-46-img-2536-sestepa-design.webp',
    alt: 'SANT LLORENC ESTATE GARDEN MALLORCA SESTEPA DESIGN 08',
    projectSlug: santLlorenc,
  },
  {
    src: '/portfolio/sant-llorenc/images/garden-design-mallorca-sant-llorenc-hero-cover-muhlenbergia-sestepa-design.webp',
    alt: 'SANT LLORENC ESTATE GARDEN MALLORCA SESTEPA DESIGN 09',
    projectSlug: santLlorenc,
  },
  {
    src: '/portfolio/sant-llorenc/images/garden-design-mallorca-sant-llorenc-sestepa.webp',
    alt: 'SANT LLORENC ESTATE GARDEN MALLORCA SESTEPA DESIGN 10',
    projectSlug: santLlorenc,
  },
  {
    src: '/portfolio/sant-llorenc/images/garden-design-mallorca-sestepa-landscape-design-sant-llorenc-01.webp',
    alt: 'SANT LLORENC ESTATE GARDEN MALLORCA SESTEPA DESIGN 11',
    projectSlug: santLlorenc,
  },
  {
    src: '/portfolio/sant-llorenc/images/garden-design-mallorca-sestepa-landscape-design-sant-llorenc-18.webp',
    alt: 'SANT LLORENC ESTATE GARDEN MALLORCA SESTEPA DESIGN 12',
    projectSlug: santLlorenc,
  },
  // 03. Patio en Binissalem (3 photos)
  {
    src: '/portfolio/binissalem-courtyard/images/garden-design-mallorca-binissalem-courtyard-fotografo-uri-gershuni-8-sestepa.webp',
    alt: 'BINISSALEM COURTYARD MEDITERRANEAN GARDEN SESTEPA DESIGN 01',
    projectSlug: binissalemCourtyard,
  },
  {
    src: '/portfolio/binissalem-courtyard/garden-design-mallorca-binissalem-courtyard-01-pool-terrace-lemon-tree-sestepa.webp',
    alt: 'BINISSALEM COURTYARD MEDITERRANEAN GARDEN SESTEPA DESIGN 02',
    projectSlug: binissalemCourtyard,
  },
  {
    src: '/portfolio/binissalem-courtyard/images/garden-design-mallorca-binissalem-courtyard-02-sculptural-agave-cactus-detail-sestepa.webp',
    alt: 'BINISSALEM COURTYARD MEDITERRANEAN GARDEN SESTEPA DESIGN 03',
    projectSlug: binissalemCourtyard,
  },
  // 04. Andratx (3 photos)
  {
    src: '/portfolio/andratx/garden-design-mallorca-andratx-sestepa-01.webp',
    alt: 'GARDEN DESIGN ANDRATX MALLORCA SESTEPA DESIGN 01',
    projectSlug: andratx,
  },
  {
    src: '/portfolio/andratx/images/garden-design-mallorca-andratx-sestepa-02.webp',
    alt: 'GARDEN DESIGN ANDRATX MALLORCA SESTEPA DESIGN 02',
    projectSlug: andratx,
  },
  {
    src: '/portfolio/andratx/images/garden-design-mallorca-andratx-sestepa-03.webp',
    alt: 'GARDEN DESIGN ANDRATX MALLORCA SESTEPA DESIGN 03',
    projectSlug: andratx,
  },
  // 05. Jardín Binissalem (9 photos)
  {
    src: galleryPath('1. LANDSCAPE-GARDEN-DESIGN-BINISSALEM-MALLORCA-SESTEPA-1-scaled (1).avif'),
    alt: 'LANDSCAPE GARDEN DESIGN BINISSALEM MALLORCA SESTEPA DESIGN 01',
    projectSlug: binissalem,
  },
  {
    src: galleryPath('1. LANDSCAPE-GARDEN-DESIGN-BINISSALEM-MALLORCA-SESTEPA-1-scaled (3).avif'),
    alt: 'LANDSCAPE GARDEN DESIGN BINISSALEM MALLORCA SESTEPA DESIGN 02',
    projectSlug: binissalem,
  },
  {
    src: galleryPath('1. LANDSCAPE-GARDEN-DESIGN-BINISSALEM-MALLORCA-SESTEPA-1-scaled (4).avif'),
    alt: 'LANDSCAPE GARDEN DESIGN BINISSALEM MALLORCA SESTEPA DESIGN 03',
    projectSlug: binissalem,
  },
  {
    src: galleryPath('1. LANDSCAPE-GARDEN-DESIGN-BINISSALEM-MALLORCA-SESTEPA-1-scaled (5).avif'),
    alt: 'LANDSCAPE GARDEN DESIGN BINISSALEM MALLORCA SESTEPA DESIGN 04',
    projectSlug: binissalem,
  },
  {
    src: galleryPath('1. LANDSCAPE-GARDEN-DESIGN-BINISSALEM-MALLORCA-SESTEPA-1-scaled (6).avif'),
    alt: 'LANDSCAPE GARDEN DESIGN BINISSALEM MALLORCA SESTEPA DESIGN 05',
    projectSlug: binissalem,
  },
  {
    src: '/portfolio/binissalem/images/garden-design-mallorca-binissalem-01.webp',
    alt: 'LANDSCAPE GARDEN DESIGN BINISSALEM MALLORCA SESTEPA DESIGN 06',
    projectSlug: binissalem,
  },
  {
    src: '/portfolio/binissalem/images/garden-design-mallorca-binissalem-02.webp',
    alt: 'LANDSCAPE GARDEN DESIGN BINISSALEM MALLORCA SESTEPA DESIGN 07',
    projectSlug: binissalem,
  },
  {
    src: '/portfolio/binissalem/images/garden-design-mallorca-binissalem-05.webp',
    alt: 'LANDSCAPE GARDEN DESIGN BINISSALEM MALLORCA SESTEPA DESIGN 08',
    projectSlug: binissalem,
  },
  {
    src: '/portfolio/binissalem/images/LANDSCAPE-GARDEN-MALLORCA-SESTEPA-DESIGN-16.jpg',
    alt: 'LANDSCAPE GARDEN DESIGN BINISSALEM MALLORCA SESTEPA DESIGN 09',
    projectSlug: binissalem,
  },
  // 06. Jardín Mediterráneo (3 photos)
  {
    src: '/portfolio/jardin-mediterraneo/images/garden-design-mallorca-sestepa-landscape-design-jardin-mediterraneo-6-1.webp',
    alt: 'MEDITERRANEAN GARDEN ESTATE MALLORCA SESTEPA DESIGN 01',
    projectSlug: jardinMediterraneo,
  },
  {
    src: '/portfolio/jardin-mediterraneo/images/landscape-garden-design-mallorca-sestepa-landscape-design-jardin-mediterraneo-10.webp',
    alt: 'MEDITERRANEAN GARDEN ESTATE MALLORCA SESTEPA DESIGN 02',
    projectSlug: jardinMediterraneo,
  },
  {
    src: '/portfolio/jardin-mediterraneo/images/landscape-garden-malorca-jardin-mediterraneo-sestepa.webp',
    alt: 'MEDITERRANEAN GARDEN ESTATE MALLORCA SESTEPA DESIGN 03',
    projectSlug: jardinMediterraneo,
  },
  // 07. Bunyola (3 photos)
  {
    src: galleryPath('BUNYOLA-MALLORCA-SESTEPA-LANDSCAPE-GARDEN-DESIGN-1.webp'),
    alt: 'GARDEN LANDSCAPE DESIGN BUNYOLA MALLORCA SESTEPA DESIGN 01',
    projectSlug: bunyola,
  },
  {
    src: '/portfolio/bunyola/images/BUNYOLA-MALLORCA-SESTEPA-LANDSCAPE-GARDEN-DESIGN-2.jpg',
    alt: 'GARDEN LANDSCAPE DESIGN BUNYOLA MALLORCA SESTEPA DESIGN 02',
    projectSlug: bunyola,
  },
  {
    src: '/portfolio/bunyola/garden-design-mallorca-bunyola-sestepa.jpg',
    alt: 'GARDEN LANDSCAPE DESIGN BUNYOLA MALLORCA SESTEPA DESIGN 03',
    projectSlug: bunyola,
  },
  // 08. Son Vida (6 photos)
  {
    src: '/portfolio/son-vida/garden-design-mallorca-son-vida-sestepa.jpg',
    alt: 'GARDEN LANDSCAPE DESIGN SON VIDA MALLORCA SESTEPA DESIGN 01',
    projectSlug: sonVida,
  },
  {
    src: '/portfolio/son-vida/images/garden-design-son-vida-mallorca-sestepa-design-landscape-architecture-1.jpg',
    alt: 'GARDEN LANDSCAPE DESIGN SON VIDA MALLORCA SESTEPA DESIGN 02',
    projectSlug: sonVida,
  },
  {
    src: '/portfolio/son-vida/images/garden-design-son-vida-mallorca-sestepa-design-landscape-architecture-2.jpg',
    alt: 'GARDEN LANDSCAPE DESIGN SON VIDA MALLORCA SESTEPA DESIGN 03',
    projectSlug: sonVida,
  },
  {
    src: '/portfolio/son-vida/images/garden-design-son-vida-mallorca-sestepa-design-landscape-architecture-3.jpg',
    alt: 'GARDEN LANDSCAPE DESIGN SON VIDA MALLORCA SESTEPA DESIGN 04',
    projectSlug: sonVida,
  },
  {
    src: '/portfolio/son-vida/images/garden-design-son-vida-mallorca-sestepa-design-landscape-architecture-5.jpg',
    alt: 'GARDEN LANDSCAPE DESIGN SON VIDA MALLORCA SESTEPA DESIGN 05',
    projectSlug: sonVida,
  },
  {
    src: '/portfolio/son-vida/images/garden-design-son-vida-mallorca-sestepa-design-landscape-architecture-6.jpg',
    alt: 'GARDEN LANDSCAPE DESIGN SON VIDA MALLORCA SESTEPA DESIGN 06',
    projectSlug: sonVida,
  },
  // 09. Crestatx (3 photos)
  {
    src: '/portfolio/crestatx-garden-design/images/GARDEN-DESIGN-MALLORCA-CRESTATX-SESTEPA-LANDSCAPE-DESIGN-4.jpg',
    alt: 'GARDEN LANDSCAPE DESIGN CRESTATX MALLORCA SESTEPA DESIGN 01',
    projectSlug: crestatx,
  },
  {
    src: '/portfolio/crestatx-garden-design/images/GARDEN-DESIGN-MALLORCA-CRESTATX-SESTEPA-LANDSCAPE-DESIGN-22.jpg',
    alt: 'GARDEN LANDSCAPE DESIGN CRESTATX MALLORCA SESTEPA DESIGN 02',
    projectSlug: crestatx,
  },
  {
    src: '/portfolio/crestatx-garden-design/images/GARDEN-LANDSCAPE-DESIGN-MALLORCA-SESTEPA-DESIGN-JARDINES-1.webp',
    alt: 'GARDEN LANDSCAPE DESIGN CRESTATX MALLORCA SESTEPA DESIGN 03',
    projectSlug: crestatx,
  },
  // 10. Puerto Andratx (3 photos)
  {
    src: galleryPath('GARDEN-DESIGN-MALLORCA-PUERTO-ANDRATX-SESTEPA-DESIGN-MAR-LLABRES-_1_.webp'),
    alt: 'GARDEN DESIGN MALLORCA PUERTO ANDRATX SESTEPA DESIGN MAR LLABRES 01',
    projectSlug: puertoAndratx,
  },
  {
    src: galleryPath('GARDEN-DESIGN-MALLORCA-PUERTO-ANDRATX-SESTEPA-DESIGN-MAR-LLABRES-_2_.webp'),
    alt: 'GARDEN DESIGN MALLORCA PUERTO ANDRATX SESTEPA DESIGN MAR LLABRES 02',
    projectSlug: puertoAndratx,
  },
  {
    src: galleryPath('garden-design-mar-llabres-collab-mallorca-sestepa.jpg'),
    alt: 'GARDEN DESIGN MALLORCA PUERTO ANDRATX SESTEPA DESIGN MAR LLABRES 03',
    projectSlug: puertoAndratx,
  },
  // 11. Hotel Cabot Las Velas (6 photos)
  {
    src: '/portfolio/hotelcabotlasvelas/images/CABOT-LAS-VELAS-HOTEL-SESTEPA-DESIGN-MALLORCA-2.webp',
    alt: 'HOTEL CABOT LAS VELAS GARDEN DESIGN MALLORCA SESTEPA DESIGN 01',
    projectSlug: hotelCabot,
  },
  {
    src: '/portfolio/hotelcabotlasvelas/images/CABOT-LAS-VELAS-HOTEL-SESTEPA-DESIGN-MALLORCA-_4_.webp',
    alt: 'HOTEL CABOT LAS VELAS GARDEN DESIGN MALLORCA SESTEPA DESIGN 02',
    projectSlug: hotelCabot,
  },
  {
    src: '/portfolio/hotelcabotlasvelas/images/CABOT-LAS-VELAS-SESTEPA-LANDSCAPE-DESIGN-MALLORCA-1500-3.jpg',
    alt: 'HOTEL CABOT LAS VELAS GARDEN DESIGN MALLORCA SESTEPA DESIGN 03',
    projectSlug: hotelCabot,
  },
  {
    src: '/portfolio/hotelcabotlasvelas/images/CABOT-LAS-VELAS-SESTEPA-LANDSCAPE-DESIGN-MALLORCA-1500-8.jpg',
    alt: 'HOTEL CABOT LAS VELAS GARDEN DESIGN MALLORCA SESTEPA DESIGN 04',
    projectSlug: hotelCabot,
  },
  {
    src: '/portfolio/hotelcabotlasvelas/images/CABOT-LAS-VELAS-SESTEPA-LANDSCAPE-DESIGN-MALLORCA-1500-11.jpg',
    alt: 'HOTEL CABOT LAS VELAS GARDEN DESIGN MALLORCA SESTEPA DESIGN 05',
    projectSlug: hotelCabot,
  },
  {
    src: '/portfolio/hotelcabotlasvelas/garden-design-mallorca-hotelcabotlasvelas-sestepa.webp',
    alt: 'HOTEL CABOT LAS VELAS GARDEN DESIGN MALLORCA SESTEPA DESIGN 06',
    projectSlug: hotelCabot,
  },
  // 12. Finca Jardín Campos (9 photos)
  {
    src: '/portfolio/finca-garden-campos-mallorca/images/finca-garden-campos-sestepa-design-landscaper-mallorca-01-master.webp',
    alt: 'FINCA GARDEN CAMPOS MALLORCA SESTEPA DESIGN 01',
    projectSlug: campos,
  },
  {
    src: '/portfolio/finca-garden-campos-mallorca/images/finca-garden-campos-sestepa-design-landscaper-mallorca-23.jpg',
    alt: 'FINCA GARDEN CAMPOS MALLORCA SESTEPA DESIGN 02',
    projectSlug: campos,
  },
  {
    src: '/portfolio/finca-garden-campos-mallorca/images/finca-garden-campos-sestepa-design-landscaper-mallorca-29.jpg',
    alt: 'FINCA GARDEN CAMPOS MALLORCA SESTEPA DESIGN 03',
    projectSlug: campos,
  },
  {
    src: '/portfolio/finca-garden-campos-mallorca/images/finca-garden-campos-sestepa-design-landscaper-mallorca-33.jpg',
    alt: 'FINCA GARDEN CAMPOS MALLORCA SESTEPA DESIGN 04',
    projectSlug: campos,
  },
  {
    src: '/portfolio/finca-garden-campos-mallorca/images/finca-garden-campos-sestepa-design-landscaper-mallorca-34.jpg',
    alt: 'FINCA GARDEN CAMPOS MALLORCA SESTEPA DESIGN 05',
    projectSlug: campos,
  },
  {
    src: '/portfolio/finca-garden-campos-mallorca/images/finca-garden-campos-sestepa-design-landscaper-mallorca-38.jpg',
    alt: 'FINCA GARDEN CAMPOS MALLORCA SESTEPA DESIGN 06',
    projectSlug: campos,
  },
  {
    src: galleryPath('GARDEN-LANDSCAPE-DESIGN-MALLORCA-SESTEPA-DESIGN-JARDINES-CAMPOS (1).webp'),
    alt: 'FINCA GARDEN CAMPOS MALLORCA SESTEPA DESIGN 07',
    projectSlug: campos,
  },
  {
    src: galleryPath('GARDEN-LANDSCAPE-DESIGN-MALLORCA-SESTEPA-DESIGN-JARDINES-CAMPOS (2).webp'),
    alt: 'FINCA GARDEN CAMPOS MALLORCA SESTEPA DESIGN 08',
    projectSlug: campos,
  },
  {
    src: '/portfolio/finca-garden-campos-mallorca/images/garden-design-mallorca-finca-garden-campos-mallorca-img-1333-sestepa.webp',
    alt: 'FINCA GARDEN CAMPOS MALLORCA SESTEPA DESIGN 09',
    projectSlug: campos,
  },
  // 13. Santa Eugènia (6 photos)
  {
    src: '/portfolio/terrace-garden-santa-eugenia/images/garden-design-mallorca-santa-eugenia-sestepa-01.webp',
    alt: 'TERRACE GARDEN SANTA EUGENIA MALLORCA SESTEPA DESIGN 01',
    projectSlug: santaEugenia,
  },
  {
    src: '/portfolio/terrace-garden-santa-eugenia/images/garden-design-mallorca-santa-eugenia-sestepa-02.webp',
    alt: 'TERRACE GARDEN SANTA EUGENIA MALLORCA SESTEPA DESIGN 02',
    projectSlug: santaEugenia,
  },
  {
    src: '/portfolio/terrace-garden-santa-eugenia/images/garden-design-mallorca-santa-eugenia-sestepa-03.webp',
    alt: 'TERRACE GARDEN SANTA EUGENIA MALLORCA SESTEPA DESIGN 03',
    projectSlug: santaEugenia,
  },
  {
    src: '/portfolio/terrace-garden-santa-eugenia/images/garden-design-mallorca-santa-eugenia-sestepa-04.webp',
    alt: 'TERRACE GARDEN SANTA EUGENIA MALLORCA SESTEPA DESIGN 04',
    projectSlug: santaEugenia,
  },
  {
    src: '/portfolio/terrace-garden-santa-eugenia/images/garden-design-mallorca-santa-eugenia-sestepa-06.webp',
    alt: 'TERRACE GARDEN SANTA EUGENIA MALLORCA SESTEPA DESIGN 05',
    projectSlug: santaEugenia,
  },
  {
    src: '/portfolio/terrace-garden-santa-eugenia/images/garden-design-mallorca-santa-eugenia-sestepa-07.webp',
    alt: 'TERRACE GARDEN SANTA EUGENIA MALLORCA SESTEPA DESIGN 06',
    projectSlug: santaEugenia,
  },
  // 14. Llubí (3 photos)
  {
    src: '/portfolio/garden-design-llubi-mallorca/images/GARDEN-DESIGN-MALLORCA-LLUBI-SESTEPA-LANDSCAPE-DESIGN-5.png',
    alt: 'GARDEN DESIGN LLUBI MALLORCA SESTEPA DESIGN 01',
    projectSlug: llubi,
  },
  {
    src: '/portfolio/garden-design-llubi-mallorca/images/landscape-architecture-mallorca-llubi-sestepa-design (5).webp',
    alt: 'GARDEN DESIGN LLUBI MALLORCA SESTEPA DESIGN 02',
    projectSlug: llubi,
  },
  {
    src: '/portfolio/garden-design-llubi-mallorca/images/landscape-architecture-mallorca-llubi-sestepa-design (9).webp',
    alt: 'GARDEN DESIGN LLUBI MALLORCA SESTEPA DESIGN 03',
    projectSlug: llubi,
  },
  // 15. Jardines Verticales en Mallorca (6 photos)
  {
    src: '/portfolio/vertical-gardens-in-mallorca/images/2026-3-years-growth/garden-design-mallorca-vertical-garden-ok-mobility-palma-sestepa-3-years-01.webp',
    alt: 'VERTICAL GARDENS IN MALLORCA OK MOBILITY SESTEPA DESIGN 01',
    projectSlug: vertical,
  },
  {
    src: '/portfolio/vertical-gardens-in-mallorca/images/2026-3-years-growth/garden-design-mallorca-vertical-garden-ok-mobility-palma-sestepa-3-years-02.webp',
    alt: 'VERTICAL GARDENS IN MALLORCA OK MOBILITY SESTEPA DESIGN 02',
    projectSlug: vertical,
  },
  {
    src: '/portfolio/vertical-gardens-in-mallorca/images/2026-3-years-growth/garden-design-mallorca-vertical-garden-ok-mobility-palma-sestepa-3-years-03.webp',
    alt: 'VERTICAL GARDENS IN MALLORCA OK MOBILITY SESTEPA DESIGN 03',
    projectSlug: vertical,
  },
  {
    src: '/portfolio/vertical-gardens-in-mallorca/images/2026-3-years-growth/garden-design-mallorca-vertical-garden-ok-mobility-palma-sestepa-3-years-06.webp',
    alt: 'VERTICAL GARDENS IN MALLORCA OK MOBILITY SESTEPA DESIGN 04',
    projectSlug: vertical,
  },
  {
    src: '/portfolio/vertical-gardens-in-mallorca/images/2026-3-years-growth/garden-design-mallorca-vertical-garden-ok-mobility-palma-sestepa-3-years-08.webp',
    alt: 'VERTICAL GARDENS IN MALLORCA OK MOBILITY SESTEPA DESIGN 05',
    projectSlug: vertical,
  },
  {
    src: '/portfolio/vertical-gardens-in-mallorca/images/2026-3-years-growth/garden-design-mallorca-vertical-garden-ok-mobility-palma-sestepa-3-years-11-bougainvillea-mesh.webp',
    alt: 'VERTICAL GARDENS IN MALLORCA OK MOBILITY SESTEPA DESIGN 06',
    projectSlug: vertical,
  },
  // 16. Terraza en Palma (3 photos)
  {
    src: '/portfolio/terrace-garden-in-palma/garden-design-mallorca-terrace-garden-in-palma-sestepa.webp',
    alt: 'TERRACE GARDEN IN PALMA MALLORCA SESTEPA DESIGN 01',
    projectSlug: terracePalma,
  },
  {
    src: '/portfolio/terrace-garden-in-palma/images/landscape-garden-design-terrace-palma-mallorca-sestepa-design-5.jpg',
    alt: 'TERRACE GARDEN IN PALMA MALLORCA SESTEPA DESIGN 02',
    projectSlug: terracePalma,
  },
  {
    src: '/portfolio/terrace-garden-in-palma/images/landscape-garden-design-terrace-palma-mallorca-sestepa-design-6.jpg',
    alt: 'TERRACE GARDEN IN PALMA MALLORCA SESTEPA DESIGN 03',
    projectSlug: terracePalma,
  },
  // 17. Portals Nous (3 photos)
  {
    src: '/portfolio/portals-nous/garden-design-mallorca-portals-nous-sestepa-01.webp',
    alt: 'PORTALS NOUS GARDEN DESIGN MALLORCA SESTEPA DESIGN 01',
    projectSlug: portalsNous,
  },
  {
    src: '/portfolio/portals-nous/images/garden-design-mallorca-portals-nous-sestepa-02.webp',
    alt: 'PORTALS NOUS GARDEN DESIGN MALLORCA SESTEPA DESIGN 02',
    projectSlug: portalsNous,
  },
  {
    src: '/portfolio/portals-nous/images/garden-design-mallorca-portals-nous-sestepa-03.webp',
    alt: 'PORTALS NOUS GARDEN DESIGN MALLORCA SESTEPA DESIGN 03',
    projectSlug: portalsNous,
  },
  // 18. Marratxí (3 photos)
  {
    src: '/portfolio/marratxi/garden-design-mallorca-marratxi-sestepa-01.webp',
    alt: 'MARRATXI MEDITERRANEAN ESTATE GARDEN SESTEPA DESIGN 01',
    projectSlug: marratxi,
  },
  {
    src: '/portfolio/marratxi/images/garden-design-mallorca-marratxi-sestepa-02.webp',
    alt: 'MARRATXI MEDITERRANEAN ESTATE GARDEN SESTEPA DESIGN 02',
    projectSlug: marratxi,
  },
  {
    src: '/portfolio/marratxi/images/garden-design-mallorca-marratxi-sestepa-03.webp',
    alt: 'MARRATXI MEDITERRANEAN ESTATE GARDEN SESTEPA DESIGN 03',
    projectSlug: marratxi,
  },
  // 19. Alcanada (3 photos)
  {
    src: '/portfolio/seaside-house-alcudia/images/garden-design-mallorca-seaside-house-alcudia-sestepa-01-panoramica.webp',
    alt: 'ALCANADA SEASIDE HOUSE ALCUDIA GARDEN DESIGN SESTEPA DESIGN 01',
    projectSlug: alcanada,
  },
  {
    src: '/portfolio/seaside-house-alcudia/images/garden-design-mallorca-seaside-house-alcudia-sestepa-02-bancal-corten.webp',
    alt: 'ALCANADA SEASIDE HOUSE ALCUDIA GARDEN DESIGN SESTEPA DESIGN 02',
    projectSlug: alcanada,
  },
  {
    src: '/portfolio/seaside-house-alcudia/images/garden-design-mallorca-seaside-house-alcudia-sestepa-03-plantas-banco.webp',
    alt: 'ALCANADA SEASIDE HOUSE ALCUDIA GARDEN DESIGN SESTEPA DESIGN 03',
    projectSlug: alcanada,
  },
];
