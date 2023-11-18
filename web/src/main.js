import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHashHistory } from 'vue-router'
import PsalmOne from './PsalmOne.vue'
import PsalmTwo from './PsalmTwo.vue'
import PsalmThree from './PsalmThree.vue'

const routes = [
	{ path: '/1', component: PsalmOne, name: 'PsalmOne' },
	{ path: '/2', component: PsalmTwo, name: 'PsalmTwo' },
	{ path: '/3', component: PsalmThree, name: 'PsalmThree' }

]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

const app = createApp(App)

app.use(router)

app.mount('#app')
