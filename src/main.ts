import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primeicons/primeicons.css'
import '/node_modules/primeflex/primeflex.css';
import './assets/scss/main.scss';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import BadgeDirective from 'primevue/badgedirective';


const app = createApp(App)

app.use(createPinia())
app.use(PrimeVue)
app.directive('badge', BadgeDirective);

app.mount('#app')
