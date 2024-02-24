<template>
	<div class="Booking">
		<Header />
		<main class="bought" v-if="isBought == true">
			<h1>You have already booked it</h1>
			<h1>😁</h1>
		</main>
		<main v-else>
			<Intro />
			<div class="buying">
				<Choosing />
				<Check />
			</div>
			<Rules />
		</main>
		<Footer />
	</div>
</template>

<script>
import Intro from '@/components/pagesComponents/Booking/Intro.vue'
import Choosing from '@/components/pagesComponents/Booking/Choosing.vue'
import Check from '@/components/pagesComponents/Booking/Check.vue'
import Rules from '@/components/pagesComponents/Booking/Rules.vue'
export default {
	computed: {
		isBought() {
			try {
				return JSON.parse(localStorage.getItem('isBought'))
			} catch (error) {
				return false
			}
		},
	},

	components: { Intro, Choosing, Check, Rules },
}
</script>

<style lang="scss" scoped>
.bought {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 86vh;

	h1 {
		font-family: sans-serif;
		font-size: 100px;
		color: #6c757d;
	}
}

.buying {
	display: flex;
	justify-content: space-around;
	margin-top: 8%;
}

@media screen and (max-width: 740px) {
	.buying {
		flex-direction: column;
		align-items: center;
	}
}
</style>
