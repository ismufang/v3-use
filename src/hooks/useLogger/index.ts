import { onUpdated } from 'vue'
import { useEffectOnce } from '../useEffectOnce'

export function useLogger(componentName: string, ...rest): void {
  useEffectOnce(() => {
    console.log(`[${componentName} Mounted]`, ...rest)
    return () => console.log(`[${componentName} BeforeUnmount]`)
  })

  onUpdated(() => {
    console.log(`[${componentName} Updated]`, ...rest)
  })
}
