import type { APIRoute } from 'astro';
import { projects, getProjectLocation } from '../../data/projects';
import { PROJECT_PUBLIC_PATHS } from '../../data/site-urls';

const SITE = 'https://design.sestepa.com';
const LANGS = ['en', 'es', 'de'] as const;

export const GET: APIRoute = () => {
  const data = projects
    .filter((project) => !project.hidden)
    .map((project) => ({
      slug: project.slug,
      url: SITE + (PROJECT_PUBLIC_PATHS[project.slug]?.en ?? `/${project.slug}/`),
      year: project.year,
      size: project.size ?? null,
      translations: Object.fromEntries(
        LANGS.map((lang) => [
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
      ),
      coverImage: SITE + project.cover,
    }));

  return new Response(
    JSON.stringify({ generatedAt: new Date().toISOString(), count: data.length, projects: data }, null, 2),
    { headers: { 'Content-Type': 'application/json; charset=utf-8' } }
  );
};
