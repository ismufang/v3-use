# useTitle

用于管理页面标题的 Hook。

## Usage

```ts
import { useTitle } from 'v3-use'
const [title, setTitle] = useTitle()
```

## Reference

### Type Declarations

```ts
export interface Options {
  restoreOnUnmount: boolean
}
export declare function useTitle(
  title?: string,
  options?: Options
): [Ref<string>, (value: string | ((c: string) => string)) => void]
```
