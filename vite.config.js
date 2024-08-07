import { defineConfig } from 'vite'
import { resolve } from 'path'

let BASE_URL = './';
if (process.env.GH) {
  BASE_URL = '/Limc-Website-Development/';
}

export default defineConfig({
  base: BASE_URL,
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        details: resolve(__dirname, 'details/index.html'),
        about: resolve(__dirname, 'about/index.html'),
        error: resolve(__dirname, '404.html'),
        past: resolve(__dirname, 'past/index.html'),
        details24: resolve(__dirname, 'details24/index.html'),
      }
    }
  }
})