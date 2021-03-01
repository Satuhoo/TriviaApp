<template>

  <div class="flex-container">
    <div id="questions">
    <span>Amount of questions: </span>
    <select v-model="amount" @change="onChange()">
      <option
        v-for="amounts in questionamounts"
        :key="amounts.text"
        :value="amounts.value">
        {{ amounts.text }}
      </option>
    </select>
    </div>

    <div id="category">
    <span>Category: </span>
    <select v-model="category" @change="onChange()">
      <option
        v-for="category in categories"
        :key="category.text"
        :value="category.value">
        {{ category.text }}
      </option>
    </select>
    </div>
    
  </div>
</template>

<script>
import {setQueryString} from '../utils/questions.js'
    //constants for category names and values for fetching API
    const categories = [
      { text: 'Any', value: 'any' },
      { text: 'General Knowledge', value: '9' },
      { text: 'Entertainment: Video Games', value: '15' },
      { text: 'Mythology', value: '20' },
      { text: 'Science and Nature', value: '17' },
      { text: 'History', value: '23' },
      { text: 'Politics', value: '24' }
    ]
    //constants for the amount of questions to fetch
    const questionamounts = [
      { text: '5', value: '5' },
      { text: '10', value: '10' },
      { text: '15', value: '15' },
      { text: '20', value: '20' }
    ]

export default {
  data() {
    return {    
      categories,
      questionamounts,
      category: "any",
      amount: "10",    
  }},
  methods: {
    //on select value change call question.js setQueryString to format API call
    onChange(){      
      setQueryString({parameters: {category: this.category,
      amount: this.amount}})
    },
  },
  //on mount call question.js setQueryString to format API call
  mounted() {
      setQueryString({parameters: {category: this.category,
      amount: this.amount}})
  }
 };
</script>

<style>
.flex-container {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
.flex-container > div {
    font-size: 18px;
    margin: 20px;
}
select {
  margin-top: 20px;
  background-color: yellowgreen;
  font-size: 18px;
  font-weight: bold;
  padding: 5px;
  border-radius: 5px;
}
/*If screen width is small enough, changes dropdown menus to one column instead of row*/
@media (max-width: 800px) {
  .flex-container {
    flex-direction: column;
  }
}
</style>
