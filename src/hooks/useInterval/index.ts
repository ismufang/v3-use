import { onBeforeUnmount } from 'vue'

export interface Actions {
  run: (immediate?: boolean) => void
  destroy: () => void
}

export function useInterval(
  fn: () => void,
  delay: number,
  options: { immediate?: boolean } = {}
): Actions {
  if (delay <= 0) {
    throw new Error('delay should be larger than zero')
  }

  let timer: NodeJS.Timer | null = null

  const run = (immediate?: boolean) => {
    if (timer) return
    immediate && fn()
    timer = setInterval(() => {
      fn()
    }, delay)
  }

  const destroy = () => {
    if (timer) {
      clearInterval(timer)
      timer = null
    }
  }

  onBeforeUnmount(destroy)

  options.immediate && run(true)

  return {
    run,
    destroy
  }
}
