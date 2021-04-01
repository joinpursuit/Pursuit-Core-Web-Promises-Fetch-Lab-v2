
const button = document.querySelector("#reload");
const list = document.querySelector("#list");
button.addEventListener("click", (e) => {
    loadJokes()
})
const loadJokes = () => {
    fetch('https://official-joke-api.appspot.com/random_ten')
        .then(res => {
            return res.json();
        }).then(res => {
            list.innerHTML = "";
            res.forEach((joke, i) => {//forEach
                let li = document.createElement("li")
                let div = document.createElement("div")
                div.textContent = joke.setup;
                li.className = "card"
                li.append(div)
                list.append(li)
                let p = document.createElement("p")
                p.textContent = joke.punchline;
                p.style.visibility = "hidden";
                li.appendChild(p)
                li.addEventListener("click", (e)=>{//eventListener
                    if(p.style.visibility === "hidden"){
                        p.style.visibility = "visible";
                    }else{
                        p.style.visibility = "hidden";
                    }
                })//eventListener
            })//forEach
        })
}
loadJokes()