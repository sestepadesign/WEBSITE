import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const pagesDir = path.join(ROOT, 'src/pages');

const wrappers = [
  { path: 'index.astro', comp: 'HomePage', lang: 'en', depth: 0 },
  { path: 'about.astro', comp: 'AboutPage', lang: 'en', depth: 0 },
  { path: 'contact.astro', comp: 'contactPage', lang: 'en', depth: 0 },
  { path: 'gallery.astro', comp: 'galleryPage', lang: 'en', depth: 0 },
  { path: 'press.astro', comp: 'pressPage', lang: 'en', depth: 0 },
  { path: 'garden-design-mallorca-landscape-management-villas-fincas.astro', comp: 'servicesPage', lang: 'en', depth: 0 },
  { path: 'legal-notice.astro', comp: 'legal-noticePage', lang: 'en', depth: 0 },
  { path: 'privacy-policy.astro', comp: 'privacy-policyPage', lang: 'en', depth: 0 },
  { path: 'cookies.astro', comp: 'cookiesPage', lang: 'en', depth: 0 },
  { path: 'portfolio/index.astro', comp: 'PortfolioPage', lang: 'en', depth: 1 },
  { path: 'blog/index.astro', comp: 'BlogIndexPage', lang: 'en', depth: 1 },
  { path: 'es/index.astro', comp: 'HomePage', lang: 'es', depth: 1 },
  { path: 'es/sobre.astro', comp: 'AboutPage', lang: 'es', depth: 1 },
  { path: 'es/contacto.astro', comp: 'contactPage', lang: 'es', depth: 1 },
  { path: 'es/galeria.astro', comp: 'galleryPage', lang: 'es', depth: 1 },
  { path: 'es/prensa.astro', comp: 'pressPage', lang: 'es', depth: 1 },
  { path: 'es/diseno-de-jardines-mallorca.astro', comp: 'servicesPage', lang: 'es', depth: 1 },
  { path: 'es/aviso-legal.astro', comp: 'legal-noticePage', lang: 'es', depth: 1 },
  { path: 'es/politica-de-privacidad.astro', comp: 'privacy-policyPage', lang: 'es', depth: 1 },
  { path: 'es/cookies.astro', comp: 'cookiesPage', lang: 'es', depth: 1 },
  { path: 'es/portfolio/index.astro', comp: 'PortfolioPage', lang: 'es', depth: 2 },
  { path: 'es/blog/index.astro', comp: 'BlogIndexPage', lang: 'es', depth: 2 },
  { path: 'de/index.astro', comp: 'HomePage', lang: 'de', depth: 1 },
  { path: 'de/uber.astro', comp: 'AboutPage', lang: 'de', depth: 1 },
  { path: 'de/kontakt.astro', comp: 'contactPage', lang: 'de', depth: 1 },
  { path: 'de/galerie.astro', comp: 'galleryPage', lang: 'de', depth: 1 },
  { path: 'de/presse.astro', comp: 'pressPage', lang: 'de', depth: 1 },
  { path: 'de/gartengestaltung-mallorca.astro', comp: 'servicesPage', lang: 'de', depth: 1 },
  { path: 'de/rechtlicher-hinweis.astro', comp: 'legal-noticePage', lang: 'de', depth: 1 },
  { path: 'de/datenschutzbestimmungen.astro', comp: 'privacy-policyPage', lang: 'de', depth: 1 },
  { path: 'de/cookies.astro', comp: 'cookiesPage', lang: 'de', depth: 1 },
  { path: 'de/portfolio/index.astro', comp: 'PortfolioPage', lang: 'de', depth: 2 },
  { path: 'de/blog/index.astro', comp: 'BlogIndexPage', lang: 'de', depth: 2 },
];

for (const w of wrappers) {
  const file = path.join(pagesDir, w.path);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  const importPath = `${'../'.repeat(w.depth + 1)}components/site/${w.comp}.astro`;
  const content = `---
import Page from '${importPath}';
---
<Page lang="${w.lang}" />
`;
  fs.writeFileSync(file, content);
}

console.log(`Generated ${wrappers.length} page wrappers`);
