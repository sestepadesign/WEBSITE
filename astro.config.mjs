// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readBlogSitemapData, NOINDEX_PATHS } from './src/lib/blog-sitemap.mjs';

const SITE = 'https://design.sestepa.com';

const { noindex: noindexBlog, lastmod: blogLastmod, alternates: blogAlternates, all: blogPaths } =
  readBlogSitemapData();
/**
 * Legacy project-slug aliases (see PROJECT_PATH_ALIASES in src/data/site-urls.ts).
 * Each of these either 301-redirects to the canonical project URL or serves 200
 * with a canonical pointing elsewhere — either way it must NOT be in the sitemap
 * (Google: submit only canonical 200 URLs). The redirects stay; only the sitemap
 * entries go. Keep in sync if PROJECT_PATH_ALIASES changes.
 */
const ALIAS_PATHS = [
  '/finca-garden-campos-mallorca/',
  '/seaside-house-alcudia/',
  '/es/finca-garden-campos-mallorca/',
  '/es/casa-de-mar-alcudia/',
  '/es/paisajista-fincas-lujo-son-vida/',
  '/de/finca-garten-campos-mallorca/',
  '/de/haus-am-meer-alcudia/',
  '/de/finca-gartengestaltung-mallorca-campos/',
  '/de/luxus-landschaftsarchitektur-mallorca-andratx/',
];

/** Every pathname that must NOT appear in the sitemap (noindex, or non-canonical alias). */
const EXCLUDE = new Set([...NOINDEX_PATHS, ...noindexBlog, ...ALIAS_PATHS]);

const pathOf = (url) => new URL(url).pathname;

// https://astro.build/config
export default defineConfig({
  site: SITE,
  build: {
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
      // Drop noindex pages — they otherwise trip Search Console's
      // "noindexed URL submitted in sitemap".
      filter: (page) => !EXCLUDE.has(pathOf(page)),
      serialize: (item) => {
        const p = pathOf(item.url);
        // Real <lastmod> for blog posts (updatedDate ?? pubDate). Other pages
        // get none rather than a misleading per-deploy date.
        const lm = blogLastmod[p];
        if (lm) item.lastmod = lm;
        // Fix hreflang for blog posts: @astrojs/sitemap's i18n guesser mislinks
        // them because EN lives at /slug/ but ES/DE at /xx/blog/slug/. Replace
        // with the correct trio (translated posts) or drop it (EN-only posts).
        if (blogPaths.has(p)) item.links = blogAlternates[p];
        return item;
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
