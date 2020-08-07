<template>
  <div class="city-flex">
    <City :info="city" />
    <router-link v-if="random" class="city-link" :to="{name:'Random'}">
      <div class="city-button">New random city</div>
    </router-link>
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
      id: this.$route.params.id,
      random: this.$route.params.random,
    };
  },
  computed: {
    cities() {
      return this.$store.state.cities;
    },
    city() {
      return this.cities.find((city) => city.id === this.id);
      // we make sure we get the city from our array in store that has the same id that we passed as a parameter
    },
  },
  methods: {},
};
</script>

<style scoped>
.city-flex {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 90vh;
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
</style>
