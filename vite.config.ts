import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // build 된 index.html이 있는 위치(= /soobeen-woo-portfolio/)를 기준으로
  // 상대 경로로 assets를 찾게 하기 위해 './' 로 설정
  base: './',
  build: {
    outDir: 'docs' // GitHub Pages에서 사용할 폴더
  }
})
