<template>
	<div class="Practicalities">
		<div class="container">
			<div class="img">
				<img v-if="diner" src="../../../../public/classickDiner.webp" alt="" />
				<img v-else src="../../../../public/Practicalities.png" alt="" />
			</div>
			<div class="text">
				<h2>Practicalities</h2>
				<div @click.prevent.stop class="links">
					<a
						:class="{
							eat: diner == false,
						}"
						@click="diner = false"
						href="#"
						>Breakfast</a
					>
					<a
						style="margin-left: 30px"
						:class="{
							eat: diner == true,
						}"
						@click="diner = true"
						href="#"
						>Classic Dinner</a
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
			diner: false,
		}
	},
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');

.eat {
	border-bottom: 1px solid #5b6460;
}
.Practicalities {
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
				height: 500px;
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
@media screen and (max-width: 1242px) {
	.Practicalities {
		margin-top: 20%;
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
				min-width: 100%;
				justify-content: center !important;
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
	.Practicalities {
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
