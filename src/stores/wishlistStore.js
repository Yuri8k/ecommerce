import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useWishlistStore = defineStore('wishlistStore', () => {
  const wishlist = ref([]);
  const isActive = ref(false);

  const addToWishlist = (product) => {
    console.log('Adicionando produto à lista de desejos:', product);
    if (!wishlist.value.some(item => item.id === product.id)) {
      wishlist.value.push(product);
      console.log('Produto adicionado à lista de desejos:', wishlist.value);
    } else {
      console.log('Produto já está na lista de desejos');
    }
  };

  const removeFromWishlist = (productId) => {
    const index = wishlist.value.findIndex(item => item.id === productId);
    if (index !== -1) {
      wishlist.value.splice(index, 1);
      console.log('Produto removido da lista de desejos:', wishlist.value);
    } else {
      console.log('Produto não encontrado na lista de desejos');
    }
  };

  const toggleWishlist = () => {
    isActive.value = !isActive.value;
  };

  const closeWishlist = () => {
    isActive.value = false;
  };

  return {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    isActive,
    toggleWishlist,
    closeWishlist
  };
});