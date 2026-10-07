# Duplicate asset URL map - S Estepa Design

Date: 2026-10-07

Scope: the 19 duplicate hash groups reported by `asset-audit-latest.json` after removing the abandoned `lab/nova-galeria` experiment.

This report first mapped each duplicate URL, chose a proposed canonical URL, and listed the redirect needed before any public duplicate was removed. After the reversible reference/redirect pass was validated, the approved non-canonical duplicate files were physically removed.

## Decision rules

- A public URL that may have been indexed by Google is not deleted until a 301 exists from that exact old URL to a live canonical URL.
- Project photos reused in articles should normally converge toward one project asset URL, but already-published journal URLs are treated as SEO-bearing until redirected intentionally.
- Gallery URLs referenced by `src/data/gallery-images.ts` are active public UI URLs. They can be deduplicated only after the gallery data is changed and a 301 is added.
- Existing 301s to WebP canonicals win over same-hash file pairs when the current redirect policy has already canonicalized that image.
- Logo duplicates are tiny. Clean them for consistency, not for weight.

## Summary

- Duplicate groups: 19
- Duplicate files: 40
- Duplicate byte weight: 13.08 MB
- Non-canonical duplicate files removed after approval: 25
- Post-removal audit result: 0 duplicate groups, 0 duplicate files, 0 asset redirect targets broken

## Group 1 - 1.38 MB

Proposed canonical: `/portfolio/campanet-garden/garden-design-mallorca-campanet-garden-sestepa.jpg`
Canonical exists now: yes

| URL | Code refs | Generated refs | Tracked | Current 301 from this URL |
| --- | ---: | ---: | --- | --- |
| `/images/journal/garden-design-mallorca-campanet.jpg` | 0 | 1 | yes | line 433: /portfolio/campanet-garden/garden-design-mallorca-campanet-garden-sestepa.jpg 301 |
| `/portfolio/campanet-garden/images/garden-design-mallorca-landscape-design-sestepa-campanet-6.jpg` | 0 | 2 | yes | line 434: /portfolio/campanet-garden/garden-design-mallorca-campanet-garden-sestepa.jpg 301 |
| `/portfolio/campanet-garden/garden-design-mallorca-campanet-garden-sestepa.jpg` | 2 | 1 | yes | none |

Real references to resolve before cleanup:
- `/images/journal/garden-design-mallorca-campanet.jpg`: none
- `/portfolio/campanet-garden/images/garden-design-mallorca-landscape-design-sestepa-campanet-6.jpg`: none
- `/portfolio/campanet-garden/garden-design-mallorca-campanet-garden-sestepa.jpg`: `src/content/blog/the-wild-luxury-how-micro-rewilding-is-reshaping-mallorcas-landscapes.md`, `src/data/projects.ts`

Safe redirect plan before removal:
- `/images/journal/garden-design-mallorca-campanet.jpg  /portfolio/campanet-garden/garden-design-mallorca-campanet-garden-sestepa.jpg  301`
- `/portfolio/campanet-garden/images/garden-design-mallorca-landscape-design-sestepa-campanet-6.jpg  /portfolio/campanet-garden/garden-design-mallorca-campanet-garden-sestepa.jpg  301`

Recommended action: Manter canônica do projeto. Atualizar o blog para usar a URL canônica do projeto; depois adicionar 301 do journal e da imagem interna para a canônica antes de remover as duas cópias.

## Group 2 - 1.24 MB

Proposed canonical: `/portfolio/bunyola/garden-design-mallorca-bunyola-sestepa.jpg`
Canonical exists now: yes

| URL | Code refs | Generated refs | Tracked | Current 301 from this URL |
| --- | ---: | ---: | --- | --- |
| `/gallery/BUNYOLA-MALLORCA-SESTEPA-LANDSCAPE-GARDEN-DESIGN.jpg` | 0 | 1 | yes | line 435: /portfolio/bunyola/garden-design-mallorca-bunyola-sestepa.jpg 301 |
| `/portfolio/bunyola/images/BUNYOLA-MALLORCA-SESTEPA-LANDSCAPE-GARDEN-DESIGN.jpg` | 0 | 2 | yes | line 436: /portfolio/bunyola/garden-design-mallorca-bunyola-sestepa.jpg 301 |
| `/portfolio/bunyola/garden-design-mallorca-bunyola-sestepa.jpg` | 2 | 1 | yes | none |

