import DefaultTheme from 'vitepress/theme'
import DemoContainer from './components/DemoContainer'
import Updating from './components/Updating'

import './styles/demo.scss'
import './styles/vars.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('DemoContainer', DemoContainer)
    app.component('Updating', Updating)
  }
}
