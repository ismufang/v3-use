import { defineComponent, h, onErrorCaptured, ref } from 'vue'

export default defineComponent({
  setup() {
    const error = ref<any>(null)

    onErrorCaptured(err => {
      error.value = `Error: ${err.message}`
    })

    return {
      error
    }
  },
  render() {
    return h('div', { class: 'demo' }, [
      this.$slots.default(),
      this.error ? h('div', { class: 'error' }, this.error) : ''
    ])
  }
})
