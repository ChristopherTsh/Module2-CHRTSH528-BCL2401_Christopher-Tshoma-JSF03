<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import Button from "./Button.vue";

const route = useRoute();
const router = useRouter();

const product = ref(null);
const productId = route.params.id;

onMounted(async () => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
    product.value = response.data;
  } catch (error) {
    console.error("Error fetching product data:", error);
  }
});
</script>

<template>
  <div v-if="product" class="container mx-auto p-4">
    <div class="bg-white rounded-lg p-6 shadow-lg max-w-md mx-auto">
      <img class="w-full mb-4" :src="product.image" alt="Product Image" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ product.title }}</div>
        <p class="text-base">{{ product.category }}</p>
        <p class="text-base">{{ product.description }}</p>
        <p class="text-base font-semibold mt-2">${{ product.price }}</p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <Button @click="router.push('/')" intent="go back">Go Back</Button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Your styles here */
</style>
