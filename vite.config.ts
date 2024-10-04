import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: "src",
  publicDir: "../public",
  build: {
    outDir: "../dist",
    emptyOutDir: true,    
  },
  server: {
    port: 9876,
    https: false,
  }
});

