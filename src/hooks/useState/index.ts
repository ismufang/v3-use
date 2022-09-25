import { Ref, ref, UnwrapRef } from 'vue'
import { isFunction } from '../utils'

export function useState<T>(
  initialValue: T | (() => T)
): [Ref<UnwrapRef<T>>, (value: T | ((c: UnwrapRef<T>) => T)) => void]

export function useState<T = any>(): [
  Ref<T>,
  (value: T | ((c: T) => T)) => void
]

export function useState(initialValue?: unknown) {
  const state = ref(isFunction(initialValue) ? initialValue() : initialValue)
  const setState = value => {
    state.value = isFunction(value) ? value(state.value) : value
  }
  return [state, setState]
}
