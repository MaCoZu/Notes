import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://macozu.github.io',
  server: {
    host: 'localhost',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
