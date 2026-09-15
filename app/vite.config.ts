import { defineConfig } from 'vite';
import type { Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

/**
 * Vite sube el <script> del entry al <head> al compilar.
 * Este plugin lo devuelve al final del <body>: el HTML se parsea antes
 * que el script, igual que en el index.html de desarrollo.
 */
function scriptAfterHtml(): Plugin {
  return {
    name: 'script-after-html',
    enforce: 'post',
    transformIndexHtml: {
      order: 'post',
      handler(html) {
        const entryScript = /\s*<script type="module"[^>]*><\/script>/;
        const match = html.match(entryScript);

        if (match === null) return html;

        return html.replace(entryScript, '').replace('</body>', `  ${match[0].trim()}\n  </body>`);
      },
    },
  };
}

export default defineConfig({
  plugins: [react(), scriptAfterHtml()],
  resolve: {
    // Alias de rutas: @/components/ui/Button, @/styles/theme.css, ...
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    watch: { usePolling: true },
  },
});
