<template>
	<div class="rules">
		<div class="container">
			<div class="hut-rules">
				<h2>Hut rules</h2>
				<p class="someInfo">
					Check-in: 2:00 PM - 11:00 PM
					<br />
					Checkout: 11:00 AM
					<br />
					Not suitable for children and infants
					<br />
					No smoking
					<br />
					No pets
				</p>
			</div>
			<div class="Cancellation-policy">
				<h2>Cancellation policy</h2>
				<p>
					Free cancellation until 1:00 PM on Mar 27 <br />
					After that, cancel before 2:00 PM on Apr 1 and get a 50% refund, minus
					the first night and service fee.
				</p>
			</div>
			<div class="ImportantInformation">
				<h2>Important Information</h2>
				<p>
					You need to hike a steep hill to arrive at the treehouses, it takes
					approx 20-30 minutes <br />
					on a trail with stairs and uneven ground.
				</p>
			</div>
			<div class="link">
				<button @click="$router.push('/FAQ')">read FAQ</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
.rules {
	display: flex;
	justify-content: start;

	.container {
		width: 43%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-left: 10%;

		h2 {
			font-family: 'Open Sans';
			font-size: 24px;
			font-weight: 600;
			line-height: 24px;
			letter-spacing: 0px;
			text-align: left;
			color: #5b6460;
			padding-bottom: 20px;
			border-bottom: 0.7px solid #5b6460;
		}

		p {
			font-family: 'Open Sans';
			font-size: 16px;
			font-weight: 400;
			line-height: 28px;
			letter-spacing: 0px;
			text-align: left;
			color: #333333;
			margin-top: 24px;
		}

		.link {
			margin-top: 100px;
			margin-bottom: 100px;
			width: 80vw;
			display: flex;
			justify-content: center;

			button {
				width: 20%;
				height: 55px;
				background: #5b6460;
				color: #fff;
				font-family: 'Open Sans';
				text-transform: uppercase;
				border: 0.7px solid #5b6460;
			}
		}
	}
}

@media screen and (max-width: 740px) {
	.rules {
		width: 80%;
		margin-top: 10%;

		.container {
			width: 100%;
			justify-content: center;
			h2,
			p {
				text-align: center !important;
			}

			.link {
				button {
					width: 300px;
				}
			}
		}
	}
}
</style>
