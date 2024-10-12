<script setup lang="ts">
import BaseHeader from '@/components/base/BaseHeader.vue'
import HeaderLinks from '@/components/HeaderLinks.vue'
import PictureGallerySlides from '@/components/PictureGallerySlides.vue'
import BaseFooter from '@/components/base/BaseFooter.vue'
import LandingPageBody from '@/components/LandingPageBody.vue'

</script>

<template>
  <BaseHeader>
    <HeaderLinks class="absolute right-16 top-56"/>
  </BaseHeader>
  <PictureGallerySlides />
  <LandingPageBody />
  <BaseFooter />
</template>


