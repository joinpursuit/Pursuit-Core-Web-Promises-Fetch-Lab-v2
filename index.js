document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('button')
    const list = document.querySelector('ul')

    button.addEventListener('click', () => {
        
        fetch('https://official-joke-api.appspot.com/jokes/programming/ten')
        .then(response => response.json())
        .then(body => {
            for(let joke of body) {
                let card = document.createElement('li')
                let setup = document.createElement('p')
                let punchline = document.createElement('p')
                setup.textContent = joke.setup
                punchline.textContent = joke.punchline
                setup.classList.add('card')
                punchline.classList.add('hide')
                card.appendChild(setup)
                card.appendChild(punchline)
                list.appendChild(card)
                
                card.addEventListener('click', () => {
                    if (punchline.classList.contains('hide')) {
                        punchline.classList.remove('hide')
                    } else {
                        punchline.classList.add('hide')
                    }
                })
            }
            })
            .catch(error => error.message)
    })
})