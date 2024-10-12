<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import MenuIcon from 'vue-material-design-icons/Menu.vue'

const options = ref([
  { label: 'About', to: '/about_us' },
  { label: 'Projects', to: '/projects' },
  { label: 'Picture Gallery', to: '/picture_gallery'},
])

const router = useRouter()
const showDropdown = ref(false)

const navigate = (option) => {
  router.push(option.to)
  showDropdown.value = false
}

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
}
</script>

<template>
  <div class="relative inline-block text-left">
    <button @click="toggleDropdown" class="inline-flex justify-center w-full rounded-md border border-gray-300">
      <MenuIcon class="text-6xl bg-blue-100"/>
    </button>

    <div v-if="showDropdown" class="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
      <div>
        <a
          v-for="(option, index) in options"
          :key="index"
          @click="navigate(option)"
          href="#"
          class="block px-4 py-2 text-3xl text-gray-700 hover:bg-gray-100 ml-8 mr-8 mb-6"
        >
          {{ option.label }}
        </a>
      </div>
    </div>
  </div>
</template>


