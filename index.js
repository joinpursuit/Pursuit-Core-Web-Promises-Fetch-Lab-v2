const jokeCards = document.getElementById("jokeCards");
const reloader = document.getElementById("reload");

const loadJokes = () => {
  jokeCards.textContent = "Loading...";

  return fetch("https://official-joke-api.appspot.com/jokes/ten")
    .then((response) => response.json())
    .then((jokes) => {
      jokeCards.textContent = "";

      for (const joke of jokes) {
        const card = document.createElement("div");
        card.className = "card";

        card.addEventListener("click", () => {
          card.className = card.className === "card" ? "card expanded" : "card";
        });

        const setup = document.createElement("h2");
        setup.textContent = joke.setup;
        card.appendChild(setup);

        const punchline = document.createElement("p");
        punchline.textContent = joke.punchline;
        card.appendChild(punchline);

        jokeCards.appendChild(card);
      }
    })
    .catch((error) => {
      console.error("Oh no!", error);
    });
};

reloader.addEventListener("click", loadJokes);

loadJokes();
