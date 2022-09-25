# useLogger

在控制台记录 vue 生命周期变化的 Hook。

## Usage

```ts
import { useLogger, useState } from 'v3-use'
useLogger('Demo', new Date().toLocaleDateString())
```

## Reference

### Type Declarations

```ts
export declare function useLogger(componentName: string, ...rest: any[]): void
```
