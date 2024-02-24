<template>
	<div>
		<Header />
		<main>
			<Intro />
			<TheCabins />
			<TheForest />
			<Facilities />
			<Overlooks />
			<StayInTouch />
		</main>
		<Footer />
	</div>
</template>

<script>
import Intro from '@/components/pagesComponents/main/Intro.vue'
import TheCabins from '@/components/pagesComponents/main/TheCabins.vue'
import TheForest from '@/components/pagesComponents/main/TheForest.vue'
import Facilities from '@/components/pagesComponents/main/Facilities.vue'
import Overlooks from '@/components/pagesComponents/main/Overlooks.vue'
import StayInTouch from '@/components/pagesComponents/main/StayInTouch.vue'

export default {
	components: {
		Intro,
		TheCabins,
		TheForest,
		Facilities,
		Overlooks,
		StayInTouch,
	},
}
</script>

<style scoped></style>
