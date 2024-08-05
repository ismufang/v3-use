import { existsSync, readFileSync } from 'fs-extra'
import { join } from 'path'
import { Options as MdOptions } from '.'
import remark from 'remark'
import marked from './marked'

const _remark = remark()

interface Options {
  demoName?: string
  onlyInsertTemplate?: boolean
}

/**
 *
 * @param id
 * @param mdOptions MdOptions
 * @param src demo 文件相对路径 eg. "./demo/index.vue"
 * @param options Options
 */
export function getDemoTemplate(
  id: string,
  mdOptions: MdOptions,
  src: string,
  options: Options = { demoName: '', onlyInsertTemplate: false }
) {
  const sourceUrl = getDemoSourceUrl(id, src, mdOptions)

  if (!existsSync(sourceUrl.local)) return ''

  const wrapperName = mdOptions.containerCompName || ''
  const demoName = options.demoName || `Demo${Date.now()}`
  const { codeHtml } = getSourceCode(sourceUrl.local)
  const demoTemplate = getDemoSection(
    wrapperName,
    codeHtml,
    `<${demoName}/>`,
    sourceUrl.remote
  )

  if (options.onlyInsertTemplate) {
    return demoTemplate
  }

  const scriptSection = getScriptSection(demoName, src)
  const demoTitle = mdOptions.autoDemoTitle || '## Demo'

  return `
${scriptSection}
${demoTitle}
${demoTemplate}
`
}

function getDemoSection(
  wrapperName: string,
  sourceCode: string,
  demoSection: string,
  sourceUrl: string
) {
  if (!wrapperName) {
    return `
<div class="demo-container">
${demoSection}
</div>
`
  }

  return `
<${wrapperName} class="demo-container" sourceUrl="${sourceUrl}">
${demoSection}
<template #sourceCode><div v-pre>${sourceCode}</div></template>
</${wrapperName}>
`
}

function getScriptSection(DemoName: string, src: string) {
  return `
<script setup>
import ${DemoName} from '${src}'
</script>
`
}

function getDemoSourceUrl(
  mdPath: string,
  src: string,
  options: MdOptions = {}
) {
  let remote = ''
  let local = join(mdPath.split('/').slice(0, -1).join('/'), src)
  const { root, sourceUrl } = options

  if (root && sourceUrl) {
    const index = mdPath.indexOf(root)
    if (index > -1) {
      const filePath = local.slice(index)
      remote = (
        sourceUrl?.endsWith('/')
          ? sourceUrl + filePath
          : `${sourceUrl}/${filePath}`
      ).replace(/\\/g, '/')
    }
  }

  return {
    local,
    remote
  }
}

function getSourceCode(demoLocalSourceURL: string) {
  let code = ''
  let codeMk = ''
  let codeHtml = ''

  if (existsSync(demoLocalSourceURL)) {
    code = readFileSync(demoLocalSourceURL, 'utf-8')
    // @ts-ignore
    codeMk = _remark.stringify({ type: 'code', lang: 'html', value: code })
    // markdown 转为 html 后需要手动引入 highlight.css 样式
    codeHtml = marked.parse(codeMk)
  }

  return {
    code,
    codeMk,
    codeHtml
  }
}
