import { Options } from '.'
import { getDemoTemplate } from './template'

const DEFAULT_DEMO_URL = './demo/index.vue'

/**
 * 自动插入 Demo 组件，demo 文件在 index.md 同级，`./demo/index.vue`
 * @param code
 * @param id
 * @param options Options
 */
export function parseAutoDemo(code: string, id: string, options: Options) {
  if (code.search(new RegExp('\n' + options.autoDemoTitle + '\n')) > -1)
    return code

  const demoTemplate = getDemoTemplate(id, options, DEFAULT_DEMO_URL)

  if (demoTemplate) {
    const sliceIndex = getSliceIndex(code)
    code = code.slice(0, sliceIndex) + demoTemplate + code.slice(sliceIndex)
  }

  return code
}

function getSliceIndex(code: string) {
  const frontmatterEnds = code.search(/.?\n---\n/)
  const firstHeader = code.search(/# .+\n/)
  const firstSubheader = code.search(/\n## .+/)

  return firstSubheader < 0
    ? firstHeader < 0
      ? frontmatterEnds < 0
        ? code.length
        : frontmatterEnds + 5
      : code.length
    : firstSubheader
}
