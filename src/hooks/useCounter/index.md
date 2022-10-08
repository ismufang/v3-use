# useCounter

管理计数器的 Hook。

## Usage

```ts
const [state, { inc, dec, set, reset }] = useCounter(0)
```

## Reference

```ts
const [state, actions] = useCounter(initialValue?: number, options?: Options)
```

### Type Declarations

```ts
export interface Options {
  min?: number
  max?: number
}
export declare type ValueParam = number | ((c: number) => number)
export interface Actions {
  inc: (delta?: number) => void
  dec: (delta?: number) => void
  set: (value: ValueParam) => void
  reset: () => void
}
export declare function useCounter(
  initialValue?: number,
  options?: Options
): [Ref<number>, Actions]
```
