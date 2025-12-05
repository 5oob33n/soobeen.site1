import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/soobeen-woo-portfolio/',
  build: {
    outDir: 'docs'  // build output folder will be "docs"
  }
})
