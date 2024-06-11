<script>
import { computed } from "vue";
import { useWishlistStore } from "@/stores/wishlistStore";

export default {
  computed: {
    isActive() {
      return useWishlistStore().isActive;
    },
  },
  methods: {
    closeWishlist() {
      useWishlistStore().closeWishlist();
    },
    truncate(value, limit) {
      if (!value) return "";
      value = value.toString();
      return value.length > limit ? value.substring(0, limit) + "..." : value;
    },
    formatPrice(price) {
      return price.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    },
  },
  props: {
    addToWishlist: Function,
    removeFromWishlist: Function,
    wishlist: Array,
  },
};
</script>

<template>
  <div
    class="wishlist-overlay"
    :class="{ 'wishlist-overlay': true, active: isActive }"
  >
    <div class="wishlist">
      <button @click="closeWishlist" class="wishlist-close">
        <i class="ri-close-line"></i>
      </button>
      <h2 class="wishlist-title"><i class="ri-heart-fill"></i> FAVORITOS</h2>
      <ul class="wishlist-content">
        <li v-for="product in wishlist" :key="product.id">
          <figure>
            <img :src="product.image" :alt="product.title" />
          </figure>
          <div class="product-item-content">
            <div class="product-item-name">
              <h2 class="name">{{ truncate(product.title, 15) }}</h2>
              <div class="content-price">
                <h4 class="price">{{ formatPrice(product.price) }}</h4>
                <button
                  @click="removeFromWishlist(product)"
                  class="wishlist-remove"
                >
                  <i class="ri-delete-bin-line"></i>
                </button>
              </div>
            </div>
            <button class="btn-buy">
              <i class="ri-shopping-cart-2-fill"></i> COMPRAR
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.wishlist-overlay {
  z-index: 999;
  display: block;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(33, 33, 33, 0.9);
  opacity: 0;
  visibility: hidden;
  transition: 0.3s ease-in;

  &.active {
    opacity: 1;
    visibility: visible;
    transition: 0.3s ease-in;
  }

  .wishlist {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--white);
    padding: 20px;
    width: 90%;
    height: 90%;
    @include desktop {
      top: 0;
      right: 0;
      left: initial;
      transform: initial;
      width: 100%;
      max-width: 300px;
      height: 100%;
    }

    .wishlist-close {
      cursor: pointer;
      position: absolute;
      top: 10px;
      left: -10px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--primary-color);
      width: 32px;
      height: 32px;
      border-radius: 100%;
      border: 1px solid var(--border);

      i {
        font-size: 22px;
        color: var(--white);
      }
    }

    &-title {
      color: var(--body-font-color);
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: 110%; /* 35.2px */
      text-transform: capitalize;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;

      i {
        color: var(--primary-color);
      }
    }

    &-content {
      height: 100%;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      align-content: center;

      li {
        display: flex;
        align-content: flex-start;
        justify-content: start;
        gap: 20px;
        padding: 20px 0;
        border-bottom: 1px solid var(--border);

        &:last-child {
          border-bottom: none;
        }

        figure {
          max-width: 90px;
          width: 100%;
          display: block;
          img {
            width: 100%;
            display: block;
          }
        }

        .product-item-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: start;
          gap: 10px;
          width: 100%;

          .product-item-name {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: start;
            width: 100%;

            .name {
              color: var(--body-font-color);
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
              line-height: 130%; /* 20.8px */
              text-transform: capitalize;
            }

            .content-price {
              display: flex;
              align-items: center;
              justify-content: space-between;
              width: 100%;
              margin-top: 10px;
            }

            .price {
              color: var(--body-font-color);
              font-size: 16px;
              font-style: normal;
              font-weight: 600;
              line-height: 110%; /* 19.8px */
              text-transform: capitalize;
            }

            .wishlist-remove {
              cursor: pointer;
              display: flex;
              align-items: center;
              justify-content: center;
              min-width: 35px;
              max-width: 35px;
              height: 35px;
              padding: 10px;
              border-radius: 8px;
              background: var(--btn-buy);
              transition: all 0.3s ease-in-out;

              i {
                font-size: 17px;
              }

              &:hover {
                transition: all 0.3s ease-in-out;
                background: var(--btn-buy-hover);
                i {
                  filter: invert(1);
                }
              }
            }
          }

          .btn-buy {
            cursor: pointer;
            padding: 10px;
            width: 100%;
            background: var(--btn-default);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;
            color: var(--btn-default-text);
            font-size: 16px;
            font-style: normal;
            font-weight: 600;
            line-height: 130%; /* 20.8px */
            text-transform: capitalize;
            border-radius: 8px;
            transition: all 0.3s ease-in-out;

            i {
              font-size: 24px;
              font-weight: 400;
            }

            &:hover {
              background: var(--body-font-color-hover);
              transition: all 0.3s ease-in-out;
            }
          }
        }
      }
    }
  }
}
</style>