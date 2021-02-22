const jokeCards = document.getElementById("jokeCards");
const reloader = document.getElementById("reload");

const loadJokes = async () => {
  jokeCards.textContent = "Loading...";

  const response = await fetch("https://official-joke-api.appspot.com/jokes/ten");
  const jokes = await response.json();

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
};

reloader.addEventListener("click", loadJokes);

loadJokes().catch((error) => {
  console.error("Oh no!", error);
});
