// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://Technova24x7.github.io/com.technova24/',
  base: '/com.technova24/',
  outDir:'./docs',
});