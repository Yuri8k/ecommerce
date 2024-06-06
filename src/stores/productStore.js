// stores/productStore.js
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useProductStore = defineStore('productStore', () => {
  const products = ref([]);
  const isLoading = ref(false);
  const error = ref(null);
  const searchQuery = ref('');

  async function fetchProducts() {
    isLoading.value = true;
    error.value = null;
    try {
      // Simulação de uma chamada de API
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) throw new Error('Erro ao buscar produtos');
      products.value = await response.json();
    } catch (err) {
      error.value = err.message;
    } finally {
      isLoading.value = false;
    }
  }

  const setSearchQuery = (query) => {
    searchQuery.value = query;
  };

  const filteredProducts = computed(() => {
    if (!searchQuery.value) {
      return products.value;
    }
    return products.value.filter(product =>
      product.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });

  return {
    products,
    isLoading,
    error,
    searchQuery,
    filteredProducts,
    fetchProducts,
    setSearchQuery
  };
});