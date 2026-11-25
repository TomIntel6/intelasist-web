# Intelasist · guía para Claude Code

Sitio corporativo estático de Intel Asistencia, S.A. (Panamá). Astro 5, sin frameworks de UI, CSS con tokens, JS mínimo.
La especificación de producto es `Intelasist_Claude_Brief_v2.md` (entregado por dirección); este archivo resume las reglas operativas.

## Comandos
- `npm run dev` · desarrollo en http://localhost:4321
- `npm run build` · genera `dist/`
- `npm run preview` · sirve `dist/`
- `npm run check` · typecheck

## Reglas no negociables
- **Colores solo de la marca**: `src/styles/tokens.css` documenta la procedencia de cada HEX (`docs/BRAND-TOKENS.md`). No importar paletas, degradados ni logos de Addiuva, MAWDY, Connect o Force-SOS.
- **No inventar datos**: cifras, clientes, coberturas, certificaciones o tecnología propia. Todo contenido vive en `src/content/site.ts` con `status` (`verified` / `proposed` / `pending`). Lo `pending` no se publica.
- **No simular envíos**: el formulario de proveedores usa `mailto:` hasta que exista un endpoint aprobado.
- **Sin** video inicial, carruseles, mega menú, login, precios, trackers ni librerías de iconos completas.
- Español panameño de tono corporativo. `lang="es-PA"`.
- Mobile-first (diseñar en 390 px), WCAG 2.2 AA, HTML indexable sin JS.
- No desplegar a producción sin autorización de dirección (`docs/LAUNCH-CHECKLIST.md`).

## Dónde tocar qué
- Textos → `src/content/site.ts`
- Colores/tipografía/espaciado → `src/styles/tokens.css`
- Nueva página → `src/pages/`, usar `layouts/Base.astro`, añadir a `src/pages/sitemap.xml.ts` y `docs/ROUTES.md`
- Servicios → añadir objeto en `services[]`; la ruta `/servicios/[slug]` se genera sola
