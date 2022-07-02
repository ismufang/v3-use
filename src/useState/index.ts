import { Ref, ref } from 'vue'

type ValueParam<T> = T | ((c: T) => T)

function useState<T>(
  value?: T | (() => T) | undefined
): [Ref<T>, (value: ValueParam<T>) => void]

function useState<T = any>(initialValue?: T | (() => T)) {
  const state = ref(
    initialValue instanceof Function ? initialValue() : initialValue
  ) as Ref<T>
  const setState = (value: ValueParam<T>) => {
    state.value = value instanceof Function ? value(state.value) : value
  }
  return [state, setState]
}

export default useState
