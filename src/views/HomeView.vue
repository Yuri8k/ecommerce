<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";

export default {
  data(){
    return {
      api: []
    }
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    apiRequest() {
      fetch('https://fakestoreapi.com/products')
            .then((r) => r.json())
            .then((r) => {
              this.api = r;
              console.log(r)
            })
    }
  },
  created() {
    this.apiRequest();
  }
};
</script>

<template>
  <div>
    <Header />
    <ul class="product-list">
      <li class="product-item" v-for="item in api" :key="item.index">
        <figure>
          <img :src="item.image" :alt="item.title">
        </figure>
        <h3 class="product-item-title">{{ item.title }}</h3>
        <div class="product-item-content">
          <span class="product-item-price">{{ item.price }}</span>
          <span class="product-item-rate">{{ item.rating.rate }}</span>
        </div>
      </li>
    </ul>
    <Footer />
  </div>
</template>
