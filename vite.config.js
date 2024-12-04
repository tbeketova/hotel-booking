import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  // Замените на название своего репозитория
  base: '/hotel-booking/',
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        catalog: path.resolve(__dirname, 'src/pages/catalog.html'),
      }
    }
  }
});
