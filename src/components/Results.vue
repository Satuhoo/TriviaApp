<template>
  <div>
      <h1>Results</h1>
      <p>Your points: {{points}}</p>
      <button @click="playAgain">Play again!</button>
      <button @click="quit">Quit game</button>
      <table>
        <tr>
          <th>Guestion</th>
          <th>Correct answer</th>
          <th>Your answer</th>
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
td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
.correct {
  color: green;
}
.wrong {
  color:red;
}
</style>