Real references to resolve before cleanup:
- `/gallery/BUNYOLA-MALLORCA-SESTEPA-LANDSCAPE-GARDEN-DESIGN.jpg`: none
- `/portfolio/bunyola/images/BUNYOLA-MALLORCA-SESTEPA-LANDSCAPE-GARDEN-DESIGN.jpg`: none
- `/portfolio/bunyola/garden-design-mallorca-bunyola-sestepa.jpg`: `src/data/gallery-images.ts`, `src/data/projects.ts`

Safe redirect plan before removal:
- `/gallery/BUNYOLA-MALLORCA-SESTEPA-LANDSCAPE-GARDEN-DESIGN.jpg  /portfolio/bunyola/garden-design-mallorca-bunyola-sestepa.jpg  301`
- `/portfolio/bunyola/images/BUNYOLA-MALLORCA-SESTEPA-LANDSCAPE-GARDEN-DESIGN.jpg  /portfolio/bunyola/garden-design-mallorca-bunyola-sestepa.jpg  301`

Recommended action: Manter canônica do projeto. Galeria global pode passar a apontar para a canônica; depois 301 de /gallery/... e da cópia em /images/... para a canônica.

## Group 3 - 1.12 MB

Proposed canonical: `/portfolio/crestatx-garden-design/images/GARDEN-LANDSCAPE-DESIGN-MALLORCA-SESTEPA-DESIGN-JARDINES-1.webp`
Canonical exists now: yes

| URL | Code refs | Generated refs | Tracked | Current 301 from this URL |
| --- | ---: | ---: | --- | --- |
| `/images/journal/high-end-landscape-design-mallorca-crestatx.jpg` | 0 | 1 | yes | line 437: /portfolio/crestatx-garden-design/images/GARDEN-LANDSCAPE-DESIGN-MALLORCA-SESTEPA-DESIGN-JARDINES-1.webp 301 |
| `/portfolio/crestatx-garden-design/images/GARDEN-DESIGN-MALLORCA-CRESTATX-SESTEPA-LANDSCAPE-DESIGN-1.jpg` | 0 | 2 | yes | line 274: /portfolio/crestatx-garden-design/images/GARDEN-LANDSCAPE-DESIGN-MALLORCA-SESTEPA-DESIGN-JARDINES-1.webp 301 |

Real references to resolve before cleanup:
- `/images/journal/high-end-landscape-design-mallorca-crestatx.jpg`: none
- `/portfolio/crestatx-garden-design/images/GARDEN-DESIGN-MALLORCA-CRESTATX-SESTEPA-LANDSCAPE-DESIGN-1.jpg`: none

Safe redirect plan before removal:
- `/images/journal/high-end-landscape-design-mallorca-crestatx.jpg  /portfolio/crestatx-garden-design/images/GARDEN-LANDSCAPE-DESIGN-MALLORCA-SESTEPA-DESIGN-JARDINES-1.webp  301`
- `/portfolio/crestatx-garden-design/images/GARDEN-DESIGN-MALLORCA-CRESTATX-SESTEPA-LANDSCAPE-DESIGN-1.jpg  /portfolio/crestatx-garden-design/images/GARDEN-LANDSCAPE-DESIGN-MALLORCA-SESTEPA-DESIGN-JARDINES-1.webp  301`

Recommended action: Manter a URL WebP ativa do projeto como canônica. Atualizar os artigos que usam o journal; depois adicionar 301 do journal para o WebP do projeto. A URL JPG antiga do projeto já tem 301 para esse WebP.

## Group 4 - 1.05 MB

Proposed canonical: `/portfolio/son-vida/images/garden-design-son-vida-mallorca-sestepa-design-landscape-architecture-3.jpg`
Canonical exists now: yes

| URL | Code refs | Generated refs | Tracked | Current 301 from this URL |
| --- | ---: | ---: | --- | --- |
| `/gallery/GARDEN-DESIGN-MALLORCA-SESTEPA-JARDINERIA-INTEGRAL-SANTA PONSA (2).jpg` | 0 | 1 | yes | line 438: /portfolio/son-vida/images/garden-design-son-vida-mallorca-sestepa-design-landscape-architecture-3.jpg 301 |
| `/portfolio/son-vida/images/garden-design-son-vida-mallorca-sestepa-design-landscape-architecture-3.jpg` | 1 | 2 | yes | none |

