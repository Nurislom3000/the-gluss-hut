<template>
	<div class="all">
		<div class="accordion">
			<h2>Choose Additional Services</h2>
			<TransitionGroup class="list" name="list" tag="ul">
				<div
					class="accordion-section"
					v-for="(section, index) in sections"
					:key="index"
					@click="toggleSection(index)"
				>
					<h3 class="accordion-header" :class="{ open: section.isOpen }">
						<img
							@click.prevent.stop
							@click="
								;(section.isBuy = true),
									$store.state.morePluses.push(section),
									($store.state.totalPrice += section.price)
							"
							v-if="section.isBuy == false"
							src="/AddChoose.svg"
							alt=""
						/>
						<img
							@click.prevent.stop
							@click="
								;(section.isBuy = false),
									($store.state.morePluses = $store.state.morePluses.filter(
										i => i.title != section.title
									)),
									($store.state.totalPrice -= section.price),
									filterer(section.title)
							"
							v-else
							src="/Choosed.svg"
							alt="#"
							class="chosed"
						/>
						<div class="p">
							<div class="innerP">{{ section.title }}</div>
							<span>400kr</span>
						</div>
					</h3>

					<TransitionGroup name="list" tag="ul">
						<div
							v-if="section.isOpen"
							:class="{
								isOpened: section.isOpen,
								notOpened: section.isOpen == false,
							}"
							class="accordion-content"
							:style="{
								maxHeight: section.isOpen ? '1000px' : '0',
								padding: section.isOpen ? '10px' : '0',
							}"
						>
							<p>{{ section.content }}</p>
						</div>
					</TransitionGroup>
				</div>
			</TransitionGroup>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			sections: [
				{
					title: 'Fresh Breakfast for one',
					content: 'Content 1',
					isOpen: false,
					isBuy: false,
					price: 400,
				},
				{
					title: 'Fresh Breakfast for two',
					content: 'Content 2',
					isOpen: false,
					isBuy: false,
					price: 400,
				},
				{
					title: 'Classic Dinner for one',
					content:
						'What is Lorem Ipsum Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley',
					isOpen: false,
					isBuy: false,
					price: 400,
				},
				{
					title: 'Classic Dinner for two',
					content:
						'What is Lorem Ipsum Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley',
					isOpen: false,
					isBuy: false,
					price: 400,
				},
				{
					title: 'Electric Car Charge',
					content:
						'What is Lorem Ipsum Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley',
					isOpen: false,
					isBuy: false,
					price: 400,
				},
			],
		}
	},
	methods: {
		toggleSection(index) {
			this.sections.forEach((section, i) => {
				if (i === index) {
					section.isOpen = !section.isOpen
				} else {
					section.isOpen = false
				}
			})
		},

		checkBought() {
			for (let obj1 of this.sections) {
				for (let obj2 of this.$store.state.morePluses) {
					if (obj1.title === obj2.title) {
						obj1.isBuy = true
						console.log(this.sections)
					}
				}
			}
		},

		filterer(title) {
			this.$store.state.morePluses = this.$store.state.morePluses.filter(
				i => i.title !== title
			)
		},
	},
	mounted() {
		this.checkBought()
	},
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');

.all {
	width: 50%;
}
.accordion {
	font-family: Arial, sans-serif;
	height: 680px;
	width: 100%;
	margin-left: 8%;
	display: flex;
	flex-direction: column;
	justify-content: start;
	margin-top: 4%;

	h2 {
		font-family: 'Open Sans';
		color: #5b6460;
		border-bottom: 0.7px solid #5b6460;
		padding-bottom: 4%;
		font-size: 24px;
		font-weight: 400;
		line-height: 24px;
		letter-spacing: 0px;
		text-align: left;
	}
}

.accordion-section {
	margin-left: -7%;
	margin-bottom: 3%;
	overflow: hidden;
	background: #fff;
}

.accordion-header {
	background: #e9ece0;
	padding: 2.5%;
	margin: 0;
	cursor: pointer;
	font-family: 'Open Sans';
	font-size: 18px;
	font-weight: 400;
	line-height: 18px;
	letter-spacing: 0px;
	text-align: left;
	display: flex;
	align-items: center;

	.chosed {
		width: 25px;
		height: 25px;
		background: #5b6460;
		border-radius: 100px;
		padding: 5px;
	}

	.p {
		margin-left: 3%;
		font-family: 'Open Sans';
		font-size: 16px;
		font-weight: 400;
		letter-spacing: 0px;

		.innerP {
			margin-bottom: 3%;
			font-weight: 600;
		}
	}
}

.accordion-content {
	margin-left: -5.3%;
	margin-top: 2%;
	background-color: #fff;
	overflow: hidden;
	transition: max-height 0.5s, padding 0.5s;
	transition: all 2s ease-in-out;
}

.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
	transition: all 0.5s ease-in-out;
}

.list-enter-from,
.list-leave-to {
	opacity: 0;
	transform: translateY(-30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */

@media screen and (max-width: 1300px) {
	.all {
		.accordion {
			margin: 0 !important;
		}
	}
}

@media screen and (max-width: 740px) {
	.all {
		min-width: 90%;
		.accordion {
			h2 {
				font-size: 140%;
			}
			.list {
				padding-left: 6%;
			}
		}
	}
}
</style>
