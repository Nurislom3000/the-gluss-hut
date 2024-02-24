<template>
	<div class="StayInTouch">
		<div class="container">
			<h2 id="touch">Stay in touch with us</h2>

			<div class="registration">
				<div class="text">
					<span> Vesterborg, Denmark</span>
					<p>
						+123 456 789 000 <br />
						info@theglasshuts.com
					</p>
					<div class="imgs">
						<a target="_blank" href="https://t.me/MotiveX_BestMotivation"
							><img src="../../../../public/Instagramm.svg" alt="#"
						/></a>
						<a target="_blank" href="https://t.me/MotiveX_BestMotivation"
							><img src="../../../../public/facebook.svg" alt="#"
						/></a>
						<a target="_blank" href="https://t.me/MotiveX_BestMotivation"
							><img src="../../../../public/twitter.svg" alt="#"
						/></a>
					</div>
				</div>
				<form v-if="isForm != true" @submit.prevent.stop>
					<div class="names">
						<input type="text" placeholder="First Name" />
						<input type="text" placeholder="Last Name" />
					</div>
					<input type="email" placeholder="Email" />
					<input type="text" placeholder="Subject" />
					<textarea rows="10" placeholder="Message"></textarea>
					<button @click="submit">SEND</button>
				</form>

				<form v-else>
					<input type="text" placeholder="Subject" />
					<textarea rows="10" placeholder="Message"></textarea>
					<button>SEND</button>
				</form>
			</div>

			<div class="WithLove">
				<img src="../../../../public/with-love.svg" alt="" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		isForm() {
			try {
				return JSON.parse(localStorage.getItem('formSend'))
			} catch (error) {
				return false
			}
		},
	},

	methods: {
		submit() {
			localStorage.setItem('formSend', JSON.stringify(true))
			location.reload()
		},
	},
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
.StayInTouch {
	margin-top: 150px;
	width: 100%;
	display: flex;
	justify-content: center;
	height: 1067px;

	.container {
		width: 80%;

		h2 {
			font-family: 'Open Sans';
			font-size: 40px;
			font-weight: 400;
			line-height: 60px;
			letter-spacing: 0px;
			text-align: left;
			color: #5b6460;
		}

		.registration {
			margin-top: 100px;
			display: flex;
			justify-content: space-between;
			height: 35%;

			.text {
				span {
					font-family: 'Open Sans';
					font-size: 16px;
					font-weight: 300;
					line-height: 30px;
					letter-spacing: 0px;
					text-align: left;
					color: #000000;
				}

				p {
					margin-top: 20px;
					font-family: 'Open Sans';
					font-size: 16px;
					font-weight: 300;
					line-height: 30px;
					letter-spacing: 0px;
					text-align: left;
					color: #000000;
				}

				.imgs {
					margin-top: 50px;
					width: 140%;
					display: flex;
					justify-content: space-between;
				}
			}
		}

		form {
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			width: 50%;
			height: 130%;

			.names {
				display: flex;
				justify-content: space-between;

				input {
					width: 40%;
				}
			}

			input,
			textarea {
				border: 0.7px solid #5b6460;
				padding: 16px 22px;
				color: #5b6460;
				font-family: 'Open Sans';
				font-size: 16px;
				font-weight: 400;
				line-height: 18px;
				letter-spacing: 0px;
				text-align: left;
			}

			button {
				background: #5b6460;
				width: 30%;
				align-self: end;
				border: none;
				height: 10%;
				font-family: 'Open Sans';
				font-size: 14px;
				font-weight: 300;
				line-height: 28px;
				letter-spacing: 1px;
				text-align: center;
				color: #fff;
			}
		}

		.WithLove {
			margin-top: 20%;
			width: 100%;
			display: flex;
			justify-content: center;
		}
	}
}

@media screen and (max-width: 1200px) {
	.StayInTouch {
		.container {
			min-width: 95%;

			h2 {
				line-height: 100% !important;
			}
		}
	}
}

@media screen and (max-width: 600px) {
	.StayInTouch {
		height: 1000px;
		margin: 25%;
		.container {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			height: 100%;

			h2 {
				text-align: center;
				margin: 0;
			}

			.registration {
				margin-top: 0;
				height: 70%;
				width: 100%;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: space-between;

				.text {
					display: flex;
					flex-direction: column;
					align-items: center;

					p {
						text-align: center;
						margin: 0;
					}
				}

				form {
					margin-top: 5%;
					width: 95%;
				}
			}

			.WithLove {
				margin: 0;
			}
		}
	}
}
</style>
