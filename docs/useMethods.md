# useMethods

一个 useReducer 简化版的 Hook

## Usage

```vue
<template>
  <div>{{ state.count }}</div>
  <button @click="dispatch.increment()">inc()</button>
  <button @click="dispatch.decrement()">dec()</button>
  <button @click="dispatch.reset()">reset()</button>
</template>

<script setup lang="ts">
import { useMethods } from 'v3-use'

type State = {
  count: number
}

const initialCount = {
  count: 0,
}

function reducer(state: State) {
  return {
    increment() {
      return { count: state.count + 1 }
    },
    decrement() {
      return { count: state.count - 1 }
    },
    reset() {
      return { count: 0 }
    },
  }
}

const [state, dispatch] = useMethods(reducer, initialCount)
</script>
```

## Reference

```ts
function useMethods<M, T>(
  createMethods: CreateMethods<M, T>,
  initialState: T
): [Ref<T>, WrappedMethods<M>]

type Action<T = string, P = any> = {
  type: T
  payload?: P
}

type CreateMethods<M, T> = (state: T) => {
  [P in keyof M]: (payload?: any) => T
}

type WrappedMethods<M> = {
  [P in keyof M]: (...payload: any) => void
}
```

### Params

- **`createMethods`**_`: CreateMethods`_ &mdash; 简化版 reducer 函数，返回包含方法的对象
- **`initialState`**_`: I`_ &mdash; 初始 state

### Result

- **`state`**_`: Ref<number>`_ &mdash; 状态值
- **`dispatch`**_`: WrappedMethods`_ &mdash; 调度函数，触发状态更新
