<template>
  <div></div>
</template>

<script>
export default {
  name: "Random",
  components: {},
  computed: {
    cities() {
      return this.$store.getters.cities;
    },
  },
  methods: {
    goRandom() {
      const y = Math.floor(Math.random() * 10);
      const x = this.cities[y].id;
      // we get a random city from the array and we store its id
      this.$router.push({
        name: "City",
        params: { id: x, random: true },
      });
      // then we move to route view "City" passing the random id as a parameter
    },
  },
  created() {
    this.goRandom();
  },
};
</script>
