import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-light-green/theme.css'

const app = createApp(App).mount('#app');
app.use(PrimeVue);
