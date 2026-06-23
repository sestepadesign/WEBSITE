# S'Estepa Design — Website architecture (admin guide)

Simple structure so you can update the site without touching layout code.

## Where to edit content

| What | File / folder | Notes |
|------|----------------|-------|
| **Projects (17 gardens)** | `src/data/projects.ts` | Titles, text EN/ES/DE, images list, video URL, slug |
| **Gallery (33 SEO photos)** | `src/data/gallery-images.ts` + `public/gallery/` | Curated list; filenames must match Google Images |
| **Portfolio categories** | `src/data/portfolio-categories.ts` | Which filter tab each project uses |
| **UI labels (nav, buttons)** | `src/data/translations.ts` | EN / ES / DE menu and section titles |
| **Services page** | `src/data/services.ts` | Service blocks |
| **Press** | `src/pages/[lang]/press.astro` | Publications list |
| **Studio / team** | `src/pages/[lang]/about.astro` | Team bios (sync with WordPress text) |
| **SEO blog archive** | `src/content/blog/*.md` | Hidden from menu; `npm run import:blog` from WordPress |
| **Redirects (SEO URLs)** | `public/_redirects` | Old WordPress paths → new Astro paths |
| **Analytics IDs** | `src/lib/seo.ts` | GTM, Google Ads, CookieYes, Metricool |

## Images

- **Project photos:** `public/portfolio/{slug}/` — cover + `images/` folder
- **Gallery:** `public/gallery/` — run `npm run sync:gallery` after updating Drive `3-WEBSITE/gallery/`
- **Team / press / logo:** `public/images/`

Keep **original SEO filenames** on gallery images (critical for Google Images ranking).

## Workflow (update → live)

1. Edit data files in `src/data/` (or add images to `public/`)
2. `npm run build` — preview with `npm run preview`
3. Push to GitHub `sestepadesign/WEBSITE` → Cloudflare Pages auto-deploys

## Build output

- Astro builds to `dist/`
- Cloudflare Pages: build command `npm run build`, output `dist`

## Hidden blog (SEO articles archive)

- URLs: `/en/blog/`, `/es/blog/`, `/de/blog/` — **not in navigation**
- `noindex` so Google does not promote these; you can read them directly
- Import from WordPress: `npm run import:blog`

## Locales

- English: `/en/…`
- Spanish: `/es/…`
- German: `/de/…`
- Legacy WordPress URLs (e.g. `/binissalem/`) redirect via `_redirects`

## Analytics (parity with design.sestepa.com)

All tags in `Layout.astro`, IDs in `src/lib/seo.ts`:

- Google Tag Manager `GTM-K6MSRJX9`
- gtag `GT-PZ6D6P9N` + Google Ads `AW-795871100`
- CookieYes (GDPR)
- Metricool tracker

Verify in GTM / GA4 after each deploy on `sestepadesign.pages.dev`.
