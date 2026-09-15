# Portafolio — andrea natalia naranjo chávez

Web en React + TypeScript construida sobre el design system de `desig-system/`.

## Arrancar (todo vía Docker, no hace falta node en local)

```bash
# Desarrollo con hot-reload  →  http://localhost:5173
docker compose up web-dev

# Producción (build + nginx)  →  http://localhost:8080
docker compose --profile prod up --build web
```

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
index.html                 HTML primero, <script> al final del body
src/
  main.tsx                 punto de entrada
  App.tsx                  composición de secciones
  styles/
    global.css             fonts → tokens → theme → reset
    tokens.css             capa 1: valores de marca
    theme.css              capa 2: variables semánticas  ← editar aquí
    reset.css
  components/
    layout/                Page, Section, Container
    sections/              Hero, Projects, Experience, Community, Contact, Footer
    ui/                    Button, DisplayHeading, BleedBlock, ProjectShot, TextColumns
  content/                 copy ES / EN tipado
  context/ hooks/          idioma (EN/ES)
  types/                   tipos del contenido
public/assets/             SVG y bitmap copiados del design system
```

Los imports usan el alias `@/` → `src/` (configurado en `vite.config.ts` y `tsconfig.app.json`):

```ts
import { Button } from '@/components/ui/Button';
```

## Contenido

El `.fig` original trae Lorem Ipsum en todos los párrafos de proyecto y experiencia, y el mismo bitmap
en los cuatro huecos de imagen. Se reproduce tal cual en `src/content/es.ts`; sustituye esos textos e
imágenes cuando tengas el contenido real.

## Scripts

```bash
npm run dev        # servidor de desarrollo
npm run build      # typecheck + build de producción
npm run typecheck  # sólo TypeScript
```
