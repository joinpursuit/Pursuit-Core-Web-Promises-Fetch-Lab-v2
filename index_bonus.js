const jokeCards = document.getElementById("jokeCards");
const reloader = document.getElementById("reload");
const selector = document.getElementById("selector");

const seen = {};

const loadJokes = async () => {
  jokeCards.textContent = "Loading...!";
  
  const response = await fetch(`https://official-joke-api.appspot.com/jokes/${selector.value}/ten`);
  const jokes = await response.json();

  jokeCards.textContent = "";

  for (const joke of jokes) {
    if (seen[joke.setup]) {
      continue;
    }

    seen[joke.setup] = true;

    const card = document.createElement("button");
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

selector.addEventListener("change", loadJokes);

loadJokes().catch((error) => {
  console.error("Oh no!", error);
});
