<template>
	<div class="theInside">
		<div class="container">
			<div class="text">
				<h2>The Inside</h2>
				<div @click.prevent.stop class="links">
					<a
						style="margin: 0"
						:class="{
							room: room == 1,
						}"
						@click="room = 1"
						href="#"
						>Space</a
					>
					<a
						:class="{
							room: room == 2,
						}"
						@click="room = 2"
						href="#"
						>Kitchen</a
					>
					<a
						:class="{
							room: room == 3,
						}"
						@click="room = 3"
						href="#"
						>Bathroom</a
					>
				</div>
				<p>
					Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are
					designed by architect Sigurd Larsen. They all have an open space with
					a double bed, a double sofa bed, kitchen, separate toilet and an
					outdoor shower. On the roof, surrounded by treetops, there is a
					terrace, which is about nine meters above ground. The cottages are
					built around tall, old trees that go through the entire cottage from
					floor to ceiling.
				</p>
			</div>
			<div class="img">
				<img v-if="room == 1" src="../../../../public/TheInside.png" alt="" />
				<img v-if="room == 2" src="../../../../public/kitchen.jpg" alt="" />
				<img v-if="room == 3" src="../../../../public/bathroom.jpg" alt="" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			room: 3,
		}
	},
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');

.room {
	border-bottom: 1px solid #5b6460;
}
.theInside {
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
				width: 100%;
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
					margin-left: 30px;
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
	.theInside {
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
	.theInside {
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
