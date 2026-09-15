# Portafolio — andrea natalia naranjo chávez

Repositorio con dos piezas independientes:

```
desig-system/    El design system (tokens, guidelines, UI kit). Fuente de verdad del diseño.
app/             La web en React + TypeScript. Consume el design system, no lo modifica.
docker-compose.yml
```

## Arrancar (todo vía Docker, no hace falta node en local)

Desde la raíz del repositorio:

```bash
# Desarrollo con hot-reload  →  http://localhost:5173
docker compose up web-dev

# Producción (build + nginx)  →  http://localhost:8080
docker compose --profile prod up --build web
```

La documentación de la web está en [`app/README.md`](app/README.md); la del design system en
[`desig-system/readme.md`](desig-system/readme.md).
