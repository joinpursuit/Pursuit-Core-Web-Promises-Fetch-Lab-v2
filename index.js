document.addEventListener('DOMContentLoaded', () => {
    Jokes()

const button = document.querySelector("#reload")
const ul = document.querySelector(".cards")






    function Jokes() {
    const ul = document.querySelector(".cards")

    
    fetch("https://official-joke-api.appspot.com/random_ten").then(response => {
        return response.json()
        }).then(body => {   
        for (i = 0; i < 10; i++) {
        let div = document.createElement("div")
            div.classList.add('card')
            div.setAttribute("type", "button")
            ul.appendChild(div)
        let setUp = document.createElement('p')
            setUp.classList.add('setUp')
            setUp.innerHTML = body[i].setup
            div.appendChild(setUp)
        let ans = document.createElement('p')
            ans.classList.add('punchLine')
            ans.innerHTML = body[i].punchline
            div.appendChild(ans)
         div.addEventListener('click', () => {
            if (ans.style.visibility === "visible"){
             ans.style.visibility = "hidden"
            }else{
             ans.style.visibility = "visible"
                    }
                })
            }
        })
    }
    button.addEventListener('click', () => {
        ul.textContent = ''
        Jokes()
    })
})