<script>
import { ref } from "vue";
import { useProductStore } from "../stores/productStore";

export default {
  setup() {
    const productStore = useProductStore();
    const query = ref(productStore.searchQuery);

    const onInput = () => {
      productStore.setSearchQuery(query.value);
    };

    return {
      query,
      onInput,
    };
  },
};
</script>

<template>
  <div id="form">
    <form class="form" action="">
      <input
        v-model="query"
        @input="onInput"
        type="text"
        placeholder="Search here..."
      />
      <button class="search">
        <i class="ri-search-line"></i>
      </button>
    </form>
  </div>
</template>

<style lang="scss">
.form {
  width: 100%;
  height: 44px;
  border-radius: 5px;
  background: var(--input-background);
  overflow: hidden;
  padding: 11px 16px;
  display: flex;
  align-content: center;
  justify-content: center;
  border: 1px solid #ccc;
  @include desktop {
    min-width: 413px;
    max-width: 413px;
  }

  input {
    color: var(--input-color);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    width: 100%;

    &::placeholder {
      color: var(--input-color);
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 120%;
    }
  }

  .search {
    background: transparent;
    transition: all 0.3s ease-in-out;
    &:hover {
      i {
        transform: scale(1.05);
        transition: all 0.3s ease-in-out;
      }
    }
    i {
      font-size: 22px;
    }
  }
}
</style>
