const reload = document.querySelector("#reload");
let sectionJoke = document.querySelector(".joke-section");

const loadJoke = () => {
  sectionJoke.innerHTML = "";

  fetch("https://official-joke-api.appspot.com/random_ten")
    .then((response) => {
      // first response is my Response object

      return response.json();
    })
    .then((res) => {
      // the res with the JSON we want!

      res.forEach((joke) => {
        const div = document.createElement("div");
        div.classList.add("card");

        const jokeP = document.createElement("p");
        const punchlineP = document.createElement("p");

        sectionJoke.appendChild(div);
        div.appendChild(jokeP);
        div.appendChild(punchlineP);
        punchlineP.innerText = "";
        jokeP.innerText = `${joke.setup}`;

        div.addEventListener("click", (e) => {
          if (punchlineP.innerText === "") {
            jokeP.innerText = `${joke.setup}`;
            punchlineP.innerText = `${joke.punchline}`;
          } else {
            jokeP.innerText = `${joke.setup}`;
            punchlineP.innerText = "";
            
          }
        });
      });
    });
};
loadJoke();
reload.addEventListener("click", (e) => {
  loadJoke();
});
