const button = document.querySelector("#reload");
const ul = document.querySelector("#section-card")
const jokes = () => {
    fetch(`https://official-joke-api.appspot.com/jokes/ten`)
    .then(res => {
        if(!res.ok){
            throw Error("Something went wrong, status " + res.status);
        }
        return res.json();
    }).then(res => {
        ul.innerHTML = ""
        res.forEach(joke => {
            const li = document.createElement("li");
            li.classList.add("card")

            const p1 =document.createElement("p")
            p1.classList.add("joke")
            p1.textContent=joke.setup
            

            const p2 = document.createElement("p")

            p2.classList.add("punchline")
            p2.textContent=joke.punchline
            ul.appendChild(li)
            li.appendChild(p1)
            li.appendChild(p2)
            console.log(joke);
            
            li.addEventListener("click", (e) => {
                if(p2.style.display === "block") {
                    p2.style.display = "none"
                } else {
                    p2.style.display = "block"
                }
            })
        })
        
    }).catch(err => {
        console.log(err);
    })
}

button.addEventListener("click", jokes)
window.addEventListener('DOMContentLoaded', jokes)



