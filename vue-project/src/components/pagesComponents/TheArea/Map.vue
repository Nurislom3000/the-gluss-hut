<template>
	<div class="map">
		<a href="/"><img src="/We-are-here.svg" alt="" /></a>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.map {
	width: 100%;
	height: 650px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	background-image: url('/BigMap.png');
	background-size: 100% 100%;
	background-repeat: no-repeat;
	background-color: rgba(51, 51, 51, 60%);
	background-blend-mode: multiply;
}

@media screen and (max-width: 820px) {
	.map {
		height: auto;
		padding: 10% 0 10% 0;
	}
}
</style>
