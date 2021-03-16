const button = document.querySelector("#reload");
const list = document.querySelector("#list");


const loadJokes = async (e) => {
    const select = document.getElementById("select");
    let str = "";
    if (select.value === "general") {
        str = "https://official-joke-api.appspot.com/jokes/general/ten"
    } else if (select.value === "programming") {
        str = "https://official-joke-api.appspot.com/jokes/programming/ten"
    } else {
        str = "https://official-joke-api.appspot.com/random_ten"
    }
    const URL = await axios.get(str)
    debugger
    list.innerHTML = "";
    URL.data.forEach((joke, i) => {//forEach
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

        li.addEventListener("click", (e) => {//eventListener
            if (p.style.visibility === "hidden") {
                p.style.visibility = "visible";
            } else {
                p.style.visibility = "hidden";
            }
        })//eventListener
    })//forEach
}

loadJokes()

button.addEventListener("click", loadJokes)