Real references to resolve before cleanup:
- `/gallery/GARDEN-DESIGN-MALLORCA-SESTEPA-JARDINERIA-INTEGRAL-SANTA PONSA (2).jpg`: none
- `/portfolio/son-vida/images/garden-design-son-vida-mallorca-sestepa-design-landscape-architecture-3.jpg`: `src/data/gallery-images.ts`

Safe redirect plan before removal:
- `/gallery/GARDEN-DESIGN-MALLORCA-SESTEPA-JARDINERIA-INTEGRAL-SANTA%20PONSA%20(2).jpg  /portfolio/son-vida/images/garden-design-son-vida-mallorca-sestepa-design-landscape-architecture-3.jpg  301`

Recommended action: Manter a URL do projeto Son Vida como canônica. Atualizar gallery-images.ts para esta URL; depois 301 da URL /gallery/... para Son Vida.

## Group 5 - 0.98 MB

Proposed canonical: `/portfolio/son-vida/images/garden-design-son-vida-mallorca-sestepa-design-landscape-architecture-5.jpg`
Canonical exists now: yes

| URL | Code refs | Generated refs | Tracked | Current 301 from this URL |
| --- | ---: | ---: | --- | --- |
| `/gallery/GARDEN-DESIGN-MALLORCA-SESTEPA-JARDINERIA-INTEGRAL-SANTA PONSA (3).jpg` | 0 | 1 | yes | line 439: /portfolio/son-vida/images/garden-design-son-vida-mallorca-sestepa-design-landscape-architecture-5.jpg 301 |
| `/portfolio/son-vida/images/garden-design-son-vida-mallorca-sestepa-design-landscape-architecture-5.jpg` | 1 | 2 | yes | none |

Real references to resolve before cleanup:
- `/gallery/GARDEN-DESIGN-MALLORCA-SESTEPA-JARDINERIA-INTEGRAL-SANTA PONSA (3).jpg`: none
- `/portfolio/son-vida/images/garden-design-son-vida-mallorca-sestepa-design-landscape-architecture-5.jpg`: `src/data/gallery-images.ts`

Safe redirect plan before removal:
- `/gallery/GARDEN-DESIGN-MALLORCA-SESTEPA-JARDINERIA-INTEGRAL-SANTA%20PONSA%20(3).jpg  /portfolio/son-vida/images/garden-design-son-vida-mallorca-sestepa-design-landscape-architecture-5.jpg  301`

Recommended action: Manter a URL do projeto Son Vida como canônica. Atualizar gallery-images.ts para esta URL; depois 301 da URL /gallery/... para Son Vida.

## Group 6 - 0.93 MB

Proposed canonical: `/portfolio/son-vida/images/garden-design-son-vida-mallorca-sestepa-design-landscape-architecture-1.jpg`
Canonical exists now: yes

| URL | Code refs | Generated refs | Tracked | Current 301 from this URL |
| --- | ---: | ---: | --- | --- |
| `/gallery/GARDEN-DESIGN-MALLORCA-SESTEPA-JARDINERIA-INTEGRAL-SANTA PONSA (1).jpg` | 0 | 1 | yes | line 440: /portfolio/son-vida/images/garden-design-son-vida-mallorca-sestepa-design-landscape-architecture-1.jpg 301 |
| `/portfolio/son-vida/images/garden-design-son-vida-mallorca-sestepa-design-landscape-architecture-1.jpg` | 1 | 2 | yes | none |

Real references to resolve before cleanup:
- `/gallery/GARDEN-DESIGN-MALLORCA-SESTEPA-JARDINERIA-INTEGRAL-SANTA PONSA (1).jpg`: none
- `/portfolio/son-vida/images/garden-design-son-vida-mallorca-sestepa-design-landscape-architecture-1.jpg`: `src/data/gallery-images.ts`

Safe redirect plan before removal:
- `/gallery/GARDEN-DESIGN-MALLORCA-SESTEPA-JARDINERIA-INTEGRAL-SANTA%20PONSA%20(1).jpg  /portfolio/son-vida/images/garden-design-son-vida-mallorca-sestepa-design-landscape-architecture-1.jpg  301`

Recommended action: Manter a URL do projeto Son Vida como canônica. Atualizar gallery-images.ts para esta URL; depois 301 da URL /gallery/... para Son Vida.

## Group 7 - 0.79 MB

Proposed canonical: `/portfolio/bunyola/images/BUNYOLA-MALLORCA-SESTEPA-LANDSCAPE-GARDEN-DESIGN-2.jpg`
Canonical exists now: yes

