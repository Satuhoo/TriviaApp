<template>  
    <div>           
      <h1 v-html="loading ? 'Loading questions from the api...' : current.question"></h1>
      <form v-if="current">
        <button
          v-for="answer in current.answers"
          :key="answer"
          @click="handleClick(answer)"              
        >{{answer}}</button>                    
      </form>  
    </div> 
</template>

<script>
import {getQuestions} from '../../utils/questions.js'

export default {
  data() {
    return {
      index: 0,
      points: 0,
      loading: true,
      questions: [],
      userAnswers: []
    }
  },
  //returns a single question from the list of questions
  computed: {
    current() {
      return this.questions[this.index];
    }
  },
  methods: {
    //Handels the click of answer buttons. Gets the users answer as a param.
    handleClick(answer) {
    //if answer was correct increment points by 10
      if (answer == this.current.correct_answer) {
        this.points += 10;
       }
      this.userAnswers.push(answer);
      console.log("pts: " + this.points)
      console.log("answers: " + this.userAnswers);
      //increment index by one to get the next quiz question
      this.index = this.index + 1;
    },
    async loadQuestions() {
      this.questions = await getQuestions();
      //map incorrect answers and the correct answer into answers array
      this.questions.map((question) => {
        question.answers = [
          question.correct_answer,
          ...question.incorrect_answers];
      });
      //when data has been loaded set loading as false
      this.loading = false;
    }
  },
  //load questions when component gets created
  created() {
    this.loadQuestions();
  }
}
</script>

<style>
</style>