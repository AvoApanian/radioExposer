import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  // IMPORTANT : à garder si tu déploies sur GitHub Pages
  // https://username.github.io/radioExposer/
  base: '/radioExposer/',

  server: {
    port: 3000,
    open: true
  },

  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }
})
