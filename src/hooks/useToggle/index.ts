import { Ref } from 'vue'
import { useState } from '../useState'

export interface Actions<T> {
  setLeft: () => void
  setRight: () => void
  set: (value: T) => void
  toggle: () => void
}

export function useToggle<T = boolean>(): [Ref<boolean>, Actions<T>]

export function useToggle<T>(defaultValue: T): [Ref<T>, Actions<T>]

export function useToggle<T, R>(
  defaultValue: T,
  reverseValue: R
): [Ref<T | R>, Actions<T | R>]

export function useToggle<T, R>(
  defaultValue: T = false as unknown as T,
  reverseValue?: R
) {
  const [state, setState] = useState<T | R>(defaultValue)
  const reverseValueOrigin = (
    reverseValue === undefined ? !defaultValue : reverseValue
  ) as T | R

  const toggle = () =>
    setState(s => (s === defaultValue ? reverseValueOrigin : defaultValue))
  const set = (value: T | R) => {
    if (![defaultValue, reverseValueOrigin].includes(value)) {
      throw new Error(
        `value should be between ${defaultValue} and ${reverseValueOrigin}`
      )
    }
    setState(value)
  }
  const setLeft = () => setState(defaultValue)
  const setRight = () => setState(reverseValueOrigin)

  return [state, { toggle, set, setLeft, setRight }]
}
