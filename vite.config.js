import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import prerender from 'vite-plugin-prerender';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    prerender({
      staticDir: path.join(__dirname, 'dist'),
      routes: [
        '/',
        '/tr', '/en', '/de', '/cs', '/pl',
        '/tr/privacy', '/en/privacy', '/de/privacy', '/cs/privacy', '/pl/privacy',
        '/tr/terms', '/en/terms', '/de/terms', '/cs/terms', '/pl/terms',
        '/tr/cookies', '/en/cookies', '/de/cookies', '/cs/cookies', '/pl/cookies',
      ],
      postProcess(renderedRoute) {
        renderedRoute.html = renderedRoute.html
          .replace(/http:/g, 'https:')
          .replace('id="root"', 'id="root" data-server-rendered="true"');
        return renderedRoute;
      },
      renderer: '@prerenderer/renderer-puppeteer',
      rendererOptions: {
        renderAfterDocumentEvent: 'render-event',
        maxConcurrentRoutes: 4,
        headless: 'new',
      },
    }),
  ],
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'i18n-vendor': ['react-i18next', 'i18next', 'i18next-browser-languagedetector'],
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});