<template>
    <h1>{{ curso }}</h1>
    <router-link :to="{ name: 'aulas', params: { curso: curso } }">Aulas</router-link>
    <router-link :to="{ name: 'descricao', params: { curso: curso } }">Descrição</router-link>
    <router-view></router-view>
</template>

<script>
export default {    
    props: ['curso'],

}
</script>

<style lang="scss">
    
</style>