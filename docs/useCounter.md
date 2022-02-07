# useCounter

管理计数器的 Hook。

## Usage

```vue
<template>
  <div>{{ state }}</div>
  <button @click="inc()">inc()</button>
  <button @click="dec()">dec()</button>
  <button @click="set(3)">set(3)</button>
  <button @click="reset()">reset()</button>
</template>

<script setup lang="ts">
import { useCounter } from 'v3-use'

const [state, { inc, dec, set, reset }] = useCounter(0)
</script>
```

## Reference

```typescript
function useCounter(
  initialValue?: number = 0,
  options?: Options
): [Ref<number>, Actions]

interface Options {
  min?: number
  max?: number
}

interface Actions {
  inc: (delta?: number) => void
  dec: (delta?: number) => void
  set: (value: number | ((c: number) => number)) => void
  reset: () => void
}
```
