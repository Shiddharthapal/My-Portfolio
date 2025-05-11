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

  adapter: netlify(),
  output: 'server',
  experimental: {
    session: true
  },
  site: 'http://shiddharthapal_29.netlify.app',
});