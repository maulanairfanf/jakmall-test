import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.styl'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')
