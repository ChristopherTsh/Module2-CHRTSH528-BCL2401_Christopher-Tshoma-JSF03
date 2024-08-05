import { createStore } from 'vuex';

export default createStore({
  state: {
    selectedCategory: null,
    sortOption: null,
    searchTerm: '',
    cart: [],
    wishlist: [],
    user: null,
  },
  mutations: {
    setSelectedCategory(state, category) {
      state.selectedCategory = category;
    },
    setSortOption(state, option) {
      state.sortOption = option;
    },
    setSearchTerm(state, term) {
      state.searchTerm = term;
    },
    addToCart(state, product) {
      state.cart.push(product);
    },
    removeFromCart(state, productId) {
      state.cart = state.cart.filter(product => product.id !== productId);
    },
    addToWishlist(state, product) {
      state.wishlist.push(product);
    },
    removeFromWishlist(state, productId) {
      state.wishlist = state.wishlist.filter(product => product.id !== productId);
    },
    setUser(state, user) {
      state.user = user;
    },
    logout(state) {
      state.user = null;
    }
  },
  getters: {
    getSelectedCategory(state) {
      return state.selectedCategory;
    },
    getSortOption(state) {
      return state.sortOption;
    },
    getSearchTerm(state) {
      return state.searchTerm;
    },
    cartTotal(state) {
      return state.cart.reduce((total, product) => total + product.price, 0);
    },
    isAuthenticated(state) {
      return !!state.user;
    }
  }
});
