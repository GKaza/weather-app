<template>
  <div class="city-flex">
    <City :info="city" class="city" />
    <router-link v-if="random" class="city-link" :to="{ name: 'Random' }">
      <div class="city-button random-button">New random city</div>
    </router-link>

    <div class="suggestions">
      <div>Suggestions</div>
      <ul class="cities-list">
        <li v-for="city in suggestions" :key="city.id">
          <router-link
            class="city-link"
            :to="{ name: 'City', params: { id: city.id } }"
          >
            <div class="city-button">{{ city.name }}</div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import City from "@/components/City.vue";

export default {
  name: "Home",
  components: {
    City,
  },
  data() {
    return {
      id: this.$route.params.id * 1,
      random: this.$route.params.random,
    };
  },
  computed: {
    city: function () {
      return this.$store.getters.cities.find((city) => city.id === this.id);
      // we make sure we get the city from our array in store that has the same id that we passed as a parameter
    },
    cities: function () {
      return this.$store.getters.cities;
    },
    suggestions: function () {
      if (this.$store.getters.coldCities.find((x) => x.id == this.id)) {
        return this.$store.getters.coldCities
          .filter((city) => city.id !== this.id)
          .slice(0, 3);
      } else {
        return this.$store.getters.warmCities
          .filter((city) => city.id !== this.id)
          .slice(0, 3);
      }
    },
    // depending on the temperature of our selected city we get three suggestions of other cities that are in the cold or warm cities groups
  },
  methods: {},
};
</script>

<style scoped>
.city-flex {
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  align-items: center;
  height: 90%;
}

.city {
  margin: 50px;
}

.city-link {
  text-decoration: none;
  display: inline-block;
  color: #ffffff;
}

.city-button {
  transition: 400ms;
  border: none;
  border-radius: 1vw;
  margin: 15px;
  padding: 1rem;
  min-width: fit-content;
  width: 160px;
  background-color: rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
  letter-spacing: 1px;
}
.random-button {
  margin-bottom: 50px;
}

.city-button:hover {
  background-color: rgba(0, 0, 0, 0.4);
}

.cities-list {
  list-style-type: none;
  padding-left: 0;
  padding-bottom: 50px;
  width: fit-content;
}

.cities-list li {
  overflow: auto;
  padding: 0.5rem;
}
</style>
