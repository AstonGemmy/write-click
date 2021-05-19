import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store'
import router from './router/index'

import './styles/fonts.css'
import './styles/app.css'
import './styles/icons.css'
import './styles/aos.css'

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
