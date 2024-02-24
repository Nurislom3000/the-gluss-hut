<template>
	<footer>
		<div class="container">
			<form class="newsLetter">
				<h4>Newsletter</h4>
				<input placeholder="Email Adrdess" type="email" />
				<p>
					Sign up to our newsletter for special things and receive <br />
					10% off your next order.
				</p>
				<span>© 2021 The Glass Huts</span>
			</form>
			<div class="links">
				<div class="moreInfo">
					<a target="blank" href="https://hebron.dk/persondatapolitik/"
						>TERMS AND CONDITIONS</a
					>
					<a target="blank" href="https://hebron.dk/persondatapolitik/"
						>CENCELLATION POLICY</a
					>
					<a target="blank" href="https://hebron.dk/persondatapolitik/"
						>PRIVACY POLICY</a
					>
				</div>
				<div class="payingSystem">
					<a href="/booking"
						><img src="../../../../public/paypal-logo 1.svg" alt="#"
					/></a>
					<a href="/booking"
						><img src="../../../../public/masterCard.svg" alt="#"
					/></a>
					<a href="/booking"
						><img src="../../../../public/visa.svg" alt="#"
					/></a>
					<a href="/booking"
						><img src="../../../../public/bank.svg" alt="#"
					/></a>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'Footer',
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;1,300&display=swap');

footer {
	width: 100%;
	height: 477px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #5b6460;

	.container {
		width: 80%;
		height: 80%;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.newsLetter {
			height: 100%;
			display: flex;
			flex-direction: column;
			align-items: start;

			h4 {
				font-family: 'Open Sans', sans-serif;
				font-size: 16px;
				font-weight: 600;
				line-height: 30px;
				letter-spacing: 0px;
				text-align: left;
				color: #ffffff;
			}

			input {
				margin-top: 4%;
				font-family: 'Open Sans', sans-serif;
				border: none;
				border-bottom: 1px solid #efefef;
				background: rgba($color: #000000, $alpha: 0);
				width: 432px;
				padding-bottom: 7px;
				font-size: 16px;
				font-style: italic;
				font-weight: 300;
				line-height: 30px;
				letter-spacing: 0px;
				text-align: left;
			}

			p {
				font-family: 'Open Sans', sans-serif;
				font-size: 16px;
				font-weight: 300;
				line-height: 30px;
				letter-spacing: 0px;
				text-align: left;
				color: #ffffff;
				opacity: 0.5;
			}

			span {
				font-family: 'Open Sans', sans-serif;
				font-size: 14px;
				font-weight: 300;
				line-height: 30px;
				letter-spacing: 0px;
				text-align: left;
				opacity: 70%;
				color: #fff;
				margin-top: 18%;
			}
		}

		.links {
			width: 50%;
			height: 80%;
			display: flex;
			flex-direction: column;

			.moreInfo {
				width: 95%;
				align-self: end;
				display: flex;
				justify-content: space-between;
				align-items: center;

				a {
					font-family: 'Montserrat', sans-serif;
					font-size: 14px;
					font-weight: 300;
					line-height: 24px;
					letter-spacing: 0px;
					text-align: left;
					color: #fff;
					text-decoration: none;
				}
			}

			.payingSystem {
				width: 50%;
				align-self: end;
				margin-top: 10%;
				display: flex;
				justify-content: space-between;
			}
		}
	}
}

@media screen and (max-width: 1469px) {
	.links {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 40% !important;
		.moreInfo {
			height: 40%;

			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}

		.payingSystem {
			min-width: 100%;
		}
	}
}

@media screen and (max-width: 1000px) {
	.newsLetter {
		max-width: 40% !important;
		input {
			max-width: 100%;
		}
	}
}

@media screen and (max-width: 1000px) {
	footer {
		height: 600px;
	}
	.container {
		display: flex;
		flex-direction: column !important;

		.newsLetter {
			min-width: 100%;
			align-items: center !important;
			span {
				margin-top: 2% !important;
			}
		}

		.links {
			margin-top: 10% !important;
			a {
				margin-top: 10px;
			}

			.payingSystem {
				min-width: 100% !important;
			}
		}
	}
}

@media screen and (max-width: 646px) {
	.newsLetter {
		h4 {
			font-size: 100% !important;
		}

		p {
			text-align: center !important;
		}
	}

	.links {
		background: #5b6460;
		min-width: 70%;
		.moreInfo {
			min-width: 100% !important;

			a {
				text-align: center !important;
			}
		}
	}
}

@media screen and (max-width: 440px) {
	.container {
		min-width: 100%;

		.newsLetter {
			input {
				max-width: 95%;
			}

			p {
				max-width: 95%;
			}
		}
	}
}
</style>
