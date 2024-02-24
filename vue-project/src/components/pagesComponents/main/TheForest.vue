<template>
	<div class="location">
		<div class="container">
			<div class="map">
				<img src="../../../../public/map.jpg" alt="" />
			</div>
			<div class="text">
				<div class="text-container">
					<h1>The Forest</h1>
					<p>
						Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are
						designed by architect Sigurd Larsen. They all have an open space
						with a double bed, a double sofa bed, kitchen, separate toilet and
						an outdoor shower. On the roof, surrounded by treetops, there is a
						terrace, which is about nine meters above ground. The cottages are
						built around tall, old trees that go through the entire cottage from
						floor to ceiling.
					</p>
					<a href="/the-area">Read More</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
.location {
	width: 100%;
	height: 650px;
	margin-top: 200px;

	.container {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.map {
			width: 50%;
			height: 100%;
			display: flex;
			justify-content: start;

			img {
				width: 200%;
			}
		}

		.text {
			width: 50%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			background: #e9ece0;

			.text-container {
				width: 60%;
				height: 60%;
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				align-items: start;

				h1 {
					font-family: 'Open Sans', sans-serif;
					font-size: 40px;
					font-weight: 400;
					line-height: 40px;
					letter-spacing: 0px;
					text-align: left;
					color: #5b6460;
				}

				p {
					font-family: 'Open Sans', sans-serif;
					font-size: 16px;
					font-weight: 300;
					line-height: 30px;
					letter-spacing: 0px;
					text-align: left;
				}

				a {
					font-family: 'Open Sans', sans-serif;
					font-size: 16px;
					font-style: italic;
					font-weight: 400;
					line-height: 30px;
					letter-spacing: 0px;
					text-align: left;
					color: #5b6460;
					text-decoration: none;
					border-bottom: 1px solid #5b6460;
				}
			}
		}
	}
}

@media screen and (max-width: 920px) {
	.map {
		display: none !important;
	}

	.text {
		min-width: 100%;
	}
}

@media screen and (max-width: 450px) {
	.location {
		margin-top: 10%;
	}

	.text-container {
		min-width: 90%;

		p {
			font-size: 15px !important;
		}
	}
}
</style>
