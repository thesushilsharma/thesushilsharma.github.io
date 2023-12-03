import { createApp } from 'vue';
import router from "./router";
import './assets/style.css';
import App from './App.vue';

const app = createApp(App);
app.use(router).mount("#app");
