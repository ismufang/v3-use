<script setup lang="ts">
import { useTimeout } from '../../lib/index'

const tap = () => {
  useTimeout(() => {
    console.log('3s后执行')
  }, 3000)
}
</script>

<template>
<h1>UseTimeout</h1>
  <button @click="tap()">3s后执行</button>
</template>
