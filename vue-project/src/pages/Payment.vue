<template>
	<div>
		<Header />
		<main>
			<div class="paying">
				<div class="personal-info">
					<h2>Personal Information</h2>
					<div class="inputs">
						<div class="section1">
							<input
								v-model="userInfo.name"
								placeholder="First Name"
								type="text"
							/>
							<input
								v-model="userInfo.surname"
								placeholder="Last Name"
								type="email"
							/>
							<input v-model="userInfo.email" placeholder="Email" type="text" />
							<input
								v-model="userInfo.phone"
								placeholder="Phone number"
								type="text"
							/>
						</div>
						<br />
						<br />
						<div class="section2">
							<input
								v-model="userInfo.address"
								placeholder="Address"
								type="text"
							/>
							<input
								v-model="userInfo.postalCode"
								placeholder="Postal code"
								type="tel"
							/>
							<input v-model="userInfo.city" placeholder="City" type="text" />
							<input
								v-model="userInfo.country"
								placeholder="Country"
								type="text"
							/>
						</div>
					</div>
				</div>
				<div class="pay-with">
					<div class="title">
						<h2>Pay with</h2>
						<div class="imgs">
							<img src="../../public/paypal-logo 1.svg" alt="" />
							<img src="../../public/masterCard.svg" alt="" />
							<img src="../../public/visa.svg" alt="" />
							<img src="../../public/bank.svg" alt="" />
						</div>
					</div>
					<div class="inputs">
						<select aria-placeholder="12" v-model="cardInfo.type">
							<option selected disabled value="T">Credit or debit card</option>
							<option value="credit">Credit</option>
							<option value="debit">Debit</option>
						</select>
						<input
							v-model="cardInfo.number"
							placeholder="Card number"
							type="number"
							class="cardNumber"
						/>
						<div class="section1">
							<input
								v-model="cardInfo.expiration"
								placeholder="Expiration"
								type="text"
								class="Expiration"
							/>
							<input
								v-model="cardInfo.CCV"
								placeholder="CCV"
								type="text"
								class="CCV"
							/>
						</div>
						<div class="section2">
							<input
								v-model="cardInfo.ZIP"
								placeholder="ZIP code "
								type="password"
								class="Expiration"
							/>
							<select v-model="cardInfo.country">
								<option selected disabled value="C">Country</option>
								<option value="UZB">UZB</option>
								<option value="RUS">RUS</option>
							</select>
						</div>
					</div>
				</div>
				<div class="additional-information">
					<h2>Additional Information</h2>
					<textarea v-model="message" rows="4">Leave a message</textarea>
					<div class="acception">
						<input @click="accept = !accept" class="choosed" type="checkbox" />
						<p>I have read and accept <span>Terms & Conditions</span></p>
					</div>
					<button @click="adder">confirm and pay</button>
				</div>
			</div>

			<div class="checking">
				<div class="title">
					<h2>The Glass Hut</h2>
					<span>Vesterborg, Denmark</span>
				</div>
				<div class="someInfo">
					<div class="checkIn">
						<h2>Check in</h2>
						<span>4/29/2021</span>
					</div>
					<div class="checkOut">
						<h2>Check out</h2>
						<span>4/37/2021</span>
					</div>
					<div class="Guests">
						<h2>Guests</h2>
						<span>{{ $store.state.guests }}</span>
					</div>
				</div>
				<div class="moreInfo">
					<p>
						<span>3.200kr x {{ $store.state.guests }} guests</span>
						<span> {{ 3200 * $store.state.guests }}kr</span>
					</p>
					<p v-for="plus in $store.state.morePluses" :key="plus.title">
						<span>{{ plus.title }}</span> <span> {{ plus.price }}kr</span>
					</p>
					<p style="color: #41906d">
						<span>10% discount</span> <span> -200kr</span>
					</p>
				</div>
				<div class="total">
					<h2>Total</h2>
					<span>{{ $store.state.totalPrice }}kr</span>
				</div>
			</div>
		</main>
		<Footer />
	</div>
