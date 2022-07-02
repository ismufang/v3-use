<template>
  <h1 class="title">Hooks Test</h1>
  <ul>
    <li v-for="hook in hooksMap" :key="hook.name">
      <router-link :to="hook.path">{{ hook.name }}</router-link>
    </li>
    <li><router-link to="/about">About</router-link></li>
  </ul>
</template>

<script setup lang="ts">
import { getHooks } from '../../utils/getHooks'
const hooksMap = getHooks()
</script>

<style lang="scss">
button {
  margin-right: 5px;
}
</style>
