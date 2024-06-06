<script>
import Form from './Form.vue';

export default {
    components: {
        Form
    }
}
</script>

<template>
    <div class="filter">
        <div class="filter-draggable">
            <div class="dragg">
                <i class="ri-draggable"></i>
            </div>
        </div>
        <Form />
        <div class="filter-order">
            <div class="order">
                <i class="ri-list-unordered"></i>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .filter {
        padding: 20px 15px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        justify-content: center;
        @include desktop {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 20px 40px;
        }

        &-draggable {
            order: 1;
            display: flex;
            align-content: center;
            justify-content: center;
            @include desktop {
                order: initial;
            }

            .dragg {
                cursor: pointer;
                padding: 11px;
                display: flex;
                align-content: center;
                justify-content: center;
                background: var(--btn-buy);
                border-radius: 8px;
                transition: all .3s ease-in-out;

                &:hover {
                    background: var(--btn-buy-hover);
                    transition: all .3s ease-in-out;
                    i {
                        filter: invert(1);
                    }
                }

                i {
                    font-size: 22px;
                }
            }
        }
        &-order {
            order: 2;
            display: flex;
            align-content: center;
            justify-content: center;
            @include desktop {
                order: initial;
            }

            .order {
                cursor: pointer;
                padding: 11px;
                display: flex;
                align-content: center;
                justify-content: center;
                background: var(--btn-buy);
                border-radius: 8px;
                transition: all .3s ease-in-out;

                &:hover {
                    background: var(--btn-buy-hover);
                    transition: all .3s ease-in-out;
                    i {
                        filter: invert(1);
                    }
                }

                i {
                    font-size: 22px;
                }
            }
        }
        #form {
            order: 3;
            grid-area: 2/1/2/4;
            margin-top: 20px;
            @include desktop {
                order: initial;
                margin-top: 0;
            }
        }
    }
</style>