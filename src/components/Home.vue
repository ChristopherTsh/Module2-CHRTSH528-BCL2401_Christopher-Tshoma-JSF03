<template>
  <!-- Dropdown -->
  <div class="flex-auto inline-flex">
    <button
      @click="toggleDropdown"
      class="text-white bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg dark:bg-blue-600 focus:outline-none dark:focus:ring-blue-800 hover:bg-blue-800 dark:hover:bg-blue-700 text-sm px-4 py-2 inline-flex items-center"
    >
      category
      <svg
        class="w-4 h-4 ml-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 9l-7 7-7-7"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        ></path>
      </svg>
    </button>
    <div
      v-if="isOpen"
      class="absolute z-10 bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 left-0 mt-2"
    >
      <ul
        class="overflow-hidden w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      >
        <li
          v-for="category in categories"
          :key="category"
          class="inline-flex items-center w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600 cursor-pointer"
          @click="filterProductsByCategory(category)"
        >
          {{ category }}
        </li>
      </ul>
    </div>
  </div>

  <!-- Product List -->
  <div class="container mx-auto p-4">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :cardImage="product.image"
        :cardTitle="product.title"
        :cardDescription="product.description"
        :cardPrice="product.price"
        :cardCategory="product.category"
        @view-product="selectProduct(product)"
      />
    </div>
  </div>

  <!-- Viewed Product Card -->
  <div v-if="selectedProduct" class="fixed inset-0 z-30 flex items-center justify-center bg-black/50 backdrop-blur-md">
    <ViewedCard
      :cardImage="selectedProduct.image"
      :cardTitle="selectedProduct.title"
      :cardDescription="selectedProduct.description"
      :cardPrice="selectedProduct.price"
      :cardCategory="selectedProduct.category"
      @close-view="selectedProduct = null"
    />
  </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import ProductCard from "./ProductCard.vue";
import ViewedCard from "./ViewedCard.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    ProductCard,
    ViewedCard,
  },

  setup() {
    const products = ref([]);
    const categories = ref([]);
    const isOpen = ref(false);
    const selectedCategory = ref(null);
    const selectedProduct = ref(null);

    const toggleDropdown = () => {
      isOpen.value = !isOpen.value;
    };

    const filterProductsByCategory = (category) => {
      selectedCategory.value = category;
      isOpen.value = false; // Close the dropdown after selecting a category
    };

    const selectProduct = (product) => {
      selectedProduct.value = product;
    };

    const filteredProducts = computed(() => {
      if (selectedCategory.value) {
        return products.value.filter(
          (product) => product.category === selectedCategory.value
        );
      }
      return products.value;
    });

    onMounted(async () => {
      try {
        const productsResponse = await axios.get(
          "https://fakestoreapi.com/products"
        );
        products.value = productsResponse.data;

        const categoriesResponse = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        categories.value = categoriesResponse.data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    });

    return {
      products,
      categories,
      isOpen,
      selectedCategory,
      toggleDropdown,
      filterProductsByCategory,
      filteredProducts,
      selectedProduct,
      selectProduct,
    };
  },
};
</script>

<!-- <style scoped>
/* Your styles here */
</style> -->
