import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 진입점 명시적 지정
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
})
