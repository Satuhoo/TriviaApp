<template>
  <div id="app">
    <Header />
    <QuizSelector v-if="$route.path === '/'"/>
    <button class="start-btn" @click="openGame" v-if="$route.path === '/'">Start game</button>    
    <router-view>
      <Quiz/>
    </router-view>
    
  </div>
</template>

<script>
import Header from "./components/Header";
import Quiz from "./components/Quiz";
import QuizSelector from './components/QuizSelector.vue';


export default {
  name: "App",
  components: {
    Header,
    Quiz,
    QuizSelector,
  },
  methods: {
    openGame() {
      this.$emit('query');
      this.$router.push('/quiz');
    },
  },
};
</script>

<style>
#app {
    margin-top:auto;
    margin-bottom:auto;
    text-align:center;
}
.start-btn {
  margin-top: 100px;
  background-color: yellowgreen;
  font-size: 18px;
  font-weight: bold;
  padding: 10px;
  border-radius: 5px;
}
</style>