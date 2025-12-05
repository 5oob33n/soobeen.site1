import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages에서 프로젝트가 올라가는 기본 경로
  // 주소: https://5oob33n.github.io/soobeen-woo-portfolio
  base: '/soobeen-woo-portfolio/',
  build: {
    // GitHub Pages용으로 main 브랜치의 docs 폴더에 빌드
    outDir: 'docs'
  }
})
