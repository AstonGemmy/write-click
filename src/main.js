import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import './styles/index.css'
import './styles/icons.css'

createApp(App).use(router).mount('#app')
