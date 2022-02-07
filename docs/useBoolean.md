# useBoolean

优雅的管理 boolean 值的 Hook。

## Usage

```vue
<template>
  <div>
    <div>{{ state }}</div>
    <button @click="toggle()">toggle()</button>
    <button @click="setFalse()">setFalse()</button>
    <button @click="setTrue()">setTrue()</button>
  </div>
</template>

<script setup lang="ts">
import { useBoolean } from 'v3-use'

const [state, { toggle, setFalse, setTrue }] = useBoolean()
</script>
```

## Reference

```typescript
function useBoolean(defaultValue?: boolean = false): [Ref<boolean>, Actions]

interface Actions {
  toggle: () => void
  setTrue: () => void
  setFalse: () => void
}
```
