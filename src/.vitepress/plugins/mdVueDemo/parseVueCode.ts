import { Options } from '.'
import { getDemoTemplate } from './template'

/**
 * 自动解析 markdown 中`<vue-code src="./*.vue" />` 标签并自动转换为 Vue 文件
 * @param code
 * @param id
 * @param options Options
 */
export function parseVueCode(code: string, id: string, options: Options) {
  const reg = /\<vue-code src=("|')(.+\.vue)("|')\s?\/\>/g
  const matchList = code.match(reg) ?? []
  const srcList: { src: string; name: string }[] = []

  matchList.forEach((item, index) => {
    const startIndex = code.indexOf(item)
    const endIndex = startIndex + item.length
    const src = getSrcUrl(item)
    const name = `Demo${index + 1}${Date.now()}`
    code =
      code.slice(0, startIndex) +
      getDemoTemplate(id, options, src, {
        demoName: name,
        onlyInsertTemplate: true
      }) +
      code.slice(endIndex)

    srcList.push({
      src,
      name
    })
  })

  const getImports = () => {
    return srcList.reduce((t, c) => {
      return t + `import ${c.name} from '${c.src}'\n`
    }, '')
  }

  return insertScript(code, getImports())
}

function getSrcUrl(src: string) {
  const reg = /("|')(.+\.vue)("|')/
  const srcMatch = src.match(reg) as string[]
  return srcMatch[2]
}

function insertScript(code: string, imports: string) {
  if (!imports) return code

  const setupNode = '<script setup>'
  const startIndex = code.indexOf(setupNode)

  if (startIndex > -1) {
    const endIndex = startIndex + setupNode.length
    code = code.slice(0, endIndex) + `\n${imports}` + code.slice(endIndex)
  } else {
    code += `
  <script setup>
  ${imports}
  </script>
  `
  }

  return code
}
