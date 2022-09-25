# useInterval

方便处理 setInterval 的 Hook。

## Usage

```ts
import { useInterval } from 'v3-use'

// 立即执行
// useInterval(() => {
//   console.log('3s后执行')
// }, 3000, { immediate: true })

const { run, destroy } = useInterval(() => {
  console.log('3s后执行')
}, 3000)
```

## Reference

### Type Declarations

```ts
export interface Actions {
  run: (immediate?: boolean) => void
  destroy: () => void
}
export declare function useInterval(
  fn: () => void,
  delay: number,
  options?: {
    immediate?: boolean
  }
): Actions
```
