<template>
  <div>
      <h2>Results</h2>
      <p class="points">Your points: {{points}}</p>
      <button class="btn" @click="playAgain">Play again!</button>
      <button class="btn" @click="quit">Quit game</button>
      <table>
        <tr>
          <th class="title">Guestion</th>
          <th class="title">Correct answer</th>
          <th class="title">Your answer</th>
        </tr>
        <tr v-for="question in userAnswers" :key="question.question">
          <th v-html="question.question"></th>
          <th v-html="question.correct_answer"></th>
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
      this.$emit('play-again')
    },
    quit() {
      this.$emit('quit')
    }
  }
}
</script>

<style>
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
@media (max-width: 800px) {
    table {
      margin: 30px 40px 50px 40px;
    }
}
</style>
