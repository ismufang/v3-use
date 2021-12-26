import { Ref, ref } from "vue";

function useState<T>(value?: T): [Ref<T>, (newState: T) => void];

/**
 * @name useState
 * @param {T} initialValue
 * @returns
 */
function useState<T>(initialValue?: T) {
  const state = ref(initialValue) as Ref<T>;
  const setState = (newState: T) => {
    state.value = newState;
  };
  return [state, setState];
}

export default useState;
