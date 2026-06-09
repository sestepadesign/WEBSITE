// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://sestepadesign.pages.dev',
  integrations: [sitemap()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'de'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false
    }
  }
});
