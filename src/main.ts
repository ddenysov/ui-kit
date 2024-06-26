import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primeicons/primeicons.css'
import '/node_modules/primeflex/primeflex.css';
import '@/app/default/assets/scss/main.scss';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/app/default/ui/App.vue'
import PrimeVue from 'primevue/config';
import BadgeDirective from 'primevue/badgedirective';
import './app/default/assets/all.scss';
import { createWebHistory, createRouter } from 'vue-router'

import TheLandingPage from './pages/landing/TheLandingPage.vue'
import TheSignUpPage from '@/pages/auth/ui/TheSignUpPage.vue'
import TheSignInPage from '@/pages/auth/ui/TheSignInPage.vue'
import TheCreateEventPage from '@/pages/event/TheCreateEventPage.vue'

const routes = [
  { path: '/', component: TheLandingPage },
  { path: '/sign-up', component: TheSignUpPage },
  { path: '/sign-in', component: TheSignInPage },
  { path: '/create-event', component: TheCreateEventPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)

app.use(createPinia())
app.use(PrimeVue)
app.use(router)
app.directive('badge', BadgeDirective);

app.mount('#app')
