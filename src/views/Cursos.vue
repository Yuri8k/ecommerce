<template>
    <div>
       <h1>Curso Ativo: {{ curso }}</h1>

       <div>
            <router-link :to="{ name: 'curso', params: { curso: 'javascript' } }">javascript</router-link>
            <router-link :to="{ name: 'curso', params: { curso: 'html' } }">html</router-link>
            <router-link :to="{ name: 'curso', params: { curso: 'css' } }">css</router-link>
       </div>
       <router-view></router-view>
    </div>
</template>

<script>
export default {
    props: ['curso'],
}
</script>

<style lang="scss">
    
</style>