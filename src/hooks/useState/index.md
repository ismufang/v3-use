# useState

管理 state 的 Hook

## Usage

```ts
import { useState } from 'v3-use'
const [state, setState] = useState(1)
```

## Reference

```ts
const [state, setState] = useState<T>(initialValue?: T | (() => T))
```

### Type Declarations

```ts
export declare function useState<T>(
  initialValue: T | (() => T)
): [Ref<UnwrapRef<T>>, (value: T | ((c: UnwrapRef<T>) => T)) => void]
export declare function useState<T = any>(): [
  Ref<T>,
  (value: T | ((c: T) => T)) => void
]
```
