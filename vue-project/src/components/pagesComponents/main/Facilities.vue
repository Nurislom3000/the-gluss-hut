<template>
	<div class="Facilities">
		<div class="container">
			<h1>Facilities</h1>
			<div class="icons">
				<div v-for="icon in this.icons" :key="icon.url" class="icon">
					<img :src="icon.url" :alt="icon.url" />
					<span>{{ icon.title }}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			icons: [
				{
					url: '../../../public/fridge.svg',
					title: 'Mini fridge',
				},
				{
					url: '../../../../public/kitchen.svg',
					title: 'Kitchenette',
				},
				{
					url: '../../../../public/coffee.svg',
					title: 'Coffee machine',
				},
				{
					url: '../../../../public/Frame.svg',
					title: 'Electric tea kettle',
				},
				{
					url: '../../../../public/Frame.svg',
					title: 'Parking',
				},
				{
					url: '../../../../public/trees.svg',
					title: 'Breathtaking views',
				},
				{
					url: '../../../../public/temperature.svg',
					title: 'Floor heating',
				},
				{
					url: '../../../../public/plug.svg',
					title: '230V',
				},
				{
					url: '../../../../public/wifi.svg',
					title: 'Parking',
				},
				{
					url: '../../../../public/shower.svg',
					title: 'Shower',
				},
				{
					url: '../../../../public/toilet.svg',
					title: 'Flushing toilets',
				},

				{
					url: '../../../../public/towels.svg',
					title: 'Bedding & towels',
				},
			],
		}
	},
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');

.Facilities {
	width: 100%;
	height: 970px;
	background: #5b6460;
	display: flex;
	justify-content: center;
	align-items: center;

	.container {
		height: 90%;
		width: 90%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;

		h1 {
			color: #ffffff;
			font-family: 'Open Sans', sans-serif;
			font-size: 40px;
			font-weight: 300;
			line-height: 40px;
			letter-spacing: 0px;
			text-align: center;
		}

		.icons {
			width: 90%;
			height: 70%;
			display: grid;
			grid-template-columns: 25% 25% 25% 25%;

			.icon {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				text-align: center;
			}

			span {
				margin-top: 20px;
				font-family: 'Open Sans', sans-serif;
				font-size: 18px;
				font-weight: 400;
				line-height: 28px;
				letter-spacing: 0px;
				text-align: center;
				color: #ffffff;
			}
		}
	}
}

@media screen and (max-width: 830px) {
	.Facilities {
		.container {
			min-width: 100%;
			.icons {
				min-height: 90%;
				grid-template-columns: 33.33% 33.33% 33.33%;
			}
		}
	}
}

@media screen and (max-width: 442px) {
	.Facilities {
		height: 1500px;

		.container {
			min-width: 100%;
			.icons {
				min-height: 90%;
				grid-template-columns: 50% 50% !important;
			}
		}
	}
}
</style>
