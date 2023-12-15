import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import './assets/themes/ui/theme.scss';

const app = createApp(App).mount('#app');
app.use(PrimeVue);
