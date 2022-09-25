<template>
  <Demo2 v-if="show" />
  <button @click="toggle">destroy demo2</button>
</template>

<script setup lang="ts">
import { useBoolean } from 'v3-use'
import Demo2 from './demo2.vue'

const [show, { toggle }] = useBoolean(true)
</script>
