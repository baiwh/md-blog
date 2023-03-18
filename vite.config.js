import vue from '@vitejs/plugin-vue'
import ssr from 'vite-plugin-ssr/plugin'
import md from 'vite-plugin-md'

export default {
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    md(),
    ssr({ prerender: true })
  ],
  // We manually add a list of dependencies to be pre-bundled, in order to avoid a page reload at dev start which breaks vite-plugin-ssr's CI
  optimizeDeps: { include: ['cross-fetch'] }
}