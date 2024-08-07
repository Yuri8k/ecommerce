<script>
    import { RouterView } from 'vue-router';
</script>

<template>
    <HeaderComponent />
    <router-link to="/">HOME</router-link>
    <router-link to="/cursos">CURSOS</router-link>
    <RouterView/>
    <FooterComponent />
</template>

<style lang="scss">

</style>