document.addEventListener("DOMContentLoaded", () => {
  const reloadBtn = document.querySelector("#reload");

  function getJokes() {
    fetch("https://official-joke-api.appspot.com/random_ten")
      .then((response) => {
        if(!response.ok) {
          throw Error
        }
        return response.json();
      })
      .then((jokes) => {
     
        const span = document.querySelector("span");
        span.innerHTML = "";
      
        
        for (let joke of jokes) {
          const jokeCard = document.createElement("div");
          jokeCard.className = "card";
          const child = document.createElement("p")
          child.textContent = joke.setup;
          span.appendChild(jokeCard);
          jokeCard.appendChild(child)
          const punchline = document.createElement("p");
          punchline.textContent = joke.punchline;
          punchline.className = "hide";
          jokeCard.appendChild(punchline);

          jokeCard.addEventListener("click", () => {
            punchline.classList.toggle("hide");
          });
        }
      });
  }
  getJokes();

  reloadBtn.addEventListener("click", () => {
    console.log("reload btn clicked")
    getJokes()
  }
);



})