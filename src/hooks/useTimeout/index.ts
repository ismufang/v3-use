import { onBeforeUnmount } from 'vue'

export interface Actions {
  run: () => void
  destroy: () => void
}

export function useTimeout(fn: () => void, delay: number): Actions {
  if (delay <= 0) {
    throw new Error('delay should be larger than zero')
  }

  let timer: NodeJS.Timer | null = null

  const destroy = () => {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
  }

  const run = () => {
    if (timer) {
      destroy()
    }

    timer = setTimeout(() => {
      fn()
    }, delay)
  }

  onBeforeUnmount(destroy)

  return {
    run,
    destroy
  }
}