| URL | Code refs | Generated refs | Tracked | Current 301 from this URL |
| --- | ---: | ---: | --- | --- |
| `/gallery/BUNYOLA-MALLORCA-SESTEPA-LANDSCAPE-GARDEN-DESIGN-2.jpg` | 0 | 1 | yes | line 441: /portfolio/bunyola/images/BUNYOLA-MALLORCA-SESTEPA-LANDSCAPE-GARDEN-DESIGN-2.jpg 301 |
| `/portfolio/bunyola/images/BUNYOLA-MALLORCA-SESTEPA-LANDSCAPE-GARDEN-DESIGN-2.jpg` | 1 | 2 | yes | none |

Real references to resolve before cleanup:
- `/gallery/BUNYOLA-MALLORCA-SESTEPA-LANDSCAPE-GARDEN-DESIGN-2.jpg`: none
- `/portfolio/bunyola/images/BUNYOLA-MALLORCA-SESTEPA-LANDSCAPE-GARDEN-DESIGN-2.jpg`: `src/data/gallery-images.ts`

Safe redirect plan before removal:
- `/gallery/BUNYOLA-MALLORCA-SESTEPA-LANDSCAPE-GARDEN-DESIGN-2.jpg  /portfolio/bunyola/images/BUNYOLA-MALLORCA-SESTEPA-LANDSCAPE-GARDEN-DESIGN-2.jpg  301`

Recommended action: Manter a URL do projeto Bunyola como canônica. Atualizar gallery-images.ts para esta URL; depois 301 da URL /gallery/... para ela.

## Group 8 - 0.69 MB

Proposed canonical: `/portfolio/garden-design-llubi-mallorca/images/landscape-architecture-mallorca-llubi-sestepa-design (1).webp`
Canonical exists now: yes

| URL | Code refs | Generated refs | Tracked | Current 301 from this URL |
| --- | ---: | ---: | --- | --- |
| `/images/journal/best-garden-design-mallorca-llubi-firepit.webp` | 0 | 1 | yes | line 442: /portfolio/garden-design-llubi-mallorca/images/landscape-architecture-mallorca-llubi-sestepa-design%20(1).webp 301 |
| `/portfolio/garden-design-llubi-mallorca/images/landscape-architecture-mallorca-llubi-sestepa-design (1).webp` | 3 | 2 | yes | line 401: /portfolio/garden-design-llubi-mallorca/images/landscape-architecture-mallorca-llubi-sestepa-design%20(1).webp 301 |

Real references to resolve before cleanup:
- `/images/journal/best-garden-design-mallorca-llubi-firepit.webp`: none
- `/portfolio/garden-design-llubi-mallorca/images/landscape-architecture-mallorca-llubi-sestepa-design (1).webp`: `src/content/blog/the-wild-luxury-how-micro-rewilding-is-reshaping-mallorcas-landscapes.md`, `src/content/blog/the-art-of-mediterranean-gardens-ecology-and-luxury-in-mallorca.md`, `src/data/projects.ts`

Safe redirect plan before removal:
- `/images/journal/best-garden-design-mallorca-llubi-firepit.webp  /portfolio/garden-design-llubi-mallorca/images/landscape-architecture-mallorca-llubi-sestepa-design%20(1).webp  301`

Recommended action: Manter canônica do projeto. Atualizar os dois artigos para a URL do projeto; depois 301 do journal para a canônica.

## Group 9 - 0.69 MB

Proposed canonical: `/portfolio/terrace-garden-in-palma/garden-design-mallorca-terrace-garden-in-palma-sestepa.webp`
Canonical exists now: yes

| URL | Code refs | Generated refs | Tracked | Current 301 from this URL |
| --- | ---: | ---: | --- | --- |
| `/portfolio/terrace-garden-in-palma/images/landscape-garden-design-terrace-palma-mallorca-sestepa-design-1.jpg` | 0 | 2 | yes | line 427: /portfolio/terrace-garden-in-palma/garden-design-mallorca-terrace-garden-in-palma-sestepa.webp 301 |
| `/portfolio/terrace-garden-in-palma/cover.jpg` | 0 | 1 | yes | line 430: /portfolio/terrace-garden-in-palma/garden-design-mallorca-terrace-garden-in-palma-sestepa.webp 301 |

Real references to resolve before cleanup:
- `/portfolio/terrace-garden-in-palma/images/landscape-garden-design-terrace-palma-mallorca-sestepa-design-1.jpg`: none
- `/portfolio/terrace-garden-in-palma/cover.jpg`: none

