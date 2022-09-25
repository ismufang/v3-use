import { Ref } from 'vue'
import { useState } from '../useState'
import { isFunction } from '../utils'

export interface Options {
  min?: number
  max?: number
}

export type ValueParam = number | ((c: number) => number)

export interface Actions {
  inc: (delta?: number) => void
  dec: (delta?: number) => void
  set: (value: ValueParam) => void
  reset: () => void
}

function getTargetValue(val: number, options: Options = {}) {
  const { min, max } = options
  let target = val
  if (typeof max === 'number') {
    target = Math.min(max, target)
  }
  if (typeof min === 'number') {
    target = Math.max(min, target)
  }
  return target
}

export function useCounter(
  initialValue?: number,
  options?: Options
): [Ref<number>, Actions]

export function useCounter(initialValue: number = 0, options: Options = {}) {
  const { min, max } = options
  const [current, setCurrent] = useState<number>(() => {
    return getTargetValue(initialValue, {
      min,
      max
    })
  })

  const setValue = (value: ValueParam) => {
    setCurrent(c => {
      const target = isFunction(value) ? value(c) : value
      return getTargetValue(target, {
        max,
        min
      })
    })
  }

  const inc = (delta = 1) => {
    setValue(c => c + delta)
  }

  const dec = (delta = 1) => {
    setValue(c => c - delta)
  }

  const set = (value: ValueParam) => {
    setValue(value)
  }

  const reset = () => {
    setValue(initialValue)
  }

  return [current, { inc, dec, set, reset }]
}
