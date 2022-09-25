import { defineComponent, onMounted } from 'vue'
import { mount } from '@vue/test-utils'
import { delay } from '../../utils/testingHelpers'
import { useTitle } from '../index'

describe('useTitle', () => {
  it('should update document title', async () => {
    document.title = 'page'
    const [title, setTitle] = useTitle()
    expect(title.value).toBe('page')

    await setTitle('page1')
    expect(document.title).toBe('page1')
  })

  it('should restore document title on unmount', async () => {
    const wrapper = mount(
      defineComponent({
        setup() {
          document.title = 'page'
          const [title, setTitle] = useTitle(document.title, {
            restoreOnUnmount: true
          })
          onMounted(() => {
            setTitle('page1')
          })
          return {
            title
          }
        }
      })
    )
    await delay(1000)
    expect(document.title).toBe('page1')
    await wrapper.unmount()
    expect(document.title).toBe('page')
  })
})
