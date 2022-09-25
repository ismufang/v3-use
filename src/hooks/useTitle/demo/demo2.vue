<template>
  <div>Document Title: {{ title }}</div>
  <button @click="setTitle('t1')">setTitle('t1')</button>
</template>

<script setup lang="ts">
import { useTitle } from 'v3-use'
import { onUnmounted } from 'vue'

const [title, setTitle] = useTitle(document.title, { restoreOnUnmount: true })
onUnmounted(() => {
  console.log('已销毁')
})
</script>
