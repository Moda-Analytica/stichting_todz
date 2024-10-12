import 'vite/modulepreload-polyfill'
import './index.css'
import PrimeVue from 'primevue/config'
import BaseApp from '@/presets/baseapp/index'
import ConfirmationService from 'primevue/confirmationservice'
import DialogService from 'primevue/dialogservice'
import AnimateOnScroll from 'primevue/animateonscroll'
import Tooltip from 'primevue/tooltip'
import 'vue-material-design-icons/styles.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, { unstyled: true, pt: BaseApp })
app.directive('tooltip', Tooltip)
app.use(ConfirmationService)
app.use(DialogService)
app.directive('animateonscroll', AnimateOnScroll)
app.mount('#app')
