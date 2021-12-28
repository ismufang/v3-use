<template>
    <hook-layout>
        <template v-slot:title>useTimeout</template>
        <template v-slot:default>
            <button @click="tap()">3s后执行</button>
        </template>
    </hook-layout>
</template>

<script setup lang="ts">
import { HookLayout } from '../layouts'
import { useTimeout } from '../../dist/index';

const tap = () => {
    useTimeout(() => {
        console.log('3s后执行')
    }, 3000)
}
</script>