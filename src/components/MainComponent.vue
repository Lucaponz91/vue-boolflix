<template>
  <div>
    <ul>
      <li v-for="movie in movies" :key="movie.id">
        {{ movie.title }}
        {{ movie.original_title }}
        {{ movie.original_language }}
        {{ movie.vote_average }}
      </li>
    </ul>
  </div>
</template>

<script>
    import axios from "axios";

export default {
  data() {
    return {
      movies: [],
      api_key: "829611189233488d6170049588ee7380",
      query: "ritorno",
      base_uri: "https://api.themoviedb.org/3",
    };
  },
  methods: {
    fetchMovies() {
      axios
        .get(
          `${this.base_uri}/search/movie?api_key=${this.api_key}&query=${this.query}`
        )
        .then((res) => {
          console.log(res);
          this.movies = res.data.results;
          console.log(this.movies);
        })
        .catch((err) => {
          console.log("Errore!", err);
        });
    },
  },
  beforeMount() {
    this.fetchMovies();
  },
};
</script>

<style lang="scss" scoped>
</style>