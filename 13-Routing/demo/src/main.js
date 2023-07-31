import { createApp } from 'vue';

import App from './App.vue';
import Router from './router.js'

const app = createApp(App);

// connect vue app to 3rd-party pacakges
app.use(Router);

app.mount('#app');
