<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Socials from '@/components/footer/Socials.vue'
import ContactUs from '@/components/footer/ContactUs.vue'
import Services from '@/components/footer/Services.vue'
const today = new Date()
let year = today.getFullYear()
</script>
<template>
<footer class="relative z-[150] bg-primary p-10">
  <div class="container mx-auto">
    <div class="flex flex-col gap-8 justify-center md:flex-row">
        <Socials />
        <ContactUs />
        <Services />
      </div>

      <ul class="flex justify-center w-full gap-4 mt-10">
        <li>
          <RouterLink
            class=" text-gray-300 hover:underline"
            to="/"
          >
            Cookie Policy
          </RouterLink>
        </li>
        <!-- <li>
          <Link
            class=" text-gray-300 hover:underline"
            to="/privacy_notice"
          >
            Privacy Notice
          </Link>
        </li>
        <li>
          <Link class=" text-gray-300 hover:underline" to="/terms_of_use">
            Terms of Use
          </Link>
        </li> -->
      </ul>

      <div class="text-center">
        Copyright &copy; {{year}}{{' '}}
        <a class="text-gray-400" href="/">
          Stichting Spring of Life
        </a>
      </div>
    </div>
  </footer>
</template>