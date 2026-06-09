import { projects } from './projects';

export interface GalleryImage {
  src: string;
  alt: string;
  projectSlug: string;
  projectTitle: string;
}

/** SEO-rich gallery built from portfolio assets (covers + project images). */
export function getGalleryImages(lang: 'en' | 'es' | 'de'): GalleryImage[] {
  const images: GalleryImage[] = [];

  for (const project of projects) {
    const title = project[lang].title;
    const location = project.location.replace(', Mallorca', '').trim();

    images.push({
      src: project.cover,
      alt: `LANDSCAPE GARDEN DESIGN ${location.toUpperCase()} MALLORCA SESTEPA DESIGN — ${title}`,
      projectSlug: project.slug,
      projectTitle: title,
    });

    for (const filename of project.images) {
      images.push({
        src: `/portfolio/${project.slug}/images/${filename}`,
        alt: `GARDEN LANDSCAPE DESIGN ${location.toUpperCase()} MALLORCA SESTEPA DESIGN — ${title}`,
        projectSlug: project.slug,
        projectTitle: title,
      });
    }
  }

  return images;
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
