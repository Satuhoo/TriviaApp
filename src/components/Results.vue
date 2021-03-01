<template>
  <div>
      <h2>Results</h2>
      <p class="points">Your points: {{points}} of {{userAnswers.length * 10}}</p>
      <!--Buttons call the methods which call to parent component to handle it-->
      <button class="btn" @click="playAgain">Play again!</button>
      <button class="btn" @click="quit">Quit game</button>
      <table>
        <tr>
          <th class="title">Guestion</th>
          <th class="title">Correct answer</th>
          <th class="title">Your answer</th>
        </tr>
        <!--Creates table from all questions, correct answers and user's answers-->
        <tr v-for="question in userAnswers" :key="question.question">
          <th v-html="question.question"></th>
          <th v-html="question.correct_answer"></th>
          <!--Changes the color of answer depending if it is correct or wrong answer-->
          <th v-html="question.userAnswer" :class="question.userAnswer == question.correct_answer ? 'correct' : 'wrong'"></th>
        </tr>
      </table>
  </div>
</template>

<script>
export default {
  props: {
    userAnswers: {
      type: Array
    },
    points: {
      type: Number
    },
  },
  methods: {
    playAgain () {
      this.$emit('play-again') //Send the information about playing game again to parent component
    },
    quit() {
      this.$emit('quit') //Send the information about quitting game to parent component which handle it
    }
  }
}
</script>

<style scoped>
h2 {
  margin-top: 40px;
}
.points {
  margin-top: 30px;
  font-size: 18px;
}
.btn {
  background-color: yellowgreen;
  font-size: 14px;
  font-weight: bold;
  padding: 10px;
  margin: 30px 10px 10px 10px;
  border-radius: 5px;
}
table {
  margin: 30px 150px 50px 150px;
}
td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  font-weight: normal;
}
.title {
  font-weight: bold;
  background-color: lightgray;
}
.correct {
  color: green;
}
.wrong {
  color:red;
}
/*If screen width is 800 or smaller, changes margins of results table*/
@media (max-width: 800px) {
    table {
      margin: 30px 40px 50px 40px;
    }
}
</style>