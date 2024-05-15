<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import ProductItem from "@/components/ProductItem.vue";

export default {
  components: {
    Header,
    Footer,
    ProductItem
  }
};
</script>

<template>
  <div>
    <Header />
    <ProductItem />
    <Footer />
  </div>
</template>
