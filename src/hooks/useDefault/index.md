# useDefault

Returns the default value when state is null or undefined.

## Usage

```ts
const [state, setState] = useDefault(0, 100)
```

## Reference

### Type Declarations

```ts
export declare function useDefault<T = any>(
  defaultValue: T,
  initialValue: T
): [Ref<UnwrapRef<T>>, (val: T | ((c: UnwrapRef<T>) => T)) => void]
```
