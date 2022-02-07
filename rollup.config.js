import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import dts from 'rollup-plugin-dts'
import { terser } from 'rollup-plugin-terser'

const isProd = process.env.NODE_ENV
const input = 'packages/index.ts'
const outputDir = isProd ? 'dist/' : 'example/dist/'
const outputFileName = 'index'

const basePlugins = [
  resolve(),
  commonjs(),
  typescript({
    tsconfigOverride: {
      compilerOptions: {
        declaration: false,
      },
    },
  }),
]

const devPlugins = []
const prodPlugins = [terser()]

const plugins = [...basePlugins].concat(isProd ? prodPlugins : devPlugins)

const configs = [
  {
    input,
    output: {
      file: `${outputDir}${outputFileName}.js`,
      format: 'esm',
      globals: {
        vue: 'Vue',
      },
    },
    plugins: plugins,
    external: ['vue', 'vue-router'],
  },
  {
    input,
    output: {
      file: `${outputDir}${outputFileName}.d.ts`,
      format: 'esm',
    },
    plugins: [dts()],
    external: ['vue'],
  },
]

export default configs
