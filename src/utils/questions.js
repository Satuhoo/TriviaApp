//gets questions from api and parses response
const QUESTIONS_URL = 'https://opentdb.com/api.php?amount=10'

export const getQuestions = () =>{
    return fetch (QUESTIONS_URL).then(response => response.json())
    .then(response => response.results)
}