<template>
	<header>
		<div class="container">
			<div class="logo">
				<img src="../../../public/logolgo.svg" alt="#" />
			</div>
			<div class="header-menu">
				<router-link class="header-menu-link" to="/">home</router-link>
				<router-link class="header-menu-link" to="/the-hut"
					>the hut</router-link
				>
				<router-link class="header-menu-link" to="/the-area"
					>the area</router-link
				>
				<router-link class="header-menu-link" to="/booking"
					>booking</router-link
				>
				<router-link class="header-menu-link" to="/about-us"
					>about us</router-link
				>
				<router-link class="header-menu-link" to="/FAQ">faq</router-link>

				<div v-if="lang == 1" class="langs">
					<img
						@click=";(langs = !langs), (lang = 1)"
						src="../../../public/lang.svg"
						alt="#"
					/>
					<div v-show="langs == true" class="subLangs">
						<img
							@click=";(langs = !langs), (lang = 2)"
							src="../../../public/english.svg"
							alt="#"
						/>
						<img
							@click=";(langs = !langs), (lang = 3)"
							src="../../../public/germany.svg"
							alt="#"
						/>
					</div>
				</div>
				<div v-if="lang == 2" class="langs">
					<img
						@click=";(langs = !langs), (lang = 2)"
						src="../../../public/english.svg"
						alt="#"
					/>
					<div v-show="langs == true" class="subLangs">
						<img
							@click=";(langs = !langs), (lang = 1)"
							src="../../../public/lang.svg"
							alt="#"
						/>
						<img
							@click=";(langs = !langs), (lang = 3)"
							src="../../../public/germany.svg"
							alt="#"
						/>
					</div>
				</div>
				<div v-if="lang == 3" class="langs">
					<img
						@click=";(langs = !langs), (lang = 3)"
						src="../../../public/germany.svg"
						alt="#"
					/>
					<div @click="langs = !langs" v-show="langs == true" class="subLangs">
						<img
							@click=";(langs = !langs), (lang = 2)"
							src="../../../public/english.svg"
							alt="#"
						/>
						<img
							@click=";(langs = !langs), (lang = 1)"
							src="../../../public/lang.svg"
							alt="#"
						/>
					</div>
				</div>
			</div>
			<button @click="$router.push('/booking')" class="header-booking menu">
				book now
			</button>
			<div class="hamburger-menu">
				<input id="menu__toggle" type="checkbox" />
				<label class="menu__btn" for="menu__toggle">
					<span></span>
				</label>
				<ul class="menu__box">
					<li>
						<router-link class="header-menu-link menu__item" to="/"
							>home</router-link
						>
					</li>
					<li>
						<router-link class="header-menu-link menu__item" to="/the-hut"
							>the hut</router-link
						>
					</li>
					<li>
						<router-link class="header-menu-link menu__item" to="/the-area"
							>the area</router-link
						>
					</li>
					<li>
						<router-link class="header-menu-link menu__item" to="/booking"
							>booking</router-link
						>
					</li>
					<li>
						<router-link class="header-menu-link menu__item" to="/about-us"
							>about us</router-link
						>
					</li>
					<li>
						<router-link class="header-menu-link menu__item" to="/FAQ"
							>faq</router-link
						>
					</li>

					<li>
						<div v-if="lang == 1" class="langs menu__item">
							<img
								@click=";(langs = !langs), (lang = 1)"
								src="../../../public/lang.svg"
								alt="#"
							/>
							<div v-show="langs == true" class="subLangs">
								<img
									@click=";(langs = !langs), (lang = 2)"
									src="../../../public/english.svg"
									alt="#"
								/>
								<img
									@click=";(langs = !langs), (lang = 3)"
									src="../../../public/germany.svg"
									alt="#"
								/>
							</div>
						</div>
					</li>
					<li>
						<div v-if="lang == 2" class="langs">
							<img
								@click=";(langs = !langs), (lang = 2)"
								src="../../../public/english.svg"
								alt="#"
							/>
							<div v-show="langs == true" class="subLangs">
								<img
									@click=";(langs = !langs), (lang = 1)"
									src="../../../public/lang.svg"
									alt="#"
								/>
								<img
									@click=";(langs = !langs), (lang = 3)"
									src="../../../public/germany.svg"
									alt="#"
								/>
							</div>
						</div>
					</li>
					<li>
						<div v-if="lang == 3" class="langs">
							<img
								@click=";(langs = !langs), (lang = 3)"
								src="../../../public/germany.svg"
								alt="#"
							/>
							<div
								@click="langs = !langs"
								v-show="langs == true"
								class="subLangs"
							>
								<img
									@click=";(langs = !langs), (lang = 2)"
									src="../../../public/english.svg"
									alt="#"
								/>
								<img
									@click=";(langs = !langs), (lang = 1)"
									src="../../../public/lang.svg"
									alt="#"
								/>
							</div>
						</div>
					</li>
					<li style="width: 100%; display: flex; justify-content: center">
						<button
							style="width: 50%"
							@click="$router.push('/booking')"
							class="header-booking"
						>
							book now
						</button>
					</li>
				</ul>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	name: 'Header',

	data() {
		return {
			langs: false,
			lang: 1,
		}
	},
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Readex+Pro:wght@200&display=swap');

