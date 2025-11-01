// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vue from '@astrojs/vue';


export default defineConfig({
  // site: '',
  base: '/Web-page',
  integrations: [vue()],
  prefetch: {
    defaultStrategy: 'viewport'
  },
  vite: {
    plugins: [tailwindcss()]
  }
});