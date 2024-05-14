<script>
    export default {
        components: {

        }
    }
</script>

<template>
    <div class="menu-mobile">
        <nav class="menu-mobile-content">
            <ul class="menu-mobile-nav">
                <li>#</li>
                <li>#</li>
                <li>#</li>
            </ul>
        </nav>
        <span class="open-menu-mobile">
            <i class="ri-menu-line"></i>
        </span>
    </div>
</template>

<style lang="scss">
    .menu-mobile {
       display: none;
    }
    .open-menu-mobile {
        font-size: 16px;
        color: #fff;
        display: block;
        @media screen and (min-width: 992px){
            display: none;
        }
    }
</style>
