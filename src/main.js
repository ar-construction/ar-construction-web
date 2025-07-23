import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import Lara from '@primeuix/themes/lara';
import { inject } from '@vercel/analytics';
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';

import '@/assets/styles.scss';
import 'leaflet/dist/leaflet.css';

const app = createApp(App);

app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Lara
    }
});
app.use(ToastService);
app.use(ConfirmationService);

inject();

app.mount('#app');
