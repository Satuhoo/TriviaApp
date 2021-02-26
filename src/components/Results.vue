<template>
  <div>
      <h1>Results</h1>
      <p>Your points: {{points}}</p>
      <table>
        <tr>
          <th>Guestion</th>
          <th>Correct answer</th>
          <th>Your answer</th>
        </tr>
        <tr v-for="question in userAnswers" :key="question.question">
          <th>{{question.question}}</th>
          <th>{{question.correct_answer}}</th>
          <th>{{question.userAnswer}}</th>
        </tr>
      </table>
  </div>
</template>

<script>
export default {
  props: {
    userAnswers: Array,
    points: Number    
  },
}
</script>

<style>
td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>