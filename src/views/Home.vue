<template>
  <div>
    <Cities />
  </div>
</template>

<script>
import Cities from "@/components/Cities.vue";

export default {
  name: "Home",
  components: {
    Cities,
  },
  computed: {
    cities() {
      return this.$store.state.cities;
    },
  },
  mounted() {
    this.$store.dispatch("loadCities");
    // as soon as the component mounts we initiate the loadCities action in our store
  },
};
</script>
