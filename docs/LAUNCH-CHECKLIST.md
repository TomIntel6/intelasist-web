# Checklist de lanzamiento

## A. Aprobaciones de dirección (bloqueantes)

- [ ] Copy de hero, servicios, proceso y proveedores (`status: 'proposed'` en `src/content/site.ts`).
- [ ] Confirmar que `+507 397-0612` e `info@intelasist.com` siguen vigentes y a qué público se destinan (hoy: teléfono = asistencia 24/7; correo = empresas/proveedores).
- [ ] Alcance real de "24/7" y de "operación en Panamá".
- [ ] Categorías y requisitos de proveedores; destino del formulario (correo/CRM) y responsable.
- [ ] Aviso de privacidad revisado por responsable legal (Ley 81 de 2019); plazos de retención.
- [ ] Fotografía con derechos (ver `docs/ASSETS.md`).
- [ ] Socios/métricas con período y fuente, o mantener la variante sin evidencia.
- [ ] Decisión sobre GPTBot (entrenamiento) en `robots.txt`; OAI-SearchBot ya permitido.
- [ ] Analítica: herramienta, consentimiento y actualización del aviso de privacidad.

## B. Técnico pre-producción

- [ ] `npm run build` y `npm run check` sin errores.
- [ ] Hosting estático con HTTPS (Netlify/Vercel/Cloudflare Pages/GoDaddy hosting estático).
- [ ] Redirecciones 301 (`docs/ROUTES.md`).
- [ ] Headers: HSTS, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy`, CSP ajustada (`default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self'`). Nota: Astro inyecta `<script type="application/ld+json">` y scripts inline por componente; si la CSP bloquea inline, activar `experimental.csp` de Astro o hashes.
- [ ] Caché: `public/fonts` e `images` con `Cache-Control: max-age=31536000, immutable`; HTML sin caché larga.
- [ ] Staging protegido con `noindex` / autenticación; retirar antes de producción.
- [ ] Verificar HTTP 200, canonicals, `sitemap.xml`, `robots.txt` en el dominio real.
- [ ] Google Search Console + Bing Webmaster Tools: enviar sitemap; IndexNow opcional.
- [ ] Revisión manual en Safari iOS y Chrome Android (dispositivos reales).
- [ ] Lighthouse móvil (3 ejecuciones, mediana) y registro de CWV reales tras 28 días.

## C. Post-lanzamiento (30/60/90 días)

- [ ] Línea base: impresiones/clics no marcarios, visitas a `/servicios/*`, consultas de proveedores válidas.
- [ ] Revisión mensual de contenido; trimestral de autoridad externa (perfiles empresariales, enlaces de socios).
