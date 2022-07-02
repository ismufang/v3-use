import { onMounted, watchEffect, watch, onBeforeUnmount, onUpdated } from 'vue'

declare const UNDEFINED_VOID_ONLY: unique symbol

// Destructors are only allowed to return void.
type Destructor = () => void | { [UNDEFINED_VOID_ONLY]: never }

// NOTE: callbacks are _only_ allowed to return either void, or a destructor.
type EffectCallback = () => void | Destructor

type DependencyList = ReadonlyArray<any>

function useEffect(effect: EffectCallback, deps?: DependencyList): void {
  let destructor: Destructor | null
  const hook = () => {
    destructor?.()
    const fn = effect()
    if (fn && typeof fn === 'function' && !destructor) {
      destructor = fn
    }
  }
  if (!deps) {
    // https://github.com/vuejs/core/issues/4686
    // beforeUpdate/updated not triggered on component when slot content in child component changes #4686
    onUpdated(effect)
  } else if (deps.length === 0) {
    onMounted(hook)
    onBeforeUnmount(() => {
      destructor?.()
    })
  } else {
    watch(deps, hook, {
      immediate: true,
    })
  }
}

export default useEffect
