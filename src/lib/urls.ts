import { projects } from '../data/projects';
import {
  PROJECT_PATH_ALIASES,
  PROJECT_PUBLIC_PATHS,
  SITE_PAGES,
  type SitePageId,
} from '../data/site-urls';
import {
  DEFAULT_LOCALE,
  SITE_LOCALES,
  SITE_URL_PRODUCTION,
  type SiteLocale,
} from './locale';

export function normalizePath(path: string): string {
  if (!path || path === '/') return '/';
  const withSlash = path.startsWith('/') ? path : `/${path}`;
  return withSlash.endsWith('/') ? withSlash : `${withSlash}/`;
}

export function pathToSlugParam(path: string): string {
  return normalizePath(path).replace(/^\/|\/$/g, '');
}

export function getPagePath(pageId: SitePageId, lang: SiteLocale): string {
  return SITE_PAGES[pageId][lang];
}

export function getProjectPath(projectSlug: string, lang: SiteLocale): string {
  const paths = PROJECT_PUBLIC_PATHS[projectSlug];
  if (!paths) {
    throw new Error(`Missing PROJECT_PUBLIC_PATHS entry for slug "${projectSlug}"`);
  }
  return paths[lang];
}

export function getProjectUrl(projectSlug: string, lang: SiteLocale, site?: string | URL): string {
  const base = site ?? SITE_URL_PRODUCTION;
  return new URL(getProjectPath(projectSlug, lang), base).href;
}

export function getPageUrl(pageId: SitePageId, lang: SiteLocale, site?: string | URL): string {
  const base = site ?? SITE_URL_PRODUCTION;
  return new URL(getPagePath(pageId, lang), base).href;
}

export function localeFromPath(pathname: string): SiteLocale {
  const norm = normalizePath(pathname);
  if (norm.startsWith('/es/') || norm === '/es/') return 'es';
  if (norm.startsWith('/de/') || norm === '/de/') return 'de';
  return 'en';
}

export function resolveProjectSlugFromPath(pathname: string): string | null {
  const norm = normalizePath(pathname);
  const lang = localeFromPath(norm);

  for (const project of projects) {
    const canonical = normalizePath(PROJECT_PUBLIC_PATHS[project.slug]?.[lang] ?? '');
    if (norm === canonical) return project.slug;
  }

  const aliases = PROJECT_PATH_ALIASES[lang];
  for (const [aliasSlug, canonicalPath] of Object.entries(aliases)) {
    const aliasPath = normalizePath(
      lang === 'en' ? `/${aliasSlug}/` : `/${lang}/${aliasSlug}/`,
    );
    if (norm === aliasPath) {
      return projects.find((p) => PROJECT_PUBLIC_PATHS[p.slug]?.[lang] === normalizePath(canonicalPath))?.slug ?? null;
    }
  }

  return null;
}

export function resolvePageIdFromPath(pathname: string): SitePageId | null {
  const norm = normalizePath(pathname);
  for (const pageId of Object.keys(SITE_PAGES) as SitePageId[]) {
    for (const lang of SITE_LOCALES) {
      if (normalizePath(SITE_PAGES[pageId][lang]) === norm) return pageId;
    }
  }
  return null;
}

/** Language switcher: same logical page/project in another locale. */
export function getAlternatePath(pathname: string, targetLang: SiteLocale): string {
  const norm = normalizePath(pathname);

  const pageId = resolvePageIdFromPath(norm);
  if (pageId) return getPagePath(pageId, targetLang);

  const projectSlug = resolveProjectSlugFromPath(norm);
  if (projectSlug) return getProjectPath(projectSlug, targetLang);

  if (norm === '/' || norm === '/es/' || norm === '/de/') {
    return getPagePath('home', targetLang);
  }

  return getPagePath('home', targetLang);
}

export function getHreflangLinksForPath(
  pathname: string,
  site: string | URL,
  locales: readonly SiteLocale[] = SITE_LOCALES,
): { hreflang: string; href: string }[] {
  const links = locales.map((locale) => ({
    hreflang: locale,
    href: new URL(getAlternatePath(pathname, locale), site).href,
  }));

  if (locales.includes(DEFAULT_LOCALE)) {
    links.push({
      hreflang: 'x-default',
      href: new URL(getAlternatePath(pathname, DEFAULT_LOCALE), site).href,
    });
  }

  return links;
}

export function getProjectStaticPathParams(lang: SiteLocale): { params: { slug: string }; props: { projectSlug: string; canonicalPath: string } }[] {
  const out: { params: { slug: string }; props: { projectSlug: string; canonicalPath: string } }[] = [];

  for (const project of projects) {
    const canonicalPath = getProjectPath(project.slug, lang);
    const slug = pathToSlugParam(canonicalPath);
    const paramSlug = lang === 'en' ? slug : slug.replace(/^(es|de)\//, '');
    out.push({
      params: { slug: paramSlug },
      props: { projectSlug: project.slug, canonicalPath },
    });
  }

  const aliases = PROJECT_PATH_ALIASES[lang];
  for (const [aliasSegment, canonicalPath] of Object.entries(aliases)) {
    const projectSlug = projects.find(
      (p) => normalizePath(PROJECT_PUBLIC_PATHS[p.slug][lang]) === normalizePath(canonicalPath),
    )?.slug;
    if (!projectSlug) continue;
    out.push({
      params: { slug: aliasSegment },
      props: { projectSlug, canonicalPath: normalizePath(canonicalPath) },
    });
  }

  return out;
}
