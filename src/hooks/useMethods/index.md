# useMethods

一个 useReducer 简化版的 Hook

## Usage

```ts
import { useMethods } from 'v3-use'

type State = {
  count: number
}

const initialCount = {
  count: 0
}

const reducer = (state: State) => {
  return {
    increment () {
      return { count: state.count + 1 }
    },
    decrement () {
      return { count: state.count - 1 }
    },
    reset () {
      return { count: 0 }
    }
  }
}

const [state, dispatch] = useMethods(reducer, initialCount)
</script>
```

## Reference

```ts
const [state, dispatch] = useMethods<M, T> (
  createMethods: CreateMethods<M, T>,
  initialState: T
)
```

### Type Declarations

```ts
export declare type ReducerAction<T = string, P = any> = {
  type: T
  payload?: P
}
export declare type CreateMethods<M, T> = (state: T) => {
  [P in keyof M]: (payload?: any) => T
}
export declare type WrappedMethods<M> = {
  [P in keyof M]: (...payload: any) => void
}
export declare function useMethods<M, T>(
  createMethods: CreateMethods<M, T>,
  initialState: T
): [Ref<T>, WrappedMethods<M>]
```

### Params

- **`createMethods`**_`: CreateMethods`_ &mdash; 简化版 reducer 函数，返回包含方法的对象
- **`initialState`**_`: T`_ &mdash; 初始 state

### Result

- **`state`**_`: Ref<T>`_ &mdash; 状态值
- **`dispatch`**_`: WrappedMethods`_ &mdash; 调度函数集合，触发状态更新
