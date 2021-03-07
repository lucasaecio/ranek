import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// COMPONENTS
import LoadingPage from "@/components/LoadingPage.vue";

createApp(App).use(store).use(router).component("LoadingPage", LoadingPage).mount('#app')
