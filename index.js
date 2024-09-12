
document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector("#reload")
    const jokeCards = document.querySelector(".cards")
    theJoke()
    function theJoke() {
        const jokeCards = document.querySelector(".cards")
        fetch("https://official-joke-api.appspot.com/random_ten").then(response => {
            return response.json()
        }).then(body => {
            console.log(body)
            for (i = 0; i < 10; i++) {
                let jokeCard = document.createElement("jokeCard")
                jokeCard.classList.add('card')
                jokeCard.setAttribute("type", "button")
                jokeCards.appendChild(jokeCard)
                let paraDetail = document.createElement('p')
                paraDetail.classList.add('setUp')
                paraDetail.innerHTML = body[i].setup
                jokeCard.appendChild(paraDetail)
                let joke = document.createElement('p')
                joke.classList.add('punchLine')
                joke.innerHTML = body[i].punchline
                jokeCard.appendChild(joke)

                 //create a button out of jokeCard
                 jokeCard.addEventListener('click', (event) => {
                    if (joke.style.visibility === "visible"){
                        joke.style.visibility = "hidden"
                    }else{
                        joke.style.visibility = "visible"
                    }
                })
            }
        })

    }
    button.addEventListener('click', (event) => {
        jokeCards.innerHTML = ''
        theJoke()
    })

})