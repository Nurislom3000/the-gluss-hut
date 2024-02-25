<template>
	<div class="Intro">
		<h1>The Hut</h1>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');

.Intro {
	margin-top: -3%;
	width: 100%;
	height: 350px;
	background-image: url('/TheHutIntro.png');
	background-size: 100% 100%;
	background-repeat: no-repeat;
	background-color: rgba(51, 51, 51, 60%);
	background-blend-mode: multiply;
	display: flex;
	justify-content: center;
}

h1 {
	font-family: 'Open Sans';
	font-size: 70px;
	font-weight: 300;
	letter-spacing: 0px;
	text-align: center;
	color: #ffffff;
	margin-top: 72px;
}

@media screen and (max-width: 815px) {
	.Intro {
		background-size: 800px 100%;
		background-position: center center;
		height: 250px;
	}
}
</style>
