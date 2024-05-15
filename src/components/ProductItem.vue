<script>
import axios from 'axios';

export default {
    data(){
    return {
      api: []
    }
  },
  methods: {
    async apiRequest() {
       await axios.get('https://fakestoreapi.com/products')
        .then(response => {
            this.api = response.data;
        })
        .catch(error => {
            console.log('Erro ao recuperar dados;', error)
        })
    }
  },
  created() {
    this.apiRequest();
  }
}
</script>

<template>
    <ul class="product-list">
      <li class="product-item" v-for="item in api" :key="item.id">
        <figure>
          <img :src="item.image" :alt="item.title">
          <button class="wishlist"><i class="ri-heart-3-line"></i></button>
        </figure>
        <div class="product-item-content">
          <div class="product-item-name">
            <h2 class="name">{{ item.title }}</h2>
            <h4 class="price">{{ item.price }}</h4>
          </div>
          <button class="btn-buy"><i class="ri-shopping-cart-2-line"></i></button>
        </div>
      </li>
    </ul>
</template>