import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

//module.exports = {
//  // ... suas outras configurações
//  css: {
//    loaderOptions: {
//      sass: {
//        additionalData: `@import "` // Substitua pelo caminho correto do seu arquivo de variáveis
//      }
//    }
//  }
//}


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
})
