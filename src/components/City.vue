<template>
  <div class="city-container">
    <div class="weather-icon">
      <img
        :src="'http://openweathermap.org/img/wn/' + this.info.weather[0].icon + '@2x.png'"
        alt="weather icon"
      />
    </div>
    <div class="name">
      <h1>{{this.info.name}}</h1>
    </div>
    <div class="info">
      <div class="one-third">
        <div class="stat">weather</div>
        <div class="stat-value">{{this.info.weather[0].description}}</div>
      </div>
      <div class="one-third">
        <div class="stat">temperature</div>
        <div class="stat-value">{{this.info.main.temp}} °C</div>
      </div>
      <div class="one-third no-border">
        <div class="stat">humidity</div>
        <div class="stat-value">{{this.info.main.humidity}}%</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "City",
  props: ["info"],
});
</script>

<style scoped>
.city-container {
  background: #82bb30;
  width: 400px;
  display: inline-block;
  box-shadow: -1px 15px 30px -12px black;
  border-radius: 1vw;
}

.weather-icon {
  height: 100px;
  border-top-left-radius: 1vw;
  border-top-right-radius: 1vw;
  background: rgb(255, 184, 184);
  background: -moz-linear-gradient(
    45deg,
    rgba(255, 184, 184, 1) 0%,
    rgba(215, 255, 152, 1) 100%
  );
  background: -webkit-linear-gradient(
    45deg,
    rgba(255, 184, 184, 1) 0%,
    rgba(215, 255, 152, 1) 100%
  );
  background: linear-gradient(
    45deg,
    rgba(255, 184, 184, 1) 0%,
    rgba(215, 255, 152, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffb8b8",endColorstr="#d7ff98",GradientType=1);
}

.name {
  color: rgb(0, 0, 0);
  background: rgb(255, 255, 255);
  padding: 26px 0;
}

.info {
  color: white;
  width: 100%;
  height: 100px;
  overflow: auto;
}

.one-third {
  width: 33%;
  height: 100%;
  float: left;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.no-border {
  border-right: none;
}

.stat {
  position: relative;
  margin-bottom: 12px;
  font-weight: 500;
}

@media (max-width: 767px) {
  .city-container {
    width: 90%;
  }

  .name {
    padding: 30px 0;
  }

  .info {
    height: 108px;
    overflow-wrap: break-word;
  }

  .weather-icon {
    height: 108px;
  }
}
</style>