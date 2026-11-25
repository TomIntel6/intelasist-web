/**
 * Prefija los enlaces absolutos de dist/ con PAGES_BASE para la vista previa en
 * GitHub Pages (sitio de proyecto bajo subruta). No se usa para producción, donde el
 * sitio vive en la raíz del dominio y los enlaces "/..." son correctos tal cual.
 *
 * Reescribe: href="/x", src="/x", url(/x) y url('/x') en .html/.css/.xml, salvo "//".
 */
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, extname } from 'node:path';

const base = (process.env.PAGES_BASE ?? '').replace(/\/$/, '');
if (!base) { console.log('rewrite-base: PAGES_BASE vacío, nada que hacer'); process.exit(0); }

const exts = new Set(['.html', '.css', '.xml', '.txt']);
async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...await walk(p));
    else if (exts.has(extname(e.name))) out.push(p);
  }
  return out;
}

// Astro/Vite ya prefijan sus propios assets (/_astro/, url() en CSS); saltarlos.
const esc = base.slice(1).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const attr = new RegExp(`(href|src)="/(?!/|${esc}/)`, 'g');
const cssUrl = new RegExp(`url\\((['"]?)/(?!/|${esc}/)`, 'g');

let n = 0;
for (const file of await walk('dist')) {
  const src = await readFile(file, 'utf8');
  const out = src
    .replace(attr, `$1="${base}/`)
    .replace(cssUrl, `url($1${base}/`);
  if (out !== src) { await writeFile(file, out); n++; }
}
console.log(`rewrite-base: ${n} archivo(s) actualizados con base "${base}"`);
