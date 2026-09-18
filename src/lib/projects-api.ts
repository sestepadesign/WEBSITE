// Single source for the public Projects API. /api/projects.json, the docs page
// (/api/docs) and the OpenAPI description (/api/openapi.json) all build from
// here, so the documented shape and examples can never drift from the output.
import { projects, getProjectLocation } from '../data/projects';
import { PROJECT_PUBLIC_PATHS } from '../data/site-urls';

export const SITE = 'https://design.sestepa.com';
export const API_LANGS = ['en', 'es', 'de'] as const;
export type ApiLang = (typeof API_LANGS)[number];

export interface ApiProjectTranslation {
  title: string;
  subtitle: string;
  category: string;
  location: string;
  botanical: string;
  url: string;
}

export interface ApiProject {
  slug: string;
  url: string;
  year: string;
  size: string | null;
  translations: Record<ApiLang, ApiProjectTranslation>;
  coverImage: string;
}

export interface ApiPayload {
  generatedAt: string;
  count: number;
  projects: ApiProject[];
}

export function buildProjectsPayload(): ApiPayload {
  const data: ApiProject[] = projects
    .filter((project) => !project.hidden)
    .map((project) => ({
      slug: project.slug,
      url: SITE + (PROJECT_PUBLIC_PATHS[project.slug]?.en ?? `/${project.slug}/`),
      year: project.year,
      size: project.size ?? null,
      translations: Object.fromEntries(
        API_LANGS.map((lang) => [
          lang,
          {
            title: project[lang].title,
            subtitle: project[lang].subtitle,
            category: project[lang].category,
            location: getProjectLocation(project, lang),
            botanical: project[lang].botanical,
            url: SITE + (PROJECT_PUBLIC_PATHS[project.slug]?.[lang] ?? `/${lang}/${project.slug}/`),
          },
        ])
      ) as Record<ApiLang, ApiProjectTranslation>,
      coverImage: SITE + project.cover,
    }));

  return { generatedAt: new Date().toISOString(), count: data.length, projects: data };
}
