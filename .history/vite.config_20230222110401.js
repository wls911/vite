import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 引入 jsx 依赖
//  yarn add @vitejs/plugin-vue-jsx 安装插件
import vueJsx from '@vitejs/plugin-vue-jsx'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),// 使用 vue-jsx
  ],
  base:'/wls911/vite/',
})
