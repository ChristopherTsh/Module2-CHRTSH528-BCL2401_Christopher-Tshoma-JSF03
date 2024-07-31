<template>
  <div v-for="item in product" :key="item.id">
  <h1>{{ item.title }}</h1>
  <p>{{ item.price }}</p>
  

</div>
</template>

<script>
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
</script>
