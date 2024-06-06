<script>
import { useProductStore } from '../stores/productStore';

export default {
  setup() {
    const productStore = useProductStore();
    const fetchProducts = () => {
      productStore.fetchProducts();
    };

    return {
      fetchProducts,
      isLoading: productStore.isLoading,
      error: productStore.error,
    };
  },
};
</script>