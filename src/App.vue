<template>
	<div id="app">
		<div class="content">
			<div class="nav">
				<router-link :to="{ name: 'Home' }">
					<div class="nav-button">Home</div>
				</router-link>
				<router-link :to="{ name: 'Categories' }">
					<div class="nav-button">Categories</div>
				</router-link>
				<router-link :to="{ name: 'Random' }">
					<div class="nav-button">Random</div>
				</router-link>
			</div>
			<router-view :key="$route.path" class="view" />
		</div>
		<div class="footer">
			<div class="footer-menu">
				<div class="footer-title">-Menu-</div>
				<router-link :to="{ name: 'Home' }">
					<div>Home</div>
				</router-link>
				<router-link :to="{ name: 'Categories' }">
					<div>Categories</div>
				</router-link>
				<router-link :to="{ name: 'Random' }">
					<div>Random</div>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'app',
	components: {},
	created() {
		this.$store.dispatch('loadCities');
		// as soon as the component is created we initiate the loadCities action in our store
	},
};
</script>

<style>
#app {
	font-family: 'Poppins', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #ffffff;
	min-height: 100%;
	background-image:
		url('https://images.unsplash.com/photo-1603262439120-3e17d13bab3f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
		linear-gradient(
			to bottom,
			rgba(140, 122, 122, 1) 0%,
			rgba(175, 135, 124, 1) 65%,
			rgba(175, 135, 124, 1) 100%
		);
	background-repeat: no-repeat;
	background-position: center center;
	background-size: cover;
	background-attachment: fixed;
}

html,
body {
	height: 100%;
}

* {
	margin: 0;
}

.view {
	padding-top: 68px;
}

.footer {
	padding: 1.5rem;
	background-color: rgba(0, 0, 0, 0.4);
}

.footer a {
	text-decoration: none;
	color: #ffffff;
	font-weight: 300;
}

.footer div {
	padding: 5px 0;
}

.footer-menu {
	width: 100px;
	margin: auto;
}

.footer-title {
	font-weight: 600;
}

.content {
	min-height: 100dvh;
}

.nav {
	overflow: hidden;
	position: fixed;
	top: 0;
	z-index: 1;
	width: 100%;
	height: 68px;
	padding-left: 60px;
	display: flex;
	transition: 300ms;
	background-color: #82bb30;
}

.nav-button {
	padding-left: 6px;
	padding-right: 6px;
	transition: 400ms;
	border: none;
	min-width: 120px;
}

.nav a {
	text-decoration: none;
	font-weight: bold;
	color: #ffffff;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	transition: 400ms;
}
.nav a:hover {
	background-color: #74a82b;
}

@media (max-width: 767px) {
	.nav {
		padding: 0;
		justify-content: center;
	}

	.nav-button {
		min-width: 95px;
	}
}
</style>
