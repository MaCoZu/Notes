import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://mznotes.example.com',
  server: {
    host: 'localhost',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
