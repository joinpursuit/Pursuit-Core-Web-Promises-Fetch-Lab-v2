document.addEventListener("DOMContentLoaded", () => {
    const getJokes = (jType = "general") => {
        fetch(`https://official-joke-api.appspot.com/jokes/${jType !== "random" ? `${jType}/` : ""}ten`)
        .then(response => response.json())
        .then(arrData => {
            const container = document.getElementById("jokes-container")
            while(container.firstChild){
                container.firstChild.remove()
            }
            for(const el of arrData){
                const cardDiv = document.createElement("div")
                cardDiv.className = "card"
                const h3 = document.createElement("h3")
                h3.textContent = el.setup
                const p = document.createElement("p")
                p.textContent = el.punchline
                h3.addEventListener("click", e => {
                    const pExist = e.target.parentNode.children[1]
                    if(pExist){
                        e.target.parentNode.removeChild(pExist)
                    } else {
                        e.target.parentNode.appendChild(p)
                    }
                })
                p.addEventListener("click", e => e.target.remove())
                cardDiv.appendChild(h3)
                container.appendChild(cardDiv)
            }
        })
    }
    getJokes()
    const btnReload = document.getElementById("reload")
    btnReload.addEventListener("click", () => {
        const jokeType = document.getElementById("joke-types").value
        getJokes(jokeType)
    })
}) 
 