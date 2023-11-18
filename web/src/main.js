import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHashHistory } from 'vue-router'
import PsalmOne from './PsalmOne.vue'

const routes = [
	{ path: '/1', component: PsalmOne, name: 'PsalmOne' }

]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

const app = createApp(App)

app.use(router)

app.mount('#app')
