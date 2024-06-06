<script>
import { onMounted, computed } from 'vue';
import Filter from './Filter.vue';
import { useProductStore } from '../stores/productStore';

export default {
  components: {
    Filter
  },
  setup() {
    const productStore = useProductStore();

    onMounted(() => {
      productStore.fetchProducts();
    });

    // Computa a lista de produtos filtrada diretamente do store
    const filteredProducts = computed(() => productStore.filteredProducts);

    return {
      isLoading: productStore.isLoading,
      error: productStore.error,
      filteredProducts, // Retorna a lista de produtos filtrada
      truncate(value, limit) {
        if (!value) return '';
        value = value.toString();
        return value.length > limit ? value.substring(0, limit) + '...' : value;
      }
    };
  }
};
</script>

<template>
  <div>
    <Filter />

    <ul class="product-list">
      <li class="product-item" v-for="product in filteredProducts" :key="product.id">
        <figure>
          <img :src="product.image" :alt="product.title">
          <button class="wishlist"><i class="ri-heart-3-line"></i></button>
        </figure>
        <div class="product-item-content">
          <div class="product-item-name">
            <h2 class="name">{{ truncate(product.title, 30) }}</h2>
            <h4 class="price">{{ product.price }}</h4>
          </div>
          <button class="btn-buy"><i class="ri-shopping-cart-2-line"></i></button>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
  .product-list {
    padding: 40px 15px;
    display: grid;
    grid-template-columns: 1fr;
    align-content: center;
    justify-content: center;
    gap: 20px;
    @include desktop {
      grid-template-columns: repeat(4, 1fr);
      padding: 40px;
    }

    .product-item {
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;
      gap: 10px;
      width: 100%;

      figure {
        width: 100%;
        display: block;
        position: relative;
        border-radius: 8px;
        overflow: hidden;
        background: #f2f2f2;

        img {
          width: 100%;
          display: block;
          object-fit: contain;
          aspect-ratio: 2/2;
          mix-blend-mode: multiply;
        }

        .wishlist {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 44px;
          height: 44px;
          cursor: pointer;
          background: var(--white);
          padding: 10px;
          border-radius: 8px;
          display: flex;
          align-content: center;
          justify-content: center;
          transition: all .3s ease-in-out;

          i {
            font-size: 22px;
          }

          &:hover {
            transition: all .3s ease-in-out;
            background: var(--primary-color);
            i {
              filter: invert(1);
            }
          }
        }
      }

      &-content {
        display: flex;
        align-content: center;
        justify-content: space-between;
        gap: 10px;

        .product-item-name {
          display: flex;
          flex-direction: column;
          align-content: center;
          justify-content: center;
          gap: 10px;

          .name {
            color: var(--primary-dark);
            font-family: Inter;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 130%; /* 20.8px */
            text-transform: capitalize;
          }
          .price {
            color: var(--body-font-color);
            font-family: Inter;
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            line-height: 110%; /* 19.8px */
            text-transform: capitalize;
          }
        }

        .btn-buy {
          cursor: pointer;
          display: flex;
          align-content: center;
          justify-content: center;
          min-width: 44px;
          height: 44px;
          padding: 10px;
          border-radius: 8px;
          background: var(--btn-buy);
          transition: all .3s ease-in-out;

          i {
            font-size: 24px;
          }

          &:hover {
            transition: all .3s ease-in-out;
            background: var(--btn-buy-hover);
            i {
              filter: invert(1);
            }
          }
        }
      }
    }
  }
</style>