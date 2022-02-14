<template>
  <header class="d-flex justify-content-between align-items-center">
    <img src="../assets/img/spotify-logo.png" alt="" />
    <div>
      <Select :options="genres" @change-option="selectedGenres" />
    </div>
  </header>
</template>

<script>
import Select from "./Select.vue";
export default {
  name: "Header",
  components: {
    Select,
  },
  props: ["genres"],
  methods: {
    selectedGenres(selectedOption) {
      this.$emit("selected-genre", selectedOption);
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/_vars.scss";

header {
  height: 70px;
  background-color: $main_color;
  color: white;
  img {
    height: 100%;
    padding: 10px;
  }
}
</style>