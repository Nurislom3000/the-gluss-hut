<template>
	<div class="Nature">
		<div class="container">
			<div class="text">
				<h2>Experiences in nature</h2>
				<div class="links">
					<a href="#">Lorem ipsum</a>
				</div>
				<p>
					Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are
					designed by architect Sigurd Larsen. They all have an open space with
					a double bed, a double sofa bed, kitchen, separate toilet and an
					outdoor shower. On the roof, surrounded by treetops, there is a
					terrace, which is about nine meters above ground. The cottages are
					built around tall, old trees that go through the entire cottage from
					floor to ceiling.
				</p>
			</div>
			<div class="img">
				<img src="/Nature.jpg" alt="" />
			</div>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');

.Nature {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;

	.container {
		width: 80%;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.img {
			width: 45%;

			img {
				width: 100%;
			}
		}

		.text {
			width: 40%;

			h2 {
				font-family: 'Open Sans';
				color: #5b6460;
				font-size: 40px;
				font-weight: 400;
				line-height: 100%;
				letter-spacing: 0px;
				text-align: left;
			}

			.links {
				display: flex;
				justify-content: space-between;
				width: 40%;
				margin-top: 50px;

				a {
					text-decoration: none;
					font-family: 'Open Sans';
					font-size: 18px;
					font-style: italic;
					font-weight: 400;
					line-height: 30px;
					letter-spacing: 0px;
					text-align: left;
					color: #5b6460;
				}
			}

			p {
				margin-top: 48px;
				font-family: 'Open Sans';
				font-size: 16px;
				font-weight: 300;
				line-height: 30px;
				letter-spacing: 0px;
				text-align: left;
			}
		}
	}
}

@media screen and (max-width: 937px) {
	.Nature {
		margin-top: 15%;
		height: auto;
		.container {
			display: flex;
			flex-direction: column;
			width: 90%;

			.img {
				min-width: 100%;
				img {
					min-width: 100%;
				}
			}

			.text {
				min-width: 100%;

				h2 {
					text-align: center !important;
				}

				.links {
					width: 100%;
					a {
						width: 100%;
						text-align: center !important;
					}
				}

				p {
					text-align: center !important;
					font-size: 100%;
				}
			}
		}
	}
}
</style>
