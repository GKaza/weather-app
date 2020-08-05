<template>
  <div class="cities-container">
    <div class="sort-buttons">
      <p>sort:</p>
      <button class="sort-button" @click="sortOrder = 'az'" v-if="sortOrder !== 'az'">A-Z</button>
      <button class="sort-button" @click="sortOrder = 'za'" v-if="sortOrder !== 'za'">Z-A</button>
    </div>
    <ul class="cities-list">
      <li v-for="city in sortCities" :key="city.id">
        <router-link class="city-link" :to="{name:'City', params:{id: city.id, cities: cities}}">
          <div class="city-button">{{city.name}}</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Cities",
  props: ["cities"],
  data() {
    return {
      sortOrder: "",
    };
  },
  computed: {
    sortCities: function () {
      if (this.sortOrder == "az") {
        return this.cities.slice().sort((a: any, b: any) => {
          const nameA = a.name.toUpperCase();
          const nameB = b.name.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
      } else if (this.sortOrder == "za") {
        return this.cities.slice().sort((a: any, b: any) => {
          const nameA = a.name.toUpperCase();
          const nameB = b.name.toUpperCase();
          if (nameA > nameB) {
            return -1;
          }
          if (nameA < nameB) {
            return 1;
          }
          return 0;
        });
      } else {
        return this.cities;
      }
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cities-list {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding-left: 0;
  padding-bottom: 50px;
  width: fit-content;
  margin: auto;
}
.cities-list li {
  overflow: auto;
  padding: 0.5rem;
}

.city-button {
  transition: 400ms;
  border: none;
  border-radius: 1vw;
  margin: 0;
  padding: 1rem;
  min-width: fit-content;
  width: 160px;
  background-color: rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.city-button:hover {
  background-color: rgba(0, 0, 0, 0.4);
  letter-spacing: 2px;
}

.city-link {
  text-decoration: none;
  display: inline-block;
  width: 100%;
  height: 100%;
  color: #ffffff;
}

.sort-buttons {
  padding: 1rem;
}

.sort-buttons p {
  display: inline;
  margin: 0rem 0.4rem;
}
.sort-button {
  cursor: pointer;
  transition: 400ms;
  color: #ffffff;
  border: none;
  border-radius: 0.6vw;
  padding: 0.5rem;
  margin: 0 0.4rem;
  background-color: rgba(0, 0, 0, 0.1);
  outline: none;
}
.sort-button:hover {
  background-color: rgba(0, 0, 0, 0.2);
}
</style>
