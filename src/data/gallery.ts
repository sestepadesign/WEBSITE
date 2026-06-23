import { projects } from './projects';
import { galleryImages } from './gallery-images';

export interface GalleryImage {
  src: string;
  alt: string;
  projectSlug: string;
  projectTitle: string;
}

export function getGalleryImages(lang: 'en' | 'es' | 'de'): GalleryImage[] {
  const titleBySlug = new Map(projects.map((p) => [p.slug, p[lang].title]));

  return galleryImages.map((img) => ({
    src: img.src,
    alt: img.alt,
    projectSlug: img.projectSlug,
    projectTitle: titleBySlug.get(img.projectSlug) ?? img.projectSlug,
  }));
}

export const galleryMeta: Record<
  'en' | 'es' | 'de',
  { title: string; subtitle: string; description: string }
> = {
  en: {
    title: 'Garden Design Gallery',
    subtitle: 'High-end exterior projects across Mallorca',
    description:
      'Landscape garden design gallery for residential and commercial spaces in Mallorca. From concept to installation, every detail meticulously executed by S\'Estepa Design.',
  },
  es: {
    title: 'Galería de Diseño de Jardines',
    subtitle: 'Proyectos exteriores de alto nivel en Mallorca',
    description:
      'Galería de diseño de jardines y paisajismo para espacios residenciales y comerciales en Mallorca. Del concepto a la instalación, cada detalle ejecutado por S\'Estepa Design.',
  },
  de: {
    title: 'Gartendesign-Galerie',
    subtitle: 'Hochwertige Außenprojekte auf Mallorca',
    description:
      'Galerie für Landschafts- und Gartendesign für Wohn- und Gewerberäume auf Mallorca. Vom Konzept bis zur Installation — S\'Estepa Design.',
  },
};
