import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // 1. path 모듈 가져오기

// https://vite.dev/config/
export default defineConfig({
  //base: './src',
  plugins: [react()],
  resolve: {
    alias: {
      // 2. "@"를 입력하면 "src" 폴더를 가리키도록 설정
      //"@": path.resolve(__dirname, "./src"),
      "@": path.resolve("./src"),
    },
  },
  /*
  server: {
    port: 3000,    // Change from default 5173
    open: true     // Auto-open browser
  }
  */
 build: {
    // true: .map 파일 생성 (디버깅용)
    // false: 생성 안 함 (배포용, 보안 및 용량 최적화)
    // 'inline': CSS 파일 내부에 맵 정보를 포함 (파일 개수 줄임)
    sourcemap: false, 
  },
  css: {
    preprocessorOptions: {
      scss: {  //scss 파일 전역에서 @use사용
        additionalData: '@use "@/styles/variables" as v;@use "@/styles/mixins" as m;'
      },
    },
    devSourcemap: true, // 개발 모드 소스맵
  },

})
