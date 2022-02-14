<template>
  <div id="app">
    <Header :genres="genres" />
    <Main @genres-ready="setGenres" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";

export default {
  name: "App",
  data() {
    return {
      genres: [],
    };
  },
  components: { Header, Main },
  methods: {
    setGenres(genres) {
      this.genres = genres;
    },
  },
};
</script>

<style lang="scss">
@import "./assets/scss/style.scss";
</style>
