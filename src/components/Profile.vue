<script>
export default {
    
}
</script>

<template>   
    <div class="my-account">
        <span class="my-account-wishlist">
            <i class="ri-hearts-line"></i>
        </span>
        <span class="my-account-profile">
            <i class="ri-account-circle-line"></i>
        </span>
        <span class="my-account-cart">
            <i class="ri-shopping-cart-line"></i>
        </span>
    </div>
</template>

<style lang="scss">
    .my-account {
        display: flex;
        align-content: center;
        justify-content: center;
        gap: 5px;

        &-wishlist, &-profile, &-cart {
            i {
                font-size: 30px;
                color: #fff;
                cursor: pointer;
            }
        }
    }
</style>