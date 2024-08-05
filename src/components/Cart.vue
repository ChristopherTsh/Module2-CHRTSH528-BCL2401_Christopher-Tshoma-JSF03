<template>
    <div>
      <h1>Cart</h1>
      <div v-if="cart.length === 0">Your cart is empty.</div>
      <div v-else>
        <div v-for="product in cart" :key="product.id">
          <p>{{ product.title }} - {{ product.price }}</p>
          <button @click="removeFromCart(product.id)">Remove</button>
        </div>
        <p>Total: {{ cartTotal }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import { useStore } from 'vuex';
  
  export default {
    setup() {
      const store = useStore();
  
      const removeFromCart = (productId) => {
        store.commit('removeFromCart', productId);
      };
  
      return {
        cart: store.state.cart,
        cartTotal: store.getters.cartTotal,
        removeFromCart,
      };
    }
  };
  </script>
  