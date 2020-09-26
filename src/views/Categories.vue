<template>
  <div class="categories">
    <div
      class="cat-button"
      @click="
        () => {
          category = 'warm';
          selected = true;
        }
      "
      v-if="!selected"
    >
      WARM CITIES
    </div>
    <div
      class="cat-button"
      @click="
        () => {
          category = 'cold';
          selected = true;
        }
      "
      v-if="!selected"
    >
      COLD CITIES
    </div>
    <ul class="cat-list" v-if="isWarm">
      <li v-for="(city, index) in warmCities" :key="index">
        {{ city.name }} - {{ city.main.temp }} °C
      </li>
    </ul>
    <ul class="cat-list" v-if="isCold">
      <li v-for="(city, index) in coldCities" :key="index">
        {{ city.name }} - {{ city.main.temp }} °C
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      category: "",
      selected: false,
    };
  },
  computed: {
    warmCities() {
      return this.$store.getters.warmCities;
    },
    coldCities() {
      return this.$store.getters.coldCities;
    },
    isWarm() {
      return this.category == "warm";
    },
    isCold() {
      return this.category == "cold";
    },
  },
};
</script>

<style scoped>
.categories {
  margin: 16px;
}
.cat-list {
  list-style: none;
  padding: 0.5rem;
  margin: 20px auto;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.cat-button {
  cursor: pointer;
  transition: 400ms;
  color: #ffffff;
  border: none;
  border-radius: 0.6vw;
  padding: 0.5rem;
  margin: 20px auto;
  background-color: rgba(0, 0, 0, 0.2);
  outline: none;
  min-width: fit-content;
  width: 160px;
}
.cat-button:hover {
  background-color: rgba(0, 0, 0, 0.3);
}
</style>