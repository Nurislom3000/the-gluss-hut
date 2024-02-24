<template>
	<div class="thanks">
		<h1>Tank you for the booking</h1>
		<h2>We will send you massage soon to verify you phone number</h2>
		<h1>😁</h1>
	</div>
</template>

<script>
export default {
	mounted() {
		localStorage.setItem('isBought', JSON.stringify(true))
	},
}
</script>

<style lang="scss" scoped>
.thanks {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;

	h1 {
		font-family: sans-serif;
		font-size: 100px;
		color: #6c757d;
	}

	h2 {
		font-family: sans-serif;
		font-size: 30px;
		color: #6c757d;
		font-style: italic;
	}
}
</style>
