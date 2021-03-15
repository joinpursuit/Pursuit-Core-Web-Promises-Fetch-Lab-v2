const randomJokes = fetch('https://official-joke-api.appspot.com/random_ten').then(response => {
    return response.json()
}).then(body => {
    console.log(body)
    const jokes = body
    const jokeList = document.querySelector('ul')
    for (let joke of jokes) {
      let dadJokes = document.createElement('li')
      dadJokes.textContent = joke.setup
      jokeList.appendChild(dadJokes)
    }
    
  })