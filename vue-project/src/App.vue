<template>
	<router-view></router-view>
</template>

<script>
export default {}
</script>

<style lang="scss">
html {
	overflow-x: hidden;
}

body::-webkit-scrollbar {
	width: 0 !important;
}
body {
	padding: 0;
	margin: 0;
	overflow: -moz-scrollbars-none;
	-ms-overflow-style: none;
}
</style>
