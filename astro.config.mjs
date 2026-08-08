// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://design.sestepa.com',
  build: {
    // 'auto' didn't inline HomePage/Layout CSS (they're above Vite's default
    // 4kb assetsInlineLimit) — still shipped as blocking <link> requests per
    // PageSpeed diagnostics on 08/08. Force inlining for every page instead;
    // this is a small marketing site (handful of routes), so the lost
    // cross-page CSS caching is worth it to kill the render-blocking request.
    inlineStylesheets: 'always',
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          es: 'es-ES',
          de: 'de-DE',
        },
      },
    }),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'de'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
});
