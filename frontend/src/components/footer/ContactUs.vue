<script setup lang="ts">
import BaseStylishHeader from '@/components/base/BaseStylishHeader.vue'
import PhoneIcon from 'vue-material-design-icons/Phone.vue'
import EmailOutlineIcon from 'vue-material-design-icons/EmailOutline.vue'
import MapMarkerOutlineIcon from 'vue-material-design-icons/MapMarkerOutline.vue'
</script>

<template>
  <div class="flex-1">
    <BaseStylishHeader>Contact us</BaseStylishHeader>
    <ul class="flex flex-col gap-4 mt-4">
      <li class="flex gap-4 items-start">
        <span class="mt-2">
          <PhoneIcon />
        </span>
        <div>
          <h5 class=" font-bold">Hotline:</h5>
          <p> 0685130025, 0619244550, 064672980</p>
        </div>
      </li>
      <li class="flex gap-4">
        <span class="mt-2">
          <EmailOutlineIcon />
        </span>

        <div>
          <h5>Email:</h5>
          <p>
            <a href="mailto:info@modanalytica.com">info@todz.com</a>
          </p>
        </div>
      </li>
      <li class="flex gap-4">
        <span class="mt-2">
          <MapMarkerOutlineIcon />
        </span>

        <div>
          <h5>Address:</h5>
          <p>
            Lindeplein 3, 2712VE Zoetermeer.
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
