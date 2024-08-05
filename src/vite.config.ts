import { resolve } from 'path'
import { defineConfig } from 'vite'
import { mdVueDemo } from './.vitepress/plugins/mdVueDemo'
import Components from 'unplugin-vue-components/vite'

export default defineConfig(() => {
  return {
    server: {
      hmr: {
        overlay: false
      },
      fs: {
        allow: [resolve(__dirname, '..')]
      }
    },
    plugins: [
      mdVueDemo({
        containerCompName: 'DemoContainer',
        autoDemo: true,
        sourceUrl: 'https://github.com/ismufang/v3-use/blob/main/',
        root: 'src'
      }),
      Components({
        dirs: resolve(__dirname, './.vitepress/theme/components'),
        include: [/\.vue$/, /\.md$/],
        dts: resolve(__dirname, './.vitepress/components.d.ts')
      })
    ],
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
