import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  // vite.config.js
  server: {
    proxy: {
      '/ga4gh': 'http://localhost:8645',
    },
  }
})
