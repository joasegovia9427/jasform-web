import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://joasegovia9427.github.io',
  base: '/jasform-web',
  integrations: [react(), tailwind()],
  build: {
    assets: 'assets',
    // Ensures that the generated HTML uses paths that work with the base config
    format: 'file'
  }
});