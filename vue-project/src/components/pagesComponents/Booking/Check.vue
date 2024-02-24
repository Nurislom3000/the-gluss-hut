<template>
	<div class="checking">
		<div class="title">
			<h2>3.200kr</h2>
			<span> / night</span>
		</div>
		<div class="someInfo">
			<div class="checkIn">
				<h2>Check in</h2>
				<span>4/29/2021</span>
			</div>
			<div class="checkOut">
				<h2>Check out</h2>
				<span>4/30/2021</span>
			</div>
			<div class="Guests">
				<h2>Guests</h2>
				<button @click="$store.commit('personRemover')">-</button>
				<span>{{ $store.state.guests }}</span>
				<button
					@click="$store.state.guests++, ($store.state.totalPrice += 3200)"
				>
					+
				</button>
			</div>
		</div>
		<button @click="$router.push('/payment'), checkAdder()" class="book">
			BOOK
		</button>
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
		<div class="apply">
			<input type="text" placeholder="Coupon Code" /> <button>APPLY</button>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		checkAdder() {
			localStorage.setItem('guests', JSON.stringify(this.$store.state.guests))
			localStorage.setItem(
				'morePluses',
				JSON.stringify(this.$store.state.morePluses)
			)
		},
	},
	mounted() {
		this.$store.commit('adder')
	},
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');

.checking {
	width: 30%;
	height: 100%;
	border: 0.7px solid #5b6460;
	padding: 21px;

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
			button {
				text-align: left;
				font-size: 20px;
				border: none;
				background: rgba($color: #000000, $alpha: 0);
			}

			span {
				font-family: 'Open Sans';
				font-size: 14px;
				font-weight: 400;
				text-align: left;
			}
		}
	}

	.book {
		margin-top: 7%;
		width: 100%;
		height: 50px;
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

	.apply {
		margin-top: 3%;
		height: 50px;
		display: flex;
		justify-content: space-between;
		align-items: center;

		input {
			width: 75%;
			height: 100%;
			font-family: 'Open Sans';
			font-size: 16px;
			font-weight: 400;
			line-height: 18px;
			letter-spacing: 0px;
			text-align: left;
			border-radius: 0;
			border: 0.7px solid #5b6460;
			font-family: 'Open Sans';
			font-size: 16px;
			font-weight: 400;
			line-height: 18px;
			letter-spacing: 0px;
			text-align: left;
			padding-left: 5%;
		}

		button {
			width: 25%;
			height: 110%;
			background: #5b6460;
			border: none;
		}
	}
}

@media screen and (max-width: 740px) {
	.checking {
		width: 80%;
	}
}
</style>
