<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <HeaderComponent @search="fetchMovies" :movies="movies" />
    <MainComponent  :movies="movies" />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
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
      movies: [],
      api_key: "829611189233488d6170049588ee7380",
      base_uri: "https://api.themoviedb.org/3",

    };
  },
  methods: {
    fetchMovies(query) {
      axios
        .get(
          `${this.base_uri}/search/movie?api_key=${this.api_key}&query=${query}`
        )
        .then((res) => {
          console.log(res);
          this.movies = res.data.results;
          console.log(this.movies);
          // console.log(state.query)
        })
        .catch((err) => {
          console.log("Errore!", err);
        });
    },
  },
  beforeMount() {},
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
