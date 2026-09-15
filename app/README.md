# app — la web

React 19 + TypeScript + Vite. Construida sobre el design system de `../desig-system/`.

Se arranca desde la raíz del repositorio con `docker compose up web-dev`
(ver [`../README.md`](../README.md)).

## Cómo cambiar el aspecto

Todo el diseño vive en variables CSS, en dos capas:

| Fichero | Qué contiene | ¿Se toca? |
|---|---|---|
| `src/styles/tokens.css` | Valores crudos de la marca (`--pink-500`, `--navy-900`, `--space-3`…) | Sólo si cambia la paleta de marca |
| `src/styles/theme.css` | Variables semánticas (`--primary-color`, `--title-size`, `--subtitle-font`…) | **Sí — es el fichero que se edita** |

Ejemplos:

```css
/* Cambiar el color primario de toda la web */
--primary-color: var(--green-500);

/* Cambiar el fondo */
--background-color: var(--ink-900);

/* Cambiar la tipografía de los títulos */
--title-font: var(--font-family-body);
--title-size: clamp(3rem, 10vw, 140px);
```

Ningún componente lleva colores ni tamaños hardcodeados: todos leen variables.

## Estructura

```
Dockerfile         build de producción (node → nginx)
Dockerfile.dev     servidor de desarrollo
nginx.conf
index.html         HTML primero, <script> al final del body
src/
  main.tsx         punto de entrada
  App.tsx          composición de secciones
  styles/
    global.css     fonts → tokens → theme → reset
    tokens.css     capa 1: valores de marca
    theme.css      capa 2: variables semánticas  ← editar aquí
    reset.css
  components/
    layout/        Page, Section, Container
    sections/      Hero, Projects, Experience, Community, Contact, Footer
    ui/            Button, DisplayHeading, BleedBlock, ProjectShot, TextColumns
  content/         copy ES / EN tipado
  context/ hooks/  idioma (EN/ES)
  types/           tipos del contenido
public/assets/     SVG y bitmap copiados del design system
```

Los imports usan el alias `@/` → `src/` (configurado en `vite.config.ts` y `tsconfig.app.json`):

```ts
import { Button } from '@/components/ui/Button';
```

## Contenido

El `.fig` original trae Lorem Ipsum en todos los párrafos de proyecto y experiencia, y el mismo bitmap
en los cuatro huecos de imagen. Se reproduce tal cual en `src/content/es.ts`; sustituye esos textos e
imágenes cuando tengas el contenido real.

Los assets de `public/assets/` son copia de `../desig-system/assets/`. Si el design system cambia,
vuelve a copiarlos.

## Scripts

```bash
npm run dev        # servidor de desarrollo
npm run build      # typecheck + build de producción
npm run typecheck  # sólo TypeScript
```
