/**
 * Curated gallery — 36 SEO images from 3-WEBSITE/gallery/ on Drive.
 * 6 Binissalem + 3 per project (Sant Llorenç after Llubí, away from Santa Eugènia).
 */
export interface GalleryImageEntry {
  /** Public URL path under /gallery/ */
  src: string;
  alt: string;
  projectSlug: string;
}

const binissalem = 'binissalem';
const bunyola = 'bunyola';
const santaPonsa = 'santa-ponsa';
const crestatx = 'crestatx-garden-design';
const campos = 'finca-garden-campos-mallorca';
const santLlorenc = 'sant-llorenc';
const hotelCabot = 'hotelcabotlasvelas';
const santaEugenia = 'terrace-garden-santa-eugenia';
const llubi = 'garden-design-llubi-mallorca';
const vertical = 'vertical-gardens-in-mallorca';

/** Filename on disk (may include spaces — encode in HTML via normal paths). */
function galleryPath(filename: string): string {
  return `/gallery/${filename}`;
}

export const galleryImages: GalleryImageEntry[] = [
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
    src: galleryPath('BUNYOLA-MALLORCA-SESTEPA-LANDSCAPE-GARDEN-DESIGN.jpg'),
    alt: 'GARDEN LANDSCAPE DESIGN BUNYOLA MALLORCA SESTEPA DESIGN',
    projectSlug: bunyola,
  },
  {
    src: galleryPath('BUNYOLA-MALLORCA-SESTEPA-LANDSCAPE-GARDEN-DESIGN-1.webp'),
    alt: 'GARDEN LANDSCAPE DESIGN BUNYOLA MALLORCA SESTEPA DESIGN',
    projectSlug: bunyola,
  },
  {
    src: galleryPath('BUNYOLA-MALLORCA-SESTEPA-LANDSCAPE-GARDEN-DESIGN-2.jpg'),
    alt: 'GARDEN LANDSCAPE DESIGN BUNYOLA MALLORCA SESTEPA DESIGN',
    projectSlug: bunyola,
  },
  // 3 × Santa Ponsa
  {
    src: galleryPath('GARDEN-DESIGN-MALLORCA-SESTEPA-JARDINERIA-INTEGRAL-SANTA PONSA (1).jpg'),
    alt: 'GARDEN LANDSCAPE DESIGN SANTA PONSA MALLORCA SESTEPA DESIGN',
    projectSlug: santaPonsa,
  },
  {
    src: galleryPath('GARDEN-DESIGN-MALLORCA-SESTEPA-JARDINERIA-INTEGRAL-SANTA PONSA (2).jpg'),
    alt: 'GARDEN LANDSCAPE DESIGN SANTA PONSA MALLORCA SESTEPA DESIGN',
    projectSlug: santaPonsa,
  },
  {
    src: galleryPath('GARDEN-DESIGN-MALLORCA-SESTEPA-JARDINERIA-INTEGRAL-SANTA PONSA (3).jpg'),
    alt: 'GARDEN LANDSCAPE DESIGN SANTA PONSA MALLORCA SESTEPA DESIGN',
    projectSlug: santaPonsa,
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
    projectSlug: bunyola,
  },
  {
    src: galleryPath('GARDEN-DESIGN-MALLORCA-PUERTO-ANDRATX-SESTEPA-DESIGN-MAR-LLABRES-_2_.webp'),
    alt: 'GARDEN DESIGN MALLORCA PUERTO ANDRATX SESTEPA DESIGN MAR LLABRES',
    projectSlug: bunyola,
  },
  {
    src: galleryPath('garden-design-mar-llabres-collab-mallorca-sestepa.jpg'),
    alt: 'GARDEN DESIGN MAR LLABRES COLLABORATION MALLORCA SESTEPA DESIGN',
    projectSlug: bunyola,
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
  // 3 × Sant Llorenç (aerial · house · pool render)
  {
    src: '/portfolio/sant-llorenc/images/landscape-garden-malorca-sestepa.webp',
    alt: 'SANT LLORÉNC ESTATE GARDEN AERIAL MALLORCA SESTEPA DESIGN',
    projectSlug: santLlorenc,
  },
  {
    src: '/portfolio/sant-llorenc/images/garden-design-mallorca-sestepa-landscape-design-sant-llorenc-6-1.jpg',
    alt: 'SANT LLORÉNC ESTATE GARDEN HOUSE MALLORCA SESTEPA DESIGN',
    projectSlug: santLlorenc,
  },
  {
    src: '/portfolio/sant-llorenc/images/landscape-garden-design-mallorca-sestepa-landscape-design-sant-llorenc-10.jpg',
    alt: 'SANT LLORÉNC ESTATE GARDEN POOL MALLORCA SESTEPA DESIGN',
    projectSlug: santLlorenc,
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
