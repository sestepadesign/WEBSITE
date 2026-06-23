import type { SiteLocale } from '../lib/locale';

/** Logical page keys — not URL paths. */
export type SitePageId =
  | 'home'
  | 'about'
  | 'contact'
  | 'gallery'
  | 'portfolio'
  | 'services'
  | 'press'
  | 'legal-notice'
  | 'privacy-policy'
  | 'cookies'
  | 'blog';

/** Canonical paths matching design.sestepa.com (WordPress + WPML). */
export const SITE_PAGES: Record<SitePageId, Record<SiteLocale, string>> = {
  home: { en: '/', es: '/es/', de: '/de/' },
  about: { en: '/about/', es: '/es/sobre/', de: '/de/uber/' },
  contact: { en: '/contact/', es: '/es/contacto/', de: '/de/kontakt/' },
  gallery: { en: '/gallery/', es: '/es/galeria/', de: '/de/galerie/' },
  portfolio: { en: '/portfolio/', es: '/es/portfolio/', de: '/de/portfolio/' },
  services: {
    en: '/garden-design-mallorca-landscape-management-villas-fincas/',
    es: '/es/diseno-de-jardines-mallorca/',
    de: '/de/gartengestaltung-mallorca/',
  },
  press: { en: '/press/', es: '/es/prensa/', de: '/de/presse/' },
  'legal-notice': {
    en: '/legal-notice/',
    es: '/es/aviso-legal/',
    de: '/de/rechtlicher-hinweis/',
  },
  'privacy-policy': {
    en: '/privacy-policy/',
    es: '/es/politica-de-privacidad/',
    de: '/de/datenschutzbestimmungen/',
  },
  cookies: { en: '/cookies/', es: '/es/cookies/', de: '/de/cookies/' },
  blog: { en: '/blog/', es: '/es/blog/', de: '/de/blog/' },
};

/**
 * Public URL path per locale (projects.ts slug → WordPress URL).
 * Canonical URLs must match design.sestepa.com — do not change without SEO review.
 * Internal asset folders still use projects.ts `slug` under /portfolio/{slug}/.
 */
export const PROJECT_PUBLIC_PATHS: Record<string, Record<SiteLocale, string>> = {
  binissalem: {
    en: '/binissalem/',
    es: '/es/benissalem/',
    de: '/de/benissalem/',
  },
  bunyola: {
    en: '/bunyola/',
    es: '/es/bunyola/',
    de: '/de/bunyola-mallorca/',
  },
  'campanet-garden': {
    en: '/campanet-garden/',
    es: '/es/campanet-garden/',
    de: '/de/campanet-garden/',
  },
  'finca-garden-campos-mallorca': {
    en: '/finca-garden-campos/',
    es: '/es/finca-garden-campos/',
    de: '/de/finca-garten-campos/',
  },
  costadelacalma: {
    en: '/costadelacalma/',
    es: '/es/costa-de-la-calma/',
    de: '/de/costa-de-la-calma/',
  },
  'crestatx-garden-design': {
    en: '/crestatx-garden-design/',
    es: '/es/crestatx/',
    de: '/de/crestatx/',
  },
  hotelcabotlasvelas: {
    en: '/hotelcabotlasvelas/',
    es: '/es/hotel-cabot-las-velas/',
    de: '/de/hotel-cabot-las-velas/',
  },
  'garden-design-llubi-mallorca': {
    en: '/garden-design-llubi-mallorca/',
    es: '/es/diseno-de-jardines-llubi-mallorca/',
    de: '/de/gartengestaltung-llubi-mallorca/',
  },
  'sant-llorenc': {
    en: '/sant-llorenc/',
    es: '/es/sant-llorenc/',
    de: '/de/sant-llorenc/',
  },
  'terrace-garden-santa-eugenia': {
    en: '/terrace-garden-santa-eugenia/',
    es: '/es/terraza-jardin-santa-eugenia/',
    de: '/de/terrace-garden-santa-eugenia/',
  },
  'santa-ponsa': {
    en: '/santa-ponsa/',
    es: '/es/puig-na-morisca/',
    de: '/de/puig-na-morisca/',
  },
  'son-vida': {
    en: '/son-vida/',
    es: '/es/son-vida-mallorca/',
    de: '/de/son-vida-mallorca/',
  },
  'terrace-garden-in-palma': {
    en: '/terrace-garden-in-palma/',
    es: '/es/terraza-jardin/',
    de: '/de/terrassengarten/',
  },
  'vertical-gardens-in-mallorca': {
    en: '/vertical-gardens-in-mallorca/',
    es: '/es/jardines-verticales-en-mallorca/',
    de: '/de/vertikale-garten-auf-mallorca/',
  },
  'finca-garden-inca': {
    en: '/finca-garden-inca/',
    es: '/es/finca-garden-inca/',
    de: '/de/finca-garten-inca/',
  },
  'seaside-house-alcudia': {
    en: '/alcanada/',
    es: '/es/alcanada/',
    de: '/de/alcanada/',
  },
  sacabaneta: {
    en: '/sacabaneta/',
    es: '/es/sacabaneta/',
    de: '/de/sacabaneta/',
  },
};

