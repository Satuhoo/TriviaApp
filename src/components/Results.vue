<template>
  <div>
      <h1>{{props.userAnswers}}</h1>
      <h1>{{props.questions}}</h1>
  </div>
</template>

<script>
export default {
  props: {
    userAnswers: [],
    questions: [],
  },
}
</script>

<style>

</style>