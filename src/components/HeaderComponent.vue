<template>
  <div class="header_container">
    <div class="logo"><span>BOOLFLIX</span></div>
    <div class="search_container">
      <input @keyup.enter="filterResults(query)" class="form-control rounded"
        v-model="query"
        type="text"
        name="search_box"
        aria-label="Search" aria-describedby="search-addon"
        id="search"
        placeholder="Cerca un film"
      />
      
      {{ query }}
    </div>
  </div>
</template>

<script>
// import state from '../store'
export default {
  data() {
    return {
      query: '',
    };
  },
  methods: {
    filterResults(query) {
        console.log('invia')
      this.$emit("movies", query);
      this.$emit("series", query);
      // this.query = "";
    },
  },
};

// export default {
//     data(){
//         return{
//             query: ''
//         // state.query = query}
//         // return {
//         //     state.query = this.query
//         }
//     // }

// }
</script>

<style lang="scss" scoped>
    .header_container{
        padding: 15px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 100px;
        .logo{
            color: darkred;
            font-size: 3em;
        }
    }
</style>