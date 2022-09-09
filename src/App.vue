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
      
    };
  },
  methods: {
    
  },
  beforeMount() {
    
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
