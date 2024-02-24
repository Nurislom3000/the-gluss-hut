import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import UI from '@/components/UI'
import store from '@/store'

const app = createApp(App)

UI.forEach(component => {
	app.component(component.name, component)
})

app.use(store).use(router)

app.mount('#app')
