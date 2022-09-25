import { Ref, onUpdated } from 'vue'
import { useState } from '../useState'

export function useFirstMountState(): Ref<boolean> {
  const [isFirst, setState] = useState(true)

  onUpdated(() => {
    if (isFirst.value) {
      setState(false)
    }
  })

  return isFirst
}
