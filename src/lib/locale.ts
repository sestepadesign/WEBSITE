export const SITE_LOCALES = ['en', 'es', 'de'] as const;
export type SiteLocale = (typeof SITE_LOCALES)[number];
export const DEFAULT_LOCALE: SiteLocale = 'en';
export const SITE_URL_PRODUCTION = 'https://design.sestepa.com';
