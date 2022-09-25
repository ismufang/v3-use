# useReducer

适用于复杂状态管理的 Hook。

在某些场景下，useReducer 会比 useState 更适用，例如 state 逻辑较复杂且包含多个子值，或者下一个 state 依赖于之前的 state 等。并且，使用 useReducer 还能给那些会触发深更新的组件做性能优化，因为你可以向子组件传递 dispatch 而不是回调函数 。

## Usage

```ts
import { useReducer } from 'v3-use'

type State = {
  count: number
}

type Action = {
  type: string
  payload?: any
}

const initialCount = {
  count: 0
}

function init(state: State) {
  return { count: state.count }
}

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    case 'reset':
      return init(action.payload)
    default:
      throw new Error()
  }
}

const [state, dispatch] = useReducer(reducer, initialCount, init)
```

## Reference

```ts
const [state, dispatch] = useReducer<R extends Reducer<any, any>, I>(reducer: R,
  initializerArg: I,
  initializer?: (arg: I) => ReducerState<R>)
```

```ts
export declare type Reducer<S, A> = (prevState: S, action: A) => S
export declare type ReducerState<R extends Reducer<any, any>> =
  R extends Reducer<infer S, any> ? S : never
export declare type ReducerAction<R extends Reducer<any, any>> =
  R extends Reducer<any, infer A> ? A : never
export declare type Dispatch<A> = (value: A) => void
export declare function useReducer<R extends Reducer<any, any>, I>(
  reducer: R,
  initializerArg: I,
  initializer?: (arg: I) => ReducerState<R>
): [Ref<ReducerState<R>>, Dispatch<ReducerAction<R>>]
```

### Params

- **`reducer`**_`: R extends Reducer<any, any>`_ &mdash; reducer 纯函数，返回最新状态
- **`initializerArg`**_`: I`_ &mdash;初始 state
- **`initializer`**_`: (arg: I) => ReducerState<R>`_ &mdash; 惰性地创建初始 state。为此，需要将 init 函数作为 useReducer 的第三个参数传入，这样初始 state 将被设置为 `init(initialArg)`

### Result

- **`state`**_`: Ref<ReducerState<R>>`_ &mdash; 状态值
- **`dispatch`**_`: Dispatch<ReducerAction<R>>`_ &mdash; 调度函数集合，触发状态更新
