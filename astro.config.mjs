// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://design.sestepa.com',
  // Reverted 'always' (08/08): fixed the render-blocking CSS insight and
  // improved FCP (1.5s -> 1.0s), but reproducibly regressed Speed Index
  // (1.5s -> 4.0s, identical across 2 separate PageSpeed runs an hour
  // apart) and the overall Performance score (98 -> 95). Net negative —
  // back to Astro's default ('auto', Vite's 4kb assetsInlineLimit), which
  // measured best overall on this page even though it leaves the
  // HomePage/Layout CSS as small external requests.
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
