<template>
	<div class="Intro">
		<h1>About Us</h1>

		<div class="btns">
			<button><a href="#touch">contact us</a></button>
			<button><a href="/FAQ">read faq</a></button>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Mulish:ital@0;1&family=Open+Sans:wght@300&display=swap');

.Intro {
	margin-top: -3%;
	width: 100%;
	height: 350px;
	background-image: url('../../../../public/AboutUsBg.png');
	background-size: 1500px 145%;
	background-position: center center;
	background-repeat: no-repeat;
	background-color: rgba(86, 85, 85, 0.823);
	background-blend-mode: multiply;
	display: flex;
	flex-direction: column;
	align-items: center;

	h1 {
		font-family: 'Open Sans';
		font-size: 400%;
		font-weight: 300;
		margin: 0;
		letter-spacing: 0px;
		text-align: center;
		color: #ffffff;
		margin-top: 72px;
	}

	a {
		font-family: 'Open Sans';
		text-decoration: none;
		color: #fff;
		margin-top: 15px;
		font-size: 18px;
		font-weight: 300;
		line-height: 24px;
		letter-spacing: 0px;
		text-align: left;
	}

	.btns {
		display: flex;
		justify-content: space-between;
		width: 350px;
	}

	button {
		text-transform: uppercase;
		width: 45%;
		height: 55px;
		margin-top: 40px;
		background: rgba(0, 0, 0, 0);
		font-family: 'Mulish';
		font-size: 14px;
		font-weight: 300;
		line-height: 28px;
		letter-spacing: 1px;
		text-align: center;
		color: #fff;
		border: 1px solid #fff;
	}
}

@media screen and (max-width: 370px) {
	.btns {
		max-width: 300px;
	}
}
</style>
