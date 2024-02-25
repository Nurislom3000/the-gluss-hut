<template>
	<div class="IMGs">
		<div class="head">
			<img src="/AboutUsIMGhead.png" alt="#" />
		</div>
		<div class="bottom">
			<img src="/AboutIMGfoot1.png" alt="" />
			<img src="/AboutIMGfoot2.png" alt="" />
			<img src="/AboutIMGfoot3.png" alt="" />
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.IMGs {
	margin-top: 7%;
	display: flex;
	flex-direction: column;
	max-width: 100%;

	.head {
		width: 100%;

		img {
			width: 100%;
		}
	}

	.bottom {
		width: 100%;
		display: flex;
		justify-content: space-around;

		img {
			width: 30%;
		}
	}
}
</style>
