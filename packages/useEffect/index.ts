import { onMounted, watchEffect } from "vue";

declare const UNDEFINED_VOID_ONLY: unique symbol;

// Destructors are only allowed to return void.
type Destructor = () => void | { [UNDEFINED_VOID_ONLY]: never };

// NOTE: callbacks are _only_ allowed to return either void, or a destructor.
type EffectCallback = () => (void | Destructor);

type DependencyList = ReadonlyArray<any>;

function useEffect (effect: EffectCallback, deps?: DependencyList): void

function useEffect (effect: EffectCallback, deps?: DependencyList): void {
    if (!deps) {
        watchEffect(effect)
    } else if (deps.length === 0) {
        onMounted(() => {
            effect()
        })
    } else {
        
    }
}