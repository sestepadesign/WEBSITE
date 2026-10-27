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
const andratx = 'andratx';
const terracePalma = 'terrace-garden-in-palma';
const portalsNous = 'portals-nous';
const marratxi = 'marratxi';

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
  // 3 × Andratx (Camino en Mallorca)
  {
    src: '/portfolio/andratx/images/garden-design-mallorca-andratx-sestepa-01.webp',
    alt: 'GARDEN DESIGN ANDRATX MALLORCA MEDITERRANEAN ESTATE PATHWAY AND TRAMUNTANA VISTA SESTEPA DESIGN',
    projectSlug: andratx,
  },
  {
    src: '/portfolio/andratx/images/garden-design-mallorca-andratx-sestepa-02.webp',
    alt: 'GARDEN DESIGN ANDRATX MALLORCA MUHLENBERGIA AND FLOWERING BORDERS SESTEPA DESIGN',
    projectSlug: andratx,
  },
  {
    src: '/portfolio/andratx/images/garden-design-mallorca-andratx-sestepa-03.webp',
    alt: 'GARDEN DESIGN ANDRATX MALLORCA GOLDEN HOUR STIPA AND PERENNIAL GRASSES SESTEPA DESIGN',
    projectSlug: andratx,
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
  // 6 × Hotel Cabot
  {
    src: '/portfolio/hotelcabotlasvelas/garden-design-mallorca-hotelcabotlasvelas-sestepa.webp',
    alt: 'HOTEL CABOT LAS VELAS SWIMMING POOL AND MEDITERRANEAN OASIS SESTEPA DESIGN',
    projectSlug: hotelCabot,
  },
  {
    src: '/portfolio/hotelcabotlasvelas/images/CABOT-LAS-VELAS-HOTEL-SESTEPA-DESIGN-MALLORCA-2.webp',
    alt: 'HOTEL CABOT LAS VELAS APARTMENTS VOLCANIC GRAVEL AND PERENNIAL BEDS SESTEPA DESIGN',
    projectSlug: hotelCabot,
  },
  {
    src: '/portfolio/hotelcabotlasvelas/images/CABOT-LAS-VELAS-SESTEPA-LANDSCAPE-DESIGN-MALLORCA-1500-11.jpg',
    alt: 'HOTEL CABOT LAS VELAS RESORT GARDEN DESIGN MALLORCA SESTEPA DESIGN',
    projectSlug: hotelCabot,
  },
  {
    src: '/portfolio/hotelcabotlasvelas/images/CABOT-LAS-VELAS-SESTEPA-LANDSCAPE-DESIGN-MALLORCA-1500-3.jpg',
    alt: 'HOTEL CABOT LAS VELAS POOL DECK AND BAMBOO PLANTERS SESTEPA DESIGN',
    projectSlug: hotelCabot,
  },
  {
    src: '/portfolio/hotelcabotlasvelas/images/CABOT-LAS-VELAS-SESTEPA-LANDSCAPE-DESIGN-MALLORCA-1500-8.jpg',
    alt: 'HOTEL CABOT LAS VELAS VOLCANIC GRAVEL AND CYCAD COMPOSITION SESTEPA DESIGN',
    projectSlug: hotelCabot,
  },
  {
    src: '/portfolio/hotelcabotlasvelas/images/CABOT-LAS-VELAS-HOTEL-SESTEPA-DESIGN-MALLORCA-_4_.webp',
    alt: 'HOTEL CABOT LAS VELAS POOL VISTA AND WHITE APARTMENT TERRACES SESTEPA DESIGN',
    projectSlug: hotelCabot,
  },
  // 6 × Campos
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
  {
    src: '/portfolio/finca-garden-campos-mallorca/images/finca-garden-campos-sestepa-design-landscaper-mallorca-33.jpg',
    alt: 'FINCA GARDEN CAMPOS MALLORCA OLIVE TREE AND PURPLE OSTEOSPERMUM SESTEPA DESIGN',
    projectSlug: campos,
  },
  {
    src: '/portfolio/finca-garden-campos-mallorca/images/finca-garden-campos-sestepa-design-landscaper-mallorca-01-master.webp',
    alt: 'FINCA GARDEN CAMPOS MALLORCA AERIAL MASTER PLAN VIEW SESTEPA DESIGN',
    projectSlug: campos,
  },
  {
    src: '/portfolio/finca-garden-campos-mallorca/images/finca-garden-campos-sestepa-design-landscaper-mallorca-38.jpg',
    alt: 'FINCA GARDEN CAMPOS MALLORCA VILLA ARCHITECTURE AND MEDITERRANEAN PERENNIALS SESTEPA DESIGN',
    projectSlug: campos,
  },
  // 6 × Santa Eugènia (terrace · pool · planting)
  {
    src: '/portfolio/terrace-garden-santa-eugenia/images/garden-design-mallorca-santa-eugenia-sestepa-01.webp',
    alt: 'TERRACE GARDEN SANTA EUGÈNIA MALLORCA RESIDENTIAL VILLA SESTEPA DESIGN',
    projectSlug: santaEugenia,
  },
  {
    src: '/portfolio/terrace-garden-santa-eugenia/images/garden-design-mallorca-santa-eugenia-sestepa-02.webp',
    alt: 'TERRACE GARDEN SANTA EUGÈNIA MALLORCA LAWN AND ARCHITECTURAL PLANTING SESTEPA DESIGN',
    projectSlug: santaEugenia,
  },
  {
    src: '/portfolio/terrace-garden-santa-eugenia/images/garden-design-mallorca-santa-eugenia-sestepa-03.webp',
    alt: 'TERRACE GARDEN SANTA EUGÈNIA MALLORCA POOL TERRACE AND MEDITERRANEAN PERENNIALS SESTEPA DESIGN',
    projectSlug: santaEugenia,
  },
  {
    src: '/portfolio/terrace-garden-santa-eugenia/images/garden-design-mallorca-santa-eugenia-sestepa-04.webp',
    alt: 'TERRACE GARDEN SANTA EUGÈNIA MALLORCA SCULPTURAL SPECIES AND STONE WALLS SESTEPA DESIGN',
    projectSlug: santaEugenia,
  },
  {
    src: '/portfolio/terrace-garden-santa-eugenia/images/garden-design-mallorca-santa-eugenia-sestepa-05.webp',
    alt: 'TERRACE GARDEN SANTA EUGÈNIA MALLORCA WOODEN STEPS AND AGAPANTHUS BORDERS SESTEPA DESIGN',
    projectSlug: santaEugenia,
  },
  {
    src: '/portfolio/terrace-garden-santa-eugenia/images/garden-design-mallorca-santa-eugenia-sestepa-06.webp',
    alt: 'TERRACE GARDEN SANTA EUGÈNIA MALLORCA COURTYARD PERGOLA AND LUSH FOLIAGE SESTEPA DESIGN',
    projectSlug: santaEugenia,
  },
  // 6 × Llubí
  {
    src: '/portfolio/garden-design-llubi-mallorca/images/landscape-architecture-mallorca-llubi-sestepa-design (1).webp',
    alt: 'GARDEN DESIGN LLUBI FIRE PIT AND MEDITERRANEAN PERENNIALS SESTEPA DESIGN',
    projectSlug: llubi,
  },
  {
    src: '/portfolio/garden-design-llubi-mallorca/images/landscape-architecture-mallorca-llubi-sestepa-design (4).webp',
    alt: 'GARDEN DESIGN LLUBI DRY STONE WALLS AND SUNBEDS SESTEPA DESIGN',
    projectSlug: llubi,
  },
  {
    src: '/portfolio/garden-design-llubi-mallorca/images/GARDEN-DESIGN-MALLORCA-LLUBI-SESTEPA-LANDSCAPE-DESIGN-5.png',
    alt: 'GARDEN DESIGN LLUBI COVERED TERRACE AND PERGOLA SESTEPA DESIGN',
    projectSlug: llubi,
  },
  {
    src: '/portfolio/garden-design-llubi-mallorca/images/landscape-architecture-mallorca-llubi-sestepa-design (9).webp',
    alt: 'GARDEN DESIGN LLUBI MEDITERRANEAN SHRUB GRAVEL COMPOSITION SESTEPA DESIGN',
    projectSlug: llubi,
  },
  {
    src: '/portfolio/garden-design-llubi-mallorca/images/landscape-architecture-mallorca-llubi-sestepa-design (5).webp',
    alt: 'GARDEN DESIGN LLUBI ARCHITECTURAL POOL REFLECTION SESTEPA DESIGN',
    projectSlug: llubi,
  },
  {
    src: '/portfolio/garden-design-llubi-mallorca/images/landscape-architecture-mallorca-llubi-sestepa-design (2).webp',
    alt: 'GARDEN DESIGN LLUBI STONE FIRE PIT AND LAVENDER MEADOW SESTEPA DESIGN',
    projectSlug: llubi,
  },
  // 3 × Vertical Gardens (3 Years Growth)
  {
    src: '/portfolio/vertical-gardens-in-mallorca/images/2026-3-years-growth/garden-design-mallorca-vertical-garden-ok-mobility-palma-sestepa-3-years-05.webp',
    alt: 'VERTICAL GARDENS IN MALLORCA OK MOBILITY 3 YEARS GROWTH LUSH FAÇADE SESTEPA DESIGN',
    projectSlug: vertical,
  },
  {
    src: '/portfolio/vertical-gardens-in-mallorca/images/2026-3-years-growth/garden-design-mallorca-vertical-garden-ok-mobility-palma-sestepa-3-years-08.webp',
    alt: 'VERTICAL GARDENS IN MALLORCA OK MOBILITY 3 YEARS MATURE VEGETATION SESTEPA DESIGN',
    projectSlug: vertical,
  },
  {
    src: '/portfolio/vertical-gardens-in-mallorca/images/2026-3-years-growth/garden-design-mallorca-vertical-garden-ok-mobility-palma-sestepa-3-years-11-bougainvillea-mesh.webp',
    alt: 'VERTICAL GARDENS IN MALLORCA OK MOBILITY FLOWERING BOUGAINVILLEA ON ARCHITECTURAL PLANTERS SESTEPA DESIGN',
    projectSlug: vertical,
  },
  // 3 × Terrace Garden in Palma
  {
    src: '/portfolio/terrace-garden-in-palma/garden-design-mallorca-terrace-garden-in-palma-sestepa.webp',
    alt: 'TERRACE GARDEN IN PALMA LUXURY ROOFTOP LOUNGE AND MEDITERRANEAN SEA VISTA SESTEPA DESIGN',
    projectSlug: terracePalma,
  },
  {
    src: '/portfolio/terrace-garden-in-palma/images/landscape-garden-design-terrace-palma-mallorca-sestepa-design-6.jpg',
    alt: 'TERRACE GARDEN IN PALMA CONTEMPORARY OUTDOOR SOFAS AND PLANTERS SESTEPA DESIGN',
    projectSlug: terracePalma,
  },
  {
    src: '/portfolio/terrace-garden-in-palma/images/landscape-garden-design-terrace-palma-mallorca-sestepa-design-5.jpg',
    alt: 'TERRACE GARDEN IN PALMA RESILIENT MEDITERRANEAN BOTANICAL SPECIES AND CITY SKYLINE SESTEPA DESIGN',
    projectSlug: terracePalma,
  },
  // 3 × Portals Nous (Tropical Oasis)
  {
    src: '/portfolio/portals-nous/images/garden-design-mallorca-portals-nous-sestepa-01.webp',
    alt: 'PORTALS NOUS TROPICAL MEDITERRANEAN OASIS STONE PATHWAY AND MATURE PALMS SESTEPA DESIGN',
    projectSlug: portalsNous,
  },
  {
    src: '/portfolio/portals-nous/images/garden-design-mallorca-portals-nous-sestepa-02.webp',
    alt: 'PORTALS NOUS TROPICAL SPECIES AND VIBRANT BOTANICAL COMPOSITION SESTEPA DESIGN',
    projectSlug: portalsNous,
  },
  {
    src: '/portfolio/portals-nous/images/garden-design-mallorca-portals-nous-sestepa-03.webp',
    alt: 'PORTALS NOUS LUSH FOLIAGE TEXTURES AND STRELITZIA COMPOSITION SESTEPA DESIGN',
    projectSlug: portalsNous,
  },
  // 3 × Marratxí (Living Landscape with Time)
  {
    src: '/portfolio/marratxi/images/garden-design-mallorca-marratxi-sestepa-01.webp',
    alt: 'MARRATXI MEDITERRANEAN ESTATE ANCIENT OLIVE TREE AND STONE PATHWAY SESTEPA DESIGN',
    projectSlug: marratxi,
  },
  {
    src: '/portfolio/marratxi/images/garden-design-mallorca-marratxi-sestepa-02.webp',
    alt: 'MARRATXI FINCA ARCHITECTURE AND CURVED FLOWERING BORDERS SESTEPA DESIGN',
    projectSlug: marratxi,
  },
  {
    src: '/portfolio/marratxi/images/garden-design-mallorca-marratxi-sestepa-03.webp',
    alt: 'MARRATXI SCULPTURAL CACTI AND MEDITERRANEAN COURTYARD SESTEPA DESIGN',
    projectSlug: marratxi,
  },
];
