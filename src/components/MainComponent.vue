<template>
  <div>
    <!-- card -->
    <section id="team" class="pb-5">
      <div class="container">
        <h5 class="section-title h1">MOVIES</h5>
        <div class="row">
          <div
            v-for="movie in movieList"
            :key="movie.id"
            class="col-xs-12 col-sm-6 col-md-4"
          >
            <div
              class="image-flip"
              ontouchstart="this.classList.toggle('hover');"
            >
              <div class="mainflip">
                <div class="frontside">
                  <div class="card">
                    <div class="card-body text-center">
                      <p>
                        <img
                          class="img-fluid"
                          :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`"
                          alt="Nessuna Locandina"
                        />
                      </p>
                      <h4 class="card-title">{{ movie.title }}</h4>
                    </div>
                  </div>
                </div>
                <div class="backside">
                  <div class="card back_card">
                    <div class="card-body text-center mt-4">
                      <h4 class="card-title">{{ movie.original_title }}</h4>
                      <p class="card-text overview">{{ movie.overview }}</p>
                      <img
                        v-if="langList.includes(movie.original_language)"
                        :src="`/flags/${movie.original_language}.png`"
                        alt="flag"
                      />
                      <p v-else>Paese: {{ movie.original_language }}</p>
                      <div class="voto">
                        Voto:
                        <font-awesome-icon
                          v-for="i in getRoundVote(movie.vote_average)"
                          :key="i"
                          icon="fa-solid fa-star"
                          class="fa-solid fa-star"
                        />
                        <font-awesome-icon
                          v-for="n in 5 - getRoundVote(movie.vote_average)"
                          :key="n + (getRoundVote(movie.vote_average))"
                          icon="fa-regular fa-star"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- card end -->
    <!-- Card series -->
    <section id="team" class="pb-5">
      <div class="container">
        <h5 class="section-title h1">SERIES</h5>
        <div class="row row_cards">
          <div
            v-for="serie in serieList"
            :key="serie.id"
            class="col-xs-12 col-sm-6 col-md-4"
          >
            <div
              class="image-flip"
              ontouchstart="this.classList.toggle('hover');"
            >
              <div class="mainflip">
                <div class="frontside">
                  <div class="card">
                    <div class="card-body text-center">
                      <p>
                        <img
                          class="img-fluid"
                          :src="`https://image.tmdb.org/t/p/w342${serie.poster_path}`"
                          alt="Nessuna Locandina"
                        />
                      </p>
                      <h4 class="card-title">{{ serie.name }}</h4>
                    </div>
                  </div>
                </div>
                <div class="backside">
                  <div class="card back_card">
                    <div class="card-body text-center mt-4">
                      <h4 class="card-title">{{ serie.original_title }}</h4>
                      <p class="card-text overview">{{ serie.overview }}</p>
                      <img
                        v-if="langList.includes(serie.original_language)"
                        :src="`/flags/${serie.original_language}.png`"
                        alt="flag"
                      />
                      <p v-else>Paese: {{ serie.original_language }}</p>
                      <div class="voto">
                        Voto:
                        <font-awesome-icon
                          v-for="i in getRoundVote(serie.vote_average)"
                          :key="i"
                          icon="fa-solid fa-star"
                          class="fa-solid fa-star"
                        />
                        <font-awesome-icon
                          v-for="n in 5 - getRoundVote(serie.vote_average)"
                          :key="n + (getRoundVote(serie.vote_average))"
                          icon="fa-regular fa-star"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- card series end -->
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
    // urlExists(url) {
    //   const http = new XMLHttpRequest();
    //   http.open("HEAD", url, false);
    //   http.send();
    //   if (http.status == "404") {
    //     return false;
    //   } else {
    //     return true;
    //   }
    // },
    getRoundVote(vote) {
      // console.log(Math.round(vote / 2));
      return Math.round(vote / 2);
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
i {
  width: 15px;
}
// card
.btn-primary:hover,
.btn-primary:focus {
  background-color: #108d6f;
  border-color: #108d6f;
  box-shadow: none;
  outline: none;
}

.btn-primary {
  color: salmon;
  background-color: #007b5e;
  border-color: #007b5e;
}

section {
  padding: 60px 0;
}

section .section-title {
  text-align: center;
  color: #007b5e;
  margin-bottom: 50px;
  text-transform: uppercase;
}

#team .card {
  border: none;
  background: black;
}

.image-flip:hover .backside,
.image-flip.hover .backside {
  -webkit-transform: rotateY(0deg);
  -moz-transform: rotateY(0deg);
  -o-transform: rotateY(0deg);
  -ms-transform: rotateY(0deg);
  transform: rotateY(0deg);
  border-radius: 0.25rem;
}

.image-flip:hover .frontside,
.image-flip.hover .frontside {
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  transform: rotateY(180deg);
}

.mainflip {
  -webkit-transition: 1s;
  -webkit-transform-style: preserve-3d;
  -ms-transition: 1s;
  -moz-transition: 1s;
  -moz-transform: perspective(1000px);
  -moz-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transition: 1s;
  transform-style: preserve-3d;
  position: relative;
}

.frontside {
  position: relative;
  -webkit-transform: rotateY(0deg);
  -ms-transform: rotateY(0deg);
  z-index: 2;
  margin-bottom: 30px;
}

.backside {
  position: absolute;
  top: 0;
  left: 0;
  background: grey;
  -webkit-transform: rotateY(-180deg);
  -moz-transform: rotateY(-180deg);
  -o-transform: rotateY(-180deg);
  -ms-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
  -webkit-box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);
  -moz-box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);
  box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);
}
.back_card {
  background-color: black;
}

.frontside,
.backside {
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition: 1s;
  -webkit-transform-style: preserve-3d;
  -moz-transition: 1s;
  -moz-transform-style: preserve-3d;
  -o-transition: 1s;
  -o-transform-style: preserve-3d;
  -ms-transition: 1s;
  -ms-transform-style: preserve-3d;
  transition: 1s;
  transform-style: preserve-3d;
}

.frontside .card,
.backside .card {
  min-height: 312px;
}

.backside .card a {
  font-size: 18px;
  color: #007b5e !important;
}

.frontside .card .card-title,
.backside .card .card-title {
  color: white !important;
}

.frontside .card .card-body img {
  width: 342px;
  height: 420px;
  border-radius: 0%;
}
.overview {
  color: grey;
}
.row_cards {
  row-gap: 90px;
}
// card end
</style>