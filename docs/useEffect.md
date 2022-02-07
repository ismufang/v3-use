# useEffect

像 React 一样使用 useEffect 的 Hook

## Usage

```vue
<template>
  <div>{{ count }} - {{ state }}</div>
  <button @click="inc()">inc()</button>
  <button @click="dec()">dec()</button>
  <button @click="incState()">incState()</button>
</template>

<script setup lang="ts">
import { useCounter, useEffect } from 'v3-use'
import { ref } from 'vue'
const [count, { dec, inc }] = useCounter(0)
const state = ref(0)

const incState = () => {
  state.value = state.value + 1
}

useEffect(() => {
  console.log('watch state', state.value)
  return () => {
    console.log('执行销毁函数')
  }
}, [state])

useEffect(() => {
  console.log('watch count', state.value)
}, [count])
</script>
```

## Reference

```typescript
function useEffect(effect: EffectCallback, deps?: DependencyList): void

declare const UNDEFINED_VOID_ONLY: unique symbol

// Destructors are only allowed to return void.
type Destructor = () => void | { [UNDEFINED_VOID_ONLY]: never }

// NOTE: callbacks are _only_ allowed to return either void, or a destructor.
type EffectCallback = () => void | Destructor

type DependencyList = ReadonlyArray<any>
```
