<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import Button from "./Button.vue";

const props = defineProps({
  darkCard: {
    type: Boolean,
    default: false,
  },
  cardImage: {
    type: String,
    default: "",
  },
  cardTitle: {
    type: String,
    default: "",
  },
  cardDescription: {
    type: String,
    default: "",
  },
  cardPrice: {
    type: Number,
    default: 0,
  },
  cardCategory: {
    type: String,
    default: "",
  },
  cardId: {
    type: Number,
    required: true,
  },
});

const router = useRouter();

const cardClass = computed(() => {
  return 'max-w-sm rounded overflow-hidden shadow-lg p-6';
});

const viewProduct = () => {
  router.push(`/product/${props.cardId}`);
};
</script>

<template>
  <div :class="[cardClass, darkCard ? 'bg-gray-800 text-white' : 'bg-white text-gray-800']">
    <img class="w-full" :src="cardImage" alt="Product Image" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ cardTitle }}</div>
      <p class="text-base">{{ cardCategory }}</p>
      <p class="text-base font-semibold mt-2">${{ cardPrice }}</p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <Button @click="viewProduct" intent="view product">View Product</Button>
    </div>
  </div>
</template>

<style scoped>
/* Your styles here */
</style>
