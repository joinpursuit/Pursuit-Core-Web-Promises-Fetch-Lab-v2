const ul = document.querySelector("#joke-list");

const createJokes = () => {
  fetch("https://official-joke-api.appspot.com/random_ten")
    .then((res) => {
      if (!res.ok) {
        throw Error("Not today Satan!");
      }
      return res.json();
    })
    .then((res) => {
      res.forEach((joke) => {
        const li = document.createElement("li");
        li.classList.add("card");
        const p = document.createElement("p");
        p.textContent = joke.punchline;
        p.style.display = "none";
        li.textContent = joke.setup;
        ul.appendChild(li);
        li.appendChild(p);
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
createJokes();

ul.addEventListener("click", (e) => {
  const li = e.target;
  li.childNodes[1].style.display = "block";
  debugger;
});

