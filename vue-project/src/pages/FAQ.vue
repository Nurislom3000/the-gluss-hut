<template>
	<Header />
	<main>
		<div class="accordion">
			<TransitionGroup name="list" tag="ul">
				<div
					class="accordion-section"
					v-for="(section, index) in sections"
					:key="index"
					@click="toggleSection(index)"
				>
					<h3 class="accordion-header" :class="{ open: section.isOpen }">
						{{ section.title }}
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
	</main>
	<Footer />
</template>

<script>
export default {
	data() {
		return {
			sections: [
				{ title: 'PRICES', content: 'Content 1', isOpen: false },
				{
					title: 'THE WALK UP TO GLASS HUT',
					content: 'Content 2',
					isOpen: false,
				},
				{
					title: 'CAPACITY',
					content:
						'What is Lorem Ipsum Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley',
					isOpen: false,
				},
				{
					title: 'PETS',
					content:
						'What is Lorem Ipsum Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley',
					isOpen: false,
				},
				{
					title: 'CHECK-IN / CHECK-OUT',
					content:
						'What is Lorem Ipsum Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley',
					isOpen: false,
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
	},
}
</script>

<style lang="scss" scoped>
main {
	display: flex;
	justify-content: center;
	padding-right: 5% !important;

	ul {
		padding-left: 6% !important;
	}
}
.accordion {
	font-family: Arial, sans-serif;
	height: 680px;
	width: 774px;
	display: flex;
	flex-direction: column;
	justify-content: start;
	margin-top: 4%;
}

.accordion-section {
	margin-top: 3%;
	overflow: hidden;
	background: #fff;
}

.accordion-header {
	background-color: #fff;
	border: 0.7px solid #5b6460;
	padding: 2.5%;
	margin: 0;
	cursor: pointer;
	font-family: Open Sans;
	font-size: 18px;
	font-weight: 400;
	line-height: 18px;
	letter-spacing: 0px;
	text-align: left;
}

.open {
	background-color: #fff;
}

.accordion-content {
	margin-left: -5.3%;
	margin-top: 2%;
	background: #e9ece0;
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
</style>
