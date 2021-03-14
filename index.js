const button = document.querySelector("#reload");
const section = document.querySelector("#section-card")
const jokes = () => {
    fetch(`https://official-joke-api.appspot.com/jokes/ten`)
    .then(res => {
        if(!res.ok){
            throw Error("Something went wrong, status " + res.status);
        }
        return res.json();
    }).then(res => {
        section.innerHTML = ""
        res.forEach(joke => {
            const ul=document.createElement("ul")
            ul.classList.add("card")
            const li = document.createElement("li");
            li.classList.add("joke")
            li.textContent = joke.setup;

            const p = document.createElement("p")
            p.style.display = "none"

            p.classList.add("punchline")
            p.textContent=joke.punchline
            ul.appendChild(li)
            li.appendChild(p)
            section.appendChild(ul);
            console.log(joke);
            
            ul.addEventListener("click", (e) => {
                if(p.style.display === "block") {
                    p.style.display = "none"
                } else {
                    p.style.display = "block"
                }
            })
        })
        
    }).catch(err => {
        console.log(err);
    })
}

button.addEventListener("click", jokes)
window.addEventListener('DOMContentLoaded', jokes)



