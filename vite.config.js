import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'url';
import { importFonts } from './src/utils/helpers/import';
import { ViteWebfontDownload } from 'vite-plugin-webfont-dl';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [vue(), ViteWebfontDownload(importFonts)],
  resolve: {
    extensions: ['.js', '.vue', '.json', '.css'],
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    open: true,
    port: 5000,
    https: mode === 'production',
    host: mode === 'development'
  }
}));
