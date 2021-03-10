document.addEventListener('DOMContentLoaded', eve => {
  eve.preventDefault()
  loadJokes()
})

function loadJokes () {
  const container = document.getElementById('container')
  fetch('https://official-joke-api.appspot.com/random_ten')
    .then(response => {
      return response.json()
    })
    .then(body => {
      for (jok of body) {
        const forms = document.createElement('div')
        forms.className = 'card'
        const inputJoke = document.createElement('span')
        inputJoke.className = 'setup'
        inputJoke.textContent = jok.setup
        forms.appendChild(inputJoke)

        const jokeJoke = document.createElement('span')
        jokeJoke.className = 'punchline'
        jokeJoke.style.visibility = 'hidden'
        jokeJoke.textContent = jok.punchline
        forms.appendChild(jokeJoke)

        container.appendChild(forms)

        inputJoke.addEventListener('click', eve => {
          eve.preventDefault()
          if (jokeJoke.style.visibility === 'hidden') {
            jokeJoke.style.visibility = 'visible'
          } else {
            jokeJoke.style.visibility = 'hidden'
          }
        })
      }
    })

  const button = document.getElementById('reload')
  button.addEventListener('click', () => {
    const spanner = document.getElementById('loading')
    spanner.textContent = 'Loading....'
    container.innerHTML = ''
  })
}
