# S'Estepa Design — Website

Astro static site for design.sestepa.com (landscape architecture studio, Mallorca). Multi-locale (en/es/de), deployed to Cloudflare Pages.

## ABSOLUTE HANDOFF RULE (STATUS.md)

Before modifying any code, **you MUST read `STATUS.md`** in the root directory. 
- You must verify that the local codebase is up-to-date with the checksum in `STATUS.md`. If it is outdated, `git pull` first.
- When finishing your session, you **MUST write your session log** at the top of the "HISTÓRICO DE SESSÕES" section in `STATUS.md`, including your branch/commit hash, to preserve state for the next agent. This is non-negotiable.

## Commands

```
npm install
npm run dev      # local dev server, http://localhost:4321
npm run build    # production build to dist/
```

## Deploy pipeline

Cloudflare Pages is connected to this GitHub repo and auto-deploys on every push to `master`. There is no separate manual deploy step — pushing to `master` is publishing to production.

## Review workflow — depends on the session environment

- **Desktop / interactive session:** run `npm run dev` and let the user click through the change on `localhost:4321` *before* it's pushed anywhere. This is the default approval step whenever a local preview is reachable.
- **Mobile / remote session (no localhost access for the user):** there is no way to hand the user a local preview. In this case: build/verify locally in the sandbox first (build passes, screenshot via Playwright if useful), push to a feature branch, then merge to `master` only with the user's explicit go-ahead. Approval happens *after* the Cloudflare deploy, by the user checking the live URL — not before.

## Git branch hygiene

- `master` is the only long-lived branch.
- Work happens on a short-lived feature branch, gets merged into `master` (`--no-ff`, keep the merge commit), and the feature branch is deleted right after — locally and on `origin`. Don't leave merged branches lying around.
- Don't invent a permanent "preview" branch to hold work between tasks — Cloudflare Pages already gives every non-production branch/PR its own automatic preview deployment, so there's no need to hand-maintain one.

## Content structure

- `src/data/projects.ts` — portfolio project data (one entry per project: slug, images, video, translations).
- `src/data/portfolio-categories.ts` — maps project slugs to portfolio filter categories (`estate`, `residential`, `terrace`, `commercial`, `vertical`).
- `src/data/site-urls.ts` — per-locale URL paths for every page and project (`PROJECT_PUBLIC_PATHS`), legacy slug redirects, default OG images.
- `src/components/site/*Page.astro` — one component per page; thin route files in `src/pages/` just import and render them.
- Every project's images live under `public/portfolio/<slug>/images/`. Convert new photos to `.webp` before adding them — the site's Lighthouse scores (currently ~98/100/96/100) depend on image weight staying low.
- `sant-llorenc` is the flagship project: it's pinned first in the portfolio grid (`PortfolioPage.astro`), and its images are the sitewide default OG image (`Layout.astro`, `servicesPage.astro`). Its hero background video (`/videos/sant_llorenc_hero.mp4` + poster) is also reused directly on the home page — treat that file as shared, not project-specific.
