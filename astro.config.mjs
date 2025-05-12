import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';

export default defineConfig({
  integrations: [
    mdx(),
    sitemap(),
    react(),
    tailwind(),
  ],


  adapter: netlify(),
  experimental: {
    session: true,
  },
  site: 'http://shiddharthapal29.netlify.app',
});