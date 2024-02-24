<template>
	<div class="TheArea">
		<Header />
		<main>
			<Intro />
			<Vesterborg />
			<Fillials />
			<h2>Activities</h2>
			<Resturants />
			<Nature />
			<FarDrive />
			<SmallTown />
			<Map />
			<Footer />
		</main>
	</div>
</template>

<script>
import Intro from '@/components/pagesComponents/TheArea/Intro.vue'
import Vesterborg from '@/components/pagesComponents/TheArea/Vesterborg.vue'
import Fillials from '@/components/pagesComponents/TheArea/Fillials.vue'
import Resturants from '@/components/pagesComponents/TheArea/Resturants.vue'
import Nature from '@/components/pagesComponents/TheArea/Nature.vue'
import FarDrive from '@/components/pagesComponents/TheArea/FarDrive.vue'
import SmallTown from '@/components/pagesComponents/TheArea/SmallTown.vue'
import Map from '@/components/pagesComponents/TheArea/Map.vue'
export default {
	components: {
		Intro,
		Vesterborg,
		Fillials,
		Resturants,
		Nature,
		FarDrive,
		SmallTown,
		Map,
	},
}
</script>

FarDrive
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');

h2 {
	margin-top: 152px;
	margin-left: 12%;
	align-self: center;
	font-family: 'Open Sans';
	font-size: 40px;
	font-weight: 400;
	line-height: 56px;
	letter-spacing: 0px;
	text-align: left;
	color: #5b6460;
}
</style>
