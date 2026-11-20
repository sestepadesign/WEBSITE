import { getHreflangLinksForPath } from './urls';
import { SITE_LOCALES, type SiteLocale } from './locale';

export { SITE_LOCALES, DEFAULT_LOCALE, type SiteLocale } from './locale';
export const GTM_ID = 'GTM-K6MSRJX9';
export const GOOGLE_ADS_ID = 'AW-795871100';
export const GOOGLE_ADS_CONVERSION_FORM = 'AW-795871100/dv-kCJrn0YoaEPyOwPsC';
export const GOOGLE_ADS_CONVERSION_WHATSAPP = 'AW-795871100/3a-ICMu_2ooaEPyOwPsC';
export const GOOGLE_ADS_CONVERSION_EMAIL = 'AW-795871100/aw8GCKXL0YoaEPyOwPsC';
export const GTAG_ID = 'GT-WKTZS5C';
export const GA4_ID = 'G-DZ9ZSG3VH0';
export const COOKIEYES_CLIENT_ID = 'f292b5d0baace10a4365b956';
export const METRICOOL_HASH = '4514d2b6d34c58b6a0b6a1c1649df7b';
export const META_PIXEL_ID = '1185880420805434';
export const META_DOMAIN_VERIFICATION = 'n3kyf9z9ovyhv4kez1adjixiwt2l5f';

export const SITE_NAME = "S'Estepa Design";
export { SITE_URL_PRODUCTION } from './locale';

export function getHreflangAlternates(
  pathname: string,
  site: string | URL,
  locales: readonly SiteLocale[] = SITE_LOCALES,
): { hreflang: string; href: string }[] {
  return getHreflangLinksForPath(pathname, site, locales);
}
