import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://macozu.github.io/Notes',
  server: {
    host: 'localhost',
  },
  vite: {
    plugins: [tailwindcss()],
  },
  base: '/Notes',
});