</template>

<script>
export default {
	data() {
		return {
			totalPrice: 0,
			accept: false,

			userInfo: {
				name: '',
				surname: '',
				email: '',
				phone: '',
				address: '',
				postalCode: '',
				city: '',
				country: '',
			},

			cardInfo: {
				type: 'T',
				number: '',
				expiration: '',
				CCV: '',
				ZIP: '',
				country: 'C',
			},

			message: '',
		}
	},

	methods: {
		adder() {
			const obj = this.userInfo
			const obj2 = this.cardInfo
			this.cardInfo.number = this.cardInfo.number.toString()

			const userInfoValue = Object.keys(obj)
				.filter(key => obj[key].length >= 3)
				.reduce((acc, key) => {
					acc[key] = obj[key]
					return acc
				}, {})

			const cardInfoValue = Object.keys(obj2)
				.filter(key => obj2[key].length >= 3)
				.reduce((acc, key) => {
					acc[key] = obj2[key]
					return acc
				}, {})

			if (
				Object.keys(userInfoValue).length >= 8 &&
				Object.keys(cardInfoValue).length >= 6 &&
				this.accept == true
			) {
				this.$store.state.userInfo = this.userInfo
				this.$store.state.cardInfo = this.cardInfo
				this.$store.state.message = this.message
				this.$router.push('/')
				localStorage.setItem('isBought', JSON.stringify(true))
			} else {
				alert('Please fill in all fields before proceeding.')
			}
		},
	},

	mounted() {
		this.$store.commit('adder')
	},
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');

main {
	margin-top: 5%;
	display: flex;
	justify-content: space-around;

	.paying {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 40%;

		h2 {
			font-family: 'Open Sans';
			font-size: 24px;
			font-weight: 400;
			line-height: 24px;
			letter-spacing: 0px;
			text-align: left;
			color: #5b6460;
			padding-bottom: 24px;
			border-bottom: 0.7px solid #5b6460;
		}
		.inputs {
			margin-top: 24px;
			width: 100%;

			.section1,
			.section2 {
				width: 100%;
				display: grid;
				grid-template-columns: 45% 45%;
				grid-column-gap: 5%;
				grid-row-gap: 15%;

				input {
					width: 100%;
					height: 50px;
					font-family: 'Open Sans';
					font-size: 16px;
					font-weight: 400;
					line-height: 18px;
					letter-spacing: 0px;
					text-align: left;
					padding-left: 5%;
				}
			}
		}

		.pay-with {
			margin-top: 20%;
			height: 400px;
			.title {
				width: 100%;
				display: flex;
				justify-content: space-between;
				border-bottom: 0.7px solid #5b6460;
				padding-bottom: 13px;

				h2 {
					border: none;
					margin: 0;
					line-height: 0;
					padding: 0;
					display: flex;
					align-items: center;
				}

				.imgs {
					width: 40%;
					display: flex;
					justify-content: space-between;
					align-items: center;
				}
			}

			.inputs {
				height: 70%;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: center;

				select {
					height: 50px;
					width: 100%;
					padding: 0 0 0 2%;
					font-family: 'Open Sans';
					font-size: 16px;
					font-weight: 400;
					line-height: 18px;
					letter-spacing: 0px;
					text-align: left;
					color: #828282;
				}

				.cardNumber {
					padding-left: 2%;
					height: 50px;
					width: 97%;
					font-family: 'Open Sans';
					font-size: 16px;
					font-weight: 400;
					line-height: 18px;
					letter-spacing: 0px;
					text-align: left;
					color: #828282;
				}

				.section1 {
					width: 100%;
					display: grid;
					grid-template-columns: 48.5% 48.5%;
					grid-gap: 0;
				}

				.section2 {
					display: grid;
					grid-template-columns: 44.5% 51%;

					select {
						height: 100%;
					}
				}
			}
		}

		.additional-information {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			height: 338px;
			margin: 100px 0 150px 0;

			textarea {
				border: 0.7px solid #5b6460;
				padding: 16px 0 0 22px;
				font-family: 'Open Sans';
				color: #828282;
				font-size: 16px;
				font-weight: 400;
				line-height: 18px;
				letter-spacing: 0px;
				text-align: left;
			}

			.acception {
				display: flex;
				align-items: center;

				.choosed {
					width: 20px;
					height: 20px;
					background: #5b6460;
					border-radius: 100px;
					padding: 4px;
				}

				p {
					margin-left: 2%;
					font-family: 'Open Sans';
					font-size: 16px;
					font-weight: 400;
					line-height: 28px;
					letter-spacing: 0px;
					text-align: left;

					span {
						font-weight: 700;
					}
				}
			}

			button {
				border: 1px solid #5b6460;
				height: 60px;
				width: 60%;
				background: #5b6460;
				font-family: 'Open Sans';
				font-size: 14px;
				font-weight: 300;
				line-height: 28px;
				letter-spacing: 1px;
				text-align: center;
				text-transform: uppercase;
				color: #fff;
			}
		}
	}
}

/*-----------------------------------------------------------------*/

.checking {
	width: 432px;
	height: 100%;
	border: 0.7px solid #5b6460;
	padding: 21px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	.title {
		display: flex;
		align-items: center;

		h2 {
			font-family: 'Open Sans';
			font-size: 24px;
			color: #333333;
			font-weight: 600;
			line-height: 40px;
			letter-spacing: 0px;
			text-align: left;
		}

		span {
			font-family: 'Open Sans';
			font-size: 16px;
			font-weight: 400;
			line-height: 40px;
			letter-spacing: 0px;
			text-align: left;
			margin-left: 2%;
		}
	}

	.someInfo {
		display: flex;
		justify-content: space-around;
		align-items: start;
		border: 0.7px solid #5b6460;
		padding: 5px 0 10px 0;

		h2 {
			font-family: 'Open Sans';
			color: #333333;
			font-size: 12px;
			font-weight: 600;

			text-align: left;
		}

		span {
			font-family: 'Open Sans';
			font-size: 14px;
			font-weight: 400;

			text-align: left;
		}

		.Guests {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}

	.book {
		margin-top: 7%;
		width: 100%;
		height: 10%;
		background: #5b6460;
		border: 1px solid #5b6460;
		font-family: 'Open Sans';
		font-size: 14px;
		font-weight: 300;
		line-height: 28px;
		letter-spacing: 1px;
		text-align: center;
		color: #fff;
	}

	.moreInfo {
		display: flex;
		flex-direction: column;
		justify-content: start;
		height: 30%;
		margin-top: 4%;
		border-bottom: 0.7px solid #5b6460;
		padding-bottom: 10%;

		p {
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-family: 'Open Sans';
			font-size: 16px;
			font-weight: 400;
			line-height: 18px;
			letter-spacing: 0px;
			text-align: left;
		}
	}

	.total {
		display: flex;
		justify-content: space-between;
		align-items: center;

		h2,
		span {
			font-family: 'Open Sans';
			color: #333333;
			font-size: 20px;
			font-weight: 600;
			line-height: 18px;
			letter-spacing: 0px;
			text-align: left;
		}
	}
}

@media screen and (max-width: 960px) {
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		min-height: auto;
		margin-bottom: 10%;

		.paying {
			width: 90%;
			.additional-information {
				margin: 20% 0 20% 0;
				min-width: 100%;
			}

			.pay-with {
				margin-top: 40%;
				.title {
					display: flex;
					justify-content: space-between;
					padding-bottom: 10%;
				}

				.imgs {
					display: none;

					img {
						display: none;
					}
				}
			}

			.additional-information {
				margin-top: 6%;
			}
		}

		.checking {
			max-width: 80%;

			.title {
				h2 {
					font-size: 110% !important;
					width: 50%;
				}

				span {
					font-size: 60% !important;
				}
			}
		}
	}
}
</style>
