// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vue from '@astrojs/vue';


// https://astro.build/config
export default defineConfig({
  // site: 'https://amejro.github.io',
  base: '/Web-page',
  integrations: [vue()],
  prefetch: {
    defaultStrategy: 'viewport'
  },
  vite: {
    plugins: [tailwindcss()]
  }
});