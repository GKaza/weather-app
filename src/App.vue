<template>
  <div id="app">
    <div class="content">
      <div class="nav">
        <router-link :to="{name:'Home'}">
          <div class="nav-button">Home</div>
        </router-link>
        <router-link :to="{name:'Categories'}">
          <div class="nav-button">Categories</div>
        </router-link>
        <router-link :to="{name:'Random', params:{cities: cities}}">
          <div class="nav-button">Random</div>
        </router-link>
      </div>
      <router-view :key="$route.path" @updateCities="updateCities" class="view" />
    </div>
    <div class="footer">
      <div class="footer-menu">
        <div class="footer-title">-Menu-</div>
        <router-link :to="{name:'Home'}">
          <div>Home</div>
        </router-link>
        <router-link :to="{name:'Categories'}">
          <div>Categories</div>
        </router-link>
        <router-link :to="{name:'Random', params:{cities: cities}}">
          <div>Random</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      cities: null,
    };
  },
  methods: {
    updateCities(cities) {
      this.cities = cities;
    },
  },
};
</script>

<style>
#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  min-height: 100%;
  background: linear-gradient(
      to bottom,
      rgba(140, 122, 122, 1) 0%,
      rgba(175, 135, 124, 1) 65%,
      rgba(175, 135, 124, 1) 100%
    )
    fixed;
  background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/coc-background.jpg")
    no-repeat center center fixed;
  background-size: cover;
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
  min-height: 100vh;
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
  transition: 400ms;
  border: none;
  min-width: fit-content;
  width: 120px;
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
    width: 93px;
  }
}
</style>
