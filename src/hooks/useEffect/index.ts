import { onMounted, watch, onUpdated, onBeforeUnmount } from 'vue'
import { isFunction } from '../utils'

declare const UNDEFINED_VOID_ONLY: unique symbol

// Destructors are only allowed to return void.
export type Destructor = () => void | { [UNDEFINED_VOID_ONLY]: never }

// NOTE: callbacks are _only_ allowed to return either void, or a destructor.
export type EffectCallback = () => void | Destructor

export type DependencyList = ReadonlyArray<any>

export function useEffect(effect: EffectCallback, deps?: DependencyList) {
  let destructor: Destructor | null
  const hook = () => {
    destructor?.()
    const fn = effect()
    if (isFunction(fn) && !destructor) {
      destructor = fn
    }
  }
  if (!deps) {
    // https://github.com/vuejs/core/issues/4686
    // beforeUpdate/updated not triggered on component when slot content in child component changes #4686
    onMounted(hook)
    onUpdated(hook)
  } else if (deps.length === 0) {
    onMounted(hook)
    onBeforeUnmount(() => {
      destructor?.()
    })
  } else {
    watch(deps, hook, {
      immediate: true
    })
  }
}
