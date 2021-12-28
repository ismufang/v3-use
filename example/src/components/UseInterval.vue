<template>
    <hook-layout>
        <template v-slot:title>useInterval</template>
        <template v-slot:default>
            <button @click="tap()">3s后执行</button>
        </template>
    </hook-layout>
</template>

<script setup lang="ts">
import { HookLayout } from '../layouts'
import { useInterval } from '../../dist/index';
import { onMounted } from 'vue';

const tap = () => {
    useInterval(() => {
        console.log('3s后执行')
    }, 3000)
}

onMounted(() => {
    useInterval(() => {
        console.log('立即执行一次')
    }, 2000, { immediate: true })
})
</script>