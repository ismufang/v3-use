import { Ref } from 'vue'
import { useInterval, Actions as IntervalActions } from '../useInterval'
import { useState } from '../useState'

export interface Options {
  manual?: boolean
  immediate?: boolean
}

export type Polling = Ref<IntervalActions | null>

export function usePolling(): {
  polling: Polling
  initPolling: (fn: () => void, interval: number, options?: Options) => void
} {
  const [polling, setPolling] = useState<IntervalActions | null>(null)

  const initPolling = (
    fn: () => void,
    interval: number,
    options: Options = {}
  ) => {
    const { manual = false, immediate = false } = options
    if (interval <= 0) return
    setPolling(useInterval(fn, interval, { immediate: false }))
    !manual && polling.value?.run(immediate)
  }

  return {
    polling,
    initPolling
  }
}
