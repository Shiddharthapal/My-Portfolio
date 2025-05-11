import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import vercel from '@astrojs/vercel';

export default defineConfig({
  integrations: [
    mdx(),
    sitemap(),
    react(),
    tailwind(),
  ],

  site: 'http://localhost:3000',
  adapter: vercel(),
});