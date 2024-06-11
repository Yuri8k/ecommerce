<script>
import Profile from './Profile.vue';
import Category from './Category.vue';

    export default {
        components: {
            Category,
            Profile
        }
    }
</script>

<template>
    <header>
        <h1 class="logo">Yuri <b>Dev</b></h1>
        <Profile/>
        <Category />
    </header>
</template>

<style lang="scss">
    header {
        background: var(--header);
        padding: 10px 16px;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-content: center;
        justify-content: center;
        @include desktop {
            padding: 20px 100px;
            display: flex;
            align-content: center;
            justify-content: space-between;
        }

        .logo {
            display: flex;
            align-content: center;
            justify-content: center;
            color: var(--body-font-color);
            font-size: 22px;
            font-style: normal;
            font-weight: 500;
            line-height: initial; 
            b {
                color: var(--primary-color);
                line-height: initial; 
            }
            @include desktop {
                order: 1;
                font-size: 26px;
            }
        }
    }
</style>
