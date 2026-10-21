import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://919app.net',
  // "assets" instead of the default "_astro": artifact hosting reserves leading underscores.
  build: { inlineStylesheets: 'auto', assets: 'assets' },
});
