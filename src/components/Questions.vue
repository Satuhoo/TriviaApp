<template> 
    <div>

      <h1 v-html="loading ? 'Loading questions from the api...' : currentQuestion.question"></h1>

      <div v-if="currentQuestion">
        <button type="button" v-for="answer in currentQuestion.answers"
        :key="answer" @click="handleClick(answer)">{{answer}}</button>                    
      </div>  

      </div>   
</template>

<script>
import {getQuestions} from '../utils/questions.js'

export default {
  data() {
    return {
      index: 0,
      points: 0,
      loading: true,
      questions: [],
      userAnswers: [],      
    }
  },  
  //returns a single question from the list of questions
  computed: {
    currentQuestion() {
      console.log(this.questions)      
      return this.questions[this.index];
    }
  },
  methods: {
    //Knuth shuffle for answer array
    shuffleArray(array) {        
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }       
        return array;        
    },
    //Handles the click of answer buttons. Gets the users answer as a param.
    handleClick(answer) {
    //if answer was correct increment points by 10
      if (answer == this.currentQuestion.correct_answer) {
        this.points += 10;
       }
      //Creates new question object and add user's answer for it
      let question = this.questions[this.index];
      question.userAnswer = answer;
      this.userAnswers.push(question); //Adds object to userAnswers list
      //increment index by one to get the next quiz question
      this.index = this.index + 1;
      //call to parent when all questions have been answered.
      if (this.index == this.questions.length){        
        this.$parent.updateResults(this.userAnswers, this.points)            
      }
    },
    async loadQuestions() {
      this.questions = await getQuestions();
      //Map incorrect answers and the correct answer into shuffled answers array
      this.questions.map((question) => {
        question.answers = this.shuffleArray([
          question.correct_answer,
          ...question.incorrect_answers]);
      });
      //when data has been loaded set loading as false
      this.loading = false;
    },
  },
  //load questions when component gets created
  mounted() {
    this.loadQuestions();
  },
}
</script>
<style>
</style>