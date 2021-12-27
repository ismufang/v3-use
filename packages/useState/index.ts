import { Ref, ref } from "vue";

type ActionParam<T> = T | ((value: T) => T)

function useState<T>(value?: T): [Ref<T>, (value: ActionParam<T>) => void];

/**
 * @name useState
 * @param {T} initialValue
 * @returns
 */
function useState<T>(initialValue?: T) {
  const state = ref(initialValue) as Ref<T>;
  const setState = (newVal: ActionParam<T>) => {
    if (typeof newVal === 'function') {
      state.value = (newVal as ((value: T) => T))(state.value)
    } else {
      state.value = newVal;
    } 
  };
  return [state, setState];
}

export default useState;
