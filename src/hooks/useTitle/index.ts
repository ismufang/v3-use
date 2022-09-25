import { Ref, watch, onBeforeUnmount } from 'vue'
import { useState } from '../useState'

export interface Options {
  restoreOnUnmount: boolean
}

export function useTitle(
  title?: string,
  options?: Options
): [Ref<string>, (value: string | ((c: string) => string)) => void]

export function useTitle(
  title?: string,
  options = {
    restoreOnUnmount: false
  }
) {
  const originTitle = document.title ?? ''
  const [state, setState] = useState(document ? document.title : '')

  title && setState(title)

  watch(state, newVal => {
    document.title = newVal
  })

  onBeforeUnmount(() => {
    if (options.restoreOnUnmount) {
      document.title = originTitle
    }
  })
  return [state, setState]
}
