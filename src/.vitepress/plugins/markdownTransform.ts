import { join, resolve } from 'path'
import type { Plugin } from 'vite'
import fs from 'fs-extra'
import { hookNames } from '../metadata'

export function markdownTransform(): Plugin {
  return {
    name: 'vueuse-md-transform',
    enforce: 'pre',
    async transform(code, id) {
      if (!id.match(/\.md\b/)) return

      const [pkg, hookname, i] = id.split('/').slice(-3)

      if (hookNames.includes(hookname) && i === 'index.md') {
        const hasDemoNode = code.search(/\n## Demo\b/) > -1
        const demoSection = getDemoSetion(pkg, hookname)

        if (!hasDemoNode && demoSection) {
          const frontmatterEnds = code.indexOf('---\n\n') + 4
          const firstSubheader = code.search(/\n## \w+/)
          const sliceIndex =
            firstSubheader < 0 ? frontmatterEnds : firstSubheader
          code = code =
            code.slice(0, sliceIndex) + demoSection + code.slice(sliceIndex)
        }
      }

      return code
    }
  }
}

function getDemoSetion(pkg: string, hookname: string) {
  const DIR_SRC = resolve(__dirname, '../..')
  const GITHUB_BLOB_URL = 'https://github.com/ismufang/v3-use/blob/main/src'
  const URL = `${GITHUB_BLOB_URL}/${pkg}/${hookname}`
  const hasDemoComp = fs.existsSync(
    join(DIR_SRC, pkg, hookname, 'demo/index.vue')
  )

  return hasDemoComp
    ? `
<script setup>
import Demo from \'./demo/index.vue\'
</script>
        
## Demo
        
<DemoContainer>
<p class="demo-source-link"><a href="${URL}/demo/index.vue" target="_blank">source</a></p>
<Demo/>
</DemoContainer>
`
    : ''
}
