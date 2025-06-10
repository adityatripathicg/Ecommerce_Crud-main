import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/auth': 'http://localhost:5000',
      '/product': 'http://localhost:5000',
    }
  }, // <-- This comma was missing
  build: {
    outDir: '../backend/public',
    emptyOutDir: true
  }
})