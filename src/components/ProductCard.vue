<script setup>
import Button from "./Button.vue";

const props = defineProps({
      darkCard: {
      type: Boolean,
      default: false,
    },
    cardImage: {
      type: String,
      default:  "",
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
      default:"",
    },
    cardCategory: {
      type: String,
      default:"",
    },
});
</script>

<template>
    <div :class="['max-w-sm rounded overflow-hidden shadow-lg p-6', darkCard ? 'bg-gray-800 text-white' : 'bg-white text-gray-800']">
      <img class="w-full" :src="cardImage" alt="Product Image">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ cardTitle }}</div>
        <p class="text-base">
          {{ cardDescription }}
        </p>
        <p class="text-base font-semibold mt-2">${{ cardPrice }}</p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View Product
        </button>
      </div>
    </div>
  </template>
