<template>
	<div class="touch">
		<div class="container">
			<div class="text">
				<h1>Stay in touch with us</h1>
				<span>Vesterborg, Denmark</span>
				<p class="contacts">
					<span>+123 456 789 000</span>
					<span>info@theglasshuts.com</span>
				</p>
				<div class="socialMedia">
					<a target="_blank" href="https://t.me/MotiveX_BestMotivation"
						><img src="/Instagramm.svg" alt="#"
					/></a>
					<a target="_blank" href="https://t.me/MotiveX_BestMotivation"
						><img src="/facebook.svg" alt="#"
					/></a>
					<a target="_blank" href="https://t.me/MotiveX_BestMotivation"
						><img src="/twitter.svg" alt="#"
					/></a>
				</div>
			</div>
			<div class="img">
				<img src="/book-a-hut.jpg" alt="#" />
				<div @click="$router.push('/booking')" class="booking">
					<div class="book-now">
						<button>book now</button>
					</div>
					<div class="price">
						<div class="price-container">
							<span>from</span>
							<h5 style="align-self: center">€3.200</h5>
							<span style="align-self: end">per night</span>
						</div>
					</div>
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
.touch {
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 150px;
	margin-bottom: 133px;

	.img {
		img {
			margin-bottom: -2%;
		}
		.booking {
			display: flex;
			width: 386px;
			height: 100px;

			.book-now {
				width: 65%;
				height: 100%;

				button {
					width: 100%;
					height: 100%;
					background: #5b6460;
					font-family: 'Readex Pro', sans-serif;
					text-transform: uppercase;
					color: white;
					border: none;
					font-size: 18px;
					font-weight: 300;
					line-height: 28px;
					letter-spacing: 1px;
					text-align: center;
				}
			}

			.price {
				width: 35%;
				height: 100%;
				background: #e9ece0;
				display: flex;
				justify-content: center;
				align-items: center;

				.price-container {
					width: 60%;
					height: 60%;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					font-family: 'Readex Pro', sans-serif;

					span {
						font-size: 12px;
						font-weight: 300;
						line-height: 18px;
						letter-spacing: 0px;
						text-align: left;
					}

					h5 {
						line-height: 0;
						margin: 0;
						font-size: 22px;
						font-weight: bold;
						line-height: 28px;
						letter-spacing: 0px;
						text-align: left;
					}
				}
			}
		}
	}

	.container {
		height: 70%;
		width: 75%;
		display: flex;
		justify-content: space-between;
		align-items: end;

		.text {
			min-height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			h1 {
				font-family: 'Open Sans', sans-serif;
				font-size: 40px;
				font-weight: 400;
				line-height: 60px;
				letter-spacing: 0px;
				text-align: left;
				color: #5b6460;
			}

			span {
				font-family: 'Open Sans', sans-serif;
				font-size: 16px;
				font-weight: 300;
				line-height: 30px;
				letter-spacing: 0px;
				text-align: left;
				color: #5b6460;
				margin-top: 30px;
			}

			p {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				height: 30%;
				margin-top: 20px;

				span {
					margin-top: 0;
					font-family: 'Open Sans', sans-serif;
					font-size: 16px;
					font-weight: 300;
					line-height: 30px;
					letter-spacing: 0px;
					text-align: left;
				}
			}

			.socialMedia {
				margin-top: 30px;
				width: 65%;
				display: flex;
				justify-content: space-between;
			}
		}
	}
}

@media screen and (max-width: 1094px) {
	.container {
		min-width: 90%;
	}
}

@media screen and (max-width: 920px) {
	.container {
		display: flex;
		flex-direction: column;
		align-items: center !important;
		width: 100%;

		.text {
			span {
				text-align: center !important;
			}
		}

		.socialMedia {
			min-width: 40%;
			align-self: center;
			display: flex;
			justify-content: space-between;
		}

		.img {
			margin-top: 10%;
		}
	}
}

@media screen and (max-width: 450px) {
	.text {
		h1 {
			font-size: 9.2vw !important;
		}
	}
}

@media screen and (max-width: 385px) {
	.img {
		max-width: 100vw;
		display: flex;
		flex-direction: column;
		align-items: center;

		img {
			max-width: 90%;
		}

		.booking {
			max-width: 90%;
		}
	}
}
</style>
