import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import PsalmOne from '../../psalms/PsalmOne.vue'
import PsalmTwo from '../../psalms/PsalmTwo.vue'
import PsalmThree from '../../psalms/PsalmThree.vue'
import PsalmFour from '../../psalms/PsalmFour.vue'
import PsalmFive from '../../psalms/PsalmFive.vue'
import PsalmSix from '../../psalms/PsalmSix.vue'
import PsalmSeven from '../../psalms/PsalmSeven.vue'
import PsalmEight from '../../psalms/PsalmEight.vue'

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
