import { defineConfig } from 'vite'
/** @type {import('vite').UserConfig} */
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
