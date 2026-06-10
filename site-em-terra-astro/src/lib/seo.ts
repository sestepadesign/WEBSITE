export const SITE_LOCALES = ['en', 'es', 'de'] as const;
export type SiteLocale = (typeof SITE_LOCALES)[number];
export const DEFAULT_LOCALE: SiteLocale = 'en';
export const GTM_ID = 'GTM-K6MSRJX9';

export function pathSuffixFromUrl(pathname: string): string {
  const match = pathname.match(/^\/(en|es|de)(\/.*)?$/);
  if (!match) return pathname.endsWith('/') ? pathname : `${pathname}/`;
  const suffix = match[2] ?? '/';
  return suffix === '' ? '/' : suffix.endsWith('/') ? suffix : `${suffix}/`;
}

export function alternateUrl(site: string | URL, locale: SiteLocale, suffix: string): string {
  const path = suffix === '/' ? `/${locale}/` : `/${locale}${suffix}`;
  return new URL(path, site).href;
}

export function getHreflangAlternates(
  pathname: string,
  site: string | URL,
  locales: readonly SiteLocale[] = SITE_LOCALES,
): { hreflang: string; href: string }[] {
  const suffix = pathSuffixFromUrl(pathname);
  const links = locales.map((locale) => ({
    hreflang: locale,
    href: alternateUrl(site, locale, suffix),
  }));

  if (locales.includes(DEFAULT_LOCALE)) {
    links.push({
      hreflang: 'x-default',
      href: alternateUrl(site, DEFAULT_LOCALE, suffix),
    });
  }

  return links;
}
