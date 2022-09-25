# v3-use

v3-use is a high-quality and reliable Vue3 Hooks library.

## Install

```bash
$ npm install --save v3-use
# or
$ yarn add v3-use
# or
$ pnpm add v3-use
```

## Usage

```ts
import { useBoolean } from 'v3-use'
const [state, { toggle, setFalse, setTrue }] = useBoolean()
```

## Hooks

- **State**

  - [`useState`](./src/hooks/useState/index.md) &mdash; 管理 state 的 Hook
  - [`useReducer`](./src/hooks/useReducer/index.md) &mdash; 适用于复杂状态管理的 Hook
  - [`useToggle`](./src/hooks/useToggle/index.md) &mdash; 用于在两个状态值间切换的 Hook
  - [`useBoolean`](./src/hooks/useBoolean/index.md) &mdash; 管理 boolean 值的 Hook

- **Scene**

  - [`useCounter`](./src/hooks/useCounter/index.md) &mdash; 管理计数器的 Hook
  - [`useMethods`](./src/hooks/useMethods/index.md) &mdash; 一个 useReducer 简化版的 Hook
  - [`useCountDown`](./src/hooks/useCountDown/index.md) &mdash; 一个用于管理倒计时的 Hook

- **Dom**

  - [`useTitle`](./src/hooks/useTitle/index.md) &mdash; 用于设置页面标题的 Hook

- **Effect**

  - [`useTimeout`](./src/hooks/useTimeout/index.md) &mdash; 一个可以处理 setTimeout 的 Hook
  - [`useInterval`](./src/hooks/useInterval/index.md) &mdash; 一个可以处理 setInterval 的 Hook

- **LifeCycle**

  - [`useEffect`](./src/hooks/useEffect/index.md) &mdash; 方便管理生命周期的 Hook，立即运行一个函数，同时响应式地追踪其依赖，并在依赖更改时重新执行
  - [`useEffectOnce`](./src/hooks/useEffectOnce/index.md) &mdash; 只在`mounted`、`beforeUnmount`阶段执行的生命周期
  - [`useFirstMountState`](./src/hooks/useFirstMountState/index.md) &mdash; 检测当前是否为第一次渲染
  - [`useLogger`](./src/hooks/useLogger/index.md) &mdash; 在控制台记录 vue 生命周期变化的 Hook
