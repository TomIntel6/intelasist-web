# Mapa de rutas

| Ruta | Archivo | Title | Indexable |
|---|---|---|---|
| `/` | `src/pages/index.astro` | Intelasist: Asistencia vial, hogar y salud en Panamá | Sí |
| `/servicios` | `src/pages/servicios/index.astro` | Servicios de asistencia en Panamá · Intelasist | Sí |
| `/servicios/asistencia-vial` | `src/pages/servicios/[slug].astro` | Asistencia vial en Panamá · Intelasist | Sí |
| `/servicios/asistencia-hogar` | ídem | Asistencia para el hogar en Panamá · Intelasist | Sí |
| `/servicios/asistencia-salud` | ídem | Asistencia en salud en Panamá · Intelasist | Sí |
| `/nosotros` | `src/pages/nosotros.astro` | Nosotros · Intelasist, asistencia en Panamá | Sí |
| `/proveedores` | `src/pages/proveedores.astro` | Red de proveedores de asistencia · Intelasist Panamá | Sí |
| `/contacto` | `src/pages/contacto.astro` | Contacto · Intelasist Panamá | Sí |
| `/privacidad` | `src/pages/privacidad.astro` | Aviso de privacidad · Intelasist | Sí (tras aprobación legal) |
| `/404` | `src/pages/404.astro` | Página no encontrada | No (noindex) |
| `/sitemap.xml` | `src/pages/sitemap.xml.ts` | — | — |
| `/robots.txt` | `public/robots.txt` | — | — |

Cada página: H1 único, meta description específica, canonical absoluta, `lang="es-PA"`, Open Graph, JSON-LD `Organization` (todas) + `Service` y `BreadcrumbList` (servicios).

## Redirecciones a configurar en el hosting (301)

| Ruta antigua (GoDaddy) | Nueva |
|---|---|
| `/privacy-policy` | `/privacidad` |

Añadir otras rutas antiguas si Search Console muestra URLs indexadas adicionales.
