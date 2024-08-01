<script>
import {ref, onMounted }from 'vue'
import ProductCard from './components/ProductCard.vue';
import { FwbDropdown} from 'flowbite-vue'
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
   <fwb-dropdown placement="right" text="Right">
    <div class="w-52">
      <p class="p-2">
        Dropdown content line one
      </p>
      <p class="p-2">
        Dropdown content line two
      </p>
      <p class="p-2">
        Dropdown content line three
      </p>
      <p class="p-2">
        Dropdown content line four
      </p>
    </div>
  </fwb-dropdown>

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
