import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'v3-use',
  description: 'v3-use，是一个高质量可靠的 Vue3 Hooks 库。',
  outDir: 'dist',
  themeConfig: {
    lastUpdated: true,
    nav: [
      {
        text: 'Guide',
        link: '/',
      },
      {
        text: 'GitHub',
        link: 'https://github.com/ismufang/v3-use',
        target: '_blank',
      },
    ],
    sidebar: [
      {
        text: 'Guide',
        link: '/',
      },
      {
        text: 'State',
        children: [
          {
            text: 'useState',
            link: '/useState',
          },
          {
            text: 'useReducer',
            link: '/useReducer',
          },
          {
            text: 'useToggle',
            link: '/useToggle',
          },
          {
            text: 'useBoolean',
            link: '/useBoolean',
          },
        ],
      },
      {
        text: 'Scene',
        children: [
          {
            text: 'useCounter',
            link: '/useCounter',
          },
          {
            text: 'useMethods',
            link: '/useMethods',
          },
          {
            text: 'useCountDown',
            link: '/useCountDown',
          },
        ],
      },
      {
        text: 'Dom',
        children: [
          {
            text: 'useTitle',
            link: '/useTitle',
          },
        ],
      },
      {
        text: 'Effect',
        children: [
          {
            text: 'useTimeout',
            link: '/useTimeout',
          },
          {
            text: 'useInterval',
            link: '/useInterval',
          },
          {
            text: 'useEffect',
            link: '/useEffect',
          },
        ],
      },
    ],
  },
})
