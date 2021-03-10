const header = document.getElementById('header')
const p = document.createElement('p')
const li = document.createElement('li')
const ul = document.createElement('ul')

header.textContent = 'Jokes!'

const grab = fetch('https://official-joke-api.appspot.com/random_ten').then(response => response.json())
    .then(obj => {
        let jokes = {}
        // console.log(jokes)
        for (let each of obj) {            
            jokes = { ...each }
            return jokes
            // console.log(jokes)
        }     
    })
    .then(jokes => {
        console.log(jokes)        
        let card = jokes.setup
        let punchline = jokes.punchline
        console.log(card)
        console.log(punchline)
})











