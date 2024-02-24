<template>
	<div class="Fillials">
		<div class="container">
			<div class="text">
				<h2>Lorem ipsum dolor sit amet, consectetur adipiscing...</h2>
			</div>
			<div class="map">
				<img src="../../../../public/mapFillials.png" alt="#" />
			</div>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');

.Fillials {
	display: flex;
	justify-content: center;
	margin-top: 100px;
}

.container {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 60%;

	.map {
		margin-left: 4%;
		min-width: 50%;

		img {
			width: 100%;
		}
	}

	h2 {
		font-family: 'Open Sans';
		font-size: 40px;
		font-weight: 400;
		line-height: 56px;
		letter-spacing: 0px;
		text-align: left;
		color: #5b6460;
	}
}

@media screen and (max-width: 1000px) {
	.container {
		min-width: 95%;
	}
}

@media screen and (max-width: 660px) {
	.container {
		flex-direction: column;

		h2 {
			text-align: center !important;
		}
	}
}
</style>
