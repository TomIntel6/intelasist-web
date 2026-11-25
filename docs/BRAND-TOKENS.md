# Inventario de tokens de marca

Fuente exclusiva: `https://intelasist.com/` (HTML/CSS inline del constructor GoDaddy) y el logotipo oficial
`logo Intel Asist - HQ.png` (1121×231 px, RGBA) enlazado desde ese sitio. Inspección: 25/11/2026.
No se usó ninguna paleta de competidores.

## Colores originales

| Token | HEX | Procedencia | Uso semántico |
|---|---|---|---|
| `--brand-navy` | `#163E64` | `<meta name="theme-color">` y `rgb(22,62,100)` ×6 en CSS del sitio. El logotipo "INTEL" muestrea `#173E65` (diferencia de 1 unidad por compresión PNG). | **primary**: titulares, botón principal, header/footer |
| `--brand-navy-deep` | `#103252` | `rgb(16,50,82)` en CSS del sitio | primary-hover, fondo de secciones oscuras, footer |
| `--brand-navy-700` | `#1A4269` | `rgb(26,66,105)` en CSS del sitio | reserva (variante tonal) |
| `--brand-blue` | `#0E62AC` | Píxel dominante del logotipo "ASIST" (34 068 px) | **secondary / accent**: CTA "Ser proveedor", enlaces, iconos, barra bicolor |
| `--brand-blue-600` | `#215687` | `rgb(33,86,135)` en CSS del sitio | reserva (variante tonal) |
| `--brand-ink` | `#1B1B1B` | `rgb(27,27,27)` texto del sitio | **text** |
| `--brand-ink-2` | `#303030` | `rgb(48,48,48)` | reserva |
| `--brand-line` | `#D8DBE0` | `rgb(216,219,224)` | **border** |
| `--brand-white` | `#FFFFFF` | `rgb(255,255,255)` ×8 | **surface** |

Otros valores presentes en el HTML (`#4444DD`, `#FF0`, `rgba(0,0,0,.3)`) pertenecen al runtime del constructor (overlays, foco por defecto) y **no** se consideran marca.

## Derivados (tintes del navy; no provienen de terceros)

| Token | HEX | Uso | Contraste |
|---|---|---|---|
| `--tint-50` | `#F4F7FA` | surface-alt | — |
| `--tint-100` | `#E7EEF5` | surface-tint, fondos de icono | — |
| `--tint-200` | `#CBD9E6` | bordes fuertes, separadores | — |
| `--muted` | `#4F6276` | texto secundario sobre blanco | 6.1:1 (AA) |
| `--color-text-on-dark-muted` | `#C9D6E3` | texto secundario sobre navy-deep | 10.9:1 (AA) |
| `#8FB4D9` | — | eyebrows sobre navy-deep | 6.4:1 (AA) |

Contrastes principales: navy `#163E64` sobre blanco 10.6:1; azul `#0E62AC` sobre blanco 6.3:1; blanco sobre azul 6.3:1 (botón secundario); blanco sobre navy 10.6:1.

## Tipografía

El sitio vigente carga **Poppins** (900) y **Open Sans** desde el constructor. Dirección pidió evitar las familias habituales en sitios generados por IA (Inter, Manrope, Space Grotesk, etc.). Se eligió la pareja corporativa **Red Hat Display** (titulares, botones, navegación; variable 500–900) + **Red Hat Text** (cuerpo; variable 400–700), ambas autoalojadas en subset latin con `font-display: swap` (≈30 KB cada una, licencia OFL). Si dirección prefiere conservar Poppins/Open Sans, basta con cambiar los `@font-face` en `global.css` y `--font-display` / `--font-sans` en `tokens.css`.

## Motivo gráfico

La barra bicolor navy/azul (`.eyebrow::before`, pie de página, tarjetas) deriva del corte de color del logotipo INTEL|ASIST. El logotipo no se modifica; solo se recortó el margen transparente y se generó una variante blanca para fondos oscuros.
