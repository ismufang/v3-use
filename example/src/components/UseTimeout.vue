<template>
  <button @click="tap()">3s后执行</button>
</template>

<script setup lang="ts">
import { useTimeout } from '../../dist/index'

const tap = () => {
  useTimeout(() => {
    console.log('3s后执行')
  }, 3000)
}
</script>
