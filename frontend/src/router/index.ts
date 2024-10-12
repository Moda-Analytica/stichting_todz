import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PictureGalleryView from '@/views/PictureGalleryView.vue'
import AboutUsView from '@/views/AboutUsView.vue'
import ProjectsView from '@/views/ProjectsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/picture_gallery',
      name: 'picture_gallery',
      component: PictureGalleryView
    },
    {
      path: '/about_us',
      name: 'about_us',
      component: AboutUsView
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView
    },
  ]
})

export default router
