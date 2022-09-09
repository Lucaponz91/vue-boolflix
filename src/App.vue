<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <HeaderComponent />
    <MainComponent />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import axios from "axios";
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";

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
      query: "ritorno",
      base_uri: "https://api.themoviedb.org/3",
    };
  },
  methods: {
    fetchMovies() {
      axios
        .get(
          "https://api.themoviedb.org/3/search/movie?api_key=829611189233488d6170049588ee7380&query=ritorno"
        )
        .then((res) => {
          console.log(res);
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
