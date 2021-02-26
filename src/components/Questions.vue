<template> 
    <div>      
      <h1>{{currentQuestion.question}}</h1>
      <div v-if="currentQuestion">
        <button type="button" v-for="answer in currentQuestion.answers"
        :key="answer" @click="handleClick(answer)">{{answer}}</button>                    
      </div> 
      </div>   
</template>

<script>
export default {
  props:{
    questions: Array
  },
  data() {
    return {
      index: 0,
      points: 0,
      loading: true,      
      userAnswers: [],      
    }
  },  
  //returns a single question from the list of questions
  computed: {
    currentQuestion() {
      if (this.questions != null){
      console.log(this.questions)      
      return this.questions[this.index];
    }
    return "";
    }
  },

    methods: {
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
    }
  }     
}
</script>
<style>
</style>