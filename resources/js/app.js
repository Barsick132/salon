import Vue from 'vue'
import App from './App.vue'
import {router} from "./routes/routes";
import vuetify from "./vuetify";
import store from "./store"

import './bootstrap';

new Vue({
    el: '#app',
    render: h => h(App),
    router,
    vuetify,
    store
})
