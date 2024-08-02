<template>
  <div>
    <div>resize: {{ resize[0] }} {{ resize[1] }}</div>
    <div>ul scrollTop: {{ scrollTop }}</div>
    <ul ref="ulRef" class="ul">
      <li v-for="item in [...Array(100).keys()]" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { useEventListener } from 'v3-use'
import { ref } from 'vue'

const ulRef = ref()
const resize = ref([0, 0])
const scrollTop = ref(0)

useEventListener('resize', [
  (e: Event) => {
    resize.value[0] = (e.target as Window)?.innerHeight || 0
    resize.value[1] = (e.target as Window)?.innerWidth || 0
  },
  () => {
    console.log(window.innerHeight, window.innerWidth)
  }
])

useEventListener(
  'scroll',
  e => {
    scrollTop.value = (e.target as HTMLElement).scrollTop || 0
  },
  {
    target: ulRef
  }
)
</script>

<style scoped>
.ul {
  height: 200px;
  overflow-y: auto;
}
</style>
