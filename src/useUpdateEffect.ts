import { useEffect, useFirstMountState } from '.'

const useUpdateEffect: typeof useEffect = (effect, deps) => {
  const isFirstMount = useFirstMountState()

  useEffect(() => {
    if (!isFirstMount.value) {
      return effect()
    }
  }, deps)
}

export default useUpdateEffect
