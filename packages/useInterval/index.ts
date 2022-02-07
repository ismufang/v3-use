import { onBeforeUnmount } from 'vue'

function useInterval(
  fn: () => void,
  delay: number,
  options?: { immediate?: boolean }
): void

function useInterval(
  fn: () => void,
  delay: number,
  options?: { immediate?: boolean }
) {
  const immediate = options?.immediate
  if (typeof delay !== 'number' || delay <= 0) return
  immediate && fn()
  const timer = setInterval(() => {
    fn()
  }, delay)

  onBeforeUnmount(() => {
    clearInterval(timer)
  })
}

export default useInterval
