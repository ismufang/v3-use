import { resolve, join } from 'path'
import fs from 'fs-extra'
import fg from 'fast-glob'

export const DIR_VITEPRESS = resolve(__dirname, '../src/.vitepress')
export const DIR_HOOKS = resolve(__dirname, '../src/hooks')

export async function listFunctions(dir: string, ignore: string[] = []) {
  const files = await fg('*', {
    onlyDirectories: true,
    cwd: dir,
    ignore: ['dist', 'node_modules', ...ignore]
  })
  files.sort()
  return files
}

export async function run() {
  const files = await listFunctions(DIR_HOOKS, ['utils'])
  const metadata = files.map(fileName => {
    return {
      name: fileName,
      dir: `/hooks/${fileName}/`
    }
  })

  await fs.writeJSON(join(DIR_VITEPRESS, 'metadata/index.json'), metadata, {
    spaces: 2
  })
}

run()
