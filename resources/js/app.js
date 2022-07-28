import './bootstrap';

import { createApp } from 'vue';
import router from './router.js'

import { createPinia } from 'pinia'

import App from './layouts/App.vue'

createApp(App)
    .use(router)
    .use(createPinia())
    .mount("#app")

