<template>
  <div id="app">
    <Header />
    <button class="start-btn" @click="openGame" v-if="$route.path === '/'">Start game</button>
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
#app {
  text-align: center;
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