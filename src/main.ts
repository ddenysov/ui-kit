import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primeicons/primeicons.css'
import '/node_modules/primeflex/primeflex.css';
import '@/app/main/assets/scss/main.scss';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './app/main/ui/App.vue'
import PrimeVue from 'primevue/config';
import BadgeDirective from 'primevue/badgedirective';


import { createMemoryHistory, createRouter } from 'vue-router'

import TheLandingPage from './pages/landing/TheLandingPage.vue'

const routes = [
  { path: '/', component: TheLandingPage },
  { path: '/about', component: TheLandingPage },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

const app = createApp(App)

app.use(createPinia())
app.use(PrimeVue)
app.use(router)
app.directive('badge', BadgeDirective);

app.mount('#app')
