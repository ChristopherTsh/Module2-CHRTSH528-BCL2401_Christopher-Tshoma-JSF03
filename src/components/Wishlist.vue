<template>
    <h1 class="text-2xl font-bold mb-4 mt-4 flex flex-col items-center">Wishlist</h1>
     <div class="flex justify-center">
      
      <div v-if="wishlist.length === 0" class="text-gray-500">Your wishlist is empty.</div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" v-else>
        <div v-for="product in wishlist" :key="product.id" class="mb-4 p-4 border rounded shadow-sm w-80">
          <p class="text-lg font-semibold">{{ product.title }}</p>
          <p class="text-gray-700">{{ product.price }}</p>
          <button 
            @click="removeFromWishlist(product.id)" 
            class="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useStore } from 'vuex';
  
  export default {
    setup() {
      const store = useStore();
  
      const removeFromWishlist = (productId) => {
        store.commit('removeFromWishlist', productId);
      };
  
      return {
        wishlist: store.state.wishlist,
        removeFromWishlist,
      };
    }
  };
  </script>
  