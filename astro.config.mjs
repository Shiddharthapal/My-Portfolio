import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

export default defineConfig({
  integrations: [
    mdx(),
    sitemap(),
    react(),
    tailwind(),
  ],

  site: 'http://localhost:4321',
  adapter: netlify(),
  output: 'server',
  experimental: {
    session: true,
  }
});