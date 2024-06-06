<template>   
    <div class="my-account">
        <span class="my-account-cart">
            <i class="ri-shopping-cart-line"></i>
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
        height: 30px;
        @include desktop {
            gap: 12px;
            height: 44px;
            order: 3;
        }

        &-wishlist, &-profile {
            cursor: pointer;
            width: 30px;
            height: 30px;
            padding: 5px;
            display: flex;
            align-content: center;
            justify-content: center;
            gap: 8px;
            border-radius: 8px;
            background: var(--white);
            @include desktop {
                padding: 11px;
                width: 44px;
                height: 44px;
            }

            &:hover {
                background: var(--primary-color);
                transition: all .3s ease-in-out;
                i {
                    filter: invert(1);
                }
            }

            i {
                font-size: 18px;
                @include desktop {
                    font-size: 22px;
                }
            }
        }

        &-cart {
            cursor: pointer;
            min-width: 30px;
            height: 30px;
            padding: 5px;
            display: flex;
            align-content: center;
            justify-content: center;
            gap: 8px;
            border-radius: 8px;
            background: var(--white);
            transition: all .3s ease-in-out;
            @include desktop {
                padding: 11px 16px;
                min-width: 44px;
                height: 44px;
            }

            &:hover {
                background: var(--primary-color);
                transition: all .3s ease-in-out;
                i {
                    filter: invert(1);
                }
                #qtd {
                    background: var(--white);
                    color: var(--primary-color);
                }
            }

            i {
                font-size: 18px;
                @include desktop {
                    font-size: 22px;
                }
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