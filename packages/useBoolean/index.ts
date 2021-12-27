import { Ref, ref } from "vue";
import { useToggle } from "..";

interface Actions {
  toggle: () => void;
  setTrue: () => void;
  setFalse: () => void;
}

function useBoolean(defaultValue?: boolean): [Ref<boolean>, Actions];

function useBoolean(defaultValue: boolean = false) {
  const [state, { toggle, set }] = useToggle(defaultValue);

  const setTrue = () => set(true);
  const setFalse = () => set(false);

  return [state, { toggle, setFalse, setTrue }];
}

export default useBoolean;
