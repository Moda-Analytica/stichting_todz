<script setup lang="ts">
import { socials } from '@/components/Dynamic'
</script>


<template>
  <div class="flex-1">
    <img src="/logo_todz.svg" alt="logo" class="max-w-[150px]" />
    <p class="py-4">
      Spring of Life is a registered foundation committed to fostering community engagement,
      supporting single parents, providing psychological assistance, and promoting general empowerment.
    </p>
    <ul class="flex gap-4 items-center">
      <li v-for="social in socials" :key="social.id">
        <a
          class="w-10 h-10 flex items-center justify-center rounded-md border duration-200 hover:scale-105"
          :href="social.link"
          target="_blank"
          rel="noreferrer"
        >
          <component :is="social.icon" />
        </a>
      </li>
    </ul>
  </div>
</template>
