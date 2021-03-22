document.addEventListener("DOMContentLoaded", () => {
  let jokes = document.getElementById("jokes");
  let button = document.getElementById("reload");
  joker();
  button.addEventListener("click", (event) => {
    let loading = document.getElementById("loading");
    loading.textContent = "Loading...";
    removeAll(jokes);
    joker();
  });
});

const joker = () => {
  let jokes = document.getElementById("jokes");
  fetch("https://official-joke-api.appspot.com/jokes/ten").then((response) => {
    return response.json().then((body) => {
      loading.textContent = "";
      body.forEach((joke) => {
        let card = document.createElement("li");
        let p1 = document.createElement("p");
        card.setAttribute("class", "card");
        p1.textContent = joke.setup;
        p1.className = "first";
        card.appendChild(p1);
        jokes.appendChild(card);
        let p = document.createElement("p");
        card.addEventListener("click", (event) => {
          if (p.textContent.length === 0) {
            p.textContent = joke.punchline;
            card.appendChild(p);
          } else if (p.textContent.length > 0) {
            p.textContent = "";
          }
        });
      });
    });
  });
};

const removeAll = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};
