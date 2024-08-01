import { Ref, UnwrapRef } from 'vue'
import { useState } from '../useState'

export function useDefault<T = any>(
  defaultValue: T,
  initialValue: T
): [Ref<UnwrapRef<T>>, (val: T | ((c: UnwrapRef<T>) => T)) => void] {
  const [value, _setValue] = useState(initialValue)

  const setValue = (val: T | ((c: UnwrapRef<T>) => T)) => {
    if (val === undefined || val === null) {
      _setValue(defaultValue)
      return
    }
    _setValue(val)
  }

  return [value, setValue]
}
