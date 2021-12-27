import { Ref } from 'vue'
import { useState } from '..'

export interface Actions<T> {
  setLeft: () => void
  setRight: () => void
  set: (value: T) => void
  toggle: () => void
}

function useToggle<T = boolean> (): [Ref<boolean>, Actions<T>]

function useToggle<T> (defaultValue: T): [Ref<T>, Actions<T>]

function useToggle<T, U> (
  defaultValue: T,
  reverseValue: U
): [Ref<T | U>, Actions<T | U>]

function useToggle<D, R> (
  defaultValue: D = (false as unknown) as D,
  reverseValue?: R
) {
  const [state, setState] = useState<D | R>(defaultValue)
  const reverseValueOrigin = (reverseValue === undefined
    ? !defaultValue
    : reverseValue) as D | R

  const toggle = () =>
    setState(s => (s === defaultValue ? reverseValueOrigin : defaultValue))
  const set = (value: D | R) => setState(value)
  const setLeft = () => setState(defaultValue)
  const setRight = () => setState(reverseValueOrigin)

  return [state, { toggle, set, setLeft, setRight }]
}

export default useToggle
