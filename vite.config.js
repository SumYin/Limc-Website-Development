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
        contact: resolve(__dirname, 'contact/index.html'),
        about: resolve(__dirname, 'about/index.html'),
        error: resolve(__dirname, '404.html'),
      }
    }
  }
})