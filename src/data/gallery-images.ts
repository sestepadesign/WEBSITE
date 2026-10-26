/**
 * Curated gallery — 36 SEO images from 3-WEBSITE/gallery/ on Drive.
 * Sant Llorenç + Jardín Mediterráneo lead (flagship pair), then 6 Binissalem + 3 per project.
 */
export interface GalleryImageEntry {
  /** Public URL path under /gallery/ */
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

/** Filename on disk (may include spaces — encode in HTML via normal paths). */
function galleryPath(filename: string): string {
  return `/gallery/${filename}`;
}

export const galleryImages: GalleryImageEntry[] = [
  // 3 × Santa Ponsa (Primeira Linha da Galeria)
  {
    src: '/portfolio/santa-ponsa/images/garden-design-mallorca-santa-ponsa-01-pool-villa-stipa-sestepa.webp',
    alt: 'GARDEN DESIGN SANTA PONSA MALLORCA POOL VILLA STIPA SESTEPA DESIGN',
    projectSlug: santaPonsa,
  },
  {
    src: '/portfolio/santa-ponsa/images/garden-design-mallorca-santa-ponsa-06-covered-terrace-pool-perspective-sestepa.webp',
    alt: 'GARDEN DESIGN SANTA PONSA MALLORCA COVERED TERRACE POOL SESTEPA DESIGN',
    projectSlug: santaPonsa,
  },
  {
    src: '/portfolio/santa-ponsa/images/garden-design-mallorca-santa-ponsa-09-architectural-side-walkway-vista-sestepa.webp',
    alt: 'GARDEN DESIGN SANTA PONSA MALLORCA ARCHITECTURAL SIDE WALKWAY SESTEPA DESIGN',
    projectSlug: santaPonsa,
  },
  // 3 × Sant Llorenç (Segunda Linha da Galeria — 5 Meses & Hero Cover)
  {
    src: '/portfolio/sant-llorenc/images/garden-design-mallorca-sant-llorenc-hero-cover-muhlenbergia-sestepa-design.webp',
    alt: 'SANT LLORENC ESTATE GARDEN MALLORCA MUHLENBERGIA HERO COVER SESTEPA DESIGN',
    projectSlug: santLlorenc,
  },
  {
    src: '/portfolio/sant-llorenc/images/2026-10-5-months/garden-design-mallorca-sant-llorenc-5-months-01-corten-gravel-walk-destaque-sestepa-design.webp',
    alt: 'SANT LLORENC ESTATE GARDEN MALLORCA CORTEN GRAVEL WALK 5 MONTHS SESTEPA DESIGN',
    projectSlug: santLlorenc,
  },
  {
    src: '/portfolio/sant-llorenc/images/2026-10-5-months/garden-design-mallorca-sant-llorenc-5-months-15-mediterranean-botanical-detail-sestepa-design.webp',
    alt: 'SANT LLORENC ESTATE GARDEN MALLORCA MEDITERRANEAN BOTANICAL DETAIL 5 MONTHS SESTEPA DESIGN',
    projectSlug: santLlorenc,
  },
  // 3 × Binissalem Courtyard (New addition)
  {
    src: '/portfolio/binissalem-courtyard/images/garden-design-mallorca-binissalem-courtyard-01-pool-terrace-lemon-tree-sestepa.webp',
    alt: 'BINISSALEM COURTYARD MEDITERRANEAN SWIMMING POOL AND LEMON TREE SESTEPA DESIGN',
    projectSlug: binissalemCourtyard,
  },
  {
    src: '/portfolio/binissalem-courtyard/images/garden-design-mallorca-binissalem-courtyard-02-sculptural-agave-cactus-detail-sestepa.webp',
    alt: 'BINISSALEM COURTYARD SCULPTURAL AGAVE AND CACTI COMPOSITION SESTEPA DESIGN',
    projectSlug: binissalemCourtyard,
  },
  {
    src: '/portfolio/binissalem-courtyard/images/garden-design-mallorca-binissalem-courtyard-05-pool-terrace-yellow-chairs-sestepa.webp',
    alt: 'BINISSALEM COURTYARD POOL TERRACE WITH YELLOW LOUNGERS AND SCULPTURAL SPECIES SESTEPA DESIGN',
    projectSlug: binissalemCourtyard,
  },
  // 3 × New Binissalem additions (First Row of Gallery)
  {
    src: '/portfolio/binissalem/images/LANDSCAPE-GARDEN-MALLORCA-SESTEPA-DESIGN-14.jpg',
    alt: 'LANDSCAPE GARDEN DESIGN BINISSALEM MALLORCA SESTEPA DESIGN',
    projectSlug: binissalem,
  },
  {
    src: '/portfolio/binissalem/images/LANDSCAPE-GARDEN-MALLORCA-SESTEPA-DESIGN-15.jpg',
    alt: 'LANDSCAPE GARDEN DESIGN BINISSALEM MALLORCA SESTEPA DESIGN',
    projectSlug: binissalem,
  },
  {
    src: '/portfolio/binissalem/images/LANDSCAPE-GARDEN-MALLORCA-SESTEPA-DESIGN-16.jpg',
    alt: 'LANDSCAPE GARDEN DESIGN BINISSALEM MALLORCA SESTEPA DESIGN',
    projectSlug: binissalem,
  },
  // 3 × Sant Llorenç (real garden photos)
  {
    src: '/portfolio/sant-llorenc/images/garden-design-mallorca-sant-llorenc-sestepa.webp',
    alt: 'SANT LLORÉNC ESTATE GARDEN MALLORCA SESTEPA DESIGN',
    projectSlug: santLlorenc,
  },
  {
    src: '/portfolio/sant-llorenc/images/garden-design-mallorca-sestepa-landscape-design-sant-llorenc-01.webp',
    alt: 'SANT LLORÉNC ESTATE GARDEN MALLORCA SESTEPA DESIGN',
    projectSlug: santLlorenc,
  },
  {
    src: '/portfolio/sant-llorenc/images/garden-design-mallorca-sestepa-landscape-design-sant-llorenc-18.webp',
    alt: 'SANT LLORÉNC ESTATE GARDEN MALLORCA SESTEPA DESIGN',
    projectSlug: santLlorenc,
  },
  // 3 × Jardín Mediterráneo (aerial · house · pool render)
  {
    src: '/portfolio/jardin-mediterraneo/images/landscape-garden-malorca-jardin-mediterraneo-sestepa.webp',
    alt: 'MEDITERRANEAN GARDEN ESTATE AERIAL MALLORCA SESTEPA DESIGN',
    projectSlug: jardinMediterraneo,
  },
  {
    src: '/portfolio/jardin-mediterraneo/images/garden-design-mallorca-sestepa-landscape-design-jardin-mediterraneo-6-1.webp',
    alt: 'MEDITERRANEAN GARDEN ESTATE HOUSE MALLORCA SESTEPA DESIGN',
    projectSlug: jardinMediterraneo,
  },
  {
    src: '/portfolio/jardin-mediterraneo/images/landscape-garden-design-mallorca-sestepa-landscape-design-jardin-mediterraneo-10.webp',
    alt: 'MEDITERRANEAN GARDEN ESTATE POOL MALLORCA SESTEPA DESIGN',
    projectSlug: jardinMediterraneo,
  },
  // 6 × Binissalem
  {
    src: galleryPath('1. LANDSCAPE-GARDEN-DESIGN-BINISSALEM-MALLORCA-SESTEPA-1-scaled (1).avif'),
    alt: 'LANDSCAPE GARDEN DESIGN BINISSALEM MALLORCA SESTEPA DESIGN',
    projectSlug: binissalem,
  },
  {
    src: galleryPath('1. LANDSCAPE-GARDEN-DESIGN-BINISSALEM-MALLORCA-SESTEPA-1-scaled (2).avif'),
    alt: 'LANDSCAPE GARDEN DESIGN BINISSALEM MALLORCA SESTEPA DESIGN',
    projectSlug: binissalem,
  },
  {
    src: galleryPath('1. LANDSCAPE-GARDEN-DESIGN-BINISSALEM-MALLORCA-SESTEPA-1-scaled (3).avif'),
    alt: 'LANDSCAPE GARDEN DESIGN BINISSALEM MALLORCA SESTEPA DESIGN',
    projectSlug: binissalem,
  },
  {
    src: galleryPath('1. LANDSCAPE-GARDEN-DESIGN-BINISSALEM-MALLORCA-SESTEPA-1-scaled (4).avif'),
    alt: 'LANDSCAPE GARDEN DESIGN BINISSALEM MALLORCA SESTEPA DESIGN',
    projectSlug: binissalem,
  },
  {
    src: galleryPath('1. LANDSCAPE-GARDEN-DESIGN-BINISSALEM-MALLORCA-SESTEPA-1-scaled (5).avif'),
    alt: 'LANDSCAPE GARDEN DESIGN BINISSALEM MALLORCA SESTEPA DESIGN',
    projectSlug: binissalem,
  },
  {
    src: galleryPath('1. LANDSCAPE-GARDEN-DESIGN-BINISSALEM-MALLORCA-SESTEPA-1-scaled (6).avif'),
    alt: 'LANDSCAPE GARDEN DESIGN BINISSALEM MALLORCA SESTEPA DESIGN',
    projectSlug: binissalem,
  },
  // 3 × Bunyola
  {
    src: '/portfolio/bunyola/garden-design-mallorca-bunyola-sestepa.jpg',
    alt: 'GARDEN LANDSCAPE DESIGN BUNYOLA MALLORCA SESTEPA DESIGN',
    projectSlug: bunyola,
  },
  {
    src: galleryPath('BUNYOLA-MALLORCA-SESTEPA-LANDSCAPE-GARDEN-DESIGN-1.webp'),
    alt: 'GARDEN LANDSCAPE DESIGN BUNYOLA MALLORCA SESTEPA DESIGN',
    projectSlug: bunyola,
  },
  {
    src: '/portfolio/bunyola/images/BUNYOLA-MALLORCA-SESTEPA-LANDSCAPE-GARDEN-DESIGN-2.jpg',
    alt: 'GARDEN LANDSCAPE DESIGN BUNYOLA MALLORCA SESTEPA DESIGN',
    projectSlug: bunyola,
  },
  // 3 × Son Vida
  {
    src: '/portfolio/son-vida/images/garden-design-son-vida-mallorca-sestepa-design-landscape-architecture-1.jpg',
    alt: 'GARDEN LANDSCAPE DESIGN SON VIDA MALLORCA SESTEPA DESIGN',
    projectSlug: sonVida,
  },
  {
    src: '/portfolio/son-vida/images/garden-design-son-vida-mallorca-sestepa-design-landscape-architecture-3.jpg',
    alt: 'GARDEN LANDSCAPE DESIGN SON VIDA MALLORCA SESTEPA DESIGN',
    projectSlug: sonVida,
  },
  {
    src: '/portfolio/son-vida/images/garden-design-son-vida-mallorca-sestepa-design-landscape-architecture-5.jpg',
    alt: 'GARDEN LANDSCAPE DESIGN SON VIDA MALLORCA SESTEPA DESIGN',
    projectSlug: sonVida,
  },
  // 3 × Crestatx
  {
    src: galleryPath('GARDEN-LANDSCAPE-DESIGN-MALLORCA-SESTEPA-DESIGN-JARDINES-CRESTATX.avif'),
    alt: 'GARDEN LANDSCAPE DESIGN CRESTATX MALLORCA SESTEPA DESIGN',
    projectSlug: crestatx,
  },
  {
    src: galleryPath('GARDEN-LANDSCAPE-DESIGN-MALLORCA-SESTEPA-DESIGN-JARDINES-CRESTATX.jpg'),
    alt: 'GARDEN LANDSCAPE DESIGN CRESTATX MALLORCA SESTEPA DESIGN',
    projectSlug: crestatx,
  },
  {
    src: galleryPath('GARDEN-LANDSCAPE-DESIGN-MALLORCA-SESTEPA-DESIGN-JARDINES-CRESTATX.webp'),
    alt: 'GARDEN LANDSCAPE DESIGN CRESTATX MALLORCA SESTEPA DESIGN',
    projectSlug: crestatx,
  },
  // Puerto Andratx / Mar Llabres collab (3)
  {
    src: galleryPath('GARDEN-DESIGN-MALLORCA-PUERTO-ANDRATX-SESTEPA-DESIGN-MAR-LLABRES-_1_.webp'),
    alt: 'GARDEN DESIGN MALLORCA PUERTO ANDRATX SESTEPA DESIGN MAR LLABRES',
    projectSlug: puertoAndratx,
  },
  {
    src: galleryPath('GARDEN-DESIGN-MALLORCA-PUERTO-ANDRATX-SESTEPA-DESIGN-MAR-LLABRES-_2_.webp'),
    alt: 'GARDEN DESIGN MALLORCA PUERTO ANDRATX SESTEPA DESIGN MAR LLABRES',
    projectSlug: puertoAndratx,
  },
  {
    src: galleryPath('garden-design-mar-llabres-collab-mallorca-sestepa.jpg'),
    alt: 'GARDEN DESIGN MAR LLABRES COLLABORATION MALLORCA SESTEPA DESIGN',
    projectSlug: puertoAndratx,
  },
  // 3 × Hotel Cabot
  {
    src: galleryPath('GARDEN-LANDSCAPE-DESIGN-MALLORCA-SESTEPA-DESIGN-JARDINES-CABOT LAS VELAS (1).webp'),
    alt: 'GARDEN LANDSCAPE DESIGN HOTEL CABOT LAS VELAS MALLORCA SESTEPA DESIGN',
    projectSlug: hotelCabot,
  },
  {
    src: galleryPath('GARDEN-LANDSCAPE-DESIGN-MALLORCA-SESTEPA-DESIGN-JARDINES-CABOT LAS VELAS (2).webp'),
    alt: 'GARDEN LANDSCAPE DESIGN HOTEL CABOT LAS VELAS MALLORCA SESTEPA DESIGN',
    projectSlug: hotelCabot,
  },
  {
    src: galleryPath('GARDEN-LANDSCAPE-DESIGN-MALLORCA-SESTEPA-DESIGN-JARDINES-CABOT LAS VELAS (3).webp'),
    alt: 'GARDEN LANDSCAPE DESIGN HOTEL CABOT LAS VELAS MALLORCA SESTEPA DESIGN',
    projectSlug: hotelCabot,
  },
  // 3 × Campos
  {
    src: galleryPath('GARDEN-LANDSCAPE-DESIGN-MALLORCA-SESTEPA-DESIGN-JARDINES-CAMPOS (1).webp'),
    alt: 'GARDEN LANDSCAPE DESIGN CAMPOS MALLORCA SESTEPA DESIGN FINCA GARDEN',
    projectSlug: campos,
  },
  {
    src: galleryPath('GARDEN-LANDSCAPE-DESIGN-MALLORCA-SESTEPA-DESIGN-JARDINES-CAMPOS (2).webp'),
    alt: 'GARDEN LANDSCAPE DESIGN CAMPOS MALLORCA SESTEPA DESIGN FINCA GARDEN',
    projectSlug: campos,
  },
  {
    src: galleryPath('GARDEN-LANDSCAPE-DESIGN-MALLORCA-SESTEPA-DESIGN-JARDINES-CAMPOS (1).avif'),
    alt: 'GARDEN LANDSCAPE DESIGN CAMPOS MALLORCA SESTEPA DESIGN FINCA GARDEN',
    projectSlug: campos,
  },
  // 3 × Santa Eugènia (terrace · pool · planting)
  {
    src: galleryPath('GARDEN-LANDSCAPE-DESIGN-MALLORCA-SESTEPA-DESIGN-JARDINES-SANTA EUGENIA.avif'),
    alt: 'TERRACE GARDEN SANTA EUGÈNIA MALLORCA SESTEPA DESIGN',
    projectSlug: santaEugenia,
  },
  {
    src: galleryPath('GARDEN-LANDSCAPE-DESIGN-MALLORCA-SESTEPA-DESIGN-JARDINES-SANTA EUGENIA.webp'),
    alt: 'TERRACE GARDEN SANTA EUGÈNIA MALLORCA SESTEPA DESIGN',
    projectSlug: santaEugenia,
  },
  {
    src: galleryPath('GARDEN-LANDSCAPE-DESIGN-MALLORCA-SESTEPA-DESIGN-JARDINES-SANTA EUGENIA (2).webp'),
    alt: 'TERRACE GARDEN SANTA EUGÈNIA MALLORCA SESTEPA DESIGN',
    projectSlug: santaEugenia,
  },
  // 3 × Llubí
  {
    src: galleryPath('GARDEN DESIGN LLUBI-GARDEN-SESTEPA-LANDSCAPE-DESIGN-MALLORCA (1).avif'),
    alt: 'GARDEN LANDSCAPE DESIGN LLUBÍ MALLORCA SESTEPA DESIGN',
    projectSlug: llubi,
  },
  {
    src: galleryPath('GARDEN DESIGN LLUBI-GARDEN-SESTEPA-LANDSCAPE-DESIGN-MALLORCA (2).avif'),
    alt: 'GARDEN LANDSCAPE DESIGN LLUBÍ MALLORCA SESTEPA DESIGN',
    projectSlug: llubi,
  },
  {
    src: galleryPath('GARDEN DESIGN LLUBI-GARDEN-SESTEPA-LANDSCAPE-DESIGN-MALLORCA (3).avif'),
    alt: 'GARDEN LANDSCAPE DESIGN LLUBÍ MALLORCA SESTEPA DESIGN',
    projectSlug: llubi,
  },
  // 3 × Vertical Gardens
  {
    src: galleryPath('VERTICAL GARDEN MALLORCA-SESTEPA-DESIGN (1).webp'),
    alt: 'VERTICAL GARDENS IN MALLORCA SESTEPA LANDSCAPE DESIGN',
    projectSlug: vertical,
  },
  {
    src: galleryPath('VERTICAL GARDEN MALLORCA-SESTEPA-DESIGN (2).webp'),
    alt: 'VERTICAL GARDENS IN MALLORCA SESTEPA LANDSCAPE DESIGN',
    projectSlug: vertical,
  },
  {
    src: galleryPath('VERTICAL GARDEN MALLORCA-SESTEPA-DESIGN (1).avif'),
    alt: 'VERTICAL GARDENS IN MALLORCA SESTEPA LANDSCAPE DESIGN',
    projectSlug: vertical,
  },
];
