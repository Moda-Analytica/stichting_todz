<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { catchPhrases } from '@/components/Dynamic'
const currentImageIndex = ref(0)

onMounted(() => {
  setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % catchPhrases.length
  }, 5000) // change image every 2 seconds
})
</script>


<template>
  <div class="m-6 p-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl shadow-xl overflow-hidden">
    <div
      class="flex transition-transform duration-700 ease-in-out"
      :style="{ transform: `translateX(-${currentImageIndex * 100}%)` }"
    >
      <div
        v-for="(phrase, index) in catchPhrases" 
        :key="index" 
        class="flex-shrink-0 w-full text-white text-2xl lg:text-4xl font-bold tracking-wide leading-snug max-h-[200px] text-center"
      >
        {{ phrase }}
      </div>
    </div>
  </div>
</template>
