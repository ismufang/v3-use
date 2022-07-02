import { useEffect } from '.'

type EffectCallback = () => void | (() => void | undefined)

const useEffectOnce = (effect: EffectCallback) => {
  useEffect(effect, [])
}

export default useEffectOnce
