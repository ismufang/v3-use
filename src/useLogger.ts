import { useEffectOnce, useUpdateEffect } from '.'

function useLogger(componentName: string, ...rest: any[]): void {
  useEffectOnce(() => {
    console.log(`${componentName} mounted`, ...rest)
    return () => console.log(`${componentName} unmounted`)
  })

  useUpdateEffect(() => {
    console.log(`${componentName} updated`, ...rest)
  })
}

export default useLogger
