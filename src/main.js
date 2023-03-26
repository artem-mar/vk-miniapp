import { createApp } from 'vue'
import App from './App.vue'
import bridge from '@vkontakte/vk-bridge'
import 'bulma/css/bulma.css'
import router from './router'
import store from './store'

bridge.send('VKWebAppInit')

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
