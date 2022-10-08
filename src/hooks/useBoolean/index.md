# useBoolean

管理 boolean 状态的 Hook。

## Usage

```ts
import { useBoolean } from 'v3-use'
const [state, { toggle, setFalse, setTrue }] = useBoolean()
```

## Reference

```ts
const [state, actions] = useBoolean(defaultValue?: boolean)
```

### Type Declarations

```ts
export interface Actions {
  toggle: () => void
  setTrue: () => void
  setFalse: () => void
}
export declare function useBoolean(
  defaultValue?: boolean
): [Ref<boolean>, Actions]
```
