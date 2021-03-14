function loadJokes() {
  const container = document.querySelector("#container");
  fetch("https://official-joke-api.appspot.com/random_ten")
    .then((response) => {
      return response.json();
    })
    .then((body) => {
      for (jokes of body) {
        const forms = document.createElement("div");
        forms.className = "card";

        const inputJoke = document.createElement("button");
        inputJoke.className = "setup";
        inputJoke.textContent = jokes.setup;
        forms.appendChild(inputJoke);

        const outputJoke = document.createElement("span");
        outputJoke.className = "punchline";
        outputJoke.style.visibility = "hidden";
        outputJoke.textContent = jokes.punchline;
        forms.appendChild(outputJoke);
        container.appendChild(forms);

        inputJoke.addEventListener("click", (event) => {
          event.preventDefault();
          if (outputJoke.style.visibility === "hidden") {
            outputJoke.style.visibility = "visible";
          } else {
            outputJoke.style.visibility = "hidden";
          }
        });
      }
    });
  const button = document.querySelector("#reload");
  button.addEventListener("click", () => {
    container.textContent = "";
  });
}
