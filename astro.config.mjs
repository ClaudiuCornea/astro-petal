// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import alpinejs from '@astrojs/alpinejs';

import sanity from '@sanity/astro';

import react from '@astrojs/react';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [alpinejs(), sanity({
    projectId: 'wpicjtcm',
    dataset: 'production',
    // Set useCdn to false if you're building statically.
    useCdn: false,
    // Access the Studio on your.url/admin
      studioBasePath: '/admin',
  }), react()],

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: netlify()
});