import type { APIRoute } from 'astro';
import { services } from '../content/site';

const routes = ['/', '/servicios', ...services.map((s) => `/servicios/${s.slug}`), '/nosotros', '/proveedores', '/contacto', '/privacidad'];

export const GET: APIRoute = ({ site }) => {
  const base = (site?.toString() ?? 'https://intelasist.com').replace(/\/$/, '');
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((r) => `  <url><loc>${base}${r === '/' ? '/' : r}</loc></url>`).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
