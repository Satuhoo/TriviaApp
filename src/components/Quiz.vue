<template> 
    <div>       
      <Questions v-if="!quizEnded" />          
      <Results :userAnswers="userAnswers" :points="points" v-if="quizEnded"/>
    </div> 
</template>

<script>
import Results from './Results'
import Questions from './Questions'

export default {
  data() {
    return {
      points: 0,
      quizEnded: false,
      userAnswers: [],
    }
  },
  components: {
    Results,
    Questions
  },
  methods: {
    updateResults(userAnswers, points){
      this.points = points;
      this.userAnswers = userAnswers;   
      this.quizEnded = true;         
    }
  },
  
}
</script>

<style>
</style>