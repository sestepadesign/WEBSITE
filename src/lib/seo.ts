import { getHreflangLinksForPath } from './urls';
import { SITE_LOCALES, type SiteLocale } from './locale';

export { SITE_LOCALES, DEFAULT_LOCALE, type SiteLocale } from './locale';
export const GTM_ID = 'GTM-K6MSRJX9';
export const GOOGLE_ADS_ID = 'AW-795871100';
export const GTAG_ID = 'GT-WKTZS5C';
export const COOKIEYES_CLIENT_ID = 'f292b5d0baace10a4365b956';
export const METRICOOL_HASH = '4514d2b6d34c58b6a0b6a1c1649df7b';

export const SITE_NAME = "S'Estepa Design";
export { SITE_URL_PRODUCTION } from './locale';

export function getHreflangAlternates(
  pathname: string,
  site: string | URL,
  locales: readonly SiteLocale[] = SITE_LOCALES,
): { hreflang: string; href: string }[] {
  return getHreflangLinksForPath(pathname, site, locales);
}
