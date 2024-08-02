# useEventListener

## Type Declarations

```ts
export declare type TargetEl = Window | Document | HTMLElement
export declare type ListenerOptions = boolean | AddEventListenerOptions
export declare type Listener = EventListenerOrEventListenerObject
export interface Options {
  target?: TargetEl | Ref<TargetEl> | Ref<any>
  listenerOptions?: ListenerOptions
  manual?: boolean
}
export declare function useEventListener(
  name: string,
  listener: Listener | Listener[],
  options?: Options
): {
  init: () => void
  clear: () => void
}
```
