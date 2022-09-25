import { h, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return () => h('h1', null, 'Updating...')
  }
})
