<script setup lang="ts">
import BaseCard from '@/components/base/BaseCard.vue'
import Divider from 'primevue/divider'

</script>
<template>
  <div class="flex items-center flex-cols mr-32 ml-32">
    <BaseCard>
      <div class="relative rounded-2xl overflow-hidden">
        <p class="text-black text-2xl lg:text-2xl font-semibold text-left">
          Our mission is to uplift individuals and families through targeted programs and services that address their unique challenges and enhance their overall well-being.
        </p>
      </div>
    </BaseCard>

    <Divider layout="vertical"/>
    <BaseCard>
      <img src="/image-15.jpg" alt="Random image" class="w-full h-full object-cover rounded-2xl" />
    </BaseCard>

  </div>
  <Divider />
  <div class="flex items-center flex-cols mr-32 ml-32">
    <BaseCard>
      <img src="/image-19.jpg" alt="Random image" class="w-full h-full object-cover rounded-2xl" />
    </BaseCard>
    <BaseCard>
      <div class="relative rounded-2xl overflow-hidden">
        <p class="text-black text-2xl lg:text-2xl font-semibold text-left">
          Our mission is to uplift individuals and families through targeted programs and services that address their unique challenges and enhance their overall well-being.
        </p>
      </div>
    </BaseCard>
  </div>
  <Divider />
  <BaseCard class="h-64 bg-blue-400 mr-32 ml-32">
    <p class="text-black text-2xl lg:text-2xl font-semibold text-left">
      Our mission is to uplift individuals and families through targeted programs and services that addresses their unique challenges and enhance their overall well-being.
    </p>
  </BaseCard>
</template>
