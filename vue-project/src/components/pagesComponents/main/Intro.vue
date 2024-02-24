<template>
	<div class="Intro">
		<div class="container">
			<div class="text">
				<h1>Find peace in the Forest</h1>
				<p>
					Come and stay in out hut hotel near <br />
					Mariager Fjord in Denmark
				</p>
			</div>
			<div class="intro-foot">
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
@import url('https://fonts.googleapis.com/css2?family=Mulish:ital@0;1&family=Open+Sans:wght@300&display=swap');

.Intro {
	width: 100vw;
	height: 701px;
	background: url('../../public/introBG.png');
	background-size: 100% 100%;
	background-repeat: no-repeat;
	background-color: rgba(0, 0, 0, 0.27);
	background-blend-mode: multiply;

	.container {
		padding: 0 60px 0 60px;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		.text {
			margin-top: 70px;
			align-self: end;
			display: flex;
			flex-direction: column;
			align-items: end;

			h1 {
				font-family: 'Open Sans', sans-serif;
				color: white;
				font-size: 70px;
				font-weight: 300;
				line-height: 30px;
				letter-spacing: 0px;
				text-align: right;
			}

			p {
				font-family: 'Mulish', sans-serif;
				color: white;
				font-size: 20px;
				font-weight: 400;
				line-height: 28px;
				letter-spacing: 0px;
				text-align: center;
				margin-right: 84px;
			}
		}

		.intro-foot {
			display: flex;
			width: 100%;
			justify-content: space;
			align-items: center;

			.booking {
				display: flex;
				align-items: center;
				width: 383px;
				height: 100px;
				margin-bottom: -1%;

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

			.icons {
				width: 55%;
				display: flex;
				justify-content: space-between;
				align-items: start;
				margin-bottom: 40px;
				.arrows {
					width: 113px;
					display: flex;
					justify-content: space-between;
				}
			}
		}
	}
}

@media screen and (max-width: 883px) {
	.container {
		display: flex;
		justify-content: center;
		padding: 1% !important;

		.text {
			display: flex;
			justify-content: center;

			h1 {
				text-align: center !important;
				line-height: 130% !important;
				font-size: 60px !important;
			}

			p {
				min-width: 100%;
				margin: 0 !important;
				display: flex;
				justify-content: center !important;
			}
		}
	}
}

@media screen and (max-width: 1024px) {
	.Intro {
		background-size: 1400px 100%;
		background-position: center;
	}
}

@media screen and (max-width: 426px) {
	.Intro {
		height: 500px;
		.intro-foot {
			margin: 0 !important;
			height: 35%;
			justify-content: center;
			align-items: start !important;
		}
		.booking {
			max-width: 230px;
			max-height: 60px !important;

			button {
				font-size: 15px !important;
			}

			h5 {
				font-size: 15px !important;
			}

			span {
				font-size: 10px !important;
				margin: 0 !important;
				line-height: 0 !important;
			}
		}
	}
	.container {
		.text {
			h1 {
				font-size: 10vw !important;
			}

			p {
				font-size: 4vw !important;
			}
		}
	}
}
</style>
