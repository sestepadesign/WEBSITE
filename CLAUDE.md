# S'Estepa Design — Website

Astro static site for design.sestepa.com (landscape architecture studio, Mallorca). Multi-locale (en/es/de), deployed to Cloudflare Pages.

## Pending Human Action

Things a Claude Code sandbox session cannot do itself — remove each line once actually done, don't just leave it here stale.

- **Delete 5 remote branches** — all already merged into `master`, zero data loss, one click each in the GitHub web UI (Branches tab): `claude/sant-llorenc-botanicals`, `claude/sant-llorenc-new-text-jm-cleanup`, `claude/session-log-2026-08-07`, `preview`, `claude/sant-llorenc-video-update-ffhitf`. A sandbox session can't do this itself — see "Wider team context" below. Added 2026-08-07.

## ABSOLUTE HANDOFF RULE (STATUS.md)

Before modifying any code, **you MUST read `STATUS.md`** in the root directory. 
- You must verify that the local codebase is up-to-date with the checksum in `STATUS.md`. If it is outdated, `git pull` first.
- When finishing your session, you **MUST write your session log** at the top of the "HISTÓRICO DE SESSÕES" section in `STATUS.md`, including your branch/commit hash, to preserve state for the next agent. This is non-negotiable.
- **`STATUS.md` does not exist yet in this repo as of 2026-08-07** (checked full `git log --all -- STATUS.md`: never committed, by anyone). It's being bootstrapped separately — don't treat its absence as an error, and don't invent its contents from scratch without checking with the user first.

## Wider team context (S'Estepa / "1. WEBSITES")