/** Extra WordPress URLs → same project (301 in _redirects + optional static alias). */
export const PROJECT_PATH_ALIASES: Record<SiteLocale, Record<string, string>> = {
  en: {
    'finca-garden-campos-mallorca': '/finca-garden-campos/',
    'seaside-house-alcudia': '/alcanada/',
  },
  es: {
    'finca-garden-campos-mallorca': '/es/finca-garden-campos/',
    'casa-de-mar-alcudia': '/es/alcanada/',
  },
  de: {
    'finca-garten-campos-mallorca': '/de/finca-garten-campos/',
    'haus-am-meer-alcudia': '/de/alcanada/',
  },
};

/** Default OG images per page (local assets). */
export const PAGE_OG_IMAGES: Partial<Record<SitePageId, Record<SiteLocale, string>>> = {
  home: {
    en: '/portfolio/finca-garden-campos-mallorca/cover.webp',
    es: '/portfolio/finca-garden-campos-mallorca/cover.webp',
    de: '/portfolio/finca-garden-campos-mallorca/cover.webp',
  },
  about: {
    en: '/portfolio/bunyola/cover.jpg',
    es: '/portfolio/bunyola/cover.jpg',
    de: '/portfolio/bunyola/cover.jpg',
  },
  contact: {
    en: '/portfolio/costadelacalma/cover.jpg',
    es: '/portfolio/costadelacalma/cover.jpg',
    de: '/portfolio/costadelacalma/cover.jpg',
  },
  gallery: {
    en: '/portfolio/binissalem/cover.jpg',
    es: '/portfolio/binissalem/cover.jpg',
    de: '/portfolio/binissalem/cover.jpg',
  },
  portfolio: {
    en: '/portfolio/sant-llorenc/images/landscape-garden-design-mallorca-sestepa-landscape-design-sant-llorenc-02.jpg',
    es: '/portfolio/sant-llorenc/images/landscape-garden-design-mallorca-sestepa-landscape-design-sant-llorenc-02.jpg',
    de: '/portfolio/sant-llorenc/images/landscape-garden-design-mallorca-sestepa-landscape-design-sant-llorenc-02.jpg',
  },
  services: {
    en: '/portfolio/finca-garden-campos-mallorca/cover.webp',
    es: '/portfolio/finca-garden-campos-mallorca/cover.webp',
    de: '/portfolio/finca-garden-campos-mallorca/cover.webp',
  },
  press: {
    en: '/portfolio/santa-ponsa/cover.jpg',
    es: '/portfolio/santa-ponsa/cover.jpg',
    de: '/portfolio/santa-ponsa/cover.jpg',
  },
  blog: {
    en: '/portfolio/finca-garden-campos-mallorca/cover.webp',
    es: '/portfolio/finca-garden-campos-mallorca/cover.webp',
    de: '/portfolio/finca-garden-campos-mallorca/cover.webp',
  },
};
