import { onMounted, Ref, watch } from 'vue'
import { useState } from '..'

export type Unit = 's' | 'ms'

export type Options = {
  defaultValue?: number
  interval?: number
  step?: number
  format?: (left: number) => number
  onEnd?: () => void
}

export type Actions = {
  start: (t?: number) => void
  play: () => void
  pause: () => void
  stop: () => void
}

function calcLeft (left: number, format?: (left: number) => number) {
  return format && typeof format === 'function' ? format(left) : left
}

function useCountDown (options?: Options): [Ref<number>, Actions]

function useCountDown (options?: Options) {
  const { defaultValue = 0, interval = 1000, step = 1000, onEnd, format } =
    options ?? {}
  const [count, setCount] = useState(0)
  const [timeLeft, setTimeLeft] = useState(defaultValue)

  let timer: NodeJS.Timer | null = null

  const _clearTimer = () => {
    timer && clearInterval(timer) && (timer = null)
  }

  const pause = () => {
    _clearTimer()
  }

  const stop = () => {
    _clearTimer()
    setCount(0)
  }

  const isEnd = () => {
    if (count.value === 0) {
      _clearTimer()
      onEnd?.()
      return true
    }
    return false
  }

  const start = (t?: number) => {
    _clearTimer()
    setCount(t ? t : defaultValue ?? 0)
    if (isEnd()) return
    timer = setInterval(() => {
      setCount(state => state - step)
      isEnd()
    }, interval)
  }

  const play = () => {
    start(count.value)
  }

  watch(count, val => {
    setTimeLeft(calcLeft(val, format))
  })

  onMounted(() => {
    _clearTimer()
  })

  return [timeLeft, { start, pause, play, stop }]
}

export default useCountDown
