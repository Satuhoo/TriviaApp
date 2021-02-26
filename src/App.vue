<template>
  <div id="app">
    <Header />
    <button @click="openGame" v-show="showButton">Start game</button>
    <Quiz v-show="showQuiz" />
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
      showQuiz: false,
    };
  },
  methods: {
    openGame() {
      this.showButton = false;
      this.showQuiz = true;
    },
  },
};
</script>

<style>
</style>
