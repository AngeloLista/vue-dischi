<template>
  <header><img src="../assets/img/spotify-logo.png" alt="" /></header>
</template>

<script>
export default {
  name: "Header",
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