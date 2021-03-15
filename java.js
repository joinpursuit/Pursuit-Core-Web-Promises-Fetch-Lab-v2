document.addEventListener("DOMContentLoaded", () => {
  let card = document.querySelector(".card");
  fetch("https://official-joke-api.appspot.com/jokes/ten").then((response) => {
    return response.json().then((jokes) => {
        card.textContent = jokes
    })
  });
});
