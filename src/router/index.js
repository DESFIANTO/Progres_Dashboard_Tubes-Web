import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Dashboard
		},
		{
			path: '/about',
			component: () => import('../views/About.vue')
		},
		{
			path: '/data',
			component: () => import('../views/Data.vue')
		},
		{
			path: '/transaksi',
			component: () => import('../views/Transaksi.vue')
		},
		{
			path: '/denda',
			component: () => import('../views/Denda.vue')
		},
	],
})

export default router