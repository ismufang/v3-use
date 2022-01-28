import { createApp } from 'vue'
import App from './App.vue'
import { HookLayout } from './layouts'
import router from './router'

const app = createApp(App)
app.component('hook-layout', HookLayout)
app.use(router).mount('#app')
