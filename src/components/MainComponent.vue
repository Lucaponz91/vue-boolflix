<template>
  <div>
    <ul>
      <!-- {{query}} -->
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
    // import state from '../store';

export default {
    props: {
        movies: Array
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
</style>