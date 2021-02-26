<template>
  <div id="app">
    <Header />
    <button @click="openGame" v-if="$route.path === '/'">Start game</button>
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
  methods: {
    openGame() {
      this.$router.push('/quiz');
    },
  },
};
</script>

<style>
</style>