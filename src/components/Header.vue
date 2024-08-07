<template>
    <div>
    </div>
</template>

<script>

export default {
   data() {
        return {
            compAtivo: 'PaginaSobre'
        }
   },
   components: {
   }
}
</script>

<style lang="scss">

    .v-enter-active,
    .v-leave-active {
        transition: all .3s;
    }

    .v-enter, 
    .v-leave-to {
        opacity: 0;
        transform: translate3d(0, -20px, 0);
    }
</style>