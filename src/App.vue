<script setup>
    import { RouterView } from 'vue-router';
</script>

<template>
    <RouterView/>
</template>

<style lang="scss">
    body {
        @include desktop {
            background: red;
        }
    }
</style>