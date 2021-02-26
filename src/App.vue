<template>
  <div id="app">
    <Header />
    <button @click="openGame" v-show="showButton">Start game</button>
    <router-view>
      <Quiz/>
    </router-view>
    
  </div>
</template>

<script>
import Header from "./components/Header";
import Quiz from "./components/Quiz";

export default {
  name: "App",
  components: {
    Header,
    Quiz,
  },
  data() {
    return {
      showButton: true,
    };
  },
  methods: {
    openGame() {
      this.$router.push('/quiz');
      this.showButton = false;
    },
  },
};
</script>

<style>
</style>
