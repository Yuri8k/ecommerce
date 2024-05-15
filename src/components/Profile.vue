<script>
export default {
    
}
</script>

<template>   
    <div class="my-account">
        <span class="my-account-cart">
            <i class="ri-shopping-cart-line"></i>
            <span class="my-account-cart-text">Cart</span>
            <span id="qtd" class="my-account-cart-qtd">0</span>
        </span>
        <span class="my-account-wishlist">
            <i class="ri-heart-line"></i>
        </span>
        <span class="my-account-profile">
            <i class="ri-account-circle-line"></i>
        </span>
    </div>
</template>

<style lang="scss">
    .my-account {
        display: flex;
        align-content: center;
        justify-content: center;
        gap: 5px;
        @include desktop {
            gap: 12px;
        }

        &-wishlist, &-profile {
            padding: 11px;
            display: flex;
            align-content: center;
            justify-content: center;
            gap: 8px;
            border-radius: 8px;
            background: var(--white);

            i {
                font-size: 22px;
            }
        }

        &-cart {
            padding: 11px 16px;
            display: flex;
            align-content: center;
            justify-content: center;
            gap: 8px;
            border-radius: 8px;
            background: var(--white);

            i {
                font-size: 22px;
            }

            &-text {
                color: var(--body-font-color);
                text-align: center;
                font-size: $base-font-size;
                font-style: normal;
                font-weight: 500;
                line-height: 110%; /* 13.2px */
                text-transform: capitalize;
                margin-right: 4px;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            &-qtd {
                width: 20px;
                height: 20px;
                background: var(--primary-dark);
                display: flex;
                align-items: center;
                justify-content: center;
                color: var(--white);
                text-align: center;
                font-size: 10px;
                font-style: normal;
                font-weight: 500;
                line-height: 100%; /* 10px */
                text-transform: capitalize;
                border-radius: 100%;
            }
        }
    }
</style>