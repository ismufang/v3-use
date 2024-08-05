import type { Plugin } from 'vite'
import { parseAutoDemo } from './parseAutoDemo'
import { parseVueCode } from './parseVueCode'

export interface Options {
  /**
   * 容器组件名， 需要在 vitepress 中全局注册组件；
   * 如果没有提供容器组件，则只插入 demo，且没有任何样式，需要手动样式覆盖；
   *
   * 提供容器组件后，需要支持以下功能：
   *
   * - props: sourceUrl 用于链接远程资源， 需要提供项目仓库地址 Options.sourceUrl，
   * 编译时会自动拼接传入容器组件
   * - 需要提供默认插槽和具名插槽 `#sourceCode`，demo 源码将会插入具名插槽`#sourceCode`中
   *
   * Example: DemoContainer.vue
   *
   * ```html
   * <template>
   * <div class="demo">
   *   <div class="demo-actions">
   *     <div class="demo-action" @click="toggleExpand">&lt;/&gt;</div>
   *     <div class="demo-action"><a :href="sourceUrl">source</a></div>
   *   </div>
   *   <slot></slot>
   *
   *   <div v-show="expand">
   *     <slot name="sourceCode"></slot>
   *   </div>
   * </div>
   * </template>
   * ```
   */
  containerCompName?: string
  /**
   * Gitlab 资源仓库地址
   *
   * Example: https://github.com/ismufang/v3-use/blob/main/
   */
  sourceUrl?: string
  /** 指定 sourceUrl 需要传入根目录，用于匹配资源地址，默认 "src" */
  root?: string
  /**
   * 是否自动插入 Demo 组件
   *
   * demo 文件路径应为 `./demo/index.vue` 格式，与 index.md 同级
   */
  autoDemo?: boolean
  /** demo 标题 默认为 "## Demo" */
  autoDemoTitle?: string
}

const DEFAULT_OPTIONS = {
  containerCompName: '',
  sourceUrl: '',
  root: 'src',
  autoDemo: false,
  autoDemoTitle: '## Demo'
}

/**
 * Markdown 中自动解析 vue 组件; 自动插入 vue 文件到 markdown 中;
 *
 * Example markdown config:
 *
 * ```js
 * mdVueDemo({
 *   containerCompName: 'DemoContainer',
 *   autoDemo: true,
 *   sourceUrl: 'https://github.com/ismufang/v3-use/blob/main/',
 *   root: 'src'
 * })
 * ```
 *
 * 使用 `<vue-code src="./demo.vue" /> `标签自动转换为 Vue 组件并解析;
 *
 * 当 `autoDemo: true`，会把 index.md 同级 `./demo/index.vue` 文件自动插入到 markdown 中
 *
 * @param options Options
 */
export function mdVueDemo(options: Options): Plugin {
  options = { ...DEFAULT_OPTIONS, ...options }
  return {
    name: 'md-vue-demo-transform',
    enforce: 'pre',
    async transform(code: string, id: string) {
      if (!id.match(/\.md\b/)) return
      return parseMd(code, id, options)
    }
  }
}

function parseMd(code: string, id: string, options: Options) {
  if (options.autoDemo) {
    code = parseAutoDemo(code, id, options)
  }
  code = parseVueCode(code, id, options)
  return code
}
