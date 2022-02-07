<template>
  <div>
    <div class="title">Hooks Test</div>
    <div>
      <div v-for="hook in hooksMap" :key="hook.name">
        <router-link :to="hook.path">{{ hook.name }}</router-link>
      </div>
    </div>
    <router-link to="/about">About</router-link>
  </div>
</template>

<script setup lang="ts">
import { getHooks } from '../../utils/getHooks'
const hooksMap = getHooks()
</script>

<style scoped lang="scss">
.title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
}
</style>

<style lang="scss">
button {
  margin-right: 5px;
}
</style>
