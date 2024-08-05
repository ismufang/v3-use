import { marked } from 'marked'
import { highlight, languages } from 'prismjs'

const renderer = new marked.Renderer()

renderer.code = function (code: string, language: string = 'html') {
  // @ts-ignore
  if (this.options.highlight) {
    // @ts-ignore
    const out = this.options.highlight(code, language)
    if (out != null && out !== code) {
      code = out
    }
  }

  code = code.replace(/\r?\n/g, '<br/>')
  return (
    // @ts-ignore
    '<pre class="' +
    this.options.langPrefix +
    language +
    '">' +
    '<code>' +
    code +
    '</code></pre>\n'
  )
}

marked.setOptions({
  highlight: function (code, lang) {
    const language = languages[lang]
    return highlight(code, language, lang)
  },
  renderer: renderer
})

export default marked
