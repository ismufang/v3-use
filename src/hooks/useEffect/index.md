# useEffect

方便管理生命周期的 Hook，立即运行一个函数，同时响应式地追踪其依赖，并在依赖更改时重新执行。

## Usage

```ts
// onMount、onBeforeUnmount
useEffect(() => {
  console.log('mounted')
  return () => {
    console.log('beforeUnmount')
  }
}, [])

// onUpdated
useEffect(() => {
  console.log('updated')
})

// watch state
useEffect(() => {
  console.log('watch state:', state)
}, [state])
```

## Reference

### Type Declarations

```ts
declare const UNDEFINED_VOID_ONLY: unique symbol
export declare type Destructor = () => void | {
  [UNDEFINED_VOID_ONLY]: never
}
export declare type EffectCallback = () => void | Destructor
export declare type DependencyList = ReadonlyArray<any>
export declare function useEffect(
  effect: EffectCallback,
  deps?: DependencyList
): void
```
