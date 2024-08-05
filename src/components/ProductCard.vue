<script setup>
import { computed} from 'vue';
import { cva } from 'class-variance-authority';
import Button from "./Button.vue";

const props = defineProps({
  as:{
    type: [Boolean,String,Number],
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
    default: "",
  },
  cardCategory: {
    type: String,
    default: "",
  },

  },

 Card:{
  validator: (val) => ['product card', 'viewed car'].includes(val),
  default: 'product card',
 }, 
});

const CardClass = computed(() => {
  return cva({
   
    variats: {
      Card: {
        'product card': 'max-w-sm rounded overflow-hidden shadow-lg p-6',
        'viewed card': 'fixed inset-0 z-30 flex items-end justify-center bg-black/20 p-4 pb-8 backdrop-blur-md sm:items-center lg:p-8',
      }
    }

  }

  )
}),
 

</script>

<template>
  <component
    :class="[
      darkCard ? 'bg-gray-800 text-white' : 'bg-white text-gray-800',
    ]"
  >
    <img class="w-2/5" :src="cardImage" alt="Product Image" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ cardTitle }}</div>
      <p class="text-base">
        {{ cardCategory }}
      </p>
      <p class="text-base font-semibold mt-2">${{ cardPrice }}</p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <Button intent="view product">View Product</Button>
    </div>
  </component>

  <component
  :is="props.as" :class="viewed card">
  <img class="w-2/5" :src="cardImage" alt="Product Image" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ cardTitle }}</div>
      <p class="text-base">
        {{ cardCategory }}
      </p>
      <p class="text-base font-semibold mt-2">${{ cardPrice }}</p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <Button intent="Go back">View Product</Button>
    </div>

  </component>
</template>
