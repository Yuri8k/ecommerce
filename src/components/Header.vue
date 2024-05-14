<script>
import MenuMobile from './MenuMobile.vue';
import Form from './Form.vue';
import Profile from './Profile.vue';

    export default {
        components: {
            MenuMobile,
            Form,
            Profile
        }
    }
</script>

<template>
    <header>
        <MenuMobile />
        <h1 class="logo">LOGO</h1>
        <Form />
        <Profile />
    </header>
</template>

<style lang="scss">
    header {
        background: var(--primary-color);
        padding: 10px 16px;
        width: 100%;
        display: flex;
        align-content: center;
        justify-content: center;
    }
</style>
