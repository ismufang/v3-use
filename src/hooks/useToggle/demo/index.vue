<template>
  <div>
    <div>{{ state }}</div>
    <button @click="toggle()">toggle()</button>
    <button @click="set('L')">set('L')</button>
    <button @click="set('R')">set('R')</button>
    <button @click="setLeft()">setLeft()</button>
    <button @click="setRight()">setRight()</button>
    <button @click="set('error')">set('error')</button>
  </div>
  <div>
    <div>{{ bool }}</div>
    <button @click="toggleBool()">toggleBool()</button>
    <button @click="setBool(true)">setBool(true)</button>
    <button @click="setBool(false)">set(false)</button>
    <button @click="setLeftBool()">setLeftBool()</button>
    <button @click="setRightBool()">setRightBool()</button>
  </div>
</template>

<script setup lang="ts">
import { useToggle } from 'v3-use'

const [state, { toggle, set, setLeft, setRight }] = useToggle('L', 'R')
const [
  bool,
  {
    toggle: toggleBool,
    set: setBool,
    setLeft: setLeftBool,
    setRight: setRightBool
  }
] = useToggle(false)
</script>