header {
	width: 100vw;
	height: 100px;
	display: flex;
	justify-content: end;
	align-items: center;
	position: sticky;
	left: 0;
	top: 0;
	background: #fff;
	z-index: 40;

	.container {
		width: 87%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-right: 3%;
		.header-menu {
			width: 541px;
			display: flex;
			justify-content: space-between;

			.langs {
				display: flex;
				flex-direction: column;
				justify-content: space-evenly;
				align-items: center;

				.subLangs {
					display: flex;
					flex-direction: column;
					position: fixed;
					margin-top: 5%;
					transition-duration: 1s;
				}
			}

			.header-menu-link {
				text-transform: uppercase;
				font-family: 'Readex Pro', sans-serif;
				font-size: 14px;
				font-weight: 300;
				line-height: 24px;
				letter-spacing: 0px;
				text-align: left;
				text-decoration: none;
			}
		}

		.header-booking {
			width: 14%;
			height: 60px;
			display: flex;
			justify-content: center;
			align-items: center;
			text-transform: uppercase;
			color: white;
			background: #5b6460;
			border: none;
			font-family: 'Readex Pro', sans-serif;
			font-size: 14px;
			font-weight: 300;
			line-height: 28px;
			letter-spacing: 1px;
		}
	}
}

.hamburger-menu {
	display: none;
}

/* скрываем чекбокс */
#menu__toggle {
	opacity: 0;
}
/* стилизуем кнопку */
.menu__btn {
	display: flex; /* используем flex для центрирования содержимого */
	align-items: center; /* центрируем содержимое кнопки */
	position: fixed;
	top: 35px;
	right: 30px;
	width: 26px;
	height: 26px;
	cursor: pointer;
	z-index: 1;
}
/* добавляем "гамбургер" */
.menu__btn > span,
.menu__btn > span::before,
.menu__btn > span::after {
	display: block;
	position: absolute;
	width: 100%;
	height: 2px;
	background-color: #616161;
}
.menu__btn > span::before {
	content: '';
	top: -8px;
}
.menu__btn > span::after {
	content: '';
	top: 8px;
}

/* контейнер меню */
.menu__box {
	display: block;
	position: fixed;
	visibility: hidden;
	top: 0;
	right: -100%;
	width: 70%;
	height: 100%;
	margin: 0;
	padding: 0 0;
	list-style: none;
	text-align: center;
	background-color: #eceff1;
	box-shadow: 1px 0px 6px rgba(0, 0, 0, 0.2);
	display: flex;
	flex-direction: column;
	justify-content: center;
}
/* элементы меню */
.menu__item {
	display: block;
	padding: 15px 24px;
	color: #333;
	font-family: 'Roboto', sans-serif;
	font-size: 200%;
	font-weight: 600;
	text-decoration: none;

	img {
		width: 40px;
		height: 40px;
	}
}
.menu__item:hover {
	background-color: #cfd8dc;
}

#menu__toggle:checked ~ .menu__btn > span {
	transform: rotate(45deg);
}
#menu__toggle:checked ~ .menu__btn > span::before {
	top: 0;
	transform: rotate(0);
}
#menu__toggle:checked ~ .menu__btn > span::after {
	top: 0;
	transform: rotate(90deg);
}
#menu__toggle:checked ~ .menu__box {
	visibility: visible;
	right: 0;
}

.menu__btn > span,
.menu__btn > span::before,
.menu__btn > span::after {
	transition-duration: 0.25s;
}
.menu__box {
	transition-duration: 0.25s;
}
.menu__item {
	transition-duration: 0.25s;
}

@media screen and (max-width: 936px) {
	.hamburger-menu {
		display: block;
	}

	.header-menu {
		display: none !important;
	}

	button.menu {
		display: none !important;
	}
}

@media screen and (max-width: 426px) {
	header {
		height: 90px;
	}
}
</style>
