<template>
  <main>
    <section id="albums" class="container">
      <div
        class="album-card-container"
        v-for="(album, index) in albums"
        :key="index"
      >
        <AlbumCard
          :title="album.title"
          :poster="album.poster"
          :author="album.author"
          :year="album.year"
        />
      </div>
    </section>
  </main>
</template>

<script>
import AlbumCard from "./AlbumCard.vue";
import axios from "axios";

export default {
  name: "Main",
  props: ["selectedGenre"],
  components: {
    AlbumCard,
  },
  data() {
    return {
      albums: [],
    };
  },
  methods: {
    fetchAlbums() {
      axios
        .get("https://flynn.boolean.careers/exercises/api/array/music")
        .then((res) => {
          this.albums = res.data.response;

          const genres = [];
          this.albums.forEach((album) => {
            const genre = album.genre;
            if (!genres.includes(genre)) genres.push(genre);
          });

          this.$emit("genres-ready", genres);
        });
    },
  },
  created() {
    this.fetchAlbums();
  },
};
</script>

<style scoped lang="scss">
#albums {
  display: flex;
  flex-wrap: wrap;
  padding: 50px 0;
}
.album-card-container {
  width: calc(100% / 5);
}
</style>