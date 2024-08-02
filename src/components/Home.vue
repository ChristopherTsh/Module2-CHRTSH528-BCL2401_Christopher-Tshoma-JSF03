<script>
import {ref, onMounted }from 'vue'
import ProductCard from './components/ProductCard.vue';
import Navbar from './components/Navbar.vue';
import axios from "axios"


export default {
name: "App",
components:{
  ProductCard,
},

  setup(){

     const products = ref( []);

onMounted(async () => {
    try{
    const results = await axios.get("https://fakestoreapi.com/products");
    products.value = results.data;
    }catch(error){
      console.error('Error fetching products:',error);

  }
});
return{
  products
};
}
};
</script>




<template>
    <Navbar />
  <div class="container mx-auto p-4">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :cardImage="product.image"
        :cardTitle="product.title"
        :cardDescription="product.description"
        :cardPrice="product.price"
        :cardCategory="product.category"
      />
    </div>
  </div>
</template>
