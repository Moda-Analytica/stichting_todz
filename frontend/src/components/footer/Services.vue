<script setup lang="ts">
import { RouterLink } from 'vue-router'
import BaseStylishHeader from '@/components/base/BaseStylishHeader.vue'
</script>
<template>
  <div class="flex-1">
    <BaseStylishHeader>Services Links</BaseStylishHeader>
    <div class="flex flex-col gap-3 mt-4">
      <RouterLink class="hover:underline w-fit" to="/">
        Psychological Support
      </RouterLink>
      <RouterLink class="hover:underline w-fit" to="/">
        General Empowerment
      </RouterLink>
      <RouterLink class="hover:underline w-fit" to="/">
        Inquiries
      </RouterLink>
    </div>
  </div>
</template>

