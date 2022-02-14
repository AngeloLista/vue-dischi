<template>
  <div id="app">
    <Header :genres="genres" @selected-genre="setSelectedGenre" />
    <Main @genres-ready="setGenres" :selected-genre="selectedGenre" />
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
      selectedGenre: "",
    };
  },
  components: { Header, Main },
  methods: {
    setGenres(genres) {
      this.genres = genres;
    },
    setSelectedGenre(genre) {
      this.selectedGenre = genre;
    },
  },
};
</script>

<style lang="scss">
@import "./assets/scss/style.scss";
</style>
