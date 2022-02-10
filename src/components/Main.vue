<template>
  <main>
    <section id="songs" class="container">
      <div
        class="song-card-container"
        v-for="(song, index) in songs"
        :key="index"
      >
        <SongCard
          :title="song.title"
          :poster="song.poster"
          :author="song.author"
          :year="song.year"
        />
      </div>
    </section>
  </main>
</template>

<script>
import SongCard from "./SongCard.vue";
import axios from "axios";
export default {
  name: "Main",
  components: {
    SongCard,
  },
  data() {
    return {
      songs: [],
    };
  },
  methods: {
    getSong() {
      axios
        .get("https://flynn.boolean.careers/exercises/api/array/music")
        .then((res) => {
          this.songs = res.data.response;
        });
    },
  },
  created() {
    this.getSong();
  },
};
</script>

<style scoped lang="scss">
#songs {
  display: flex;
  flex-wrap: wrap;
  padding: 50px 0;
}
.song-card-container {
  width: calc(100% / 5);
}
</style>