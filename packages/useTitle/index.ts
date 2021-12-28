import { Ref, watch } from 'vue'
import { useState } from '..'
import { isBrowser } from '../utils'

function useTitle (
  title?: string | undefined
): [Ref<string>, (value: string | ((c: string) => string)) => void]

function useTitle (title?: string) {
  const [state, setState] = useState<string>(isBrowser ? document.title : '')
  const setTitle = (value: string | ((c: string) => string)) => {
    setState(value instanceof Function ? value(state.value) : value)
  }
  title && setTitle(title)
  watch(state, newVal => {
    document.title = newVal
  })
  return [state, setTitle]
}

export default useTitle
