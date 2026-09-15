# Portfolio — andrea natalia naranjo chávez

A repository with two independent pieces:

```
desig-system/    The design system (tokens, guidelines, UI kit). Source of truth for the design.
app/             The website, in React + TypeScript. Consumes the design system, never edits it.
docker-compose.yml
```

## Running it (everything through Docker — no local node needed)

From the repository root:

```bash
# Development with hot-reload  →  http://localhost:5173
docker compose up web-dev

# Production (build + nginx)   →  http://localhost:8080
docker compose --profile prod up --build web
```

## Deployment

Every push to `main` publishes the site to GitHub Pages through
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).
The workflow builds `app/` and uploads `app/dist` as the Pages artifact.

The site is served from `https://annchoa.github.io/portafolio/`, so the build receives
`BASE_PATH=/<repo>/`. Paths to files in `app/public/` must be built with `asset()`
(`app/src/lib/asset.ts`) so they pick up that prefix — a hand-written absolute path
such as `/assets/photo.png` would 404 on Pages.

With a custom domain, change `BASE_PATH` to `/` in the workflow.

The website's own documentation lives in [`app/README.md`](app/README.md); the design system's in
[`desig-system/readme.md`](desig-system/readme.md).
