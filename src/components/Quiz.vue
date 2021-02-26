<template> 
    <div> 
      <div v-if="!loading">      
      <Questions :questions = "questions" v-if="!quizEnded" />   
      </div>       
      <Results :userAnswers = "userAnswers" :points="points" v-if="quizEnded" 
        @play-again="playAgain" @quit="quit"/>
    </div> 
</template>

<script>
import Results from './Results'
import Questions from './Questions'
import {getQuestions} from '../utils/questions.js'

export default {
  data() {
    return {
      points: 0,
      quizEnded: false,
      questions: [],
      userAnswers: [],
      loading: true,
    }
  },
  components: {
    Results,
    Questions
  },
  methods: {
    updateResults(userAnswers, points) {
      this.points = points;
      this.userAnswers = userAnswers;
      this.quizEnded = true;
    },
    async loadQuestions() {
      this.questions = await getQuestions();
      //Map incorrect answers and the correct answer into shuffled answers array
      this.questions.map((question) => {
        question.answers = this.shuffleArray([
          question.correct_answer,
          ...question.incorrect_answers
        ]);
      });
      //when data has been loaded set loading as false
      this.loading = false;
    },
    //Knuth shuffle for answer array
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    },
    playAgain() {
      this.loading = true;
      this.userAnswers = [];
      this.points = 0;
      this.loadQuestions()
      .then(this.quizEnded = false)
    },
    quit(){
      this.$router.go(-1)
    }
  },
  created() {
    this.loadQuestions();
  },
}
</script>

<style>
</style>