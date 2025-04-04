// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/M3-Pr-ctica-Frontend/', // ¡Este nombre debe coincidir con el repo!
  plugins: [react()],
})
