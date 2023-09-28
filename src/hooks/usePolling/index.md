# usePolling

一个管理轮询的 Hook

## Usage

```ts
import { usePolling } from 'v3-use'
const { polling, initPolling } = usePolling()
```

## Reference

### Type Declarations

```ts
export interface Options {
  manual?: boolean
  immediate?: boolean
}
export declare type Polling = Ref<IntervalActions | null>
export declare function usePolling(): {
  polling: Polling
  initPolling: (fn: () => void, interval: number, options?: Options) => void
}
```

### Params

### Result

- **`polling`**_`: Polling`_ &mdash; 轮询控制器
- **`initPolling`**_`: (fn: () => void, interval: number, options?: Options) => void`_ &mdash; 初始化轮询函数
