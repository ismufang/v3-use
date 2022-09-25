import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'
import { useLogger } from '../index'

const logSpy = vi.spyOn(global.console, 'log').mockImplementation(() => {})

const App = defineComponent({
  props: {
    name: {
      type: String,
      default: 'test'
    }
  },
  setup(props) {
    useLogger('Demo', props)
  }
})

describe('useLogger', () => {
  const wrapper = mount(App, {
    name: 'test'
  })

  it('should be defined', () => {
    expect(useLogger).toBeDefined()
  })

  it('should log the provided props on mount', () => {
    expect(logSpy).toBeCalledTimes(1)
    expect(logSpy).toHaveBeenLastCalledWith('[Demo Mounted]', { name: 'test' })
  })

  it('should log updates as props change', async () => {
    const newProps = { name: 'test2' }
    await wrapper.setProps(newProps)
    expect(logSpy).toHaveBeenLastCalledWith('[Demo Updated]', newProps)
  })

  it('should log when the component has unmounted', () => {
    wrapper.unmount()
    expect(logSpy).toHaveBeenLastCalledWith('[Demo BeforeUnmount]')
  })
})
