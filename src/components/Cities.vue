<template>
  <div class="cities_container">
    <div class="sort_buttons">
      <p>sort:</p>
      <button class="sort_button" @click="sortOrder = 'AZ'" v-if="sortOrder !== 'AZ'">A-Z</button>
      <button class="sort_button" @click="sortOrder = 'ZA'" v-if="sortOrder !== 'ZA'">Z-A</button>
    </div>
    <ul class="cities_list">
      <li v-for="city in sortCities" :key="city.id">
        <router-link class="city_link" :to="{name:'City', params:{id: city.id, cities: cities}}">
          <div class="city_button">{{city.name}}</div>
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
      if (this.sortOrder == "AZ") {
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
      } else if (this.sortOrder == "ZA") {
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
.cities_list {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding-left: 0px;
  padding-bottom: 50px;
  width: fit-content;
  margin: auto;
}
.cities_list li {
  overflow: auto;
  padding: 0.5rem;
}

.city_button {
  transition: 400ms;
  border: none;
  border-radius: 1vw;
  margin: 0px;
  padding: 1rem;
  min-width: fit-content;
  width: 160px;
  background-color: rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.city_button:hover {
  background-color: rgba(0, 0, 0, 0.4);
  letter-spacing: 2px;
}

.city_link {
  text-decoration: none;
  display: inline-block;
  width: 100%;
  height: 100%;
  color: #ffffff;
}

.sort_buttons {
  padding: 1rem;
}

.sort_buttons p {
  display: inline;
  margin: 0rem 0.4rem;
}
.sort_button {
  cursor: pointer;
  transition: 400ms;
  color: #ffffff;
  border: none;
  border-radius: 0.6vw;
  padding: 0.5rem;
  margin: 0rem 0.4rem;
  background-color: rgba(0, 0, 0, 0.1);
  outline: none;
}
.sort_button:hover {
  background-color: rgba(0, 0, 0, 0.2);
}
</style>
