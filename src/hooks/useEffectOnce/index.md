# useEffectOnce

useEffect 的快捷方式，只在 onMount 和 onBeforeUnmount 阶段执行的 Hook。

## Usage

```ts
import { useEffectOnce } from 'v3-use'
useEffectOnce(() => {
  console.log('mounted 执行')
  return () => {
    console.log('beforeUnmount 执行')
  }
})
```

## Reference

### Type Declarations

```ts
export declare function useEffectOnce(effect: EffectCallback): void
```
