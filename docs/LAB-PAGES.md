# Lab pages

Internal design/editorial laboratory for S'Estepa Design.

Use `src/pages/lab/` for proposals, page concepts, gallery experiments and visual directions that should be preserved for review but are not approved as public site pages.

Rules:

- Every route in `src/pages/lab/` must pass `noindex={true}` to `Layout`.
- Every route in `src/pages/lab/` must stay out of the sitemap via `NOINDEX_PATHS` in `src/lib/blog-sitemap.mjs`.
- Do not link these routes from the public navigation.
- Do not keep large experiment-only assets in `public/` unless the proposal is approved for deploy.
- Prefer reusing existing public site assets in experiments. Create a new heavy folder under `public/` only when the proposal is approved for deploy.
- Web-ready curated assets are not native originals. Keep derivative sets clearly labelled if they are archived outside deploy.