Safe redirect plan before removal:
- `/portfolio/terrace-garden-in-palma/images/landscape-garden-design-terrace-palma-mallorca-sestepa-design-1.jpg  /portfolio/terrace-garden-in-palma/garden-design-mallorca-terrace-garden-in-palma-sestepa.webp  301`
- `/portfolio/terrace-garden-in-palma/cover.jpg  /portfolio/terrace-garden-in-palma/garden-design-mallorca-terrace-garden-in-palma-sestepa.webp  301`

Recommended action: Já existe 301 dos JPGs antigos para o WebP canônico. Atualizar referência do blog que ainda chama o JPG; depois os JPGs duplicados podem sair.

## Group 10 - 0.66 MB

Proposed canonical: `/portfolio/santa-ponsa/images/garden-design-mallorca-santa-ponsa-01-pool-villa-stipa-sestepa.webp`
Canonical exists now: yes

| URL | Code refs | Generated refs | Tracked | Current 301 from this URL |
| --- | ---: | ---: | --- | --- |
| `/portfolio/santa-ponsa/garden-design-mallorca-santa-ponsa-sestepa.jpg` | 0 | 1 | yes | line 443: /portfolio/santa-ponsa/images/garden-design-mallorca-santa-ponsa-01-pool-villa-stipa-sestepa.webp 301 |
| `/portfolio/santa-ponsa/cover.jpeg` | 0 | 1 | yes | line 444: /portfolio/santa-ponsa/images/garden-design-mallorca-santa-ponsa-01-pool-villa-stipa-sestepa.webp 301 |

Real references to resolve before cleanup:
- `/portfolio/santa-ponsa/garden-design-mallorca-santa-ponsa-sestepa.jpg`: none
- `/portfolio/santa-ponsa/cover.jpeg`: none

Safe redirect plan before removal:
- `/portfolio/santa-ponsa/garden-design-mallorca-santa-ponsa-sestepa.jpg  /portfolio/santa-ponsa/images/garden-design-mallorca-santa-ponsa-01-pool-villa-stipa-sestepa.webp  301`
- `/portfolio/santa-ponsa/cover.jpeg  /portfolio/santa-ponsa/images/garden-design-mallorca-santa-ponsa-01-pool-villa-stipa-sestepa.webp  301`

Recommended action: As duas URLs antigas não têm referência real. Usar a imagem WebP ativa do projeto como canônica; adicionar 301 das duas antigas antes de remover.

## Group 11 - 0.66 MB

Proposed canonical: `/portfolio/son-vida/garden-design-mallorca-son-vida-sestepa.jpg`
Canonical exists now: yes

| URL | Code refs | Generated refs | Tracked | Current 301 from this URL |
| --- | ---: | ---: | --- | --- |
| `/portfolio/son-vida/images/garden-design-son-vida-mallorca-sestepa-design-landscape-architecture-4.jpg` | 0 | 2 | yes | line 445: /portfolio/son-vida/garden-design-mallorca-son-vida-sestepa.jpg 301 |
| `/portfolio/son-vida/garden-design-mallorca-son-vida-sestepa.jpg` | 1 | 1 | yes | none |

Real references to resolve before cleanup:
- `/portfolio/son-vida/images/garden-design-son-vida-mallorca-sestepa-design-landscape-architecture-4.jpg`: none
- `/portfolio/son-vida/garden-design-mallorca-son-vida-sestepa.jpg`: `src/data/projects.ts`

Safe redirect plan before removal:
- `/portfolio/son-vida/images/garden-design-son-vida-mallorca-sestepa-design-landscape-architecture-4.jpg  /portfolio/son-vida/garden-design-mallorca-son-vida-sestepa.jpg  301`

Recommended action: Manter canônica do projeto. Redirecionar a cópia interna /images/... para a capa do projeto antes de remover.

## Group 12 - 0.58 MB

Proposed canonical: `/portfolio/hotelcabotlasvelas/garden-design-mallorca-hotelcabotlasvelas-sestepa.webp`
Canonical exists now: yes

| URL | Code refs | Generated refs | Tracked | Current 301 from this URL |
| --- | ---: | ---: | --- | --- |
| `/portfolio/hotelcabotlasvelas/images/CABOT-LAS-VELAS-HOTEL-SESTEPA-DESIGN-MALLORCA-1.webp` | 0 | 2 | yes | line 446: /portfolio/hotelcabotlasvelas/garden-design-mallorca-hotelcabotlasvelas-sestepa.webp 301 |
| `/portfolio/hotelcabotlasvelas/garden-design-mallorca-hotelcabotlasvelas-sestepa.webp` | 1 | 1 | yes | none |

