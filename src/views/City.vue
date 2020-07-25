<template>
  <div>
    <City :info="city" />
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
