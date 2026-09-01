import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    /** Set when a published post is materially revised — drives sitemap <lastmod>. */
    updatedDate: z.coerce.date().optional(),
    lang: z.enum(['en', 'es', 'de']),
    image: z.string().optional(),
    draft: z.boolean().default(false),
    /** Indexable by search engines. Defaults to hidden (noindex) until reviewed & approved. */
    noindex: z.boolean().default(true),
  }),
});

export const collections = { blog };