Real references to resolve before cleanup:
- `/portfolio/hotelcabotlasvelas/images/CABOT-LAS-VELAS-HOTEL-SESTEPA-DESIGN-MALLORCA-1.webp`: none
- `/portfolio/hotelcabotlasvelas/garden-design-mallorca-hotelcabotlasvelas-sestepa.webp`: `src/data/projects.ts`

Safe redirect plan before removal:
- `/portfolio/hotelcabotlasvelas/images/CABOT-LAS-VELAS-HOTEL-SESTEPA-DESIGN-MALLORCA-1.webp  /portfolio/hotelcabotlasvelas/garden-design-mallorca-hotelcabotlasvelas-sestepa.webp  301`

Recommended action: Manter canônica do projeto. Redirecionar a cópia interna /images/... para a capa do projeto antes de remover.

## Group 13 - 0.57 MB

Proposed canonical: `/portfolio/santa-ponsa/images/GARDEN-DESIGN-MALLORCA-SANTA-PONSA-SESTEPA-1.webp`
Canonical exists now: yes

| URL | Code refs | Generated refs | Tracked | Current 301 from this URL |
| --- | ---: | ---: | --- | --- |
| `/images/journal/landscape-architecture-slopes-santa-ponsa-mallorca.webp` | 0 | 1 | yes | line 447: /portfolio/santa-ponsa/images/GARDEN-DESIGN-MALLORCA-SANTA-PONSA-SESTEPA-1.webp 301 |
| `/portfolio/santa-ponsa/images/GARDEN-DESIGN-MALLORCA-SANTA-PONSA-SESTEPA-1.webp` | 2 | 2 | yes | none |

Real references to resolve before cleanup:
- `/images/journal/landscape-architecture-slopes-santa-ponsa-mallorca.webp`: none
- `/portfolio/santa-ponsa/images/GARDEN-DESIGN-MALLORCA-SANTA-PONSA-SESTEPA-1.webp`: `scripts/generate-image-sitemap.mjs`, `src/utils/schema.ts`

Safe redirect plan before removal:
- `/images/journal/landscape-architecture-slopes-santa-ponsa-mallorca.webp  /portfolio/santa-ponsa/images/GARDEN-DESIGN-MALLORCA-SANTA-PONSA-SESTEPA-1.webp  301`

Recommended action: Manter canônica usada por schema/sitemap. O journal não tem referência atual; adicionar 301 journal -> projeto antes de remover.

## Group 14 - 0.57 MB

Proposed canonical: `/portfolio/costadelacalma/LANDSCAPE-GARDEN-DESIGN-MALLORCA-COSTA-DE-LA-CALMA-SESTEPA-DESIGN.webp`
Canonical exists now: yes

| URL | Code refs | Generated refs | Tracked | Current 301 from this URL |
| --- | ---: | ---: | --- | --- |
| `/portfolio/costadelacalma/images/LANDSCAPE-GARDEN-DESIGN-MALLORCA-COSTA-DE-LA-CALMA-SESTEPA-DESIGN.webp` | 0 | 2 | yes | line 448: /portfolio/costadelacalma/LANDSCAPE-GARDEN-DESIGN-MALLORCA-COSTA-DE-LA-CALMA-SESTEPA-DESIGN.webp 301 |
| `/portfolio/costadelacalma/LANDSCAPE-GARDEN-DESIGN-MALLORCA-COSTA-DE-LA-CALMA-SESTEPA-DESIGN.webp` | 1 | 1 | yes | none |

Real references to resolve before cleanup:
- `/portfolio/costadelacalma/images/LANDSCAPE-GARDEN-DESIGN-MALLORCA-COSTA-DE-LA-CALMA-SESTEPA-DESIGN.webp`: none
- `/portfolio/costadelacalma/LANDSCAPE-GARDEN-DESIGN-MALLORCA-COSTA-DE-LA-CALMA-SESTEPA-DESIGN.webp`: `src/data/projects.ts`

Safe redirect plan before removal:
- `/portfolio/costadelacalma/images/LANDSCAPE-GARDEN-DESIGN-MALLORCA-COSTA-DE-LA-CALMA-SESTEPA-DESIGN.webp  /portfolio/costadelacalma/LANDSCAPE-GARDEN-DESIGN-MALLORCA-COSTA-DE-LA-CALMA-SESTEPA-DESIGN.webp  301`