This repo is one of several sites (`sestepa-design`, `ines-grimaux`, `grimaux-net`, `castro-alves`) managed by a small team through a shared Google Drive folder (`G:\Meu Drive\1. WEBSITES\`), edited by multiple people and AI tools (Cursor, Antigravity, Claude Code — listed there as `Claude-Code`). Full protocol: `docs/equipa/INSTRUCOES.md`, `docs/EQUIPA.md`, `docs/ONDE-ESTA-TUDO.md`.

- **The real coordination mechanism is a Drive-only lock file** (`TRABALHANDO.json` per project + `lock_manager.py` / `set_lock_agent.py` scripts living in the Drive folder), not this `STATUS.md` rule above — those appear to be two different, not-fully-reconciled handoff schemes.
- **A GitHub-only clone (no Drive mount) cannot participate in that lock system at all** — confirmed by `docs/equipa/PARA-CLONE-SEM-DRIVE.md`, which documents this exact scenario. A Claude Code session running in a cloud sandbox (like this one, no `G:\` access) can read/edit code and push, but cannot acquire/release the project lock, see other agents' current activity, or know if someone else is mid-edit on the Drive side.
- **Branch policy conflict**: the team's documented protocol (`INSTRUCOES.md`) says work happens *directly on `master`*, no feature branches. This file's own "Git branch hygiene" section below says the opposite (short-lived branch → merge). Not reconciled as of 2026-08-07 — ask the user before assuming either one silently changes.
- Local builds on the Drive/Windows side are known to be unreliable (`.agents/AGENTS.md`: Google Drive sync can silently corrupt `node_modules/astro/bin/astro.mjs`) — doesn't affect a clean Linux sandbox clone like this one.
- **A GitHub-only cloud sandbox session cannot delete remote branches** — `git push origin --delete <branch>` is blocked by the sandbox's egress proxy (`403`, "RPC failed"), consistently, and no available GitHub tool exposes branch deletion either. Confirmed 2026-08-07. Don't retry it — merge (`--no-ff`) and delete the *local* branch as usual, but leave the merged remote branch for a human (or a non-sandboxed session) to delete via the GitHub web UI. Check `git branch -r --merged origin/master` occasionally for a backlog of these to hand off.

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

## Session Log (Claude Code)

Newest entry first. Each entry: date, commit hash on `master` at end of session, short summary. This is separate from (and doesn't replace) the team's Drive-side `TRABALHANDO.json` lock — see "Wider team context" above.

- **2026-08-19** — commit `7e233c5`. Added the `vertical-gardens-in-mallorca` project as a Home spotlight section (mirrors the existing Campos spotlight pattern: `spotlight-grid`/`spotlight-title`/`spotlight-desc` reused, ~25 lines of new CSS only for the reversed layout + light-background text-color override), crediting the corporate collaboration with Vertical Garden Mallorca on their client OK Mobility's project. `projects.ts`: added `client: { name: "Vertical Garden Mallorca", type: "Organization", sameAs: "https://verticalgardenmallorca.com" }` (feeds the `sponsor` JSON-LD on the project page, same pattern as Hotel Cabot Las Velas) and a closing description paragraph in all 3 languages linking to verticalgardenmallorca.com. Relationship is Vertical Garden Mallorca → S'Estepa (collaborator) → OK Mobility (VGM's client, not ours) — verified this ordering against the human's correction before writing final copy; do not flip it back to "for OK Mobility" framing.
  - **Preview workflow correction**: `npm run dev` / `npx astro build` run directly against the Drive-mounted `codigo/` fail silently in this environment (matches `.agents/AGENTS.md`'s documented Google Drive file-locking issue — `astro build` exits 0 with no `/dist`, `astro dev` exits instantly with no error). The correct flow, already documented in the root `1. WEBSITES/INSTRUCOES.md` and used by other agents (Antigravity): run `python scripts/preview_local.py` from `codigo/` — it mirrors the source (minus `node_modules`/`.git`) into `%TEMP%\website-preview` on the local C: disk, `npm install`s and runs the dev server there, and cleans up the temp copy when stopped. For fast iteration after the first sync, just `cp` the one changed file into the temp mirror instead of re-running the whole script (avoids a full reinstall). Read this doc *before* attempting any local build/dev in this repo, not after hitting the failure.
- **2026-08-07** — commit `8cb2b6a` (merge of `claude/sant-llorenc-video-update-ffhitf`, `--no-ff`, branch deleted locally after merge). Replaced Sant Llorenç's EN description with a refined client-supplied translation (same "garden 2 months post-planting, preserving the ullastres" narrative as ES/DE, just a cleaner EN phrasing). Localized Jardín Mediterráneo's `location` field for SEO: added `LOCATION_OVERRIDES`/`getProjectLocation()` in `projects.ts` so it now reads "Mallorca, Balearic Islands" / "Mallorca, Islas Baleares" / "Mallorca, Balearische Inseln" per locale (previously a single untranslated "Mallorca" string, same as every project's `location` field — that field is still not localized for any other project, this was a targeted override). Updated the 7 call sites that read `project.location` (`ProjectDetail.astro`, `PortfolioPage.astro`, `HomePage.astro`, `LabHomePreview.astro`) to go through the new helper; verified build + rendered HTML on all 3 locales, confirmed other projects (e.g. Binissalem) unaffected.
  - **Branch cleanup note**: found 4 stray already-merged remote branches left over from earlier sessions (one of them, `preview`, directly against this file's own "don't keep a permanent preview branch" rule below). Tried `git push origin --delete` on those plus this session's own now-merged branch — blocked by the sandbox's egress proxy, confirmed as a structural limitation (see "Wider team context" below). Full list of the 5 pending deletions tracked in "Pending Human Action" at the top of this file, not duplicated here.
- **2026-08-07** — commit `c9712641` (parent of this doc update). Working hours 9–17 → 8–16 (Home contact block + `schema.ts` `openingHoursSpecification`, kept in sync). Services list: removed "and lighting systems" from the irrigation bullet, replaced "Proposal for outdoor materials and elements" with "Sustainability and water-efficiency assessment of the garden" (checked against the full bullet list for duplicates first). Fixed 2 broken `/gallery/` images for Jardín Mediterráneo (stale `.jpg` references left over from a site-wide JPG/PNG→WebP conversion done by the Antigravity agents). Also audited the full `docs/equipa/*` + `.agents/AGENTS.md` team documentation set — findings folded into "Wider team context" above.
