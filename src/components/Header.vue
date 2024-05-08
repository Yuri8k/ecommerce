<script>
    export default {
        
    }
</script>

<template>
    <header>
        <nav class="menu-mobile">
            <ul class="menu-mobile-nav">
                <li>#</li>
            </ul>
        </nav>
        <span class="open-menu-mobile">
            <i class="ri-menu-line"></i>
        </span>
        <h1 class="logo">LOGO</h1>
        <form action="">
            <input type="text" placeholder="Pesquise">
            <button class="search">
                <i class="ri-search-line"></i>
            </button>
        </form>
        <div class="my-acount">
            <span class="my-acount-wishlist">
                <i class="ri-hearts-line"></i>
            </span>
            <span class="my-acount-profile">
                <i class="ri-account-circle-line"></i>
            </span>
            <span class="my-acount-cart">
                <i class="ri-shopping-cart-line"></i>
            </span>
        </div>
    </header>
</template>

<style lang="scss">
    header {
        background: #212121;
    }
</style>
