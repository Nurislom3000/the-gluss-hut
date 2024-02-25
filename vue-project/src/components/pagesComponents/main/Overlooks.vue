<template>
	<div class="overlook">
		<img class="dontNead" src="/overlook2.png" alt="#" />
		<img src="/overlook1.jpg" alt="#" />
		<a href="/about-us"
			><div class="srcToInfo">
				<span>More about us</span>
			</div>
		</a>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.overlook {
	width: 100%;
	height: 560px;
	display: flex;
	justify-content: center;
	align-items: center;

	a {
		color: #333333;
		z-index: 10;
		text-decoration: none;
	}

	img {
		width: 50%;
		position: absolute;
		right: 0;
		margin-top: 3.2%;
		height: 100%;
	}

	.dontNead {
		left: 0;
		height: 100%;
	}

	.srcToInfo {
		width: 156.82px;
		height: 156.82px;
		background: #e9ece0;
		border-radius: 200px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
}

@media screen and (max-width: 1000px) {
	.dontNead {
		display: none;
	}

	.overlook {
		margin-top: -5%;
		img {
			min-width: 100%;
			height: 100%;
		}
	}
}

@media screen and (max-width: 511px) {
	.overlook {
		img {
			min-width: 100%;
			max-height: 70%;
			margin-top: -20%;
		}
	}
}

@media screen and (max-width: 425px) {
	.overlook {
		img {
			min-width: 100%;
			max-height: 50% !important;
			margin-top: -70%;
		}

		.srcToInfo {
			margin-top: -120%;
		}
	}
}
</style>
