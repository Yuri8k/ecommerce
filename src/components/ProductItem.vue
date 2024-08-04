<script>
import { getAllProducts, getProduct } from '@/stores/productStore';

export default {
  data() {
    return {
      allProducts: [],
      product: {}
    }
  },
  methods: {
    async fetchAllProducts() {
      try {
        this.allProducts = await getAllProducts();
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    },
    async fetchProduct(id) {
      try {
        this.product = await getProduct(id);
      } catch (error) {
        console.error(`Failed to fetch product ${id}:`, error);
      }
    },
    formatPrice(value) {
      return value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    },
  },
  created() {
    this.fetchAllProducts();
  }
};
</script>

<template>
  <div>

    <div class="product-detail-overlay">
      <div class="product-detail">
        <div class="product-detail-content">
          <figure>
            <img :src="product.image" :alt="product.title">
          </figure>
          <div class="product-detail-content-infos">
            <h2 class="detail-name">{{ product.category }}</h2>
            <h4 class="deatail-category">{{ product.category }}</h4>
            <h5 class="detail-description">{{ product.description }}</h5>
          </div>
          <div class="product-detail-content-buy">
            <h4 class="price">{{ product.price }}</h4>
            <button class="btn-buy">COMPRAR</button>
          </div>
        </div>
      </div>
    </div>

    <ul class="product-list">
      <li v-for="item in allProducts" :key="item.id" class="product-item">
        <figure>
          <img :src="item.image" :alt="item.title">
          <button class="wishlist">
            <i class="ri-heart-3-line"></i>
          </button>
        </figure>
        <div class="product-item-content">
          <div class="product-item-name">
            <h2 class="name">{{ item.title }}</h2>
            <h4 class="price">{{ formatPrice(item.price) }}</h4>
          </div>
        </div>
        <div class="product-item-buy">
          <form action="" class="qtd">
            <input type="text" placeholder="-">
            <input type="text" placeholder="1">
            <input type="text" placeholder="+">
          </form>
          <div class="product-item-buy-group">
            <button @click="fetchProduct(item.id)" class="btn-view"><i class="ri-eye-line"></i></button>
            <button class="btn-buy"><i class="ri-shopping-cart-2-line"></i></button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">

.product-detail-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  .product-detail {
    width: 85%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--white);
    @include desktop {
      width: 100%;
      max-width: 600px;
    }

    &-content {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}

.product-list {
  padding: 40px 15px;
  display: grid;
  grid-template-columns: 1fr;
  align-content: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
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
        transition: all 0.3s ease-in-out;

        i {
          font-size: 22px;
        }

        &:hover {
          transition: all 0.3s ease-in-out;
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
      width: 100%;

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
    }

    &-buy {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;

      .qtd {
        width: 100%;
        max-width: 120px;
        height: 44px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;

        input {
          font-size: 14px;
          width: inherit;
          text-align: center;
        }
      }

      &-group {
        display: flex;
        align-items: center;
        gap: 5px;

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
        transition: all 0.3s ease-in-out;

        i {
          font-size: 24px;
          filter: invert(1);
        }

        &:hover {
          transition: all 0.3s ease-in-out;
          background: var(--btn-buy-hover);
        }
      }

      .btn-view {
        cursor: pointer;
        display: flex;
        align-content: center;
        justify-content: center;
        min-width: 44px;
        height: 44px;
        padding: 10px;
        border-radius: 8px;
        background: var(--btn-default);
        transition: all 0.3s ease-in-out;

        i {
          font-size: 24px;
        }

        &:hover {
          transition: all 0.3s ease-in-out;
          opacity: 0.6;
        }
      }
      }
    }
  }
}
</style>