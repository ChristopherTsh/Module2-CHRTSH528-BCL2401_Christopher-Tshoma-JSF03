<script setup>
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
});

const emit = defineEmits(['close-view']);
</script>

<template>
  <div class="bg-white rounded-lg p-6 shadow-lg max-w-md mx-auto">
    <img class="w-full mb-4" :src="cardImage" alt="Product Image" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ cardTitle }}</div>
      <p class="text-base">{{ cardCategory }}</p>
      <p class="text-base">{{ cardDescription }}</p>
      <p class="text-base font-semibold mt-2">${{ cardPrice }}</p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <Button @click="$emit('close-view')" intent="go back">Go Back</Button>
    </div>
  </div>
</template>


