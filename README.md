# Intelasist · Sitio corporativo

Sitio estático mobile-first para **Intel Asistencia, S.A.** (Panamá), construido con [Astro](https://astro.build) 5, HTML semántico, CSS con tokens y JavaScript mínimo (menú móvil y validación del formulario).

> Estado: **desarrollo local / revisión de dirección**. No desplegar a producción sin aprobación (ver `docs/LAUNCH-CHECKLIST.md`).

## Requisitos

- Node.js 18.17+ (probado con 22.14) y npm.

## Ejecutar en local

```bash
npm install          # primera vez
npm run dev          # servidor de desarrollo con recarga: http://localhost:4321
```

Para ver la versión de producción tal como se publicaría:

```bash
npm run build        # genera /dist
npm run preview      # sirve /dist en http://localhost:4321
```

`--host` ya está activado en los scripts: desde otro dispositivo de la misma red, abre `http://<IP-de-este-equipo>:4321` (útil para probar en un teléfono real).

Otros comandos: `npm run check` (typecheck de Astro/TypeScript).

## Estructura

```
src/
  content/site.ts        ← TODO el contenido editable, con estado (verified/proposed/pending)
  styles/tokens.css      ← tokens de marca (colores, tipografía, espaciado)
  styles/global.css      ← base, utilidades, botones
  layouts/Base.astro     ← <html>, skip-link, Header, Footer, SEOHead
  layouts/ServiceTemplate.astro
  components/            ← Header, Hero, TrustStrip, ServiceCard, ProcessSteps,
                            PartnerProof, ProviderCTA, ProviderForm, Breadcrumbs, SEOHead, Footer
  pages/                 ← rutas (ver docs/ROUTES.md) + sitemap.xml.ts
public/
  fonts/manrope-latin-var.woff2   ← fuente autoalojada (subset latin, variable 400–800)
  images/                         ← logo oficial y derivados (ver docs/ASSETS.md)
  robots.txt, favicon.svg
docs/                    ← tokens de marca, rutas, assets, QA, checklist de lanzamiento
```

## Editar contenido

Todo el texto vive en `src/content/site.ts`. Cada bloque tiene un campo `status`:

- `verified`: tomado del sitio público vigente (misión, teléfono, correo, "24/7").
- `proposed`: redacción propuesta por el brief; **requiere aprobación** antes de producción.
- `pending`: dato que dirección debe entregar.

## Formulario de proveedores

No existe integración de backend/CRM aprobada. El formulario valida en cliente (con honeypot) y abre el cliente de correo del usuario con la solicitud prellenada hacia `info@intelasist.com`. **No simula un envío.** Cuando se apruebe el destino, implementar endpoint con validación server-side, rate limit y confirmación tras persistencia (ver comentario en `src/components/ProviderForm.astro` y `.env.example`).

## Decisiones clave

- **Colores**: extraídos exclusivamente de intelasist.com y del logotipo oficial (`docs/BRAND-TOKENS.md`).
- **Sin fotografía**: la imagen del sitio actual es un recurso Getty licenciado por GoDaddy y no se reutiliza. El hero usa una ilustración SVG de marca hasta que dirección entregue fotografía propia o licenciada.
- **Sin analítica ni cookies** hasta que dirección apruebe herramienta y política.
- **Aviso de privacidad**: borrador estructural, pendiente del responsable legal.
