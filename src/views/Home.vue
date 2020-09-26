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
      return this.$store.getters.cities;
    },
  },
};
</script>
