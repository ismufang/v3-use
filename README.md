# v3-use

Using vue3.x composition api in react-hooks style.

## Install

```sh
npm install v3-use
```

## Usage

```html
<template>
  <div>{{state}}</div>
  <button @click="toggle">toggle()</button>
  <button @click="setFalse">setFalse()</button>
  <button @click="setTrue">setTrue()</button>
</template>

<script setup>
  import { useBoolean } from 'v3-use'
  const [state, { toggle, setFalse, setTrue }] = useBoolean()
</script>
```

## Hooks

- **State**

  - `useState` — 管理 state 的 Hook
  - `useReducer` — 适用于复杂状态管理的 Hook
  - `useToggle` — 用于在两个状态值间切换的 Hook
  - `useBoolean` — 管理 boolean 值的 Hook

- **Scene**

  - `useCounter` — 管理计数器的 Hook
  - `useMethods` — 一个 useReducer 简化版的 Hook
  - `useCountDown` — 一个用于管理倒计时的 Hook

- **Dom**

  - `useTitle` — 用于设置页面标题

- **Effect**
  - `useTimeout` — 一个可以处理 setTimeout 的 Hook
  - `useInterval` — 一个可以处理 setInterval 的 Hook
  - `useEffect` - 像 React 一样使用 useEffect 的 Hook
