const header = document.getElementById('header')
const ul = document.querySelector('ul')
const btn = document.getElementById('btn')

header.textContent = 'Jokes!'
btn.textContent = 'More Jokes!'

const grab = () => {
    fetch('https://official-joke-api.appspot.com/random_ten')
        .then(response => response.json())
        .then(jokes => {
        alert('OKAY!')
        ul.textContent = ''
        for (let joke of jokes) {
            let card = joke.setup
            let punchline = joke.punchline

            const li = document.createElement('li')
            li.textContent = card

            const p = document.createElement('p')
            
            ul.appendChild(li)
            
            li.addEventListener('click', () => {
                //when I click add <p> to li 
                li.appendChild(p)
                //check if <p> text content is joke.punchline or undefined
                if (p.textContent !== punchline) {
                    p.textContent = punchline
                }
                else { p.textContent = '' }
            }) 
        } //<---end of loop
    })
}
btn.addEventListener('click', grab)


