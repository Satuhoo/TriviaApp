var query_url

//sets the api query url depending on users choices
export function setQueryString (queryParamas){    
    query_url = 'https://opentdb.com/api.php?'
    query_url = query_url + "amount=" + queryParamas.parameters.amount    
    if (queryParamas.parameters.category != 'any'){
        query_url = query_url + '&category=' + queryParamas.parameters.category
    }    
}

//calls the api to fetch the quiz questions
export const getQuestions = () =>{    
    return fetch (query_url).then(response => response.json())
    .then(response => response.results)
}