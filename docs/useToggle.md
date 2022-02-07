# useToogle

用于在两个状态值间切换的 Hook

## Usage

```vue
<template>
  <div>{{ state }}</div>
  <button @click="toggle()">toggle()</button>
  <button @click="set('Left')">set('Left')</button>
  <button @click="set('Right')">set('Right')</button>
  <button @click="setLeft()">setLeft()</button>
  <button @click="setRight()">setRight()</button>
</template>

<script setup lang="ts">
import { useToggle } from 'v3-use'

const [state, { toggle, set, setLeft, setRight }] = useToggle('L', 'R')
</script>
```

## Reference

```typescript
function useToggle<T = boolean>(): [Ref<boolean>, Actions<T>]

function useToggle<T>(defaultValue: T): [Ref<T>, Actions<T>]

function useToggle<T, U>(
  defaultValue: T,
  reverseValue: U
): [Ref<T | U>, Actions<T | U>]

interface Actions<T> {
  setLeft: () => void
  setRight: () => void
  set: (value: T) => void
  toggle: () => void
}
```
