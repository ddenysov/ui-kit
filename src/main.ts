import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import './assets/themes/ui/theme.scss';
import 'primeflex/primeflex.css'

const app = createApp(App);
app.use(PrimeVue);
