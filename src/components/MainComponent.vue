<template>
  <div>
    <h2>Movies</h2>
    <ul>
      <!-- {{query}} -->
      <li v-for="movie in movieList" :key="movie.id">
        <h3>{{ movie.title }}</h3>
        <p>{{ movie.original_title }}</p>

        <img
          v-if="langList.includes(movie.original_language)"
          
          :src="`/flags/${movie.original_language}.png`"
          alt="flag"
        />
        <p v-else >{{ movie.original_language }}</p>
        <p>{{ movie.vote_average }}</p>
      </li>
    </ul>
    <h2>Series</h2>
    <ul>
      <li v-for="serie in serieList" :key="serie.id">
        <h3>{{ serie.name }}</h3>
        <p>{{ serie.original_name }}</p>
        <p>{{ serie.original_language }}</p>
        <p>{{ serie.vote_average }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
// import state from '../store';

export default {
  props: {
    movieList: Array,
    serieList: Array,
    langList: Array,
  },
  data() {
    return {
      // langList: ["it", "en", "ja", "de", "fr", "es"],
      // urlImgLang: "https:/flagcdn.com/w20/{{movie.original_language}}'.png",
      // movies: [],
      // api_key: "829611189233488d6170049588ee7380",
      // query: state.query,
      // base_uri: "https://api.themoviedb.org/3",
    };
  },
  computed: {
    // searchFtn() {
    //     console.log(this.movies);
    //     if (this.query === ''){
    //         return this.movies;
    //     } else {
    //         return this.movies
    //     }
    // }
  },
  methods: {
    urlExists(url) {
      const http = new XMLHttpRequest();
      http.open("HEAD", url, false);
      http.send();
      if (http.status == "404") {
        return false;
      } else {
        return true;
      }
    },
  },
  beforeMount() {
    // this.fetchMovies();
  },
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
}
</style>