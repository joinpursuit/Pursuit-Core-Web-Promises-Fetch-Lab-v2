const ul = document.querySelector("ul");
const button = document.querySelector("button");

const jokeFunction = async () => {
    try {
        const res = await axios.get("https://official-joke-api.appspot.com/random_ten");
        res.data.forEach((joke) => {
            const li = document.createElement("li");
            ul.appendChild(li);
            const jokeCard = document.createElement("p");
            li.classList.add('card');
            jokeCard.textContent = joke.setup;
            li.appendChild(jokeCard);
            const punchLine = document.createElement("p");
            punchLine.value = joke.punchline;
            punchLine.textContent = joke.punchline;
            punchLine.classList.add("punchline");
            li.appendChild(punchLine);
            punchLine.style.display = "none";
            li.addEventListener("click", (e) => {
                if (punchLine.style.display === "block") {
                    punchLine.style.display = "none";
                } else {
                    punchLine.style.display = "block";
                }
            })
        })
    } catch (err) {
        console.log(err)
    }
}

jokeFunction()

button.addEventListener("click", (e) => {
    ul.textContent = "";
    jokeFunction();
})

