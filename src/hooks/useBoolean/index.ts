import { Ref } from 'vue'
import { useToggle } from '../useToggle'

export interface Actions {
  toggle: () => void
  setTrue: () => void
  setFalse: () => void
}

export function useBoolean(defaultValue?: boolean): [Ref<boolean>, Actions]

export function useBoolean(defaultValue: boolean = false) {
  const [state, { toggle, set }] = useToggle(defaultValue)

  const setTrue = () => set(true)
  const setFalse = () => set(false)

  return [state, { toggle, setFalse, setTrue }]
}
