<script setup lang="ts">
import BaseHeader from '@/components/base/BaseHeader.vue'
import { teams } from '@/components/Dynamic'
import BaseCard from '@/components/base/BaseCard.vue'
import Divider from 'primevue/divider'
</script>

<template>
  <BaseHeader />
  <div class="container px-6 py-10 mx-auto">
    <div class="flex items-center flex-row mr-32 ml-32">
      <BaseCard>
        <p class="text-black text-2xl lg:text-3xl font-semibold mr-8">
              Who we are
        </p>
      </BaseCard>
      <BaseCard>
        <div class="relative rounded-2xl overflow-hidden w-1/2">
          <p class="text-black text-xl lg:text-xl text-blue-800 text-left">
            Spring of Life is a registered foundation committed to fostering community engagement, supporting single parents, providing psychological assistance, and promoting general empowerment. Our mission is to uplift individuals and families through targeted programs and services that addresses their unique challenges and enhance their overall well-being.
          </p>
        </div>
      </BaseCard>
    </div>
    <Divider layout="horizontal" class="w-4/6"/>
    <div class="flex items-center flex-row mr-32 ml-32">
      <BaseCard>
        <p class="text-black text-2xl lg:text-3xl font-semibold mr-8">
              Our mission statement
        </p>
      </BaseCard>
      <BaseCard>
        <div class="relative rounded-2xl overflow-hidden w-1/2">
          <p class="text-black text-xl lg:text-xl text-blue-800 text-left">
            To empower communities by providing comprehensive support services for single parents, psychological counseling, and general empowerment initiatives that foster resilience, self-sufficiency, and community cohesion.         </p>
        </div>
      </BaseCard>
    </div>
    <Divider layout="horizontal" class="w-4/6"/>
  </div>



  <div class="container px-6 py-10 mx-auto">
    <div class="flex items-center flex-row mr-32 ml-32">
      <BaseCard>
        <p class="text-black text-2xl lg:text-3xl font-semibold mr-8">
              Our Executive Team
        </p>
      </BaseCard>
      <BaseCard>
        <div class="relative rounded-2xl overflow-hidden w-1/2">
          <p class="text-black text-xl lg:text-xl text-blue-800 text-left">
            Successful organisations are people-driven. The passion, diligence
            and excellence of our team makes Statsmetrics stand out in service
            and delivery.
          </p>
        </div>
      </BaseCard>
    </div>
    <div class="grid grid-cols-1 lg:px-10 gap-3 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="team in teams"
        :key="team.id"
        class="flex flex-col items-center p-6 transition-colors duration-200 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-[#2C699A]"
      >
        <img
          class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
          :alt="team.name"
          :src="team.images"
        />
        <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize group-hover:text-white">
          {{ team.name }}
        </h1>
        <p class="mt-2 text-gray-500 capitalize group-hover:text-gray-300">
          {{ team.role }}
        </p>
        <div class="flex mt-3 -mx-2 contact">
          <a
            :href="`https://${team.links}`"
            target="_blank"
            rel="noreferrer"
            class="mx-2 text-blue-600 hover:text-gray-500 group-hover:text-white"
          >
          </a>
        </div>
      </div>
    </div>
  </div>
</template>