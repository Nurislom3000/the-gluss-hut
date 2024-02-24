<template>
	<div class="theOutside">
		<div class="container">
			<div class="img" v-if="electricCharge == false">
				<img src="../../../../public/Outside.jpg" alt="" />
			</div>
			<div class="img" v-else>
				<img src="../../../../public/electrickCarCharge.png" alt="" />
			</div>
			<div class="text">
				<h2>The Outside</h2>
				<div class="links">
					<a
						:class="{
							isCharged: electricCharge == false,
						}"
						@click.prevent.stop
						@click="electricCharge = false"
						href=""
						>Hot tube</a
					>
					<a
						style="margin-left: 30px"
						:class="{
							isCharged: electricCharge == true,
						}"
						@click.prevent.stop
						@click="electricCharge = true"
						href=""
						>Electric car change</a
					>
				</div>
				<p>
					Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are
					designed by architect Sigurd Larsen. They all have an open space with
					a double bed, a double sofa bed, kitchen, separate toilet and an
					outdoor shower. On the roof, surrounded by treetops, there is a
					terrace, which is about nine meters above ground.
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			electricCharge: false,
		}
	},
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');

.isCharged {
	border-bottom: 1px solid #5b6460;
}

.theOutside {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 650px;

	.container {
		width: 80%;
		display: flex;
		justify-content: space-between;

		.img {
			width: 45%;

			img {
				width: 100%;
				height: 400px;
			}
		}

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

@media screen and (max-width: 1242px) {
	.theOutside {
		height: 900px;
		.container {
			min-width: 95%;
			flex-direction: column !important;
			align-items: center !important;
			.img {
				max-height: 90%;
				width: 500px !important;
			}
			.links {
				width: 100%;
				justify-content: center;
			}
			.text {
				width: 100%;
				p {
					font-size: 14px;
				}
				h2,
				p {
					text-align: center !important;
				}
			}
		}
	}
}

@media screen and (max-width: 500px) {
	.theOutside {
		.container {
			.img {
				display: flex;
				justify-content: center;
				width: 95% !important;

				img {
					width: 100%;
					height: auto;
				}
			}
		}
	}
}
</style>
