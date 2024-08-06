<template>
  <div>
    <h1>Wishlist</h1>
    <div v-if="wishlist.length === 0">Your wishlist is empty.</div>
    <div v-else>
      <div v-for="product in wishlist" :key="product.id">
        <p>{{ product.title }} - {{ product.price }}</p>
        <button @click="removeFromWishlist(product.id)">Remove</button>
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
