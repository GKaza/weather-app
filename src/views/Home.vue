<template>
  <div>
    <Cities :cities="citiesData" />
  </div>
</template>

<script>
// @ is an alias to /src
import Cities from "@/components/Cities.vue";

export default {
  name: "Home",
  components: {
    Cities,
  },
  data() {
    return {
      citiesData: [],
      URLs: [
        "http://api.openweathermap.org/data/2.5/weather?id=2643743&units=metric&APPID=d86265c8d6a106614454e5d281e8bf99",
        "http://api.openweathermap.org/data/2.5/weather?id=5128581&units=metric&APPID=d86265c8d6a106614454e5d281e8bf99",
        "http://api.openweathermap.org/data/2.5/weather?id=2968815&units=metric&APPID=d86265c8d6a106614454e5d281e8bf99",
        "http://api.openweathermap.org/data/2.5/weather?id=5368361&units=metric&APPID=d86265c8d6a106614454e5d281e8bf99",
        "http://api.openweathermap.org/data/2.5/weather?id=2759794&units=metric&APPID=d86265c8d6a106614454e5d281e8bf99",
        "http://api.openweathermap.org/data/2.5/weather?id=3169070&units=metric&APPID=d86265c8d6a106614454e5d281e8bf99",
        "http://api.openweathermap.org/data/2.5/weather?id=3117735&units=metric&APPID=d86265c8d6a106614454e5d281e8bf99",
        "http://api.openweathermap.org/data/2.5/weather?id=1850147&units=metric&APPID=d86265c8d6a106614454e5d281e8bf99",
        "http://api.openweathermap.org/data/2.5/weather?id=1816670&units=metric&APPID=d86265c8d6a106614454e5d281e8bf99",
        "http://api.openweathermap.org/data/2.5/weather?id=3451190&units=metric&APPID=d86265c8d6a106614454e5d281e8bf99",
      ],
    };
  },
  methods: {
    async fetchWeatherInfo() {
      await this.URLs.forEach((url) =>
        fetch(url)
          .then((response) => response.json())
          .then((data) => this.citiesData.push(data))
      );
    },
    updateCities() {
      this.$emit("updateCities", this.citiesData);
    },
  },
  created() {
    this.fetchWeatherInfo();
    this.updateCities();
  },
};
</script>
