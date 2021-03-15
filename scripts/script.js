
let reload = document.querySelector("#reloadBtn")

document.createElement("li")

document.addEventListener("DOMContentLoaded", () => {
  fetch('https://official-joke-api.appspot.com/random_ten').then(response => {
      return response.json;
    }).then(random_ten => {
        for(let el of random_ten){
            let main = document.querySelector("main")
            let card = document.createElement("div")
            card.className = "card"
            card.textContent= el.setup
            main.appendChild(card)

        }})});