import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '',
  build: {
    rollupOptions : {
      input: {
        main: resolve(__dirname, 'index.html'),
        regulations: resolve(__dirname, 'regulations/index.html'),
        error: resolve(__dirname, '404/index.html'),
      }
    }
  }
})