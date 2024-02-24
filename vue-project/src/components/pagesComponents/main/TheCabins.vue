<template>
	<div class="the-cabins">
		<div class="container">
			<div class="the-cabin">
				<div class="text">
					<h2>The Cabins</h2>
					<p>
						Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are
						designed by architect Sigurd Larsen. They all have an open space
						with a double bed, a double sofa bed, kitchen, separate toilet and
						an outdoor shower. On the roof, surrounded by treetops, there is a
						terrace, which is about nine meters above ground. The cottages are
						built around tall, old trees that go through the entire cottage from
						floor to ceiling.
					</p>
					<a href="/the-hut">Read More</a>
				</div>
				<img src="../../../../public/the-cabinsIMG.jpg" alt="" />
			</div>
			<div class="frames">
				<img src="../../../../public/frame1.jpg" alt="" />
				<img src="../../../../public/frame2.jpg" alt="" />
				<img src="../../../../public/frame3.jpg" alt="" />
			</div>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital@0;1&display=swap');

.the-cabins {
	margin-top: 147px;
	display: flex;
	justify-content: center;
	align-items: center;

	.container {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;

		.the-cabin {
			width: 100%;
			display: flex;
			justify-content: end;
			align-items: center;

			.text {
				width: 30%;
				margin-right: 13%;

				h2 {
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
					text-decoration: none;
					border-bottom: 1.5px solid #5b6460;
					color: #5b6460;
					font-family: 'Open Sans', sans-serif;
					font-size: 16px;
					font-weight: 600;
					line-height: 30px;
					letter-spacing: 0px;
					text-align: left;
				}
			}

			img {
				width: 50%;
			}
		}

		.frames {
			margin-top: 10%;
			width: 100%;
			display: flex;
			justify-content: space-around;

			img {
				width: 30%;
			}
		}
	}
}

@media screen and (max-width: 1024px) {
	.the-cabin {
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;

		.text {
			min-width: 90%;
			text-align: center !important;
			margin: 0 !important;

			h2 {
				display: flex;
				justify-content: center;
			}

			p {
				margin: 0 0 2% 0 !important;
				text-align: center !important;
			}
		}

		img {
			margin-top: 5%;
			min-width: 80%;
		}
	}
}

@media screen and (max-width: 426px) {
	.the-cabin {
		height: 500px;
		margin: 0;
	}
	.text {
		p {
			font-size: 12px !important;
		}

		a {
			line-height: 50px !important;
		}
	}
}
</style>
