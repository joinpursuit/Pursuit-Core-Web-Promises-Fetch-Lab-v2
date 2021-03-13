jokes()

function jokes(){
  
let jokes = fetch("https://official-joke-api.appspot.com/random_ten")

jokes.then(response => {
    return response.json()
}).then (json => {
    for (let el of json){
        let count = 0
        let main = document.querySelector("main")
        let card = document.createElement("div")
        card.className = "card"
        card.textContent = el.setup

        main.appendChild(card)

        let punchline = document.createElement("p")
        punchline.textContent = el.punchline
        punchline.className = "answer"

      card.addEventListener("click", () => {
          count += 1
            if (count % 2 !== 0){
                card.appendChild(punchline)
            }  else {
                card.removeChild(punchline)
            }
      })

    }
})



}


document.getElementById("reload").addEventListener("click", () => {
    document.querySelector("main").innerHTML = ""
    jokes()
})