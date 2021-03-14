// const button = document.querySelector("#reload");

const button = document.querySelector("#reload");

button.addEventListener("click", (e) => {
    e.preventDefault();   
    displayJokes()
})

const displayJokes = () => {
    fetch("https://official-joke-api.appspot.com/random_ten")
    .then((res) => {
        if (!res.ok) {
            throw Error(`Something went wrong, status ${res.status}`);
        }
        return res.json();
    })
    .then((res) => {
        const section = document.querySelector("section");
        section.innerHTML = "";
        res.forEach((joke) => {
            const div = document.createElement("div")
            const h3 = document.createElement("h3");
            const p = document.createElement("p");
            section.appendChild(div)
            div.className = "card";
            h3.textContent = joke.setup
            div.appendChild(h3);
            p.textContent = joke.punchline
            div.appendChild(p)
            div.addEventListener("click", (event) => {
                if (p.style.visibility === "visible") {
                    p.style.visibility = "hidden"
                } else {
                    p.style.visibility = "visible";
                }
        })
    });
    })
    .catch((err) => {
        console.log(err);
    });
}

// const selector = document.querySelector("#type-list");

// select.addEventListener("select", (event) => {
//     if (event.target === "General") {

//     }
// })

displayJokes();