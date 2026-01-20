
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Replace with your actual GitHub Pages URL
  // site: 'https://<your-username>.github.io',
  // base: '/<your-repo-name>',
  integrations: [react(), tailwind()],
});
