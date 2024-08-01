<template>
  <div>value: {{ value }} default: 0</div>
  <button @click="setValue(1)">set 1</button>
  <button @click="setValue(null)">set null</button>
  <button @click="setValue(undefined)">set undefined</button>
</template>

<script setup lang="ts">
import { useDefault } from 'v3-use'

const [value, setValue] = useDefault<number | undefined | null>(0, 100)
</script>
