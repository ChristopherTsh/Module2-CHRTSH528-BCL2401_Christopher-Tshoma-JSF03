<!-- <template>
  <div v-for="item in product" :key="item.id">
  <h1  class="bg-red">{{ item.title }}</h1>
  <p>{{ item.price }}</p>
  

</div>
</template>

<script>
import Button from "./components/Button.vue";
import axios from "axios"


export default {
name: "App",

  
  data(){
    return{
      product: []
          }
  }

,
  async mounted(){
    let results = await axios.get("https://fakestoreapi.com/products");
    this.product = results.data;
    
  }
}
</script> -->

<script setup>
import Button from './components/Button.vue';
</script>

<template>
  <div class="space-y-5">
    <div class="flex gap-5">
      <Button intent="view product">Primary</Button>
    </div>
  </div>
</template>

