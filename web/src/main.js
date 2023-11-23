import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import PsalmOne from '../../PsalmOne.vue'
import PsalmTwo from '../../PsalmTwo.vue'
import PsalmThree from '../../PsalmThree.vue'
import PsalmFour from '../../PsalmFour.vue'
import PsalmFive from '../../PsalmFive.vue'
import PsalmSix from '../../PsalmSix.vue'
import PsalmSeven from '../../PsalmSeven.vue'
import PsalmEight from '../../PsalmEight.vue'

const routes = [
	{ path: '/1', component: PsalmOne, name: 'PsalmOne' },
	{ path: '/2', component: PsalmTwo, name: 'PsalmTwo' },
	{ path: '/3', component: PsalmThree, name: 'PsalmThree' },
	{ path: '/4', component: PsalmFour, name: 'PsalmFour' },
	{ path: '/5', component: PsalmFive, name: 'PsalmFive' },
	{ path: '/6', component: PsalmSix, name: 'PsalmSix' },
	{ path: '/7', component: PsalmSeven, name: 'PsalmSeven' },
	{ path: '/8', component: PsalmEight, name: 'PsalmEight' }
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

const app = createApp(App)

app.use(router)

app.mount('#app')
