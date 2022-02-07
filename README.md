# v3-use

V3-use is a high-quality and reliable Vue3 Hooks library. Using vue3.x composition api in react-hooks style.

## Install

```sh
npm install v3-use
```

## Usage

```html
<template>
  <div>{{state}}</div>
  <button @click="toggle()">toggle()</button>
  <button @click="setFalse()">setFalse()</button>
  <button @click="setTrue()">setTrue()</button>
</template>

<script setup>
  import { useBoolean } from 'v3-use'
  const [state, { toggle, setFalse, setTrue }] = useBoolean()
</script>
```

## Hooks

- **State**

  - [`useState`](https://v3use.ismufang.com/useState.html) &mdash; 管理 state 的 Hook
  - [`useReducer`](https://v3use.ismufang.com/useReducer) &mdash; 适用于复杂状态管理的 Hook
  - [`useToggle`](https://v3use.ismufang.com/useToggle.html) &mdash; 用于在两个状态值间切换的 Hook
  - [`useBoolean`](https://v3use.ismufang.com/useBoolean.html) &mdash; 管理 boolean 值的 Hook

- **Scene**

  - [`useCounter`](https://v3use.ismufang.com/useCounter.html) &mdash; 管理计数器的 Hook
  - [`useMethods`](https://v3use.ismufang.com/useMethods.html) &mdash; 一个 useReducer 简化版的 Hook
  - [`useCountDown`](https://v3use.ismufang.com/useCountDown.html) &mdash; 一个用于管理倒计时的 Hook

- **Dom**

  - [`useTitle`](https://v3use.ismufang.com/useTitle.html) &mdash; 用于设置页面标题

- **Effect**
  - [`useTimeout`](https://v3use.ismufang.com/useTimeout.html) &mdash; 一个可以处理 setTimeout 的 Hook
  - [`useInterval`](https://v3use.ismufang.com/useInterval.html) &mdash; 一个可以处理 setInterval 的 Hook
  - [`useEffect`](https://v3use.ismufang.com/useEffect.html) &mdash; 像 React 一样使用 useEffect 的 Hook
