<script>
import axios from 'axios';

export default {
    data(){
    return {
      items: []
    }
  }, 
}
</script>

<template>
    <ul class="categorys">
        <li class="categorys-item">men's</li>
        <li class="categorys-item">jewelery</li>
        <li class="categorys-item">electronics</li>
        <li class="categorys-item">women's</li>
    </ul>
</template>

<style lang="scss">
    .categorys {
        grid-area: 2/1/2/4;
        display: flex;
        align-content: center;
        justify-content: center;
        margin-top: 10px;
        @include desktop {
            order: 2;
            margin-top: 0;
        }

        &-item {
            cursor: pointer;
            color: var(--category-color);
            font-family: Inter;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 110%; /* 15.4px */
            text-transform: capitalize;
            padding: 10px;
            transition: all .3s ease;

            &:hover {
                color: var(--category-color-hover);
                transition: all .3s ease;
            }
        }
    }
</style>