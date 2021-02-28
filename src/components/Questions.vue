<template> 
    <div class="question-box">
      <h1 class="question" v-html="currentQuestion.question"></h1>
      <div v-if="currentQuestion">
        <div class="grid-container" >
          <div  class="grid-item" v-for="answer in currentQuestion.answers" :key="answer">
            <button v-if="!clicked" class="answer-btn" type="button" 
              @click="handleClick(answer)" v-html="answer">
            </button>    
            <button v-else v-html="answer" class="answer-btn"
              :style="answer == currentQuestion.correct_answer ? {background: 'green'} : {background: 'red'}">
            </button>  
          </div>
        </div>                
      </div> 
      <p>Question {{index + 1}}/{{questions.length}}</p>
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
      clicked: false,
    }
  },  
  //returns a single question from the list of questions
  computed: {
    currentQuestion() {
      if (this.questions != null){
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
      this.clicked = true; //Sets value true for 'clicked' variable so page will show right answer in screen
      //Creates new question object and add user's answer for it
      let question = this.questions[this.index];
      question.userAnswer = answer;
      this.userAnswers.push(question); //Adds object to userAnswers list
      //Waits two seconds and increments index by one to get the next quiz question
      setTimeout(() => {
        this.index = this.index + 1;
        this.clicked = false;
        //call to parent when all questions have been answered.
        if (this.index == this.questions.length){        
          this.$parent.updateResults(this.userAnswers, this.points);        
        }
      }, 2000)      
    }
  }     
}
</script>

<style scoped>
.question-box {
  border: 1px solid black;
  border-radius: 5px;
  width: 60%;
  align-self: center;
  margin: 50px auto 0 auto;
  padding: 50px 50px 10px 50px;
}
.question {
  font-size: 25px;
}
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
}
.grid-item {
  margin-top: 20px;
}
.answer-btn {
  background-color: yellowgreen;
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  border-radius: 5px;
  width: 300px;
  height: 100%;
}
p {
  margin-top: 50px;
}
@media (max-width: 800px) {
    .answer-btn {
      width: 150px;
    }
}
</style>