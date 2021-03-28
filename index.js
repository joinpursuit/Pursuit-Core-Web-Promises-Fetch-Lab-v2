
const button = document.querySelector("#reload");
button.addEventListener("click", (event) => {
    event.preventDefault();
    displayJokes()
})
const displayJokes = () => {
    fetch("https://official-joke-api.appspot.com/random_ten")
    .then((response) => {
        if (!response.ok) {
            throw Error(`Something went wrong, status ${res.status}`);
        }
        return response.json();
    })
    .then((response) => {
        const section = document.querySelector("section");
        section.innerHTML = "";
        response.forEach((joke) => {
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
displayJokes(); 