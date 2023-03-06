import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [vue()],
  server: {
    open: true,
    port: 5000,
    https: mode === 'production',
    host: mode === 'development'
  }
}));
