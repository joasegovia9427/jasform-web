
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // The base URL for your GitHub Pages site
  site: 'https://joasegovia9427.github.io',
  // The repository name path
  base: '/jasform-web',
  integrations: [react(), tailwind()],
});
