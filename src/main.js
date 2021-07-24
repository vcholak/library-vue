import { createApp } from 'vue';
// import axios from 'axios';
// import VueAxios from 'vue-axios';
import App from './App.vue';
import router from "./router";
//TODO import store from './store';

const app = createApp(App);
app.use(router);
// app.use(VueAxios, axios);
//app.store = store;
//app.use(store);
app.mount('#app');

//createApp(App).use(router).mount('#app');
