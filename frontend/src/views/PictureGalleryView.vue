<script setup lang="ts">
import { pictureGallery, teams } from '@/components/Dynamic'
import TwitterIcon from 'vue-material-design-icons/Twitter.vue'
import BaseHeader from '@/components/base/BaseHeader.vue'
import { computed } from 'vue'

const enterClasses = ['animate-fadein', 'animate-fadeinright', 'animate-fadeinleft']
const leaveClasses = ['animate-fadeout', 'animate-fadeoutleft', 'animate-fadeoutright']

const getRandomEnterClass =() =>{
  const randomIndex = Math.floor(Math.random() * enterClasses.length)
  return enterClasses[randomIndex]
}
const getRandomLeaveClass =() =>{
  const randomIndex = Math.floor(Math.random() * leaveClasses.length)
  return leaveClasses[randomIndex]
}


const pictureGalleryWithAnimation = computed(()=> {
  return pictureGallery.map(picture => ({
    ...picture,
    leaveClass: getRandomLeaveClass(), 
    enterClass: getRandomEnterClass()
  }))
})
</script>



<template>
  <BaseHeader />
  <div class="card flex flex-col items-center">
    <!-- Loop through the pictureGallery -->
    <div 
      v-for="(picture, index) in pictureGalleryWithAnimation" 
      :key="index"
      class='flex bg-primary text-primary-contrast shadow-lg justify-center items-center h-full w-40 sm:h-full sm:w-2/6 rounded-2xl animate-duration-1000 mb-64 mt-4'
      v-animateonscroll="{ enterClass: picture.enterClass, leaveClass: picture.leaveClass }"
    >
      <div class="bg-white flex flex-row items-center space-x-32">
        <p class="text-xl font-bold text-blue-800 ml-4">
          {{ picture.description }}
        </p>
        <!-- Display picture from the gallery -->
        <img :src="picture.src" :alt="picture.alt">
      </div>
    </div>
    <div class="h-[30rem]"></div>
  </div>
</template>