const display = document.querySelector('div')


function getJokes() {
   fetch('https://official-joke-api.appspot.com/random_ten')
   .then(res => {
      return res.json()
   }).then(body => {
      console.log(body)
      let joke = body
      for(let randomJoke of joke) {
         const each = document.createElement('div')
         const heading = document.createElement('h3')
         heading.textContent = randomJoke.setup
         const showJoke = document.createElement('p')
         showJoke.textContent = randomJoke.punchline
         
         each.classList.add('card')   
         each.appendChild(heading)
         each.appendChild(showJoke)
         display.appendChild(each)

         // showJoke.style.display = 'none'
         
         each.addEventListener('click', () => {
            if (showJoke.style.display === 'none') {
               showJoke.style.display = 'block'
            } else {
               showJoke.style.display = 'none'
            }
         })
      }
   })
}
   getJokes()

   document.querySelector('#reload').addEventListener("click", ()=> {
      display.innerHTML = ""
      getJokes()

   })