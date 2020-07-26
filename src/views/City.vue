<template>
  <div class="city_flex">
    <City :info="city" />
    <router-link v-if="random" class="city_link" :to="{name:'Random', params:{cities: cities}}">
      <div class="city_button">New random city</div>
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import City from "@/components/City.vue";

export default {
  name: "Home",
  components: {
    City,
  },
  data() {
    return {
      city: null,
      id: this.$route.params.id,
      cities: this.$route.params.cities,
      random: this.$route.params.random,
    };
  },
  methods: {
    getCity() {
      this.city = this.cities.find((city) => city.id === this.id);
      return;
    },
  },
  created() {
    this.getCity();
  },
};
</script>

<style scoped>
.city_flex {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 90vh;
}

.city_link {
  text-decoration: none;
  display: inline-block;
  color: #ffffff;
}

.city_button {
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