Recommended action: Manter canônica de capa do projeto. Redirecionar a cópia interna /images/... para a capa antes de remover.

## Group 15 - 0.5 MB

Proposed canonical: `/portfolio/finca-garden-campos-mallorca/garden-design-mallorca-finca-garden-campos-mallorca-sestepa.webp`
Canonical exists now: yes

| URL | Code refs | Generated refs | Tracked | Current 301 from this URL |
| --- | ---: | ---: | --- | --- |
| `/images/journal/luxury-landscape-architect-mallorca-campos.jpg` | 0 | 1 | yes | line 449: /portfolio/finca-garden-campos-mallorca/garden-design-mallorca-finca-garden-campos-mallorca-sestepa.webp 301 |
| `/portfolio/finca-garden-campos-mallorca/images/GARDEN-LANDSCAPE-DESIGN-MALLORCA-SESTEPA-DESIGN-JARDINES-1.jpg` | 0 | 2 | yes | line 350: /portfolio/finca-garden-campos-mallorca/garden-design-mallorca-finca-garden-campos-mallorca-sestepa.webp 301 |

Real references to resolve before cleanup:
- `/images/journal/luxury-landscape-architect-mallorca-campos.jpg`: none
- `/portfolio/finca-garden-campos-mallorca/images/GARDEN-LANDSCAPE-DESIGN-MALLORCA-SESTEPA-DESIGN-JARDINES-1.jpg`: none

Safe redirect plan before removal:
- `/images/journal/luxury-landscape-architect-mallorca-campos.jpg  /portfolio/finca-garden-campos-mallorca/garden-design-mallorca-finca-garden-campos-mallorca-sestepa.webp  301`
- `/portfolio/finca-garden-campos-mallorca/images/GARDEN-LANDSCAPE-DESIGN-MALLORCA-SESTEPA-DESIGN-JARDINES-1.jpg  /portfolio/finca-garden-campos-mallorca/garden-design-mallorca-finca-garden-campos-mallorca-sestepa.webp  301`

Recommended action: Manter a URL WebP ativa do projeto Campos como canônica. Atualizar os artigos que usam o journal; depois adicionar 301 do journal para o WebP do projeto. A URL JPG antiga do projeto já tem 301 para esse WebP.

## Group 16 - 0.34 MB

Proposed canonical: `/portfolio/binissalem-courtyard/garden-design-mallorca-binissalem-courtyard-01-pool-terrace-lemon-tree-sestepa.webp`
Canonical exists now: yes

| URL | Code refs | Generated refs | Tracked | Current 301 from this URL |
| --- | ---: | ---: | --- | --- |
| `/portfolio/binissalem-courtyard/images/garden-design-mallorca-binissalem-courtyard-01-pool-terrace-lemon-tree-sestepa.webp` | 0 | 2 | yes | line 450: /portfolio/binissalem-courtyard/garden-design-mallorca-binissalem-courtyard-01-pool-terrace-lemon-tree-sestepa.webp 301 |
| `/portfolio/binissalem-courtyard/garden-design-mallorca-binissalem-courtyard-01-pool-terrace-lemon-tree-sestepa.webp` | 1 | 1 | yes | none |

Real references to resolve before cleanup:
- `/portfolio/binissalem-courtyard/images/garden-design-mallorca-binissalem-courtyard-01-pool-terrace-lemon-tree-sestepa.webp`: none
- `/portfolio/binissalem-courtyard/garden-design-mallorca-binissalem-courtyard-01-pool-terrace-lemon-tree-sestepa.webp`: `src/data/projects.ts`

Safe redirect plan before removal:
- `/portfolio/binissalem-courtyard/images/garden-design-mallorca-binissalem-courtyard-01-pool-terrace-lemon-tree-sestepa.webp  /portfolio/binissalem-courtyard/garden-design-mallorca-binissalem-courtyard-01-pool-terrace-lemon-tree-sestepa.webp  301`

Recommended action: Manter canônica de capa do projeto. Redirecionar a cópia interna /images/... para a capa antes de remover.

## Group 17 - 0.29 MB

Proposed canonical: `/portfolio/finca-garden-inca/garden-design-mallorca-finca-garden-inca-sestepa.jpg`
Canonical exists now: yes

