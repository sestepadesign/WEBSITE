# Deleted tracked assets audit - S Estepa Design

Date: 2026-10-07

Scope: all files reported by Git as tracked deletions after the duplicate-asset cleanup and previous portfolio asset migrations.

## Operational decision

The deleted tracked public assets are resolved for this pass.

Decision: keep them deleted for the next controlled commit, because:

- every deleted public URL has a 301 redirect;
- every redirect target is either a live public asset or a live project/page route;
- no deleted public asset is referenced by active source/content/sitemap files after regenerating `public/sitemap-images.xml`;
- build passed through the approved local mirror wrapper;
- press PDFs remain outside this deletion set and stay in deploy.

No deleted asset was restored during this pass.

## Validation summary

Commands used from the project root:

```powershell
python scripts\preview_local.py build
node scripts\generate-image-sitemap.mjs
```

Read-only validation results:

| Check | Result |
| --- | ---: |
| Deleted tracked public files audited | 329 |
| Deleted public URLs with valid 301 | 329 |
| Missing redirects | 0 |
| Broken redirect targets | 0 |
| Real references to deleted public assets | 0 |
| Build result via preview wrapper | passed |

## Residual exact-hash duplicates preserved

A broad hash scan over `public/` found only three remaining duplicate groups outside the image cleanup scope:

| Group | Files | Decision |
| --- | --- | --- |
| Project metadata text | `public/portfolio/sant-llorenc/info.txt`, `public/portfolio/jardin-mediterraneo/info.txt` | Preserve. Tiny text metadata, not a visual asset cleanup target. |
| Cormorant Garamond font weights | `public/fonts/cormorant-garamond-400.woff2`, `public/fonts/cormorant-garamond-500.woff2`, `public/fonts/cormorant-garamond-600.woff2` | Preserve. Each file is explicitly mapped to a different `font-weight` in `src/styles/global.css`. |
| Jost font weights | `public/fonts/jost-400.woff2`, `public/fonts/jost-500.woff2`, `public/fonts/jost-600.woff2` | Preserve. Each file is explicitly mapped to a different `font-weight` in `src/styles/global.css`. |

These are classified, intentional preserves for this pass. They should not be removed as part of the image/portfolio asset cleanup.

## Deleted groups by public area

| Area | Count | Resolution |
| --- | ---: | --- |
| `public/gallery/` duplicate legacy images | 5 | 301 to canonical project/gallery assets |
| `public/images/` logo/journal duplicates | 7 | 301 to canonical logo or project assets |
| `public/portfolio/binissalem*` | 2 | 301 to current Binissalem assets |
| `public/portfolio/bunyola*` | 1 | 301 to current Bunyola asset |
| `public/portfolio/campanet*` | 9 | 301 to current Campanet Garden assets/page |
| `public/portfolio/campos*` | 19 | 301 to current Finca Garden Campos assets/page |
| `public/portfolio/costadelacalma*` | 1 | 301 to canonical Costa de la Calma asset |
| `public/portfolio/crestatx*` | 37 | 301 to current Crestatx Garden Design assets/page |
| `public/portfolio/finca-garden-*` | 2 | 301 to canonical project assets |
| `public/portfolio/gallery_images/` | 22 | no active references; protected by existing redirect policy |
| `public/portfolio/hotelcabotlasvelas/` | 1 | 301 to canonical project cover |
| `public/portfolio/jardin-mediterraneo/` | 51 | 301 to current WebP/canonical project assets |
| `public/portfolio/llubi/` | 31 | 301 to current Llubi page/assets |
| `public/portfolio/press_images/` | 22 | no active references; press PDFs remain in deploy |
| `public/portfolio/sacabaneta/` | 6 | PNG originals redirected to current WebP renders or page |
| `public/portfolio/sant-llorenc/` | 24 | PNG/text legacy URLs redirected to current Sant Llorenc assets/page |
| `public/portfolio/santa-eugenia/` | 19 | 301 to current Terrace Garden Santa Eugenia assets/info |
| `public/portfolio/santa-ponsa/` | 1 | 301 to canonical Santa Ponsa asset |
| `public/portfolio/seaside-house-alcudia/` | 17 | JPG originals redirected to current WebP images |
| `public/portfolio/son-vida/` | 1 | 301 to canonical Son Vida asset |
| `public/portfolio/terrace-garden-*` | 11 | 301 to current Terrace Garden in Palma/Santa Eugenia assets |
| `public/portfolio/vertical-garden*` | 39 | 301 to current Vertical Gardens in Mallorca assets/page |
| `public/videos/hero-bg.mp4` | 1 | 301 to `/videos/sant_llorenc_hero.mp4` |

## Untracked deploy candidates classified

These files are not problems; they are deploy/documentation candidates and should be staged explicitly if this cleanup is committed.

| Class | Count | Notes |
| --- | ---: | --- |
| Audit/lab docs | 4 | duplicate report, deleted tracked assets audit, lab pages doc, deleted-assets prompt/report lineage |
| Diagram SVGs | 8 | editorial diagrams for current/new blog content or lab preview |
| New canonical WebP portfolio assets | 24 | Crestatx, Sa Cabaneta, and Seaside House Alcudia WebP assets referenced by project data, sitemap, redirects, or migrated content |
| New blog posts | 4 | generated as active Astro content and included in successful build |

## Files changed to resolve the audit

- `public/_redirects`: added exact 301s for the remaining missing/broken deleted tracked URLs before broader wildcard rules.
- `public/sitemap-images.xml`: regenerated from the current source data so removed asset URLs are no longer listed.

## Commit guidance

Use explicit staging only. Do not use `git add -A`.

Recommended staging shape:

```powershell
git add public/_redirects public/sitemap-images.xml
git add src/components/ProjectDetail.astro src/components/Schema.astro src/data/gallery-images.ts src/data/projects.ts src/utils/schema.ts
git add scripts/generate-image-sitemap.mjs
git add docs/DUPLICATE-ASSET-URL-MAP-2026-10-07.md docs/DELETED-TRACKED-ASSETS-AUDIT-2026-10-07.md docs/LAB-PAGES.md docs/PROMPT-AUDITORIA-DELETED-TRACKED-ASSETS-2026-10-07.md
```

Then stage approved deleted paths explicitly, preferably from a reviewed list, not with `git add -A`.
