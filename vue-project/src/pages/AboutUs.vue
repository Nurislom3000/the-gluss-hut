<template>
	<div>
		<Header />
		<main>
			<Intro />
			<TheOutside />
			<h2>Lorem ipsum dolor sit amet, consectetur adipiscing...</h2>
			<IMGs />
			<StayInTouch />
		</main>
		<Footer />
	</div>
</template>

<script>
import Intro from '@/components/pagesComponents/AboutUs/Intro.vue'
import TheOutside from '@/components/pagesComponents/AboutUs/TheOutside.vue'
import IMGs from '@/components/pagesComponents/AboutUs/IMGs.vue'
import StayInTouch from '@/components/pagesComponents/AboutUs/StayInTouch.vue'
export default {
	components: { Intro, TheOutside, IMGs, StayInTouch },
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');

main {
	display: flex;
	flex-direction: column;
	align-items: center;
}

h2 {
	margin-top: 150px;
	font-family: 'Open Sans';
	color: #5b6460;
	width: 700px;
	font-size: 40px;
	font-weight: 400;
	line-height: 56px;
	letter-spacing: 0px;
	text-align: left;
}

@media screen and (max-width: 750px) {
	h2 {
		font-size: 5vw !important;
		max-width: 90%;
		line-height: 120%;
		margin-top: 20%;
	}
}
</style>
