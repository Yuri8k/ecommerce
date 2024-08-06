<template>
    <div>
        <ul>
            <li @click="compAtivo = 'PaginaSobre'">Pagina sobre</li>
            <li @click="compAtivo = 'PaginaServico'">Pagina serviços</li>
        </ul>
        <transition mode="out-in">
            <component :is="compAtivo"></component>
        </transition>
    </div>
</template>

<script>
import PaginaServico from './PaginaServico.vue';
import PaginaSobre from './PaginaSobre.vue';

export default {
   data() {
        return {
            compAtivo: 'PaginaSobre'
        }
   },
   components: {
    PaginaServico,
    PaginaSobre
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