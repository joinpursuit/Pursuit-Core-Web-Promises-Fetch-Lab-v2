const randomTen = fetch ('https://official-joke-api.appspot.com/jokes/programming/ten').then(response => {
    return response.json()
  }).then(body => {
    console.log(body)
    const jokes = body

    const jokeList = document.querySelector('ul')

    for (let joke of jokes) {
      const randomJokes = document.createElement('li')
      randomJokes.setAttribute('class', 'card')
      randomJokes.textContent = joke.setup
      jokeList.appendChild(randomJokes)


      const jokeReveal = document.createElement('li')
            jokeReveal.setAttribute('id','revJoke')
            jokeReveal.textContent = joke.punchline
            jokeList.appendChild(jokeReveal)

        jokeList.addEventListener("click", () => {
          jokeReveal.style.display = "block"
        })

    }

});
