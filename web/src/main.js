import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import PsalmOne from './PsalmOne.vue'
import PsalmTwo from './PsalmTwo.vue'
import PsalmThree from './PsalmThree.vue'
import PsalmFour from './PsalmFour.vue'
import PsalmFive from './PsalmFive.vue'
import PsalmSix from './PsalmSix.vue'

const routes = [
	{ path: '/1', component: PsalmOne, name: 'PsalmOne' },
	{ path: '/2', component: PsalmTwo, name: 'PsalmTwo' },
	{ path: '/3', component: PsalmThree, name: 'PsalmThree' },
	{ path: '/4', component: PsalmFour, name: 'PsalmFour' },
	{ path: '/5', component: PsalmFive, name: 'PsalmFive' },
	{ path: '/6', component: PsalmSix, name: 'PsalmSix' },
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

const app = createApp(App)

app.use(router)

app.mount('#app')
