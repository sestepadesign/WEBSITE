import { projects, getProjectLocation } from './projects';
import { galleryImages } from './gallery-images';
import { PORTFOLIO_PROJECT_ORDER } from './portfolio-categories';

export interface GalleryImage {
  src: string;
  alt: string;
  projectSlug: string;
  projectTitle: string;
  location: string;
  category: string;
  searchKeywords: string;
}

export function getGalleryImages(lang: 'en' | 'es' | 'de'): GalleryImage[] {
  const projectBySlug = new Map(projects.map((p) => [p.slug, p]));

  // Sort images by PORTFOLIO_PROJECT_ORDER while keeping relative photo order within each project
  const orderMap = new Map<string, number>();
  PORTFOLIO_PROJECT_ORDER.forEach((slug, idx) => orderMap.set(slug, idx));

  const sortedEntries = galleryImages
    .map((entry, originalIndex) => ({ entry, originalIndex }))
    .sort((a, b) => {
      const rankA = orderMap.get(a.entry.projectSlug) ?? 1000;
      const rankB = orderMap.get(b.entry.projectSlug) ?? 1000;
      if (rankA !== rankB) return rankA - rankB;
      return a.originalIndex - b.originalIndex;
    })
    .map((item) => item.entry);

  return sortedEntries.map((img) => {
    const proj = projectBySlug.get(img.projectSlug);
    const projectTitle = proj ? proj[lang].title : img.projectSlug;
    const location = proj ? getProjectLocation(proj, lang) : 'Mallorca';
    const category = proj ? proj[lang].category : '';
    const allTitles = proj
      ? `${proj.en.title} ${proj.es.title} ${proj.de.title} ${proj.location} ${proj.en.category} ${proj.es.category} ${proj.de.category}`
      : img.projectSlug;

    return {
      src: img.src,
      alt: img.alt,
      projectSlug: img.projectSlug,
      projectTitle,
      location,
      category,
      searchKeywords: `${projectTitle} ${allTitles} ${img.projectSlug} ${img.alt}`.replace(/[-_/.]/g, ' '),
    };
  });
}

export const galleryMeta: Record<
  'en' | 'es' | 'de',
  { title: string; subtitle: string; description: string }
> = {
  en: {
    title: 'Garden Design Gallery',
    subtitle: 'High-end exterior projects across Mallorca',
    description:
      "Landscape garden design gallery for residential and commercial spaces in Mallorca. From concept to installation, every detail meticulously executed by S'Estepa Design.",
  },
  es: {
    title: 'Galería de Diseño de Jardines',
    subtitle: 'Proyectos exteriores de alto nivel en Mallorca',
    description:
      "Galería de diseño de jardines y paisajismo para espacios residenciales y comerciales en Mallorca. Del concepto a la instalación, cada detalle ejecutado por S'Estepa Design.",
  },
  de: {
    title: 'Gartendesign-Galerie',
    subtitle: 'Hochwertige Außenprojekte auf Mallorca',
    description:
      "Galerie für Landschafts- und Gartendesign für Wohn- und Gewerberäume auf Mallorca. Vom Konzept bis zur Installation — S'Estepa Design.",
  },
};
