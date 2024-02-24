<template>
	<div class="theOutside">
		<div class="container">
			<div class="img">
				<img src="../../../../public/AboutUsOutside.png" alt="" />
			</div>
			<div class="text">
				<h2>
					“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.”
				</h2>

				<p>
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem
					accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
					ab illo inventore veritatis et quasi architecto beatae vitae dicta
					sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
					aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
					qui ratione voluptatem sequi nesciunt.
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');

.theOutside {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 650px;
	margin-top: 150px;

	.container {
		width: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;

		.text {
			width: 40%;

			h2 {
				font-family: 'Open Sans';
				color: #5b6460;
				font-size: 40px;
				font-weight: 400;
				line-height: 40px;
				letter-spacing: 0px;
				text-align: left;
			}

			.links {
				display: flex;
				justify-content: space-between;
				width: 50%;
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

@media screen and (max-width: 1050px) {
	.theOutside {
		margin-top: 10%;
		height: auto;

		.img {
			max-width: 95%;
			img {
				width: 100%;
			}
		}

		.container {
			flex-direction: column;

			.text {
				min-width: 100%;
				display: flex;
				flex-direction: column;
				align-items: center;

				h2 {
					text-align: center !important;
					font-size: 100%;
					line-height: 130%;
				}

				p {
					text-align: center !important;
					margin-top: 3%;
					font-size: 70%;
					line-height: 160%;
				}
			}
		}
	}
}
</style>
