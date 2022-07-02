import { onBeforeUnmount } from 'vue'

function useTimeout(fn: () => void, delay: number): void

function useTimeout(fn: () => void, delay: number) {
  if (typeof delay !== 'number' || delay <= 0) return
  const timer = setTimeout(() => {
    fn()
  }, delay)

  onBeforeUnmount(() => {
    clearTimeout(timer)
  })
}

export default useTimeout
