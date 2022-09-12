<template>
    <div class="header_container">
        <div class="logo">

        </div>
        <div class="search_container">
            <input v-model="query" type="text" name="search_box" id="search" placeholder="Cerca un film">
            <button @click="$emit('search', query)" type="submit">Cerca nel database</button>
            {{query}}

        </div>
    </div>
  
</template>

<script>
    // import state from '../store'
    export default {
        data (){
            return{
                query:''
            }
            
        }
    }
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

</style>