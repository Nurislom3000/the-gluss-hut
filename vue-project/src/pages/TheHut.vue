<template>
	<div class="TheHut">
		<Header />
		<Intro />
		<TheOutside />
		<TheInside />
		<Practicalities />
		<Footer />
	</div>
</template>

<script>
import Intro from '@/components/pagesComponents/TheHut/Intro.vue'
import TheInside from '@/components/pagesComponents/TheHut/TheInside.vue'
import TheOutside from '@/components/pagesComponents/TheHut/TheOutside.vue'
import Practicalities from '@/components/pagesComponents/TheHut/Practicalities.vue'
export default {
	components: { Intro, TheOutside, TheInside, Practicalities },
}
</script>

<style lang="scss" scoped>
.TheHut {
	width: 100vw;
}
</style>
