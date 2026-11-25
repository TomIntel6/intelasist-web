import { defineConfig } from 'astro/config';

// Sitio corporativo estático. El dominio real se mantiene; `site` se usa para
// canónicas absolutas, Open Graph y sitemap.
//
// Vista previa en GitHub Pages (subruta): el workflow define PAGES_BASE="/<repo>"
// y PAGES_SITE="https://<usuario>.github.io". En ese modo la build marca noindex
// (ver SEOHead) y scripts/rewrite-base.mjs prefija los enlaces absolutos en dist/.
const pagesBase = process.env.PAGES_BASE?.replace(/\/$/, '') || undefined;
const site = pagesBase ? process.env.PAGES_SITE ?? 'https://tomintel6.github.io' : 'https://intelasist.com';

export default defineConfig({
  site,
  base: pagesBase,
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
  compressHTML: true,
  vite: { define: { 'import.meta.env.PUBLIC_PREVIEW': JSON.stringify(pagesBase ? '1' : '') } },
});
