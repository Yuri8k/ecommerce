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
        <h1 class="logo">Designer <b>Logo</b></h1>
        <Form />
        <Profile />
    </header>
</template>

<style lang="scss">
    header {
        background: var(--header);
        padding: 10px 16px;
        width: 100%;
        display: flex;
        align-content: center;
        justify-content: space-between;
        @include desktop {
            padding: 20px 100px;
        }

        .logo {
            color: var(--body-font-color);
            font-size: 26px;
            font-style: normal;
            font-weight: 500;
            line-height: 120%; 
            b {
                color: var(--primary-color);
            }
        }
    }
</style>
