<template>
  <div id="app">
    <Header />
    <button @click="openGame" v-show="showButton">Start game</button>
    <QuizBox v-show="showQuiz" />
  </div>
</template>

<script>
import Header from "./components/Header";
import QuizBox from "./components/QuizBox";

export default {
  name: "App",
  components: {
    Header,
    QuizBox,
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
