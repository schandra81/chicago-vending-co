import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://chicagovendingco.com',
  compressHTML: true,
  build: {
    assets: '_astro',
  },
  vite: {
    build: { cssMinify: true },
  },
});
