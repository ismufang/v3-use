import { Ref, ref } from "vue";

interface Actions {
  toggle: () => void;
  setTrue: () => void;
  setFalse: () => void;
}

function useBoolean(value?: boolean): [Ref<boolean>, Actions];

/**
 * @name useBoolean
 * @param {boolean} defaultValue
 * @returns
 */
function useBoolean(value: boolean = false) {
  const state = ref(value);
  function toggle() {
    state.value = !state.value;
  }

  function setFalse() {
    state.value = false;
  }

  function setTrue() {
    state.value = true;
  }

  return [state, { toggle, setFalse, setTrue }];
}

export default useBoolean;
