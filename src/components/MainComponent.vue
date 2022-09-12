<template>
  <div>
    <h2>Movies</h2>
    <ul>
      <!-- {{query}} -->
      <li v-for="movie in movieList" :key="movie.id">
        <h3>{{ movie.title }}</h3>
        <p>{{ movie.original_title }}</p>
        <p>{{ movie.original_language }}</p>
        <p>{{ movie.vote_average }}</p>
      </li>
    </ul>
    <h2>Series</h2>
    <ul>
      <li v-for="serie in serieList" :key="serie.id">
        <h3>{{ serie.name }}</h3>
        <p>{{ serie.original_name }}</p>
        <p>{{ serie.original_language }}</p>
        <p>{{serie.vote_average }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
    // import state from '../store';

export default {
    props: {
        movieList: Array,
        serieList: Array
    },
  data() {
    return {
      // movies: [],
      // api_key: "829611189233488d6170049588ee7380",
      // query: state.query,
      // base_uri: "https://api.themoviedb.org/3",
    };
  },
  computed:{
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
    
  },
  beforeMount() {
    // this.fetchMovies();
  },
};
</script>

<style lang="scss" scoped>
  ul{
    list-style: none;
  }
</style>