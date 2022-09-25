import { defineConfig } from 'vitepress'
import { metadata } from './metadata'

function getHooks() {
  return metadata.map(data => ({ text: data.name, link: data.dir }))
}

export default defineConfig({
  title: 'v3-use',
  description: 'High-quality and reliable Vue3 Hooks library.',
  lang: 'en-US',
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark'
    }
  },
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/ismufang/v3-use/tree/main/src/:path',
      text: 'Suggest changes to this page'
    },
    algolia: {
      appId: '',
      apiKey: '',
      indexName: 'v3-use'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ismufang/v3-use' }
    ],
    nav: [
      {
        text: 'Get Started',
        link: '/'
      }
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          {
            text: 'Get Started',
            link: '/'
          }
        ]
      },
      {
        text: 'Hooks',
        items: getHooks()
      }
    ]
  }
})
