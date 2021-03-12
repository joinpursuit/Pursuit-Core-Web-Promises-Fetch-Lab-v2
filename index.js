const header = document.getElementById('header')
const ul = document.querySelector('ul')
const btn = document.getElementById('btn')

header.textContent = 'Jokes!'

const grab = () => {
    fetch('https://official-joke-api.appspot.com/random_ten').then(response => response.json())
    .then(jokes => {            
        for (let joke of jokes) {            
            let card = joke.setup
            let punchline = joke.punchline
            const li = document.createElement('li')
            li.textContent = card
            const p = document.createElement('p')
            ul.appendChild(li)
            li.addEventListener('click', () => {
                // p.textContent = punchline
                li.appendChild(p)
                if (p.textContent !== punchline) {
                    p.textContent = punchline
                } 
                else {
                    p.textContent = ''
                }
            })
            console.log(`${card}  & ${punchline}`)$
        }
    })
}

btn.addEventListener('click', grab)













