import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    host: '0.0.0.0',
    port: 5174,
    strictPort: false,
    allowedHosts: ['demolaravel.lv.pwtech.pw'], 
    cors: true,
    hmr: true,
  },
});