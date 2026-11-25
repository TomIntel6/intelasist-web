# Reporte de QA · 25/11/2026

> Actualizado tras el rediseño v2 (tipografía Red Hat Display/Text, contenedor 1400 px, hero de sangrado completo, sin fondo de puntos). Lighthouse móvil en `/` tras v2: 100/100/100/100, LCP 1.65 s, CLS 0, 123 KB transferidos (dos fuentes en lugar de una).

Entorno: Windows 11, Node 22.14, Astro 5, Chromium 1223 (Playwright) en headless. Servidor: `astro preview` en `127.0.0.1:4321` (sin red real; los tiempos son de laboratorio, **no** CWV de campo).

## Build y tipos

| Comprobación | Resultado |
|---|---|
| `npm run build` | OK · 10 páginas estáticas en 1.0 s |
| `npm run check` (astro check) | 0 errores, 0 avisos, 0 sugerencias (25 archivos) |
| JS en bundle | 0 KB externo; dos scripts inline (menú móvil ≈1.6 KB, formulario ≈2.5 KB) |
| CSS total | 22.7 KB sin comprimir (tres hojas por ruta) |
| Transferencia inicial portada | 87 KB (Lighthouse `total-byte-weight`) · presupuesto ≤600 KB |

## Lighthouse móvil (simulado, 12.x)

Tres ejecuciones en `/`; valores idénticos en las tres (mediana = valor).

| Página | Rendimiento | Accesibilidad | Buenas prácticas | SEO | LCP | CLS | TBT |
|---|---|---|---|---|---|---|---|
| `/` | 100 | 100 | 100 | 100 | 1.5 s | 0 | 0 ms |
| `/proveedores` | 100 | 100 | 100 | 100 | 1.5 s | 0 | 0 ms |
| `/servicios/asistencia-vial` | 100 | 100 | 100 | 100 | 1.5 s | 0 | 0 ms |

Hallazgo corregido durante QA: dos numerales decorativos (`.card__n`, `.steps__n`) fallaban contraste (1.4:1 y 2.1:1). Se cambiaron a `#4F6276` sobre blanco (6.1:1) y `#8FB4D9` sobre navy (6.4:1).

## Responsive (Playwright, captura de página completa)

| Viewport | Páginas | Overflow horizontal |
|---|---|---|
| 390×844 | 8/8 | ninguno |
| 1440×900 | 8/8 | ninguno |

Pendiente: validación manual en 320, 360, 430, 768 y 1024 px y en dispositivos reales (Safari iOS, Chrome Android). El diseño usa una columna hasta 640 px, dos/tres columnas desde 768/900 px.

## Accesibilidad funcional (Playwright)

| Prueba | Resultado |
|---|---|
| Menú móvil: foco inicial al abrir | Botón «Cerrar menú» |
| Shift+Tab desde el primer foco | Envuelve al último elemento (teléfono) → trampa de foco correcta |
| Escape | Cierra el menú y devuelve el foco al botón de apertura |
| Clic en backdrop | Cierra el menú |
| Formulario vacío + enviar | Estado «Revisa los campos marcados…» (aria-live), foco al primer campo inválido (`#f-empresa`), errores asociados por `aria-describedby` |
| Honeypot relleno | Envío ignorado silenciosamente |
| Estructura (10 páginas) | 1 H1 por página, `lang="es-PA"`, skip-link, `<main>`, canonical absoluta, meta description 44–178 caracteres, 0 imágenes sin `alt` |
| Enlaces internos | 0 rotos (verificación sobre `dist/`) |
| Errores de consola | 0 en las 16 cargas |

Pendiente: lectura con NVDA/VoiceOver; axe como complemento.

## SEO técnico

- `sitemap.xml` generado con 9 URL canónicas; `robots.txt` permite todo + `OAI-SearchBot`.
- JSON-LD: `Organization` en todas; `Service` + `BreadcrumbList` en servicios. Sin reseñas, ratings ni FAQ markup (las FAQ son contenido visible).
- Open Graph y Twitter card con imagen 1200×630 generada del logo oficial.
- `/404` con `noindex`.

## Limitaciones y lo no medido

- No hay CWV de campo ni pruebas en red móvil real.
- No se probó en navegadores distintos de Chromium.
- El formulario usa `mailto:`; no hay prueba de entrega ni persistencia porque no existe integración aprobada.
- El aviso de privacidad es borrador.
- Contenido con `status: 'proposed'` no está aprobado por dirección.
