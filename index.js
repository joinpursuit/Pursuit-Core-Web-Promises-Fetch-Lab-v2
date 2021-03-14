const button = document.getElementById("reload");
const container = document.getElementById("container");
document.addEventListener("DOMContentLoaded", () => {
  loadNewJoke();
  button.addEventListener("click", loadNewJoke);
});
function loadNewJoke() {
  fetch("https://official-joke-api.appspot.com/random_ten")
    .then((res) => {
      if (!res.ok) {
        throw Error("Error");
      }
      return res.json();
    })
    .then((jokes) => {
      for (joke of jokes) {
        const cards = document.createElement("div");
        cards.className = "card";
        const setup = document.createElement("div");
        joke.className = "setup";
        setup.textContent = joke.setup;
        cards.appendChild(setup);

        const punchline = document.createElement("div");
        punchline.className = "punchline";
        punchline.style.visibility = "hidden";
        punchline.textContent = `${joke.punchline}`;
        cards.appendChild(punchline);

        container.appendChild(cards);

        setup.addEventListener("click", (e) => {
          e.preventDefault();
          console.log(setup);
          if (punchline.style.visibility === "hidden") {
            punchline.style.visibility = "visible";
          } else {
            punchline.style.visibility = "hidden";
          }
        });
      }
    });
}
