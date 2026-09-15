/**
 * Construye la URL de un fichero de `public/` respetando el `base` de Vite.
 *
 * Vite reescribe el `base` en el HTML y en los imports, pero no en las rutas
 * que viven como texto dentro del JS. En GitHub Pages el sitio cuelga de
 * `/portafolio/`, así que `/assets/x.svg` daría 404 sin esto.
 *
 *   asset('assets/green-scribble.svg')  →  '/assets/green-scribble.svg'   (local)
 *                                       →  '/portafolio/assets/green-scribble.svg'  (Pages)
 */
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
}
