document.addEventListener("DOMContentLoaded", () => {
  let jokes = document.getElementById("jokes");
  fetch("https://official-joke-api.appspot.com/jokes/ten").then((response) => {
    return response.json().then((body) => {
      body.forEach((joke) => {
        let card = document.createElement("li");
        card.setAttribute("class", "card");
        card.textContent = joke.setup;
        jokes.appendChild(card);
        let p = document.createElement("p");
        card.addEventListener("click", (event) => {
          if (p.textContent.length === 0) {
            p.textContent = joke.punchline;
            event.target.appendChild(p);
          } else if (p.textContent.length > 0) {
            p.textContent = "";
          }
        });
      });
    });
  });
});
