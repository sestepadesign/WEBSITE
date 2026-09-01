// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readBlogSitemapData, NOINDEX_PATHS } from './src/lib/blog-sitemap.mjs';

const SITE = 'https://design.sestepa.com';

const { noindex: noindexBlog, lastmod: blogLastmod, alternates: blogAlternates, all: blogPaths } =
  readBlogSitemapData();
/** Every pathname that must NOT appear in the sitemap (renders meta robots noindex). */
const EXCLUDE = new Set([...NOINDEX_PATHS, ...noindexBlog]);

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
