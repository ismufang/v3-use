import { onMounted, Ref, watch } from 'vue'
import { useState } from '../useState'
import { isFunction } from '../utils'

export type Options<T> = {
  defaultTimeLeft?: number
  interval?: number
  step?: number
  format?: (left: number) => T
  onEnd?: () => void
}

export type Actions = {
  start: (t?: number) => void
  play: () => void
  pause: () => void
  stop: () => void
}

function calcLeft<T>(left: number, format?: (left: number) => T) {
  return isFunction(format) ? format(left) : left
}

export function useCountDown<T>(options?: Options<T>): [Ref<T>, Actions]

export function useCountDown<T>(options: Options<T> = {}) {
  const {
    defaultTimeLeft = 0,
    interval = 1000,
    step = 1,
    onEnd,
    format
  } = options
  const [count, setCount] = useState(0)
  const [timeLeft, setTimeLeft] = useState<number | T>(
    isFunction(format) ? format(defaultTimeLeft) : defaultTimeLeft
  )

  let timer: NodeJS.Timer | null = null

  const clearTimer = () => {
    if (timer) {
      clearInterval(timer)
      timer = null
    }
  }

  const isEnd = () => {
    return count.value === 0
  }

  onMounted(clearTimer)

  const pause = () => {
    clearTimer()
  }

  const stop = () => {
    clearTimer()
    setCount(0)
  }

  const start = (t?: number) => {
    clearTimer()
    setCount(t ? t : defaultTimeLeft)

    if (isEnd()) return

    timer = setInterval(() => {
      setCount(state => state - step)
    }, interval)
  }

  const play = () => {
    start(count.value)
  }

  watch(count, val => {
    if (count.value === 0) {
      clearTimer()
      onEnd?.()
    }
    setTimeLeft(calcLeft<T>(val, format))
  })

  return [timeLeft, { start, pause, play, stop }]
}
