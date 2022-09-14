<template>
  <div id="app">
    <HeaderComponent
      @movies="fetchMovies"
      @series="fetchSeries"
      :movieList="movieList"
      :serieList="serieList"
      :theatre="theatre"
    />
    <MainComponent
      :movieList="movieList"
      :serieList="serieList"
      :langList="langList"
      :theatre="theatre"
    />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    MainComponent,
    HeaderComponent,
  },

  data() {
    return {
      langList: ["it", "en", "ja", "de", "fr", "es"],
      movieList: [],
      serieList: [],
      api_key: "829611189233488d6170049588ee7380",
      base_uri: "https://api.themoviedb.org/3",
      theatre: false,
    };
  },
  methods: {
    fetchMovies(query) {
      if (query.trim() === "") return;
      axios
        .get(
          `${this.base_uri}/search/movie?api_key=${this.api_key}&query=${query}`
        )
        .then((res) => {
          // console.log(res);
          this.theatre = false
          this.movieList = []
          this.movieList = res.data.results;
          // console.log(this.movieList);
          // console.log(state.query)
        })
        .catch((err) => {
          console.log("Errore!", err);
        });
    },
    fetchSeries(query) {
      if (query.trim() === "") return;
      axios
        .get(
          `${this.base_uri}/search/tv?api_key=${this.api_key}&query=${query}`
        )
        .then((res) => {
          // console.log(res);
          this.theatre = false
          this.serieList = res.data.results;
          // console.log(this.serieList);
          // console.log(state.query)
        })
        .catch((err) => {
          console.log("Errore!", err);
        });
    },
    fetchTheatres() {
      axios
        .get(
          `${this.base_uri}/movie/now_playing?api_key=${this.api_key}&language=en-US`
        )
        .then((res) => {
          // console.log(res);
          this.theatre = true;
          this.movieList = res.data.results;
          // console.log(this.serieList);
          // console.log(state.query)
        })
        .catch((err) => {
          console.log("Errore!", err);
        });
    },
  },
  beforeMount() {},
  mounted() {
    this.fetchTheatres()
  } 
};
</script>

<style lang="scss">
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
  color: white;
  background-color: black;
  font-family: "Bebas Neue", cursive;
}
</style>
