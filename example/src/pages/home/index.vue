<template>
    <div>
        <div class="title">Hooks Test</div>
        <div>
            <UseBoolean />
            <UseState />
        </div>
    </div>
</template>

<script setup lang="ts">
import { UseBoolean, UseState } from '../../components'
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