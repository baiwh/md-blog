import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dns from 'dns'
import { BASE_URL_ENUM } from './public/envConfig'

// 禁用下版本中默认会对 DNS 解析地址的结果进行重新排序
dns.setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/api': {
        target: BASE_URL_ENUM[process.env.NODE_ENV],
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        },
        // rewrite: (path) => path.replace(/\S*\/api/, ''),
      },
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },
})
