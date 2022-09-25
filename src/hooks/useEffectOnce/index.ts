import { EffectCallback, useEffect } from '../useEffect'

export function useEffectOnce(effect: EffectCallback) {
  useEffect(effect, [])
}