| URL | Code refs | Generated refs | Tracked | Current 301 from this URL |
| --- | ---: | ---: | --- | --- |
| `/portfolio/finca-garden-inca/images/PLANO-DE-JARDIN-INCA-SESTEPA-GARDEN-DESIGN-MALLORCA.jpg` | 0 | 1 | yes | line 451: /portfolio/finca-garden-inca/garden-design-mallorca-finca-garden-inca-sestepa.jpg 301 |
| `/portfolio/finca-garden-inca/garden-design-mallorca-finca-garden-inca-sestepa.jpg` | 1 | 1 | yes | none |

Real references to resolve before cleanup:
- `/portfolio/finca-garden-inca/images/PLANO-DE-JARDIN-INCA-SESTEPA-GARDEN-DESIGN-MALLORCA.jpg`: none
- `/portfolio/finca-garden-inca/garden-design-mallorca-finca-garden-inca-sestepa.jpg`: `src/data/projects.ts`

Safe redirect plan before removal:
- `/portfolio/finca-garden-inca/images/PLANO-DE-JARDIN-INCA-SESTEPA-GARDEN-DESIGN-MALLORCA.jpg  /portfolio/finca-garden-inca/garden-design-mallorca-finca-garden-inca-sestepa.jpg  301`

Recommended action: Manter canônica de capa do projeto. Redirecionar a cópia interna antiga para a capa antes de remover.

## Group 18 - 0.04 MB

Proposed canonical: `/images/logo.png`
Canonical exists now: yes

| URL | Code refs | Generated refs | Tracked | Current 301 from this URL |
| --- | ---: | ---: | --- | --- |
| `/images/S-ESTEPA-GARDEN-DESIGN-MALLORCA-LOGO-BLACK-344.png` | 0 | 1 | yes | line 452: /images/logo.png 301 |
| `/images/logo.png` | 6 | 1 | yes | none |

Real references to resolve before cleanup:
- `/images/S-ESTEPA-GARDEN-DESIGN-MALLORCA-LOGO-BLACK-344.png`: none
- `/images/logo.png`: `src/utils/schema.ts`, `src/components/Footer.astro`

Safe redirect plan before removal:
- `/images/S-ESTEPA-GARDEN-DESIGN-MALLORCA-LOGO-BLACK-344.png  /images/logo.png  301`

Recommended action: Padronizar schema para /images/logo.png e redirecionar o PNG descritivo antigo para /images/logo.png. Peso irrelevante; limpeza opcional.

## Group 19 - 0.01 MB

Proposed canonical: `/images/S-ESTEPA-GARDEN-DESIGN-MALLORCA-LOGO-BLACK-344.webp`
Canonical exists now: yes

| URL | Code refs | Generated refs | Tracked | Current 301 from this URL |
| --- | ---: | ---: | --- | --- |
| `/images/S-ESTEPA-GARDEN-DESIGN-MALLORCA-LOGO-BLACK-344.webp` | 11 | 1 | yes | none |
| `/images/logo.webp` | 0 | 1 | yes | line 453: /images/S-ESTEPA-GARDEN-DESIGN-MALLORCA-LOGO-BLACK-344.webp 301 |

Real references to resolve before cleanup:
- `/images/S-ESTEPA-GARDEN-DESIGN-MALLORCA-LOGO-BLACK-344.webp`: `public/pdf-guide-7-mistakes.html`, `public/pdf-guide-7-mistakes-v2.html`, `public/pdf-guide-7-mistakes-en.html`, `public/pdf-guide-7-mistakes-es.html`, `src/pages/404.astro`, `src/layouts/Layout.astro`, `src/components/Header.astro`
- `/images/logo.webp`: none

Safe redirect plan before removal:
- `/images/logo.webp  /images/S-ESTEPA-GARDEN-DESIGN-MALLORCA-LOGO-BLACK-344.webp  301`

Recommended action: Manter logo WebP descritivo como canônico porque header/layout/PDFs usam essa URL. /images/logo.webp está sem referência; redirecionar para o logo descritivo antes de remover.

## Final validation

1. Source references were updated to canonical URLs.
2. Required 301s were added or retargeted to live canonical assets.
3. Approved duplicate files were removed physically.
4. `python scripts\preview_local.py build` passed from the project root via the local preview mirror.
5. Asset redirect validation passed with `broken=0`.
6. Final asset audit reported `duplicateGroups: 0`, `duplicateFiles: 0`, `duplicateMb: 0`.
