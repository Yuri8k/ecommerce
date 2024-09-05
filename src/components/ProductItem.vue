<script>
import axios from 'axios';

export default {
  data() {
    return {
      allProducts: [],
      product: {},
      activeModal: false
    }
  },
  methods: {
    getAllProducts() {
      axios.get(`https://api.escuelajs.co/api/v1/products`)
        .then((res) => {
          this.allProducts = res.data
          console.log(res.data);
        })
        .catch((error) => {
          console.error(`Failed to fetch product with ID ${id}:`, error);
        })
    },
    getProduct(id) {
      axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
        .then((res) => {
          this.product = res.data
        })
        .catch((error) => {
          console.error(`Failed to fetch product with ID ${id}:`, error);
        })
    },
    formatPrice(value) {
      return value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    },
    toggleModal() {
      this.activeModal = !this.activeModal;
    },
    closeModal() {
      this.activeModal = false;
    },
  },
  mounted() {
    this.getAllProducts();
  }
};
</script>

<template>
  <div>

    <div @click="toggleModal" :class="{ active: activeModal }" class="product-detail-overlay">
      <div class="product-detail">
        <button class="product-detail-close" @click.stop="closeModal">
          <i class="ri-close-line"></i>
        </button>
        <div class="product-detail-content">
          <figure>
            <img :src="product.image" :alt="product.title" />
          </figure>
          <div class="product-detail-content-infos">
            <h2 class="detail-name">{{ product.title }}</h2>
            <h4 class="detail-category">{{ product.category }}</h4>
            <h5 class="detail-description"><b>Description:</b><br> {{ product.description }}</h5>
            <h4 v-if="product && product.price" class="price">{{ formatPrice(product.price) }}</h4>
            <button class="btn-buy">COMPRAR<i class="ri-shopping-cart-2-line"></i></button>
          </div>
        </div>
      </div>
    </div>

    <ul class="product-list">
      <li v-for="item in allProducts" :key="item.id" class="product-item">
      <figure>
          <img :src="item.category.image" :alt="item.title">
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
            <button @click="getProduct(item.id), activeModal = !activeModal" class="btn-view"><i
                class="ri-eye-line"></i></button>
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
  opacity: 0;
  visibility: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;
  transition: all .4s ease-in-out;

  &.active {
    opacity: 1;
    visibility: visible;
    z-index: 1000;
    transition: all .4s ease-in-out;
  }

  .product-detail {
    width: 85%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--white);
    position: relative;

    @include desktop {
      width: 80%;
    }

    &-close {
      position: absolute;
      top: -10px;
      right: -10px;
      width: 35px;
      height: 35px;
      background: var(--white);
      font-size: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100%;
      box-shadow: 0 4px 8px #ccc;
      cursor: pointer;
    }

    &-content {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;

      figure {
        width: 100%;
        display: block;
        @include desktop {
          min-width: 400px;
        }

        img {
          width: 100%;
          display: block;
        }
      }

      &-infos {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 10px;

        .detail-name {
          color: var(--body-font-color);
          font-size: 32px;
          font-style: normal;
          font-weight: 600;
          line-height: 130%;
          text-transform: capitalize;
        }
        .detail-category {
          color: var(--primary-dark);
          font-size: 16px;
          font-style: normal;
          font-weight: 700;
          line-height: 130%;
          text-transform: capitalize;
        }
        .detail-description {
          color: var(--body-font-color);
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 160%;
          text-transform: capitalize;
          margin: 10px 0;
        }
        .price {
          color: var(--body-font-color);
          font-size: 18px;
          font-style: normal;
          font-weight: 600;
          line-height: 110%;
          text-transform: capitalize;
        }
        .btn-buy {
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-width: 44px;
          height: 44px;
          padding: 20px;
          color: var(--white);
          border-radius: 8px;
          background: var(--btn-buy);
          transition: all 0.3s ease-in-out;

          i {
            font-size: 24px;
          }

          &:hover {
            transition: all 0.3s ease-in-out;
            background: var(--btn-buy-hover);
          }
        }
      }
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
          color: var(--body-font-color);
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 130%;
          text-transform: capitalize;
        }

        .price {
          color: var(--body-font-color);
          font-size: 18px;
          font-style: normal;
          font-weight: 600;
          line-height: 110%;
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