import { defineConfig } from 'astro/config';

// Sitio corporativo estático. El dominio real se mantiene; `site` se usa para
// canónicas absolutas, Open Graph y sitemap.
export default defineConfig({
  site: 'https://intelasist.com',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
  compressHTML: true,
});
