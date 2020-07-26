<template>
  <div></div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Random",
  components: {},
  data() {
    return {
      cities: this.$route.params.cities,
    };
  },
  computed: {},
  methods: {
    goRandom() {
      const y = Math.floor(Math.random() * 10);
      const x = this.cities[y].id;
      this.$router.push({
        name: "City",
        params: { id: x, cities: this.cities, random: true },
      });
    },
  },
  created() {
    this.goRandom();
  },
};
</script>
