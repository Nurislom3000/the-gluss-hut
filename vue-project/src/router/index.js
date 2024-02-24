import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/pages/Main.vue'
import TheHut from '@/pages/TheHut.vue'
import TheArea from '@/pages/TheArea.vue'
import AboutUs from '@/pages/AboutUs.vue'
import FAQ from '@/pages/FAQ.vue'
import Booking from '@/pages/Booking.vue'
import Payment from '@/pages/Payment.vue'
import Booked from '@/pages/Booked.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'main',
			component: Main,
		},
		{
			path: '/the-hut',
			name: 'TheHut',
			component: TheHut,
		},
		{
			path: '/the-area',
			name: 'TheArea',
			component: TheArea,
		},
		{
			path: '/about-us',
			name: 'AboutUs',
			component: AboutUs,
		},
		{
			path: '/FAQ',
			name: 'FAQ',
			component: FAQ,
		},
		{
			path: '/booking',
			name: 'Booking',
			component: Booking,
		},
		{
			path: '/payment',
			name: 'Payment',
			component: Payment,
		},
		{
			path: '/booked',
			name: 'Booked',
			component: Booked,
		},
	],
})

export default router
