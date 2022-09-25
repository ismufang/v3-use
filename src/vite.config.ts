import { resolve } from 'path'
import { defineConfig } from 'vite'
import { markdownTransform } from './.vitepress/plugins/markdownTransform'

export default defineConfig(async () => {
  return {
    server: {
      hmr: {
        overlay: false
      },
      fs: {
        allow: [resolve(__dirname, '..')]
      }
    },
    plugins: [markdownTransform()],
    resolve: {
      alias: {
        'v3-use': resolve(__dirname, 'hooks/index.ts')
      },
      dedupe: ['vue']
    },
    optimizeDeps: {
      exclude: ['v3-use']
    },
    test: {
      globals: true,
      environment: 'jsdom',
      testTimeout: 30 * 1000,
      coverage: {
        reporter: ['text', 'json', 'html']
      }
    }
  }
})
