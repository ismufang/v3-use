# v3-use

Using vue3.x composition api in react-hooks style.

## Install

```sh
npm install v3-use

# or

yarn add v3-use
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
  import { useBoolean } from "v3-use";
  const [state, { toggle, setFalse, setTrue }] = useBoolean();
</script>
```

## Hooks

- **State**
  - `useBoolean` — 管理 boolean 值的 Hook
  - `useState` — 管理 state 的 Hook
